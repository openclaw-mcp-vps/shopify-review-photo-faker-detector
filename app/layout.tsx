import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReviewShield – Detect Fake Review Photos on Shopify',
  description: 'AI-powered tool that scans Shopify store reviews to identify fake stock photos, duplicate images, and suspicious review patterns.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="398a0d26-a1e7-4641-9381-aca8fa353db2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
