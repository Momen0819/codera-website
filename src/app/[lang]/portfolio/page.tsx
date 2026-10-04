import { getDictionary } from "@/i18n/get-dictionary";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import FreeDemoCTA from "@/components/FreeDemoCTA";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const dict = getDictionary(lang);

  return (
    <div className="pt-20">
      <PortfolioShowcase lang={lang} dict={dict} />
      <FreeDemoCTA lang={lang} dict={dict} />
    </div>
  );
}
