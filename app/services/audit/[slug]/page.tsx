import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AuditServiceDetail from "@/components/AuditServiceDetail";
import CTA from "@/components/sections/CTA";
import { auditServices } from "@/lib/firm-data";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return auditServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const data = auditServices.find((s) => s.slug === params.slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.metaDescription,
  };
}

export default function AuditServicePage({ params }: Params) {
  const data = auditServices.find((s) => s.slug === params.slug);
  if (!data) notFound();

  return (
    <>
      <AuditServiceDetail data={data} />
      <CTA />
    </>
  );
}
