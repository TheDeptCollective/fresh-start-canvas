import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, ShoppingBag, Minus, Plus } from "lucide-react";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Product = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem, isLoading: cartLoading } = useCartStore();

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      try {
        const data = await fetchProductByHandle(handle);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.variants.edges[selectedVariantIndex]?.node;
    if (!variant) return;

    const shopifyProduct: ShopifyProduct = { node: product };

    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success("Added to cart", {
      description: `${product.title}${variant.title !== "Default Title" ? ` - ${variant.title}` : ""}`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-scribe" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="section-container section-padding text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-display text-3xl mb-4">Product not found</h1>
            <Link to="/shop" className="btn-secondary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const selectedVariant = product.variants.edges[selectedVariantIndex]?.node;
  const images = product.images.edges;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="section-container">
            {/* Breadcrumb */}
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/shop" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Link>
              <CartDrawer />
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-secondary/20 rounded-2xl overflow-hidden">
                  {images[selectedImage]?.node ? (
                    <img 
                      src={images[selectedImage].node.url} 
                      alt={images[selectedImage].node.altText || product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                    </div>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === index ? "border-scribe" : "border-transparent"
                        }`}
                      >
                        <img 
                          src={image.node.url} 
                          alt={image.node.altText || ""} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-scribe" />
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    The Scribe Dept
                  </span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl mb-4">{product.title}</h1>
                
                <p className="text-2xl font-semibold mb-6">
                  {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Variant Options */}
                {product.options.map((option) => {
                  if (option.name === "Title" && option.values.length === 1 && option.values[0] === "Default Title") {
                    return null;
                  }
                  return (
                    <div key={option.name} className="mb-6">
                      <label className="block text-sm font-medium mb-3">{option.name}</label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value) => {
                          const variantIndex = product.variants.edges.findIndex(
                            (v) => v.node.selectedOptions.some(
                              (o) => o.name === option.name && o.value === value
                            )
                          );
                          const isSelected = selectedVariantIndex === variantIndex;
                          const variant = product.variants.edges[variantIndex]?.node;
                          
                          return (
                            <button
                              key={value}
                              onClick={() => setSelectedVariantIndex(variantIndex)}
                              disabled={!variant?.availableForSale}
                              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                                isSelected 
                                  ? "border-scribe bg-scribe/10 text-scribe" 
                                  : "border-border hover:border-scribe/50"
                              } ${!variant?.availableForSale ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* Quantity */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-3">Quantity</label>
                  <div className="inline-flex items-center gap-3 border border-border rounded-lg p-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Add to Cart */}
                <Button 
                  size="lg" 
                  className="w-full bg-scribe hover:bg-scribe/90 text-lg py-6"
                  onClick={handleAddToCart}
                  disabled={cartLoading || !selectedVariant?.availableForSale}
                >
                  {cartLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : !selectedVariant?.availableForSale ? (
                    "Out of Stock"
                  ) : (
                    <>
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
