import { notFound } from "next/navigation";
import { getServiceBySlug, getNextService, getAllServiceSlugs } from "@/lib/services";
import ServicePageContent from "@/components/ServicePageContent";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — Anna Jakubik`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const nextService = getNextService(slug);
  return <ServicePageContent service={service} nextService={nextService} />;
}
