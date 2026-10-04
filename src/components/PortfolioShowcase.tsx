"use client";

import { useState } from "react";
import { portfolioProjects, ProjectItem } from "@/lib/portfolio-data";
import { ExternalLink, Sparkles, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import type { Dictionary } from "@/i18n/get-dictionary";

interface PortfolioShowcaseProps {
  lang: string;
  dict: Dictionary;
}

export default function PortfolioShowcase({ lang, dict }: PortfolioShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const isAr = lang === "ar";

  const categories = [
    { id: "all", label: dict.portfolio.categories.all },
    { id: "edtech", label: dict.portfolio.categories.edtech },
    { id: "export", label: dict.portfolio.categories.export },
    { id: "saas", label: dict.portfolio.categories.saas },
    { id: "foodtech", label: dict.portfolio.categories.foodtech },
    { id: "logistics", label: dict.portfolio.categories.logistics },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan-light text-brand-navy text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{dict.portfolio.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-navy">
            {dict.portfolio.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {dict.portfolio.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedCategory === cat.id
                  ? "bg-brand-navy text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-luxury hover:shadow-luxury-hover hover:border-brand-cyan/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-brand-cyan-light/80 text-brand-navy border border-brand-cyan/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      <Sparkles className="w-3 h-3" />
                      <span>{isAr ? "مشروع مميز" : "Featured"}</span>
                    </span>
                  )}
                </div>

                {/* Title & Summary */}
                <h3 className="text-lg font-extrabold text-brand-navy group-hover:text-brand-cyan transition-colors leading-snug">
                  {project.title[isAr ? "ar" : "en"]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {project.summary[isAr ? "ar" : "en"]}
                </p>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center bg-slate-50/70 rounded-xl p-2">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <p className="text-xs sm:text-sm font-black text-brand-navy font-mono">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium truncate">
                        {m.label[isAr ? "ar" : "en"]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Features Bullet Points */}
                <ul className="space-y-1.5 pt-1">
                  {project.features[isAr ? "ar" : "en"].slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-slate-100 text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-slate-700 hover:text-brand-navy bg-white hover:bg-slate-100 rounded-lg border border-slate-200 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{dict.portfolio.githubRepo}</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-brand-navy hover:bg-brand-cyan hover:text-brand-navy rounded-lg transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{dict.portfolio.liveDemo}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
