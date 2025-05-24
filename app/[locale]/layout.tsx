import { Locale, locales } from "../../lib/i18n";
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
  // ✅ Validate locale
  if (!locales.includes(params.locale as Locale)) {
    notFound(); // Shows 404 page if invalid locale
  }

  const locale = params.locale as Locale;

  return (
    <>
      <Toaster position="top-center" />
      <main>
        <Navbar locale={locale} />
        {children}
        <Footer locale={locale} />
      </main>
    </>
  );
}
