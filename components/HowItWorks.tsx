const steps = [
  {
    number: "01",
    title: "أنشئ مشروعك",
    desc: "أدخل تفاصيل مشروعك من اسم وميزانية وجدول زمني. النظام يساعدك على تقسيم المشروع إلى مراحل ومهام قابلة للتتبع.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
      </svg>
    ),
    details: ["إدخال بيانات المشروع", "تحديد الميزانية والجدول الزمني", "تقسيم المراحل تلقائياً بالذكاء الاصطناعي"],
  },
  {
    number: "02",
    title: "أضف فريقك",
    desc: "ادعُ المقاولين والمهندسين وأصحاب المصلحة. كل شخص يرى ما يخصه فقط مع صلاحيات مخصصة.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    details: ["دعوة الأعضاء بالبريد الإلكتروني", "تحديد الصلاحيات لكل شخص", "تواصل مباشر داخل المنصة"],
  },
  {
    number: "03",
    title: "تابع ويتابعك الذكاء الاصطناعي",
    desc: "أثناء تنفيذ المشروع، يراقب الذكاء الاصطناعي التقدم ويكتشف المشكلات قبل حدوثها ويقترح الحلول.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    details: ["لوحة تحكم تفاعلية", "تنبيهات ذكية فورية", "تقارير تلقائية أسبوعية"],
  },
  {
    number: "04",
    title: "سلّم وحلّل النتائج",
    desc: "عند الانتهاء، احصل على تقرير شامل للمشروع ودروس مستفادة تساعدك على تحسين مشاريعك القادمة.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    details: ["تقرير الإنجاز النهائي", "تحليل الانحرافات عن الخطة", "توصيات للمشاريع المستقبلية"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">كيف يعمل</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-3 mb-4">
            أربع خطوات لمشروع ناجح
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            من إنشاء المشروع حتى التسليم، بنيان يرافقك في كل مرحلة ويجعل العمل أسهل وأكثر كفاءة.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 right-[12.5%] left-[12.5%] h-0.5 bg-gradient-to-l from-amber-200 via-amber-400 to-amber-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Step Number Circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-200 relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center z-20">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{step.desc}</p>

                {/* Detail list */}
                <ul className="space-y-2 text-right w-full">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-4 h-4 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-8 py-5">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-right">
              <div className="text-slate-800 font-semibold">ابدأ في أقل من 5 دقائق</div>
              <div className="text-slate-500 text-sm">لا يحتاج بطاقة ائتمان · تجربة مجانية 30 يوم</div>
            </div>
            <button className="mr-4 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors text-sm">
              جرّب الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
