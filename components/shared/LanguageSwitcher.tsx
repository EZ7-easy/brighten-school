"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 p-2">
          <Image
            src={`/locales/${currentLocale}.png`}
            alt={currentLocale}
            width={27}
            height={27}
          />
          <span className="font-medium">{currentLocale.toUpperCase()}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        {locales.map((locale) => (
          <Link href={`/${locale}${pathWithoutLocale}`} key={locale}>
            <DropdownMenuItem
              className={cn(
                "flex items-center gap-2",
                currentLocale === locale && "bg-secondary"
              )}
            >
              <Image
                src={`/locales/${locale}.png`}
                alt={locale}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="font-medium">{locale.toUpperCase()}</span>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
