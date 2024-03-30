import { Inter as FontSans } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'

export const fontGeinstSans = GeistSans

export const fontInterSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})
