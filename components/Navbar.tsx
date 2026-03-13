"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">ب</span>
            </div>
            <span className="text-xl font-bold text-slate-800">بنيان</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-amber-500 transition-colors text-sm font-medium">
              المميزات
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-amber-500 transition-colors text-sm font-medium">
              كيف يعمل
            </a>
            <a href="#contact" className="text-slate-600 hover:text-amber-500 transition-colors text-sm font-medium">
              تواصل معنا
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-slate-700 hover:text-amber-500 transition-colors px-4 py-2">
              تسجيل الدخول
            </button>
            <button className="text-sm font-medium bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg transition-colors">
              ابدأ مجاناً
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-3">
            <a href="#features" className="block text-slate-600 hover:text-amber-500 py-2 text-sm font-medium">المميزات</a>
            <a href="#how-it-works" className="block text-slate-600 hover:text-amber-500 py-2 text-sm font-medium">كيف يعمل</a>
            <a href="#contact" className="block text-slate-600 hover:text-amber-500 py-2 text-sm font-medium">تواصل معنا</a>
            <div className="pt-2 flex gap-3">
              <button className="flex-1 text-sm font-medium border border-slate-200 text-slate-700 px-4 py-2 rounded-lg">
                تسجيل الدخول
              </button>
              <button className="flex-1 text-sm font-medium bg-amber-500 text-white px-4 py-2 rounded-lg">
                ابدأ مجاناً
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
