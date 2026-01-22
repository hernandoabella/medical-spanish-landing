"use client";

import Script from "next/script";

export default function NewsletterEmbedded() {
  return (
    <>
      <Script
        id="mailerlite-universal"
        strategy="afterInteractive"
      >
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2052347');
        `}
      </Script>

      {/* Contenedor principal con overflow-hidden para seguridad extra */}
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
        
        {/* Contenedor del formulario con un ancho máximo controlado */}
        <div className="w-full max-w-xl mx-auto">
          <div 
            className="ml-embedded" 
            data-form="TIyioo"
          ></div>
        </div>
      </section>

      <style jsx global>{`
        /* 1. Eliminamos cualquier scroll horizontal */
        body {
          overflow-x: hidden;
          background: #0B316D;
        }

        /* 2. Forzamos que el formulario sea responsive y no rompa el ancho */
        .ml-embedded, 
        .ml-subscribe-form, 
        .ml-form-embedBody, 
        .ml-form-embedContainer {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto !important;
        }

        /* 3. Agrandamos la letra y elementos SIN usar scale */
        /* Título */
        .ml-form-embedBody .ml-form-embedContent h4 {
           font-size: 2.5rem !important;
           font-weight: 900 !important;
           line-height: 1.2 !important;
           margin-bottom: 1rem !important;
           
        }

        /* Inputs (Letra grande y padding) */
        .ml-form-embedBody .ml-form-fieldRow input {
          font-size: 1.25rem !important; 
          border-radius: 12px !important;
          height: auto !important;
        }

        /* Botón (Grande y Awesome) */
        .ml-form-embedBody .ml-form-embedSubmit button {
          font-size: 1.25rem !important;
          font-weight: 800 !important;
          padding: 1.25rem !important;
          height: auto !important;
          border-radius: 12px !important;
          background-color: #1635b9 !important;
          transition: transform 0.2s ease !important;
        }

        .ml-form-embedBody .ml-form-embedSubmit button:hover {
          transform: translateY(-2px) !important;
        }

        /* 4. Ajustes para móvil */
        @media (max-width: 768px) {
          .ml-form-embedBody .ml-form-embedContent h4 {
            font-size: 1.8rem !important;
          }
          .ml-form-embedBody .ml-form-fieldRow input,
          .ml-form-embedBody .ml-form-embedSubmit button {
            font-size: 1.1rem !important;
            padding: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}