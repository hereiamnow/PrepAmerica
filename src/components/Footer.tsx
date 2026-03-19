
import Link from "next/link";
import { Shield, Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">PrepAmerica</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering American families with the knowledge and tools for resilience in any situation.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Plan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/planner" className="hover:text-accent">Personalized Planner</Link></li>
              <li><Link href="/reviews" className="hover:text-accent">Gear Reviews</Link></li>
              <li><Link href="/store" className="hover:text-accent">Curated Store</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Learn</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/resources" className="hover:text-accent">Resource Library</Link></li>
              <li><Link href="/courses" className="hover:text-accent">Training Courses</Link></li>
              <li><Link href="#" className="hover:text-accent">72-Hour Checklist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Stay Connected</h3>
            <div className="flex space-x-4 mb-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} PrepAmerica. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
