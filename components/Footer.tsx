export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">ب</span>
              </div>
              <span className="text-xl font-bold text-white">بنيان</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              منصة إدارة المشاريع الإنشائية المدعومة بالذكاء الاصطناعي. نساعدك على إنجاز مشاريعك في الوقت والميزانية المحددة.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">المنصة</h4>
            <ul className="space-y-2">
              {["المميزات", "كيف يعمل", "الأسعار", "قصص نجاح"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">الشركة</h4>
            <ul className="space-y-2">
              {["من نحن", "اتصل بنا", "سياسة الخصوصية", "الشروط والأحكام"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} بنيان. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <span>صُنع بـ</span>
            <span className="text-red-400">❤</span>
            <span>للقطاع الإنشائي العربي</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
