"use client"

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { lngs } from '@/constants'

function LanguageDropdown () {
  const params = useParams();
  const lng = params?.lng as string;
  const pathname = usePathname();
  const restPath = pathname.replace(/^\/[a-z]{2}/, '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="language-dropdown">
          <Languages width={30} height={30} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {lngs.map((item) => (
            <Link href={`/${item.route}${restPath}`} key={item.route}>
              <DropdownMenuItem
                className={cn(
                  'cursor-pointer',
                  lng === item.route && 'bg-secondary'
                )}
              >
                <Image
                  src={`/locales/${item.route}.png`}
                  alt={item.route}
                  width={30}
                  height={30}
                />
                <span className="ml-2 font-medium" aria-current={lng === item.route ? 'true' : undefined}>
                  {item.label}
                </span>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageDropdown
