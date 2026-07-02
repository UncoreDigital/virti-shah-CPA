import Hero from "@/components/sections/Hero";
import CoreServices from "@/components/sections/CoreServices";
import AboutTeaser from "@/components/sections/AboutTeaser";
import WhyUs from "@/components/sections/WhyUs";
import Workflow from "@/components/sections/Workflow";
import Security from "@/components/sections/Security";
import Software from "@/components/sections/Software";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreServices />
      <AboutTeaser />
      <WhyUs />
      <Workflow />
      <Security />
      <Software />
      <CTA />
    </>
  );
}
