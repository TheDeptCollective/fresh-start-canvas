import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem, isLoading: cartLoading } = useCartStore();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(20);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success("Added to cart", {
      description: product.node.title,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="flex items-center justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-scribe" />
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    The Scribe Dept
                  </p>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                  Shop
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gear and merch from The Scribe Dept. Wear the brand that represents 
                  excellence in live production and church consulting.
                </p>
              </div>
              <div className="hidden md:block">
                <CartDrawer />
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding">
          <div className="section-container">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-scribe" />
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h2 className="font-display text-2xl md:text-3xl mb-4">No products yet</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  We're working on some great merch for The Scribe Dept. Check back soon!
                </p>
                <p className="text-sm text-muted-foreground">
                  Want to add products? Tell me what product you'd like to create and the price.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => {
                  const variant = product.node.variants.edges[0]?.node;
                  const image = product.node.images.edges[0]?.node;
                  
                  return (
                    <div 
                      key={product.node.id} 
                      className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-scribe/50 transition-all"
                    >
                      <Link to={`/product/${product.node.handle}`}>
                        <div className="aspect-square bg-secondary/20 overflow-hidden">
                          {image ? (
                            <img 
                              src={image.url} 
                              alt={image.altText || product.node.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                            </div>
                          )}
                        </div>
                      </Link>
                      <div className="p-4">
                        <Link to={`/product/${product.node.handle}`}>
                          <h3 className="font-display text-lg mb-1 group-hover:text-scribe transition-colors">
                            {product.node.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {product.node.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-lg">
                            {variant?.price.currencyCode} {parseFloat(variant?.price.amount || "0").toFixed(2)}
                          </span>
                          <Button 
                            size="sm" 
                            className="bg-scribe hover:bg-scribe/90"
                            onClick={() => handleAddToCart(product)}
                            disabled={cartLoading || !variant?.availableForSale}
                          >
                            {cartLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Mobile Cart Button */}
        <div className="md:hidden fixed bottom-6 right-6 z-40">
          <CartDrawer />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
