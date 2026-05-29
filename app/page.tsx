"use client";

import { useState } from "react";
import { profileData, Lang } from "./data/profile";

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = (field: { zh: string; en: string }) => field[lang];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
          <span className="text-sm font-medium tracking-widest uppercase">{profileData.name}</span>
          <div className="flex items-center gap-8 text-sm text-[#6B7280]">
            <a href="#skills" className="hover:text-[#111111] transition-colors">{t(profileData.navLinks.skills)}</a>
            <a href="#experience" className="hover:text-[#111111] transition-colors">{t(profileData.navLinks.experience)}</a>
            <a href="#keywords" className="hover:text-[#111111] transition-colors">{t(profileData.navLinks.keywords)}</a>
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="ml-2 px-3 py-1 text-xs border border-[#E5E7EB] rounded-full hover:border-[#1A56DB] hover:text-[#1A56DB] transition-colors tracking-widest uppercase"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 max-w-6xl mx-auto px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs text-[#6B7280] tracking-widest uppercase mb-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            {t(profileData.openTo)}
          </div>
          <h1 className="text-7xl sm:text-8xl font-extralight tracking-tight leading-none mb-6">{profileData.name}</h1>
          <p className="text-xl text-[#6B7280] font-light mb-3 tracking-wide">
            {t(profileData.title)}<span className="mx-3 text-[#D1D5DB]">·</span>{t(profileData.subtitle)}
          </p>
          <p className="text-sm text-[#9CA3AF] italic mb-4">{t(profileData.tagline)}</p>
          <p className="text-base text-[#6B7280] leading-relaxed max-w-2xl mt-6 mb-12">{t(profileData.intro)}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#experience" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111111] text-white text-sm rounded-full hover:bg-[#333] transition-colors">
              {t(profileData.cta)}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E7EB]" />

      {/* 核心能力 */}
      <section id="skills" className="py-24 max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-3">01 — Core Capabilities</p>
          <h2 className="text-3xl font-light">{t(profileData.sectionLabels.skills)}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E7EB]">
          {profileData.skills.map((skill, i) => (
            <div key={i} className="bg-[#FAFAFA] p-8 hover:bg-white transition-colors">
              <div className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-4">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-base font-medium mb-3">{t(skill.title)}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{t(skill.description)}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#E5E7EB]" />

      {/* 工作经历 */}
      <section id="experience" className="py-24 max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-3">02 — Experience</p>
          <h2 className="text-3xl font-light">{t(profileData.sectionLabels.experience)}</h2>
        </div>
        <div>
          {profileData.experience.map((exp, i) => (
            <div key={i} className="border-t border-[#E5E7EB] py-10 grid lg:grid-cols-[280px_1fr] gap-8">
              <div>
                <p className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-2">{t(exp.period)}</p>
                <p className="text-sm font-medium mb-1">{t(exp.role)}</p>
                <p className="text-sm text-[#6B7280] leading-snug">{t(exp.company)}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.tags[lang].map((tag: string) => (
                    <span key={tag} className="px-2.5 py-0.5 text-xs border border-[#E5E7EB] text-[#9CA3AF] rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-[#374151] leading-relaxed mb-4 font-medium">{t(exp.summary)}</p>
                <ul className="space-y-3">
                  {exp.highlights[lang].map((h: string, j: number) => (
                    <li key={j} className="flex gap-3 text-sm text-[#6B7280] leading-relaxed">
                      <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-[#D1D5DB]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="border-t border-[#E5E7EB]" />
        </div>
      </section>

      <div className="border-t border-[#E5E7EB]" />

      {/* 关键词矩阵 */}
      <section id="keywords" className="py-24 max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-3">03 — Keywords</p>
          <h2 className="text-3xl font-light">{t(profileData.sectionLabels.keywords)}</h2>
          <p className="text-sm text-[#9CA3AF] mt-3">{t(profileData.sectionLabels.keywordsSubtitle)}</p>
        </div>
        <div className="space-y-10">
          {profileData.keywords.map((group, i) => (
            <div key={i} className="grid lg:grid-cols-[180px_1fr] gap-6 items-start">
              <div className="text-xs text-[#9CA3AF] tracking-widest uppercase pt-1">{t(group.group)}</div>
              <div className="flex flex-wrap gap-2">
                {group.tags[lang].map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm border border-[#E5E7EB] text-[#374151] rounded-full hover:border-[#1A56DB] hover:text-[#1A56DB] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
