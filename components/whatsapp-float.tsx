"use client"

// Floating WhatsApp button — fixed bottom-right on every page.
// WhatsApp green for instant recognition, with a gold ring + soft pulse to
// sit comfortably inside the cinematic, gold-on-dark brand.

const WHATSAPP_HREF =
  "https://wa.me/420792908296?text=" +
  encodeURIComponent("Hello Radu, I would like to learn more about the Path of Initiation.")

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Radu on WhatsApp"
      className="group fixed bottom-6 right-6 z-[60] flex items-center"
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
    >
      {/* desktop hover label */}
      <span className="pointer-events-none mr-3 hidden translate-x-2 whitespace-nowrap rounded-full border border-primary/30 bg-background/90 px-4 py-2 font-serif text-sm tracking-wide text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:inline-block">
        Chat with Radu
      </span>

      {/* bubble */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.5)] ring-2 ring-primary/40 transition-transform duration-300 group-hover:scale-105">
        {/* gentle attention pulse (disabled for reduced-motion via globals) */}
        <span
          aria-hidden
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 motion-reduce:hidden"
          style={{ animationDuration: "2.5s" }}
        />
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden focusable="false">
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.258.59 4.46 1.71 6.402L3.2 28.8l6.57-1.69a12.74 12.74 0 0 0 6.234 1.588h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.052A12.71 12.71 0 0 0 16.004 3.2Zm0 23.36h-.004a10.57 10.57 0 0 1-5.385-1.474l-.386-.23-4.003 1.03 1.068-3.903-.252-.4a10.55 10.55 0 0 1-1.617-5.613c0-5.86 4.768-10.627 10.633-10.627 2.84 0 5.508 1.107 7.515 3.117a10.56 10.56 0 0 1 3.112 7.518c0 5.86-4.768 10.628-10.62 10.628l-.554-.143Zm5.83-7.957c-.32-.16-1.89-.932-2.183-1.04-.293-.106-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.586-.95-.847-1.59-1.893-1.777-2.213-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.534.107-.213.054-.4-.026-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.823.763.33 1.358.527 1.822.674.766.244 1.463.21 2.014.127.614-.092 1.89-.773 2.156-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
        </svg>
      </span>
    </a>
  )
}
