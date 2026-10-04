import { getDictionary } from "@/i18n/get-dictionary";
import ProjectEstimator from "@/components/ProjectEstimator";
import TrustPillars from "@/components/TrustPillars";

export default async function EstimatorPage({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const dict = getDictionary(lang);

  return (
    <div className="pt-20">
      <ProjectEstimator lang={lang} dict={dict} />
      <TrustPillars lang={lang} dict={dict} />
    </div>
  );
}
