import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ItemProvider from '@/context/ItemContext'
import LimitButton from '@/components/LimitButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pocki inmobiliario',
  description: 'Pocki ahora te ayuda a encontrar la vivienda de tus sueños',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ItemProvider>
          {children}
        </ItemProvider>
        <LimitButton />
      </body>
    </html>
  )
}
