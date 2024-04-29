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
      path: '../../../../public/fonts/IRANSansXFaNum-Light.woff2',
      weight: '200',
      style: 'light',
    },
    {
      path: '../../../../public/fonts/IRANSansXFaNum-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/IRANSansXFaNum-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../../../public/fonts/IRANSansXFaNum-Bold.woff2',
      weight: '800',
      style: 'extrabold',
    },
    {
      path: '../../../../public/fonts/IRANSansXFaNum-ExtraBold.woff2',
      weight: '900',
      style: 'black',
    },
  ],
  variable: '--font-yekan',
  adjustFontFallback: 'Arial',
})
