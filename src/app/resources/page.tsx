
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Droplets, Flame, Zap, ShieldAlert } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const categories = [
  { name: "Water & Food", icon: Droplets, color: "text-blue-500" },
  { name: "First Aid", icon: ShieldAlert, color: "text-red-500" },
  { name: "Power & Light", icon: Zap, color: "text-yellow-500" },
  { name: "Fire Safety", icon: Flame, color: "text-orange-500" },
];

const articles = [
  {
    title: "10 Gallons is Not Enough: Real World Water Storage",
    desc: "A deep dive into how much water your family actually needs for a 2-week disaster.",
    category: "Water & Food",
    img: "https://picsum.photos/seed/water-resource/400/250"
  },
  {
    title: "Home Security During Civil Unrest",
    desc: "Low-cost methods to secure your perimeter and protect your loved ones.",
    category: "Security",
    img: "https://picsum.photos/seed/sec-resource/400/250"
  },
  {
    title: "The Ultimate Bug-Out Bag Checklist",
    desc: "A comprehensive guide on what to pack if you need to leave in 10 minutes.",
    category: "Planning",
    img: "https://picsum.photos/seed/bag-resource/400/250"
  },
  {
    title: "Treating Burns without a Hospital",
    desc: "Essential first aid steps when emergency services are delayed.",
    category: "First Aid",
    img: "https://picsum.photos/seed/aid-resource/400/250"
  }
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-headline font-bold text-primary">Resource Library</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Access our vetted educational content and expert-authored preparedness guides.
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          <Download className="mr-2 h-4 w-4" /> Download Full Prep Guide (PDF)
        </Button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border hover:border-accent transition-colors cursor-pointer">
            <cat.icon className={`h-10 w-10 ${cat.color} mb-3`} />
            <span className="font-bold text-primary">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Articles Grid */}
      <h2 className="text-2xl font-bold mb-8 font-headline text-primary">Featured Guides & Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article, i) => (
          <Card key={i} className="overflow-hidden group cursor-pointer border-muted">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={article.img}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="p-4 space-y-1">
              <div className="text-xs font-bold text-accent uppercase tracking-wider">{article.category}</div>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground line-clamp-3">{article.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
