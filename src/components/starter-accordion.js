import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export function StarterAccordion() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>How to use?</AccordionTrigger>
        <AccordionContent>
          <ul className='list-inside list-disc pl-4'>
            <li>
              Go to the GitHub repository and click on the "Use this template".
            </li>
            <li>
              (Optional) - Just clone the repository and follow the instructions
              in the README.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>What does it contain?</AccordionTrigger>
        <AccordionContent>
          <ul className='list-inside list-disc pl-4'>
            <li>Next.js 14</li>
            <li>shadcn components</li>
            <li>GitHub Actions</li>
            <li>Husky</li>
            <li>Eslint</li>
            <li>Prettier</li>
            <li>TailwindCss</li>
            <li>
              Fonts
              <ul className='list-inside list-decimal pl-6'>
                <li>Geist Font</li>
                <li>Inter</li>
              </ul>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
