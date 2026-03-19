
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Check, X, ShieldCheck } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    title: "Best Emergency Radios of 2024",
    desc: "We tested 12 solar hand-crank radios for durability, reception, and battery life. Here's what we found.",
    img: "https://picsum.photos/seed/review1/800/500",
    topPick: "Midland ER310"
  },
  {
    title: "Portable Power Stations Compared",
    desc: "A head-to-head battle between Jackery, EcoFlow, and Bluetti. Which one keeps the lights on longer?",
    img: "https://picsum.photos/seed/review2/800/500",
    topPick: "EcoFlow Delta 2"
  },
  {
    title: "Freeze-Dried Food Taste Test",
    desc: "Survival food doesn't have to taste like cardboard. We ranked the top 5 brands by taste and nutrition.",
    img: "https://picsum.photos/seed/review3/800/500",
    topPick: "Mountain House"
  }
];

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mb-16 space-y-4">
        <h1 className="text-4xl font-headline font-bold text-primary">Gear Reviews & Buying Guides</h1>
        <p className="text-muted-foreground text-lg">
          We buy and test gear so you don't have to waste money on equipment that fails when it matters most.
        </p>
      </div>

      <div className="space-y-12">
        {reviews.map((review, i) => (
          <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border shadow-sm overflow-hidden group">
            <div className="lg:col-span-7 relative h-72 lg:h-[400px]">
              <Image
                src={review.img}
                alt={review.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider border border-green-100">
                <ShieldCheck className="h-4 w-4" /> Expert Tested
              </div>
              <h2 className="text-3xl font-headline font-bold text-primary">{review.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {review.desc}
              </p>
              <div className="p-4 bg-muted rounded-lg border">
                <span className="text-xs font-bold uppercase text-muted-foreground block mb-1">Our Top Pick:</span>
                <span className="text-lg font-bold text-primary">{review.topPick}</span>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold w-full lg:w-auto">Read Full Review</Button>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20 space-y-8">
        <h2 className="text-3xl font-bold font-headline text-center text-primary">Our Review Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Zero Sponsored Content",
              desc: "We never accept money from brands for reviews. If we recommend it, it's because it works.",
              icon: X
            },
            {
              title: "Field Tested",
              desc: "Every piece of equipment is taken into the wild and tested in real-world scenarios.",
              icon: Check
            },
            {
              title: "Reliability First",
              desc: "We prioritize longevity and reliability over fancy features or trendy aesthetics.",
              icon: Star
            }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 border rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline text-primary">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
