
"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/badge"; // Using badge-like buttons
import { Button as ShadButton } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Search, FilterX, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "LifeStraw Personal Water Filter",
    description: "A compact and lightweight water filter that allows you to drink directly from streams and lakes, removing bacteria and parasites.",
    brand: "LifeStraw",
    price: "$19.95",
    category: "Water",
    rating: 4.8,
    reviews: 120500,
    img: "https://picsum.photos/seed/lifestraw/400/400",
    isExpertChoice: true
  },
  {
    name: "Jackery Solar Generator 1000",
    description: "A portable solar generator that provides reliable power for your devices and appliances during emergencies or outdoor adventures.",
    brand: "Jackery",
    price: "$1,099.00",
    category: "Power",
    rating: 4.9,
    reviews: 8400,
    img: "https://picsum.photos/seed/jackery/400/400",
    isExpertChoice: true
  },
  {
    name: "ReadyWise Emergency Food Supply",
    description: "A long-lasting emergency food supply with a variety of meals to sustain you during disasters.",

    brand: "ReadyWise",
    price: "$149.99",
    category: "Food",
    rating: 4.5,
    reviews: 2100,
    img: "https://picsum.photos/seed/foodsupply/400/400",
    isExpertChoice: false
  },
  {
    name: "Fenix PD36R 1600 Lumen Flashlight",
    description: "A high-performance flashlight with multiple brightness levels and a long-lasting battery, ideal for emergency situations.",

    brand: "Fenix",
    price: "$99.95",
    category: "Light",
    rating: 4.7,
    reviews: 3200,
    img: "https://picsum.photos/seed/fenix/400/400",
    isExpertChoice: false
  },
  {
    name: "Mountain House Classic Bucket",
    description: "A long-lasting emergency food supply with a variety of meals to sustain you during disasters.",

    brand: "Mountain House",
    price: "$165.00",
    category: "Food",
    rating: 4.9,
    reviews: 5000,
    img: "https://picsum.photos/seed/mtnhouse/400/400",
    isExpertChoice: true
  },
  {
    name: "Sawyer Squeeze Water Filtration",
    description: "A compact and efficient water filtration system that removes harmful contaminants, perfect for outdoor adventures and emergencies.",
    brand: "Sawyer",
    price: "$38.95",
    category: "Water",
    rating: 4.8,
    reviews: 15400,
    img: "https://picsum.photos/seed/sawyer/400/400",
    isExpertChoice: false
  },
  {
    name: "BioLite CampStove 2+",
    description: "A portable camp stove that generates electricity from the heat of the fire, allowing you to charge your devices while cooking.",
    brand: "BioLite",
    price: "$149.95",
    category: "Power",
    rating: 4.6,
    reviews: 1200,
    img: "https://picsum.photos/seed/biolite/400/400",
    isExpertChoice: false
  },
  {
    name: "Petzl Swift RL Headlamp",
    description: "A powerful and rechargeable headlamp with reactive lighting technology, perfect for hands-free illumination in emergencies.",
    brand: "Petzl",
    price: "$119.95",
    category: "Light",
    rating: 4.8,
    reviews: 2400,
    img: "https://picsum.photos/seed/petzl/400/400",
    isExpertChoice: true
  }
];

const categories = ["All", "Water", "Food", "Power", "Light"];

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
        <div className="space-y-4 text-left max-w-2xl">
          <Badge variant="outline" className="text-accent border-accent/30 font-bold px-3 py-1">
            <ShieldCheck className="w-3 h-3 mr-1" /> Vetted & Approved
          </Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Curated Preparedness Gear</h1>
          <p className="text-muted-foreground text-lg">
            We only list gear that survives our rigorous field testing. No filler, just reliable tools for your family's safety.
          </p>
        </div>
        <div className="relative w-full max-w-sm group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
          <Input
            placeholder="Search by product or brand..."
            className="pl-10 h-12 border-primary/20 rounded-xl focus:ring-accent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-12 sticky top-20 z-10 bg-background/80 backdrop-blur-md py-4 border-b">
        {categories.map((cat) => (
          <ShadButton
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "rounded-full px-6 transition-all",
              selectedCategory === cat
                ? "bg-primary shadow-md"
                : "border-primary/20 text-primary hover:border-accent hover:text-accent"
            )}
          >
            {cat}
          </ShadButton>
        ))}
        {(searchQuery || selectedCategory !== "All") && (
          <ShadButton
            variant="ghost"
            size="sm"
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
            className="text-muted-foreground hover:text-destructive"
          >
            <FilterX className="w-4 h-4 mr-2" /> Clear Filters
          </ShadButton>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, i) => (
            <Card key={i} className="flex flex-col border-muted hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden bg-white">
              <div className="relative aspect-square w-full bg-muted overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-white/90 backdrop-blur text-primary border-none shadow-sm font-bold">
                  {product.category}
                </Badge>
                {product.isExpertChoice && (
                  <Badge className="absolute top-3 left-3 bg-accent text-white border-none shadow-md font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" /> Expert Choice
                  </Badge>
                )}
              </div>
              <CardHeader className="p-5 space-y-2">
                <div className="text-xs text-accent font-bold uppercase tracking-widest">{product.brand}</div>
                <CardTitle className="text-lg line-clamp-2 min-h-[3.5rem] font-headline text-primary group-hover:text-accent transition-colors">
                  {product.name}
                </CardTitle>
                <div className="flex items-center gap-1 text-sm text-yellow-500 font-bold">
                  <Star className="h-4 w-4 fill-current" />
                  {product.rating} <span className="text-muted-foreground font-normal ml-1">({product.reviews.toLocaleString()})</span>
                </div>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <div className="text-3xl font-bold text-primary">{product.price}</div>
              </CardContent>
              <CardFooter className="p-5 pt-0 mt-auto">
                <ShadButton asChild className="w-full bg-primary hover:bg-accent text-white font-bold h-12 rounded-xl transition-all shadow-lg shadow-primary/10 hover:shadow-accent/20">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" /> View on Amazon
                  </a>
                </ShadButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/30 rounded-3xl border-2 border-dashed border-muted">
          <div className="max-w-xs mx-auto space-y-4">
            <Search className="h-12 w-12 text-muted-foreground mx-auto opacity-20" />
            <h3 className="text-xl font-bold text-primary">No matching gear found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms to find what you're looking for.</p>
            <ShadButton onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} variant="outline" className="mt-4">
              Reset All Filters
            </ShadButton>
          </div>
        </div>
      )}

      <section className="mt-24 p-10 bg-primary/5 border border-primary/10 rounded-[2rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
            <ShoppingCart className="h-8 w-8 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-primary">Support PrepAmerica at No Extra Cost</h2>
            <p className="text-muted-foreground max-w-3xl">
              As an Amazon Associate, we earn from qualifying purchases. This helps us maintain our AI planning tools and keep our survival library free for everyone. We only recommend products we've actually tested.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
