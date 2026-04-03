import { setRequestLocale } from "next-intl/server";
import NotFoundPage from "@/components/NotFoundPage";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function CatchAll({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <NotFoundPage />;
}
