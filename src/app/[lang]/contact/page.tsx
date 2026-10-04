import { getDictionary } from "@/i18n/get-dictionary";
import ContactForm from "@/components/ContactForm";
import TrustPillars from "@/components/TrustPillars";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const dict = getDictionary(lang);

  return (
    <div className="pt-20">
      <ContactForm lang={lang} dict={dict} />
      <TrustPillars lang={lang} dict={dict} />
    </div>
  );
}
