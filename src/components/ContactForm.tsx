"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { Send, Phone, Mail, MapPin, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

interface ContactFormProps {
  lang: string;
  dict: Dictionary;
}

export default function ContactForm({ lang, dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "webApp",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const isAr = lang === "ar";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message and redirect to WhatsApp for immediate conversion
    const message = isAr
      ? `طلب تواصل جديد من موقع كوديرا:%0A` +
        `• الاسم: ${formData.name}%0A` +
        `• البريد: ${formData.email}%0A` +
        `• الهاتف: ${formData.phone || "غير محدد"}%0A` +
        `• نوع المشروع: ${formData.projectType}%0A` +
        `• الرسالة: ${formData.message}`
      : `New Lead from Codera Website:%0A` +
        `• Name: ${formData.name}%0A` +
        `• Email: ${formData.email}%0A` +
        `• Phone: ${formData.phone || "Not specified"}%0A` +
        `• Project Type: ${formData.projectType}%0A` +
        `• Message: ${formData.message}`;

    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan-light text-brand-navy text-xs font-bold">
            <Mail className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{dict.contact.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-navy">
            {dict.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left / Info Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-luxury space-y-6">
              <h3 className="text-xl font-bold text-brand-navy">
                {dict.contact.channels.directTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {dict.contact.channels.directDesc}
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-600 font-bold uppercase">
                      {isAr ? "واتساب مباشر" : "Direct WhatsApp"}
                    </p>
                    <p className="text-sm font-black font-mono">{siteConfig.displayPhone}</p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-brand-navy transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">
                      {isAr ? "الهاتف المباشر" : "Phone Call"}
                    </p>
                    <p className="text-sm font-black font-mono">{siteConfig.displayPhone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-brand-navy transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan text-brand-navy flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">
                      {isAr ? "البريد الإلكتروني" : "Official Email"}
                    </p>
                    <p className="text-sm font-bold">{siteConfig.email}</p>
                  </div>
                </a>
              </div>

              {/* NDA Promise badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>{isAr ? "جميع البيانات والمحادثات سرية 100% بموجب اتفاقية NDA" : "100% Confidential under strict NDA"}</span>
              </div>
            </div>
          </div>

          {/* Right / Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-luxury">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">
                    {isAr ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {isAr
                      ? "شكراً لتواصلك مع كوديرا. سيقوم فريقنا الهندسي بالرد عليك خلال أقل من 12 ساعة."
                      : "Thank you for reaching out to Codera. Our engineering team will respond within 12 hours."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {dict.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isAr ? "مثال: م. أحمد عبد الله" : "e.g., John Smith"}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {dict.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {dict.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+20 100 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {dict.contact.form.projectType}
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-all bg-white"
                      >
                        <option value="webApp">{isAr ? "منصة ويب / SaaS" : "Web Platform / SaaS"}</option>
                        <option value="mobileApp">{isAr ? "تطبيق موبايل (iOS/Android)" : "Mobile Application"}</option>
                        <option value="customErp">{isAr ? "نظام إدارة مخصص / ERP" : "Custom ERP / Operations"}</option>
                        <option value="landing">{isAr ? "موقع تعريفي فاخر" : "Luxury Corporate Website"}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {dict.contact.form.details} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isAr
                          ? "اشرح لنا باختصار فكرة مشروعك، متطلباتك التقنية، أو أي استفسار..."
                          : "Briefly explain your project vision, technical requirements, or any questions..."
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-navy hover:bg-brand-cyan hover:text-brand-navy text-white font-extrabold text-sm shadow-luxury transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{dict.contact.form.submit}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
