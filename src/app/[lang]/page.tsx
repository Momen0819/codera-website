import { getDictionary } from "@/i18n/get-dictionary";
import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import BentoServices from "@/components/BentoServices";
import HonestStory from "@/components/HonestStory";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ProjectEstimator from "@/components/ProjectEstimator";
import ProcessTimeline from "@/components/ProcessTimeline";
import FreeDemoCTA from "@/components/FreeDemoCTA";
import ContactForm from "@/components/ContactForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "ar";
  const dict = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <TrustPillars lang={lang} dict={dict} />
      <BentoServices lang={lang} dict={dict} />
      <HonestStory lang={lang} dict={dict} />
      <PortfolioShowcase lang={lang} dict={dict} />
      <ProjectEstimator lang={lang} dict={dict} />
      <ProcessTimeline lang={lang} dict={dict} />
      <FreeDemoCTA lang={lang} dict={dict} />
      <ContactForm lang={lang} dict={dict} />
    </>
  );
}
