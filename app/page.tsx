import { profileData } from "./data/profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
          <span className="text-sm font-medium tracking-widest uppercase">{profileData.name}</span>
          <div className="flex items-center gap-8 text-sm text-[#6B7280]">
            <a href="#skills" className="hover:text-[#111111] transition-colors">能力</a>
            <a href="#experience" className="hover:text-[#111111] transition-colors">经历</a>
            <a href="#keywords" className="hover:text-[#111111] transition-colors">标签</a>
            <a href={`mailto:${profileData.contact.email}`} className="px-4 py-1.5 bg-[#111111] text-white text-xs rounded-full hover:bg-[#333] transition-colors">联系我</a>
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
            开放合作机会
          </div>
          <h1 className="text-7xl sm:text-8xl font-extralight tracking-tight leading-none mb-6">{profileData.name}</h1>
          <p className="text-xl text-[#6B7280] font-light mb-3 tracking-wide">
            {profileData.title}<span className="mx-3 text-[#D1D5DB]">·</span>{profileData.subtitle}
          </p>
          <p className="text-base text-[#6B7280] leading-relaxed max-w-2xl mt-8 mb-12">{profileData.intro}</p>
          <div className="flex flex-wrap gap-12 mb-12">
            {[
              { num: "10", label: "年行业经验" },
              { num: "4", label: "家企业" },
              { num: "9+", label: "大型项目交付" },
              { num: "200+", label: "生态产品上线" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-light">{s.num}</div>
                <div className="text-xs text-[#9CA3AF] tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#experience" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111111] text-white text-sm rounded-full hover:bg-[#333] transition-colors">
              查看经历
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href={`mailto:${profileData.contact.email}`} className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#E5E7EB] text-[#6B7280] text-sm rounded-full hover:border-[#111111] hover:text-[#111111] transition-colors">
              发送邮件
            </a>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E7EB]" />

      {/* 核心能力 */}
      <section id="skills" className="py-24 max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-3">01 — Core Skills</p>
          <h2 className="text-3xl font-light">核心能力</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E7EB]">
          {profileData.skills.map((skill, i) => (
            <div key={i} className="bg-[#FAFAFA] p-8 hover:bg-white transition-colors">
              <div className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-4">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-base font-medium mb-3">{skill.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#E5E7EB]" />

      {/* 工作经历 */}
      <section id="experience" className="py-24 max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <p className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-3">02 — Experience</p>
          <h2 className="text-3xl font-light">工作经历</h2>
        </div>
        <div>
          {profileData.experience.map((exp, i) => (
            <div key={i} className="border-t border-[#E5E7EB] py-10 grid lg:grid-cols-[280px_1fr] gap-8">
              <div>
                <p className="text-xs text-[#9CA3AF] tracking-widest uppercase mb-2">{exp.period}</p>
                <p className="text-sm font-medium mb-1">{exp.role}</p>
                <p className="text-sm text-[#6B7280] leading-snug">{exp.company}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-xs border border-[#E5E7EB] text-[#9CA3AF] rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <ul className="space-y-3">
                  {exp.highlights.map((h, j) => (
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
          <h2 className="text-3xl font-light">能力标签</h2>
          <p className="text-sm text-[#9CA3AF] mt-3">产品形态 · 行业深度 · 产品阶段</p>
        </div>
        <div className="space-y-10">
          {profileData.keywords.map((group, i) => (
            <div key={i} className="grid lg:grid-cols-[180px_1fr] gap-6 items-start">
              <div className="text-xs text-[#9CA3AF] tracking-widest uppercase pt-1">{group.group}</div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
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

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] py-12">
        <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">{profileData.name}</p>
            <p className="text-xs text-[#9CA3AF] mt-0.5">{profileData.title} · {profileData.subtitle}</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#9CA3AF]">
            <a href={`mailto:${profileData.contact.email}`} className="hover:text-[#111111] transition-colors">Email</a>
            <span className="text-[#E5E7EB]">·</span>
            <a href={profileData.contact.linkedin} className="hover:text-[#111111] transition-colors">LinkedIn</a>
            <span className="text-[#E5E7EB]">·</span>
            <a href={profileData.contact.github} className="hover:text-[#111111] transition-colors">GitHub</a>
          </div>
          <p className="text-xs text-[#D1D5DB]">© 2025 {profileData.name}</p>
        </div>
      </footer>

    </div>
  );
}
