
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ExternalLink, Star, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const products = [
  {
    name: "LifeStraw Personal Water Filter",
    brand: "LifeStraw",
    price: "$19.95",
    category: "Water",
    rating: 4.8,
    reviews: 120500,
    img: "https://picsum.photos/seed/lifestraw/400/400"
  },
  {
    name: "Jackery Solar Generator 1000",
    brand: "Jackery",
    price: "$1,099.00",
    category: "Power",
    rating: 4.9,
    reviews: 8400,
    img: "https://picsum.photos/seed/jackery/400/400"
  },
  {
    name: "ReadyWise Emergency Food Supply",
    brand: "ReadyWise",
    price: "$149.99",
    category: "Food",
    rating: 4.5,
    reviews: 2100,
    img: "https://picsum.photos/seed/foodsupply/400/400"
  },
  {
    name: "Fenix PD36R 1600 Lumen Flashlight",
    brand: "Fenix",
    price: "$99.95",
    category: "Light",
    rating: 4.7,
    reviews: 3200,
    img: "https://picsum.photos/seed/fenix/400/400"
  },
  {
    name: "Mountain House Classic Bucket",
    brand: "Mountain House",
    price: "$165.00",
    category: "Food",
    rating: 4.9,
    reviews: 5000,
    img: "https://picsum.photos/seed/mtnhouse/400/400"
  },
  {
    name: "Sawyer Squeeze Water Filtration",
    brand: "Sawyer",
    price: "$38.95",
    category: "Water",
    rating: 4.8,
    reviews: 15400,
    img: "https://picsum.photos/seed/sawyer/400/400"
  }
];

const categories = ["All", "Water", "Food", "Power", "Light", "Communication", "Shelter"];

export default function StorePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl font-headline font-bold text-primary">Vetted Preparedness Gear</h1>
          <p className="text-muted-foreground text-lg">Every product here has been tested and recommended by our experts.</p>
        </div>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search gear..." className="pl-10 h-11 border-primary/20" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <Button key={cat} variant={cat === "All" ? "default" : "outline"} className={cat === "All" ? "bg-primary" : "border-primary/20 text-primary hover:bg-primary/5"}>
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <Card key={i} className="flex flex-col border-muted hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-square w-full bg-muted overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-accent text-white border-none">{product.category}</Badge>
            </div>
            <CardHeader className="p-4 space-y-1">
              <div className="text-xs text-muted-foreground font-semibold uppercase">{product.brand}</div>
              <CardTitle className="text-base line-clamp-2 min-h-[3rem] font-headline">{product.name}</CardTitle>
              <div className="flex items-center gap-1 text-sm text-yellow-500 font-bold">
                <Star className="h-4 w-4 fill-current" />
                {product.rating} <span className="text-muted-foreground font-normal ml-1">({product.reviews.toLocaleString()})</span>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <span className="text-2xl font-bold text-primary">{product.price}</span>
            </CardContent>
            <CardFooter className="p-4 pt-0 mt-auto">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold gap-2">
                <ShoppingCart className="h-4 w-4" /> View on Amazon
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-8 bg-blue-50 border border-blue-100 rounded-xl text-center">
        <p className="text-sm text-blue-700 italic">
          Disclaimer: As an Amazon Associate, PrepAmerica earns from qualifying purchases. This helps support our free planning tools and resource library at no additional cost to you.
        </p>
      </div>
    </div>
  );
}
