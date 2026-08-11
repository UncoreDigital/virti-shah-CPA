"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Phone } from "lucide-react";
import { navItems, mobileNavItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdowns([]);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobileDropdown = (name: string) =>
    setMobileDropdowns((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-elegant"
          : "bg-white shadow-sm"
      )}
    >
      {/* Top utility bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            className="hidden md:block bg-primary text-primary-foreground overflow-hidden"
          >
            <div className="container-wide flex items-center justify-end py-2 text-xs font-inter">
              <div className="flex items-center gap-5">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-1.5 hover:text-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  {site.phone}
                </a>
                <a
                  href={site.emailHref}
                  className="hover:text-gold transition-colors"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <div className="container-wide flex items-center justify-between h-20">
        <Link href="/" className="shrink-0">
          <Image
            src={site.logo}
            alt="Virti Shah CPA - Outsourced Accounting Solutions"
            width={180}
            height={60}
            priority
            className="h-12 lg:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1 px-4 py-2 font-inter text-[15px] font-medium transition-colors whitespace-nowrap",
                  "after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold after:origin-left after:transition-transform after:duration-300",
                  isActive(item.href)
                    ? "text-gold after:scale-x-100"
                    : "text-foreground hover:text-gold after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === item.name && "rotate-180"
                    )}
                  />
                )}
              </Link>

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 pt-2 min-w-[248px]"
                  >
                    <div className="bg-white border border-border rounded-xl shadow-xl overflow-hidden py-2">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.name}
                          href={d.href}
                          className="group/item flex items-center gap-2 px-5 py-2.5 text-sm font-inter text-foreground hover:bg-muted hover:text-gold transition-colors"
                        >
                          <span className="h-1 w-1 rounded-full bg-gold opacity-0 transition-opacity group-hover/item:opacity-100" />
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-gold text-sm">
            {site.primaryCta}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden p-2 -mr-2 text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed inset-0 top-0 z-[60] bg-white flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between px-4 py-5 border-b border-border">
              <Image
                src={site.logo}
                alt="Virti Shah CPA"
                width={150}
                height={48}
                className="h-11 w-auto object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2 text-foreground"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex-1 px-5 py-8 flex flex-col gap-5">
              {mobileNavItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-border/40 pb-4 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !item.dropdown && setMobileOpen(false)}
                      className="font-playfair text-xl font-medium text-foreground"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="p-2 text-muted-foreground"
                        aria-label="Expand"
                      >
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform",
                            mobileDropdowns.includes(item.name) && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.dropdown && mobileDropdowns.includes(item.name) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4 mt-2 flex flex-col gap-3"
                      >
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.name}
                            href={d.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-base text-muted-foreground hover:text-gold transition-colors font-inter"
                          >
                            {d.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-gold w-full justify-center mt-4 text-base py-4"
              >
                {site.primaryCta}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
