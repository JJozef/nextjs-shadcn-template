import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarterAccordion } from '@/components/starter-accordion'
import { GitHubIcon, TwitterIcon } from '@/components/ui/icons'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='container mx-auto flex max-w-[980px] flex-col items-center grow gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
      <Badge className='text-sm hover:scale-105 transition select-none' variant='secondary'>
        🎉 v1.0.0
      </Badge>
      <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
        Next.js + shadcn Starter
      </h1>
      <p className='max-w-[750px] mx-auto text-center text-lg text-muted-foreground sm:text-xl text-pretty'>
        Begin your project with built-in GitHub Actions, Husky for commits, and
        Eslint/Prettier for code quality. Ready to kickstart your development
        journey!
      </p>
      <div className='flex w-full items-center justify-center space-x-4 py-4 md:pb-10'>
        <Button className='gap-2' asChild>
          <Link
            href='https://github.com/JJozef/nextjs-shadcn-starter'
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
