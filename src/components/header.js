'use client'

import { cn } from '@/lib/utils'

import { siteRoutes } from '@/root/config/site'
import { LogoAppIcon } from '@/components/ui/icons'
import { ModeToggle } from '@/components/mode-toggle'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const segment = useSelectedLayoutSegment()

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center justify-between'>
        <div className='flex items-center'>
          <Link className='mr-6' href='/'>
            <span className='sr-only'>Home</span>
            <LogoAppIcon />
          </Link>
          <nav className='flex items-center gap-4 text-sm'>
            {siteRoutes.map((route, index) => (
              <Link
                className={cn(
                  'transition-colors',
                  segment !== route.segment &&
                    'text-foreground/60 hover:text-foreground/80'
                )}
                key={index}
                href={route.path}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}
