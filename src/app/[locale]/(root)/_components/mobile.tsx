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
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../../../../constants";

function Mobile() {
  const t = useTranslations("HomePage");

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
      <SheetContent side={"top"}>
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
              <span>{t(nav.name)}</span>
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
