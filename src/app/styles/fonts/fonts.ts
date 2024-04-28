import { Figtree } from 'next/font/google'
import localFont from 'next/font/local'

export const figtree = Figtree({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '700', '800', '900'],
})

export const yekan = localFont({
  src: [
    {
      path: '../../../../public/fonts/BYekan+.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/BYekan_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-yekan',
  adjustFontFallback: 'Arial',
})