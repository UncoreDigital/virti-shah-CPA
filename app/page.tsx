import Hero from "@/components/sections/Hero";
import CoreServices from "@/components/sections/CoreServices";
import PracticeImpact from "@/components/sections/PracticeImpact";
import EngagementModels from "@/components/sections/EngagementModels";
import Workflow from "@/components/sections/Workflow";
import TechnologyControls from "@/components/sections/TechnologyControls";
import CTA from "@/components/sections/CTA";
import { finalCta } from "@/lib/homepage";

export default function HomePage() {
  return (
    <>
      {/* Sections 1-7 of the locked homepage copy, in the approved order.
          Copy lives in lib/homepage.ts, see the developer rule at its top. */}
      <Hero />
      <CoreServices />
      <PracticeImpact />
      <EngagementModels />
      <Workflow />
      <TechnologyControls />
      <CTA
        eyebrow={finalCta.eyebrow}
        heading={finalCta.heading}
        body={finalCta.body}
      />
    </>
  );
}
