export const metadata = {
  title: 'Example'
}

export default function Example() {
  return (
    <section className='container mx-auto flex max-w-[980px] flex-col items-center grow gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
      <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
        Example Page
      </h1>
      <p className='max-w-[750px] mx-auto text-center text-lg text-muted-foreground sm:text-xl text-pretty'>
        This is an example page.
      </p>
    </section>
  )
}
