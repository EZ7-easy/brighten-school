// components/shared/Navbar.tsx
"use client";

import Mobile from "./mobile";
import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";
import { Locale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { SignedIn } from "@clerk/nextjs";
import {
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogIn, LogOut } from "lucide-react";

type NavbarProps = {
  locale: Locale;
  t: Record<string, string>;
};

export default function Navbar({ locale, t }: NavbarProps) {
  return (
    <div
      id="Navbar"
      className="flex justify-between md:p-5 max-md:p-3 sticky top-0 bg-white z-50 border-b border-gray-300"
    >
      <div>
        <Link href={`/${locale}`} className="font-bold text-3xl">
          <Image src="/logo.jpg" alt="logo" width={100} height={100} />
        </Link>
      </div>

      <div className="flex">
        <LanguageSwitcher currentLocale={locale} />
        <SignedIn>
          <Menubar className="border-none shadow-none">
            <MenubarMenu>
              <MenubarTrigger>
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
              </MenubarTrigger>

              <MenubarContent className="max-sm:hidden">
                <Link href="/profile">
                  <MenubarItem className="flex gap-2">
                    <LayoutDashboard /> {t.Profile}
                  </MenubarItem>
                </Link>

                <MenubarItem>
                  <SignOutButton>
                    <div className="flex gap-2">
                      <LogOut className="my-auto" /> {t.logout}
                    </div>
                  </SignOutButton>
                </MenubarItem>

                <MenubarSeparator />
                <div className="space-y-2 flex flex-col">
                  {navLinks.map((nav, idx) => (
                    <Link
                      href={`/${locale}/${nav.route}`}
                      key={idx}
                      className="pl-2 text-gray-600 hover:text-primary font-semibold"
                    >
                      {t[nav.name as keyof typeof t]}
                    </Link>
                  ))}
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button size="icon" variant="ghost">
              <LogIn className="h-4 w-4 mr-2" />
            </Button>
          </SignInButton>
        </SignedOut>

        <Mobile t={t} />

        <div className="my-auto h-full">
          <p className="max-lg:hidden text-xl ml-5">
            91{" "}
            <span className="font-bold">
              333{" "}11{" "}44
            </span>
          </p>
          <hr className="w-[90%] ml-4 bg-[#004ff9] h-[3px] max-md:hidden" />
        </div>
      </div>
    </div>
  );
}
