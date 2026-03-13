import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "بنيان - منصة إدارة المشاريع الإنشائية بالذكاء الاصطناعي",
  description: "منصة ذكية لإدارة مشاريع البناء والإنشاء، تجمع بين الذكاء الاصطناعي وخبرة القطاع لتحسين الكفاءة وتقليل التكاليف",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
