import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const geistSans = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'mcreinii',
  description: 'A blog to show what I do and who I am.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${geistSans.className} h-full antialiased`}>
      <body className='min-h-full'>{children}</body>
    </html>
  )
}
