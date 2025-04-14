"use client";

import Mobile from "./mobile";
import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";
import { getTranslations } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

const Page = ({ params: { locale } }: { params: { locale: Locale } }) => {
  const t = getTranslations(locale);

  return (
    <div
      id={"Navbar"}
      className={
        "flex justify-between md:p-5 max-md:p-3 sticky top-0 bg-white z-50 border-b border-gray-300"
      }
    >
      <div>
        <Link href={"/"} className={"font-bold text-3xl"}>
          <Image src={"/logo.jpg"} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className={"flex max-lg:hidden"}>
        {navLinks.map((nav, idx) => (
          <Link
            href={`/${nav.route}`}
            key={idx}
            className={
              "px-5 text-gray-600 pt-2 hover:text-primary font-semibold"
            }
          >
            {t[nav.name as keyof typeof t]}
          </Link>
        ))}
      </div>

      <div className={"flex max-lg:space-x-3"}>
        <LanguageSwitcher currentLocale={locale} />
        <Mobile
          params={{
            locale: locale,
          }}
        />
        <div>
          <p className={"max-lg:hidden text-xl ml-5"}>
            78{" "}
            <span className={"font-bold"}>
              777 {""} 77 {""} 07
            </span>
          </p>
          <hr className={"w-[90%] ml-4 bg-[#004ff9] h-[3px] max-md:hidden"} />
        </div>
      </div>
    </div>
  );
};

export default Page;
