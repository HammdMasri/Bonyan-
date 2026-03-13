export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm font-medium">مدعوم بالذكاء الاصطناعي</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              أدر مشاريعك{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-400 to-amber-600">
                الإنشائية
              </span>{" "}
              بذكاء
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              بنيان منصة متكاملة تستخدم الذكاء الاصطناعي لمتابعة التقدم، وإدارة التكاليف،
              وتنسيق الفرق في مشاريع البناء بكفاءة عالية وأقل أخطاء.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5">
                ابدأ تجربتك المجانية
              </button>
              <button className="px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                شاهد كيف يعمل
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-end">
              {[
                { value: "+500", label: "مشروع مُدار" },
                { value: "35%", label: "تقليل التكاليف" },
                { value: "98%", label: "رضا العملاء" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-6 shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex-1 mx-4 h-6 bg-slate-700 rounded-md" />
              </div>

              {/* Mock Dashboard */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 bg-slate-600 rounded" />
                  <div className="h-7 w-24 bg-amber-500/30 border border-amber-500/50 rounded-lg" />
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "مشاريع نشطة", value: "12", color: "bg-blue-500/20 border-blue-500/30" },
                    { label: "مكتملة", value: "47", color: "bg-green-500/20 border-green-500/30" },
                    { label: "في انتظار", value: "5", color: "bg-amber-500/20 border-amber-500/30" },
                  ].map((card) => (
                    <div key={card.label} className={`${card.color} border rounded-xl p-3`}>
                      <div className="text-slate-400 text-xs mb-1">{card.label}</div>
                      <div className="text-white font-bold text-xl">{card.value}</div>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  <div className="h-3 w-20 bg-slate-600 rounded mb-2" />
                  {[
                    { name: "برج الأعمال A", progress: 78, color: "bg-amber-500" },
                    { name: "مجمع سكني", progress: 45, color: "bg-blue-500" },
                    { name: "طريق الكورنيش", progress: 92, color: "bg-green-500" },
                  ].map((project) => (
                    <div key={project.name}>
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>{project.name}</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${project.color} rounded-full`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Insight badge */}
                <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 mt-2">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-amber-400 text-xs font-semibold mb-0.5">تنبيه ذكي</div>
                    <div className="text-slate-300 text-xs">توقع تأخير في برج الأعمال A بسبب تأخر الموارد. يُنصح بإعادة جدولة.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">توفير في التكلفة</div>
                <div className="text-sm font-bold text-gray-800">235,000 ر.س</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
