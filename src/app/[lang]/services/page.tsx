import { getDictionary } from "@/i18n/get-dictionary";
import BentoServices from "@/components/BentoServices";
import ProcessTimeline from "@/components/ProcessTimeline";
import FreeDemoCTA from "@/components/FreeDemoCTA";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const dict = getDictionary(lang);

  return (
    <div className="pt-20">
      <BentoServices lang={lang} dict={dict} />
      <ProcessTimeline lang={lang} dict={dict} />
      <FreeDemoCTA lang={lang} dict={dict} />
    </div>
  );
}
