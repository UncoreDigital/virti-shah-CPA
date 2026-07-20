import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import TaxPracticeBlock from "@/components/TaxPracticeBlock";
import CTA from "@/components/sections/CTA";
import { serviceDetails } from "@/lib/services-data";

const data = serviceDetails["independent-tax-review"];

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function IndependentTaxReviewPage() {
  return (
    <>
      <ServiceDetail data={data}>
        <TaxPracticeBlock />
      </ServiceDetail>
      <CTA />
    </>
  );
}
