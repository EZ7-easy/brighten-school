import About from "./_components/About";
import Banner from "./_components/banner";
import Contacts from "./_components/Contacts";
import Gallery from "./_components/Gallery";
import Map from "./_components/Map";
import SignUp from "./_components/SignUp";
import Team from "./_components/Team";
import { getTranslations, Locale } from "@/lib/i18n";

type PageProps = {
  params: {
    locale: Locale;
  };
};

const Page = ({ params }: PageProps) => {
  const t = getTranslations(params.locale); // Get translations synchronously

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
};

export default Page;
