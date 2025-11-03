import Image from "next/image";
import { profileData } from "./data/profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src={profileData.avatar}
                  alt={profileData.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Intro */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  开放合作机会
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                {profileData.name}
              </h1>

              <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                {profileData.title} · {profileData.subtitle}
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
                {profileData.intro}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#skills"
                  className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all hover:scale-105 hover:shadow-lg"
                >
                  查看技能
                </a>
                <a
                  href="#achievements"
                  className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:scale-105"
                >
                  了解成就
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              核心技能
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              专注于产品创新与数字化转型
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {profileData.skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              主要成就
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              从0到1，持续创新
            </p>
          </div>

          <div className="space-y-6">
            {profileData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:border-purple-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium w-fit">
                    {achievement.highlight}
                  </span>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 mb-4">
            期待与您的合作与交流
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Email
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={profileData.contact.linkedin}
              className="text-slate-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={profileData.contact.github}
              className="text-slate-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-8">
            © 2025 {profileData.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
