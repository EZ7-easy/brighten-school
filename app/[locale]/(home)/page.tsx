import About from "./_components/About";
import Banner from "./_components/banner";
import Contacts from "./_components/Contacts";
import Gallery from "./_components/Gallery";
import Map from "./_components/Map";
import SignUp from "./_components/SignUp";
import Team from "./_components/Team";
import { getTranslations, Locale } from "@/lib/i18n";

// For static generation (SSG)
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }, { locale: "uz" }];
}

interface PageProps {
  params: {
    locale: Locale;
  };
}

export default function Page({ params }: PageProps) {
  const t = getTranslations(params.locale);

  return (
    <>
      <Banner t={t} />
      <About />
      <Team />
      <SignUp t={t} />
      <Map />
      <Gallery />
      <Contacts />
    </>
  );
}
