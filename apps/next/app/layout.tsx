import type { Metadata } from 'next'
import { NextTamaguiProvider } from 'app/provider/NextTamaguiProvider'

export const metadata: Metadata = {
  title: 'ReLoot — Новый шанс для хороших вещей',
  description: 'Помогаем магазинам и кафе продавать товары с уценкой, а покупателям — экономить до 70% без потери качества. Экологично. Выгодно. Умно.',
  icons: '/favicon.ico',
  keywords: ['уценка', 'скидки', 'экономия', 'экология', 'foodtech', 'FMCG', 'магазины', 'кафе'],
  openGraph: {
    title: 'ReLoot — Новый шанс для хороших вещей',
    description: 'Экономия до 70% на качественных товарах. Экологично и выгодно.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // You can use `suppressHydrationWarning` to avoid the warning about mismatched content during hydration in dev mode
    <html lang="ru" suppressHydrationWarning>
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  )
}
