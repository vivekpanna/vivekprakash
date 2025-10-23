import type { Metadata } from 'next'
import './globals.css'

const siteTitle = 'vivekprakash.de'
const siteDescription =
  'Personal site of Vivek Prakash featuring projects, articles, and contact information.'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-541db4b9b0c97a9f"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
