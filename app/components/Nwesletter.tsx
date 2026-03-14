"use client";

import Script from "next/script";

export default function NewsletterEmbedded() {
  return (
    <>
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2052347');
        `}
      </Script>

      <section className="w-full bg-[#0F2137] py-20 px-6">
        <div className="max-w-xl mx-auto flex flex-col gap-8">

          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-[2px] bg-[#0B8288]" />
              <span className="text-[#0B8288] text-xs font-semibold tracking-[0.2em] uppercase">
                Stay in the loop
              </span>
            </div>

            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-white leading-tight tracking-tight">
              Get free resources &<br />
              <span className="text-[#0B8288]">early access</span> to new books.
            </h2>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Join thousands of healthcare professionals and parents who receive practical guides, tips, and exclusive offers — no spam, ever.
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-white/10" />

          {/* MailerLite form */}
          <div className="ml-embedded" data-form="TIyioo" />

          {/* Trust note */}
          <p className="text-white/20 text-xs">
            Unsubscribe anytime. We respect your privacy.
          </p>
          

        </div>
      </section>
    </>
  );
}