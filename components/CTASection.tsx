export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-amber-400 text-sm font-medium">ابدأ اليوم</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          هل أنت مستعد لتحويل طريقة <br />
          <span className="text-amber-400">إدارة مشاريعك؟</span>
        </h2>

        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          انضم إلى مئات الشركات الإنشائية التي تستخدم بنيان لإنجاز مشاريع أسرع، بتكاليف أقل، وبجودة أعلى.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 text-lg">
            ابدأ تجربتك المجانية
          </button>
          <button className="px-10 py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-lg">
            احجز عرضاً توضيحياً
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
          {[
            { icon: "🔒", text: "بيانات آمنة ومشفرة" },
            { icon: "🌐", text: "خوادم في المنطقة العربية" },
            { icon: "📞", text: "دعم فني 24/7 بالعربي" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
