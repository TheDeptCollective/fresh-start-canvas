import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Contact from "./Contact";

vi.mock("@/components/Header", () => ({ default: () => null }));
vi.mock("@/components/Footer", () => ({ default: () => null }));
vi.mock("@/hooks/use-toast", () => ({ useToast: () => ({ toast: vi.fn() }) }));

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

function fillForm() {
  render(<Contact />);
  fireEvent.change(screen.getByLabelText(/Name/), { target: { value: "Test Visitor" } });
  fireEvent.change(screen.getByLabelText(/Email/), { target: { value: "visitor@example.com" } });
  fireEvent.change(screen.getByLabelText(/interested/), { target: { value: "Technical Directing" } });
  fireEvent.change(screen.getByLabelText(/Message/), { target: { value: "A project inquiry" } });
  fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));
}

describe("contact submissions", () => {
  it("sends inquiries to the contact inbox and clears the form after acceptance", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: "true" }) });
    vi.stubGlobal("fetch", fetchMock);
    fillForm();
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Message submitted"));
    expect(fetchMock).toHaveBeenCalledWith("https://formsubmit.co/ajax/hello@thedeptcollective.com", expect.objectContaining({ method: "POST" }));
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toMatchObject({ email: "visitor@example.com", _replyto: "visitor@example.com", service: "Technical Directing", message: "A project inquiry" });
    expect(screen.getByLabelText(/Name/)).toHaveValue("");
  });

  it.each([
    { ok: true, json: async () => ({ success: "false" }) },
    { ok: false, json: async () => ({ success: "true" }) },
    { ok: true, json: async () => { throw new Error("Invalid response"); } },
  ])("preserves the inquiry when the provider rejects it", async (response) => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response));
    fillForm();
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("could not be sent"));
    expect(screen.getByLabelText(/Message/)).toHaveValue("A project inquiry");
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeEnabled();
  });

  it("handles network failures without losing the inquiry", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Network failure")));
    fillForm();
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("could not be sent"));
    expect(screen.getByLabelText(/Message/)).toHaveValue("A project inquiry");
  });
});
