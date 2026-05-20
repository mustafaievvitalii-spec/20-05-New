import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DocExpert — Дистанційне відновлення посвідчення водія',
  description: 'Юридичний супровід для українців за кордоном: верифікація посвідчення, внесення в Дію, перевипуск та доставка в Європу.',
  openGraph: {
    title: 'DocExpert — Відновлення посвідчення водія дистанційно',
    description: 'Професійний супровід процедур через державні реєстри для українців за кордоном.',
    type: 'website',
    locale: 'uk_UA'
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
