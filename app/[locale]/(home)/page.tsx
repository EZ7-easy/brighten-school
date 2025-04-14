/* eslint-disable */

import About from "./_components/About";
import Banner from "./_components/banner";
import Contacts from "./_components/Contacts";
import Gallery from "./_components/Gallery";
import Map from "./_components/Map";
// import Prices from '@/app/[locale]/(root)/(home)/_components/Prices'
import SignUp from "./_components/SignUp";
import Team from "./_components/Team";
import { Locale } from "@/lib/i18n";

const Page = ({ params: { locale } }: { params: { locale: Locale } }) => {
  return (
    <>
      <Banner />
      <About />
      <Team />
      {/* <Prices/> */}
      <SignUp />
      <Map />
      <Gallery />
      <Contacts />
    </>
  );
};
export default Page;
