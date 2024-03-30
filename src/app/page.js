import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarterAccordion } from '@/components/starter-accordion'
import { GitHubIcon, TwitterIcon } from '@/components/ui/icons'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='container mx-auto flex max-w-[980px] flex-col items-center grow gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 relative'>
      <div className='absolute -z-[1] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_45%_50%_at_50%_0%,#000_70%,transparent_110%)]' />

      <Badge
        className='text-sm hover:scale-105 transition select-none'
        variant='secondary'
      >
        🎉 v1.0.0
      </Badge>
      <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
        Next.js + shadcn Template
      </h1>
      <p className='max-w-[750px] mx-auto text-center text-lg text-muted-foreground sm:text-xl text-pretty'>
        Begin your project with built-in GitHub Actions, Husky for commits, and
        Eslint/Prettier for code quality. Ready to kickstart your development
        journey!
      </p>
      <div className='flex w-full items-center justify-center space-x-4 py-4 md:pb-10'>
        <Button className='gap-2' asChild>
          <Link
            href='https://github.com/JJozef/nextjs-shadcn-template'
            rel='noopener noreferrer'
            target='_blank'
          >
            <GitHubIcon className='w-5 h-5 min-w-5' />
            GitHub
          </Link>
        </Button>
        <Button className='gap-2' variant='outline' asChild>
          <Link
            href='https://x.com/jozefzin'
            rel='noopener noreferrer'
            target='_blank'
          >
            <TwitterIcon className='w-5 h-5 min-w-5' />
            Twitter
          </Link>
        </Button>
      </div>
      <StarterAccordion />
    </section>
  )
}
