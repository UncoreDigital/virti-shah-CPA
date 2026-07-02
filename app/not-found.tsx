import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-navy">
      <div className="text-center px-6">
        <p className="font-playfair text-7xl md:text-9xl font-bold text-gradient-gold mb-4">
          404
        </p>
        <h1 className="font-playfair text-2xl md:text-3xl font-semibold text-primary-foreground mb-3">
          Page not found
        </h1>
        <p className="font-inter text-primary-foreground/70 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-gold">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
