"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignCenter, LayoutDashboard, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { SignedIn } from "@clerk/nextjs";

type Props = {
  t: Record<string, string>;
};

function Mobile({ t }: Props) {
  return (
    <Sheet>
      <SheetTitle></SheetTitle>
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
          <SignedIn>
            <div className="space-y-2 flex flex-col pl-4 mb-3 text-gray-700">
              <Link href={"/profile"}>
                <div className="flex gap-2">
                  <LayoutDashboard /> {t.Profile}
                </div>
              </Link>

              <div className="flex gap-2">
                <LogOut /> {t.logout}
              </div>
            </div>

            <Separator />
          </SignedIn>
          <div className={"space-y-2 flex flex-col mt-3 p-3"}>
            {navLinks.map((nav, idx) => (
              <Link
                href={`/${nav.route}`}
                key={idx}
                className={
                  "pl-2 text-gray-600 hover:text-primary font-semibold"
                }
              >
                {t[nav.name as keyof typeof t]}
              </Link>
            ))}
          </div>
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
