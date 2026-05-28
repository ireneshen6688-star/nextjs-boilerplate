import { profileData } from "./data/profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 py-32 w-full">
          <div className="max-w-3xl">
            {/* 状态标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-slate-400 mb-10 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              开放合作机会
            </div>

            {/* 姓名 */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
              <span className="text-white">{profileData.name}</span>
            </h1>

            {/* 职位 */}
            <p className="text-xl sm:text-2xl text-slate-400 font-light mb-4 tracking-wide">
              {profileData.title}
              <span className="mx-3 text-slate-600">·</span>
              {profileData.subtitle}
            </p>

            {/* Tagline */}
            <p className="text-base text-slate-500 italic mb-10 tracking-wider">
              "{profileData.tagline}"
            </p>

            {/* 简介 */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-12 font-light">
              {profileData.intro}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-100 transition-colors"
              >
                查看经历
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-slate-300 text-sm font-medium rounded-full hover:border-white/30 hover:text-white transition-colors"
              >
                联系我
              </a>
            </div>
          </div>

          {/* 右侧装饰数字 */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-8 text-right">
            <div>
              <div className="text-5xl font-bold text-white/10">10</div>
              <div className="text-xs text-slate-600 tracking-widest uppercase mt-1">Years</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white/10">9+</div>
              <div className="text-xs text-slate-600 tracking-widest uppercase mt-1">Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white/10">4</div>
              <div className="text-xs text-slate-600 tracking-widest uppercase mt-1">Companies</div>
            </div>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* ── 技能 ── */}
      <section id="skills" className="py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <p className="text-xs text-slate-500 tracking-widest uppercase mb-3">Core Competencies</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">核心能力</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {profileData.skills.map((skill, i) => (
              <div
                key={i}
                className="bg-[#0a0a0f] p-8 hover:bg-white/[0.03] transition-colors group"
              >
                <div className="text-3xl mb-5">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 工作经历 ── */}
      <section id="experience" className="py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <p className="text-xs text-slate-500 tracking-widest uppercase mb-3">Work Experience</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">工作经历</h2>
          </div>

          <div className="space-y-0">
            {profileData.experience.map((exp, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-[280px_1fr] gap-0 border-t border-white/5 py-10 hover:bg-white/[0.02] transition-colors px-4 -mx-4"
              >
                {/* 左侧 */}
                <div className="mb-6 md:mb-0 md:pr-12">
                  <p className="text-xs text-slate-500 tracking-widest uppercase mb-2">{exp.period}</p>
                  <p className="text-white font-medium mb-1">{exp.role}</p>
                  <p className="text-sm text-slate-400 leading-snug">{exp.company}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 text-xs rounded border border-white/10 text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 右侧 */}
                <ul className="space-y-3">
                  {exp.highlights.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-blue-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-t border-white/5" />
          </div>
        </div>
      </section>

      {/* ── 主要成就 ── */}
      <section id="achievements" className="py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <p className="text-xs text-slate-500 tracking-widest uppercase mb-3">Achievements</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">主要成就</h2>
            <p className="text-slate-500 mt-3 font-light">从0到1，持续创新</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {profileData.achievements.map((item, i) => (
              <div
                key={i}
                className="relative p-8 border border-white/8 rounded-2xl hover:border-white/15 transition-colors group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/5 to-transparent rounded-bl-full" />
                <div className="text-xs text-slate-500 tracking-widest uppercase mb-4">{item.metric}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <span className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                  {item.highlight}
                </span>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-16">
        <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-medium">{profileData.name}</p>
            <p className="text-sm text-slate-500 mt-1">{profileData.title} · {profileData.subtitle}</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href={`mailto:${profileData.contact.email}`} className="hover:text-white transition-colors">
              Email
            </a>
            <span className="text-slate-700">·</span>
            <a href={profileData.contact.linkedin} className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <span className="text-slate-700">·</span>
            <a href={profileData.contact.github} className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
          <p className="text-xs text-slate-700">© 2025 {profileData.name}</p>
        </div>
      </footer>
    </div>
  );
}
