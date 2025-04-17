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

type Props = {
  t: Record<string, string>;
};

function Mobile({ t }: Props) {
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
      <SheetContent side={"top"} className="py-4">
        <SheetHeader className="items-center">
          <Image src={"/logo.jpg"} alt={"logo"} width={210} height={300} />
          <Separator />
        </SheetHeader>
        <div className="flex flex-col">
          {navLinks.map((nav) => (
            <Link
              href={`/${nav.route}`}
              key={nav.route}
              className="flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20"
            >
              <span>{t[nav.name as keyof typeof t]}</span>
            </Link>
          ))}
          <div className="flex items-center justify-center gap-4 mt-2">
            <div>
              <p className={"text-xl ml-5"}>
                91{" "}
                <span className={"font-bold"}>
                  333 {""} 11 {""} 44
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
