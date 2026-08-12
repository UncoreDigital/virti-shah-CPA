import Reveal from "@/components/Reveal";
import { professionalResponsibility } from "@/lib/firm-data";

/**
 * Required on the Audit & Assurance hub and every internal audit page by the
 * audit developer checklist. See lib/firm-data.ts before changing the wording.
 */
export default function ProfessionalResponsibility({
  className,
}: {
  className?: string;
}) {
  return (
    <Reveal>
      <div
        className={`bg-muted rounded-2xl p-7 border-l-4 border-gold ${className ?? ""}`}
      >
        <h2 className="font-playfair text-2xl font-bold text-primary mb-5">
          {professionalResponsibility.heading}
        </h2>
        <div className="space-y-4">
          {professionalResponsibility.paragraphs.map((p) => (
            <p key={p} className="font-inter text-sm text-slate leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
