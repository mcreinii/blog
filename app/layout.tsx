import type { Metadata } from 'next'
import { Monsieur_La_Doulaise } from 'next/font/google'
import './globals.css'
import NavigationBar from './components/NavigationBar'

const monsieur = Monsieur_La_Doulaise({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-monsieur',
})

export const metadata: Metadata = {
    title: 'mcreinii',
    description: 'A blog to show what I do and who I am.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang='en' className={`${monsieur.variable} h-full antialiased`}>
            <body className='min-h-full font-monsieur'>
                <NavigationBar />
                {children}
            </body>
        </html>
    )
}
