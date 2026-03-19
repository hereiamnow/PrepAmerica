
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, BookOpen, GraduationCap, ShoppingCart, Star, ArrowRight, CheckCircle, Award } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const courseCtaImg = PlaceHolderImages.find(img => img.id === 'course-cta-img');

  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || "https://picsum.photos/seed/prep-hero/1200/600"}
            alt="Emergency preparedness hero"
            fill
            className="object-cover brightness-50"
            priority
            data-ai-hint="emergency disaster"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
              Confidence in the Face of the <span className="text-accent">Unexpected</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium">
              Join thousands of families using PrepAmerica to build resilient households. Get your AI-powered personalized emergency plan in under 2 minutes.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
                <Link href="/planner">
                  Start Your Plan <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white">
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary">Everything You Need to Prepare</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform covers every stage of the preparedness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI Preparedness Planner",
              desc: "Customized step-by-step guides based on your family size and local risks.",
              icon: Shield,
              link: "/planner"
            },
            {
              title: "Educational Resources",
              desc: "Downloadable guides and expert articles on water, food, and security.",
              icon: BookOpen,
              link: "/resources"
            },
            {
              title: "Professional Courses",
              desc: "Get certified in First Aid, CPR, and advanced emergency management.",
              icon: GraduationCap,
              link: "/courses"
            },
            {
              title: "Curated Affiliate Store",
              desc: "Vetted products from trusted brands with direct Amazon affiliate links.",
              icon: ShoppingCart,
              link: "/store"
            },
            {
              title: "Expert Gear Reviews",
              desc: "Detailed buying guides and side-by-side comparisons of essential equipment.",
              icon: Star,
              link: "/reviews"
            },
            {
              title: "72-Hour Checklist",
              desc: "Free incentive for signing up for our weekly preparedness newsletter.",
              icon: CheckCircle,
              link: "#newsletter"
            }
          ].map((feature, idx) => (
            <Link key={idx} href={feature.link} className="group p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all hover:border-accent/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Enhanced Courses CTA Section */}
      <section className="relative py-24 overflow-hidden bg-primary text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 transform translate-x-1/2" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-wider border border-white/20">
                <Award className="h-4 w-4 text-accent" /> National Certification Program
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold leading-tight">
                Master Survival Skills with <span className="text-accent">Expert Certification</span>.
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
                Gear is just equipment. Knowledge is your most powerful tool. Join our specialized training tracks led by elite first responders and disaster specialists.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Civilian First Responder", desc: "Life-saving trauma and medical training." },
                  { title: "Grid-Down Power Systems", desc: "Solar and battery backup engineering." },
                  { title: "Perimeter & Home Defense", desc: "Advanced security for your household." }
                ].map((track, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">{track.title}</h4>
                      <p className="text-primary-foreground/70 text-sm">{track.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-16 px-12 text-lg rounded-2xl shadow-xl shadow-black/20">
                  <Link href="/courses">Explore Certification Tracks</Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative h-[550px] w-full rounded-[1rem] overflow-hidden shadow-2xl z-10 border-1 border-white/10">
                <Image
                  src={courseCtaImg?.imageUrl || "https://picsum.photos/seed/prep-training-cta/800/600"}
                  alt="Professional survival training"
                  fill
                  className="object-cover"
                  data-ai-hint="medical training"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-accent">Next Live Session</p>
                      <p className="text-xl font-bold">Trauma Med Certification</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">14</p>
                      <p className="text-xs uppercase font-bold text-white/60">Spots Left</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20">
        <div id="newsletter_component" className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Get Your Free 72-Hour Checklist</h2>
              <p className="text-muted-foreground text-lg">
                Join our newsletter and receive our comprehensive 72-hour emergency checklist immediately. Stay updated with weekly preparedness tips and gear deals.
              </p>
              <ul className="space-y-3">
                {["Weekly Gear Discounts", "Expert Survival Tips", "Local Risk Alerts"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-primary/80 font-medium">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-muted text-foreground">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-primary">Full Name</label>
                  <input id="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-muted focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-primary">Email Address</label>
                  <input id="email" type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-muted focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" required />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 h-14 text-lg font-bold rounded-xl shadow-lg shadow-accent/20">
                  Send Me the Checklist
                </Button>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
