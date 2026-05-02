export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-20 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          IRS-Compliant · AI-Powered
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Scan Receipts &amp;<br />
          <span className="text-[#58a6ff]">Categorize Expenses</span> Instantly
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Snap a photo of any receipt. Our AI reads it, categorizes it for taxes, and keeps your books IRS-ready — built for freelancers and contractors.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            ['📷', 'Snap Receipt'],
            ['🤖', 'AI Categorizes'],
            ['📊', 'Tax-Ready Report'],
          ].map(([icon, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-xs text-[#8b949e] font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited receipt scans',
              'AI expense categorization',
              'IRS Schedule C categories',
              'CSV &amp; PDF export',
              'Real-time sync across devices',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Free
          </a>
          <p className="text-xs text-[#8b949e] mt-3">7-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How accurate is the receipt scanning?',
              a: 'We use Tesseract.js for client-side OCR combined with OpenAI to extract and verify data. Accuracy exceeds 95% on clear photos, and you can always manually correct any field before saving.',
            },
            {
              q: 'Are the expense categories IRS-compliant?',
              a: 'Yes. All categories map directly to IRS Schedule C line items (advertising, travel, meals, home office, etc.), making tax filing straightforward for freelancers and self-employed contractors.',
            },
            {
              q: 'Is my financial data secure?',
              a: 'OCR processing happens entirely in your browser — your receipt images never leave your device. Only the extracted text and amounts are stored in our encrypted Supabase database.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Freelancer Expense Scanner · Built for independent workers
      </footer>
    </main>
  )
}
