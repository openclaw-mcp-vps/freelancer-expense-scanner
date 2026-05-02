import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Freelancer Expense Scanner — Scan receipts & categorize business expenses',
  description: 'Mobile-first receipt scanner that automatically categorizes expenses for tax purposes with IRS compliance. Built for freelancers and contractors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f5c6ffe1-6673-479b-a551-c1791bfbfd64"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
