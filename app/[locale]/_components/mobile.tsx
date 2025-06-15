"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignCenter, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  t: Record<string, string>;
};

function Mobile({ t }: Props) {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button size="icon" variant="ghost" aria-label="mobile-hamburger-menu">
          <AlignCenter className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="py-4 px-6 space-y-6">
        <SheetHeader className="items-center">
          <VisuallyHidden>
            <SheetTitle>{t.Menu ?? "Mobile Navigation"}</SheetTitle>
          </VisuallyHidden>

          <Image
            src="/logo.jpg"
            alt="logo"
            width={160}
            height={60}
            className="rounded-md"
          />
        </SheetHeader>

        <Separator />

        <SignedIn>
          <div className="flex flex-col items-start">
            <div className="space-y-2 w-full">
              <Link
                href="/profile"
                onClick={() => setSelectedLink("profile")}
                className={`flex items-center gap-2 px-2 py-1 rounded font-medium transition-colors ${
                  selectedLink === "profile"
                    ? "bg-blue-100 text-primary shadow-inner"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonPopoverActionButton: { display: "none" },
                      userButtonPopoverCard: { display: "none" },
                      userButtonPopoverFooter: { display: "none" },
                    },
                  }}
                />
                {t.Profile}
              </Link>

              <SignOutButton>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium">
                  <LogOut className="w-5 h-5" /> {t.logout}
                </button>
              </SignOutButton>
            </div>
          </div>

          <Separator />
        </SignedIn>

        {/* Navigation Links with pressed effect */}
        <nav className="flex flex-col space-y-3">
          {navLinks.map((nav, idx) => {
            const isPressed = selectedLink === nav.route;
            return (
              <Link
                key={idx}
                href={`/${nav.route}`}
                onClick={() => setSelectedLink(nav.route)}
                className={`transition-colors font-semibold px-2 py-1 rounded ${
                  isPressed
                    ? "bg-blue-100 text-primary shadow-inner"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {t[nav.name as keyof typeof t]}
              </Link>
            );
          })}
        </nav>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-lg text-gray-800">
            91{" "}
            <span className="font-bold tracking-wider">
              333&nbsp;11&nbsp;44
            </span>
          </p>
          <div className="mx-auto mt-1 h-[3px] w-3/4 bg-[#004ff9] rounded" />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Mobile;
