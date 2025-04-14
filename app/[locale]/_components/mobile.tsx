"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignCenter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { getTranslations } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";

function Mobile({ params: { locale } }: { params: { locale: Locale } }) {
  const t = getTranslations(locale);

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          size={"icon"}
          variant={"ghost"}
          aria-label="mobile-hamburger-menu"
        >
          <AlignCenter width={30} height={30} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"} className="py-5">
        <SheetHeader className="items-center">
          <Image src={"/logo.jpg"} alt={"logo"} width={210} height={300} />
          <Separator />
        </SheetHeader>
        <div className="mt-4 flex flex-col space-y-3">
          {navLinks.map((nav) => (
            <Link
              href={`/${nav.route}`}
              key={nav.route}
              className="flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20"
            >
              <span>{t[nav.name as keyof typeof t]}</span>
            </Link>
          ))}
          <div className="flex items-center justify-center gap-4">
            <div>
              <p className={"text-xl ml-5"}>
                78{" "}
                <span className={"font-bold"}>
                  777 {""} 77 {""} 07
                </span>
              </p>
              <hr className={"w-[90%] ml-4 bg-[#004ff9] h-[3px]"} />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Mobile;
