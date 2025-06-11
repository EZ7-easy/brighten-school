// layout.tsx
import { Locale, locales, getTranslations } from "../../lib/i18n";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const t = await getTranslations(locale); // ✅ Server call

  return (
    <>
      <Toaster position="top-center" />
      <main>
        <Navbar locale={locale} t={t} /> {/* ✅ pass `t` */}
        {children}
        <Footer locale={locale} />
      </main>
    </>
  );
}
