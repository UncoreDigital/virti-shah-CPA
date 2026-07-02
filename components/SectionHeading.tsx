import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "max-w-2xl",
        centered ? "text-center mx-auto" : "text-left"
      )}
    >
      {eyebrow && (
        <Reveal className={cn("flex items-center gap-3 mb-4", centered && "justify-center")}>
          <div className="h-px w-12 bg-gold" />
          <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
            {eyebrow}
          </span>
          {centered && <div className="h-px w-12 bg-gold" />}
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={cn(
            "font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
            light ? "text-primary-foreground" : "text-primary"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "font-inter leading-relaxed",
              light ? "text-primary-foreground/70" : "text-slate"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
