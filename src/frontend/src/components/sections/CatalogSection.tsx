import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../hooks/useCart';
import { toast } from 'sonner';

export default function CatalogSection() {
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section id="catalog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional audio equipment and accessories for musicians and studios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold">
                  {product.price !== undefined ? (
                    `$${product.price.toFixed(2)}`
                  ) : (
                    <span className="text-base text-muted-foreground">Price unavailable</span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleAddToCart(product)} 
                  className="w-full"
                  variant="default"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
