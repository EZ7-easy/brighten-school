import { Locale, locales } from "../../lib/i18n";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) {
    notFound();
  }

  return (
    <>
      <Toaster position="top-center" />
      <main>
        <Navbar
          params={{
            locale: locale,
          }}
        />
        {children}
        <Footer
          params={{
            locale: locale,
          }}
        />
      </main>
    </>
  );
}
