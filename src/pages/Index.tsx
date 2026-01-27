import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesOverview from "@/components/ServicesOverview";
import BrandArchitecture from "@/components/BrandArchitecture";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <ServicesOverview />
        <BrandArchitecture />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
