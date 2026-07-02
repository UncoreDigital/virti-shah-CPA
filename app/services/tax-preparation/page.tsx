import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import CTA from "@/components/sections/CTA";
import { serviceDetails } from "@/lib/services-data";

const data = serviceDetails["tax-preparation"];

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function TaxPreparationPage() {
  return (
    <>
      <ServiceDetail data={data} />
      <CTA />
    </>
  );
}
