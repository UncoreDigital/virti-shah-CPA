import Hero from "@/components/sections/Hero";
import CapacityStats from "@/components/sections/CapacityStats";
import WhyUs from "@/components/sections/WhyUs";
import AuditServices from "@/components/sections/AuditServices";
import IndustriesTeaser from "@/components/sections/IndustriesTeaser";
import SuccessStories from "@/components/sections/SuccessStories";
import Security from "@/components/sections/Security";
import Software from "@/components/sections/Software";
import TeamTeaser from "@/components/sections/TeamTeaser";
import Workflow from "@/components/sections/Workflow";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      {/* Sequence mirrors how audit partners evaluate an offshore provider:
          Positioning → Why us → Services → Specialization → Results →
          Security → Technology → Team → Process → Contact */}
      <Hero />
      <CapacityStats />
      <WhyUs />
      <AuditServices />
      <IndustriesTeaser />
      <SuccessStories />
      <Security />
      <Software />
      <TeamTeaser />
      <Workflow />
      <CTA />
    </>
  );
}
