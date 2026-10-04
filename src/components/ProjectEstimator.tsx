"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { Calculator, ArrowRight, ArrowLeft, Check, Sparkles, MessageCircle, RotateCcw } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

interface ProjectEstimatorProps {
  lang: string;
  dict: Dictionary;
}

export default function ProjectEstimator({ lang, dict }: ProjectEstimatorProps) {
  const isAr = lang === "ar";
  const [step, setStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>(dict.estimator.types[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "analytics"]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(dict.estimator.timeline[0].id);

  const currentTypeObj = dict.estimator.types.find((t) => t.id === selectedType) || dict.estimator.types[0];
  const currentTimelineObj = dict.estimator.timeline.find((t) => t.id === selectedTimeline) || dict.estimator.timeline[0];

  // Calculate total
  const baseCost = currentTypeObj.basePrice;
  const featuresCost = selectedFeatures.reduce((acc, featId) => {
    const feat = dict.estimator.features.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const multiplier = currentTimelineObj.multiplier || 1;
  const totalMin = Math.round((baseCost + featuresCost) * multiplier);
  const totalMax = Math.round(totalMin * 1.35);

  const toggleFeature = (featId: string) => {
    if (selectedFeatures.includes(featId)) {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featId));
    } else {
      setSelectedFeatures([...selectedFeatures, featId]);
    }
  };

  const buildWhatsAppUrl = () => {
    const featureLabels = selectedFeatures
      .map((id) => dict.estimator.features.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    const text = isAr
      ? `مرحباً كوديرا 👋، قمت بحساب تقدير لمشروعي عبر الموقع:%0A` +
        `• نوع المشروع: ${currentTypeObj.label}%0A` +
        `• المميزات المختارة: ${featureLabels || "لا يوجد"}%0A` +
        `• الجدول الزمني: ${currentTimelineObj.label}%0A` +
        `• التقدير المقترح: $${totalMin} - $${totalMax} (${currentTypeObj.time})%0A%0A` +
        `أرغب في حجز جلسة استشارة مجانية وبدء الديمو الأولي.`
      : `Hello Codera 👋, I generated a project estimate on your website:%0A` +
        `• Project Type: ${currentTypeObj.label}%0A` +
        `• Selected Features: ${featureLabels || "None"}%0A` +
        `• Timeline: ${currentTimelineObj.label}%0A` +
        `• Estimated Cost: $${totalMin} - $${totalMax} (${currentTypeObj.time})%0A%0A` +
        `I would like to book a free discovery session and get the initial demo.`;

    return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
  };

  return (
    <section id="estimator" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan-light text-brand-navy text-xs font-bold">
            <Calculator className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{dict.estimator.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-navy">
            {dict.estimator.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {dict.estimator.subtitle}
          </p>
        </div>

        {/* Wizard Box */}
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-luxury">
          {/* Step tabs */}
          <div className="flex items-center justify-between gap-2 max-w-lg mx-auto mb-10">
            {[1, 2, 3].map((s) => {
              const label =
                s === 1
                  ? dict.estimator.steps.step1
                  : s === 2
                  ? dict.estimator.steps.step2
                  : dict.estimator.steps.step3;
              return (
                <button
                  key={s}
                  onClick={() => setStep(s)}
                  className={`flex-1 flex flex-col items-center gap-2 text-center group cursor-pointer`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      step === s
                        ? "bg-brand-navy text-white shadow-md ring-4 ring-brand-cyan/20"
                        : step > s
                        ? "bg-brand-cyan text-brand-navy"
                        : "bg-slate-200 text-slate-500 group-hover:bg-slate-300"
                    }`}
                  >
                    {step > s ? <Check className="w-4 h-4 stroke-[3]" /> : s}
                  </div>
                  <span
                    className={`text-[11px] sm:text-xs font-bold truncate max-w-[120px] ${
                      step === s ? "text-brand-navy" : "text-slate-500"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-navy text-center">
                {dict.estimator.steps.step1}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dict.estimator.types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-5 rounded-2xl border text-start transition-all flex flex-col justify-between h-36 ${
                      selectedType === type.id
                        ? "bg-white border-brand-cyan shadow-md ring-2 ring-brand-cyan/20"
                        : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between w-full">
                      <span className="font-bold text-sm text-brand-navy">{type.label}</span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedType === type.id
                            ? "border-brand-cyan bg-brand-cyan text-brand-navy"
                            : "border-slate-300"
                        }`}
                      >
                        {selectedType === type.id && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                      <span>يبدأ من ${type.basePrice}</span>
                      <span className="font-medium text-brand-cyan">{type.time}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Features */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-navy text-center">
                {dict.estimator.steps.step2}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dict.estimator.features.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-4 rounded-2xl border text-start transition-all flex items-center justify-between ${
                        isChecked
                          ? "bg-white border-brand-cyan shadow-md ring-2 ring-brand-cyan/20"
                          : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <span className="font-bold text-sm text-brand-navy">{feat.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-slate-500">+${feat.price}</span>
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                            isChecked
                              ? "border-brand-cyan bg-brand-cyan text-brand-navy"
                              : "border-slate-300"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Timeline */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-brand-navy text-center">
                {dict.estimator.steps.step3}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dict.estimator.timeline.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedTimeline(item.id)}
                    className={`p-5 rounded-2xl border text-start transition-all flex items-center justify-between ${
                      selectedTimeline === item.id
                        ? "bg-white border-brand-cyan shadow-md ring-2 ring-brand-cyan/20"
                        : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <span className="font-bold text-sm text-brand-navy">{item.label}</span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        selectedTimeline === item.id
                          ? "border-brand-cyan bg-brand-cyan text-brand-navy"
                          : "border-slate-300"
                      }`}
                    >
                      {selectedTimeline === item.id && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Wizard Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-200">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm hover:bg-white transition-all"
              >
                {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{isAr ? "السابق" : "Previous"}</span>
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-navy text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-md"
              >
                <span>{isAr ? "التالي" : "Next"}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            ) : (
              <button
                onClick={() => {
                  setSelectedType(dict.estimator.types[0].id);
                  setSelectedFeatures(["auth", "analytics"]);
                  setSelectedTimeline(dict.estimator.timeline[0].id);
                  setStep(1);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isAr ? "إعادة تعيين" : "Reset Calculator"}</span>
              </button>
            )}
          </div>

          {/* Result Card (Always visible or in Step 3) */}
          <div className="mt-8 p-6 sm:p-8 bg-brand-navy text-white rounded-2xl relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan-glow text-xs font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>{dict.estimator.summary.title}</span>
                </div>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="text-xs text-slate-300 font-medium">
                    {dict.estimator.summary.estCost}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-brand-cyan-glow font-mono">
                    ${totalMin.toLocaleString()} - ${totalMax.toLocaleString()}
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  <span>{dict.estimator.summary.estTime} </span>
                  <span className="text-white font-bold">{currentTypeObj.time}</span>
                  <span className="mx-2">•</span>
                  <span>{dict.estimator.summary.includedFree}</span>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-cyan hover:bg-white text-brand-navy font-black text-sm shadow-luxury transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{dict.estimator.summary.whatsappCta}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
