// Icons: https://lucide.dev/icons
// Format icons: https://svgomg.net

import { cn } from '@/lib/utils'

export const LogoAppIcon = ({ className }) => (
  <svg
    className={cn(
      'h-6 w-6 min-w-6 fill-black stroke-white dark:fill-white dark:stroke-black',
      className
    )}
    viewBox='0 0 32 32'
    stroke='currentColor'
  >
    <g
      transform='translate(0.000000,32.000000) scale(0.100000,-0.100000)'
      stroke='none'
    >
      <path
        d='M25 295 c-24 -23 -25 -31 -25 -135 0 -104 1 -112 25 -135 23 -24 31
          -25 135 -25 104 0 112 1 135 25 24 23 25 31 25 135 0 104 -1 112 -25 135 -23
          24 -31 25 -135 25 -104 0 -112 -1 -135 -25z m166 -76 c-16 -46 -14 -49 19 -49
          17 0 30 -4 30 -8 0 -4 -25 -32 -55 -62 -41 -40 -56 -50 -60 -39 -3 9 -1 28 5
          43 15 41 13 46 -20 46 -16 0 -30 3 -30 7 0 4 23 31 52 60 56 57 79 58 59 2z'
      />
      <path d='M135 180 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z' />
      <path d='M170 139 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z' />
    </g>
  </svg>
)

export const GitHubIcon = ({ className }) => (
  <svg
    className={cn('h-6 w-6 min-w-6', className)}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
    <path d='M9 18c-4.51 2-5-2-7-2' />
  </svg>
)

export const TwitterIcon = ({ className }) => (
  <svg
    className={cn('h-6 w-6 min-w-6', className)}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
  </svg>
)
