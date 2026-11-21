// // import { Github } from "@medusajs/icons";
// // import { Button, Heading } from "@modules/common/components/ui";
// // const Hero = () => {
// //   return (
// //     <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
// //       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
// //         <span>
// //           <Heading
// //             level="h1"
// //             className="text-3xl leading-10 text-ui-fg-base font-normal"
// //           >
// //             Ecommerce Starter Template
// //           </Heading>
// //           <Heading
// //             level="h2"
// //             className="text-3xl leading-10 text-ui-fg-subtle font-normal"
// //           >
// //             Powered by Medusa and Next.js
// //           </Heading>
// //         </span>
// //         <a href="https://github.com/medusajs/dtc-starter" target="_blank">
// //           <Button variant="secondary">
// //             View on GitHub <Github />
// //           </Button>
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;


// "use client"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"

// type HeroProps = {
//   desktopVideoSrc?: string
//   mobileVideoSrc?: string
//   desktopPoster?: string
//   mobilePoster?: string
// }

// export default function Hero({
//   desktopVideoSrc = "/videos/hero-desktop.mp4",
//   mobileVideoSrc = "/video.mp4",
//   desktopPoster = "/images/hero-desktop-poster.jpg",
//   mobilePoster = "/images/hero-mobile-poster.jpg",
// }: HeroProps) {
//   return (
//     <section
//       className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden bg-neutral-950 select-none"
//       aria-label="Featured collection"
//     >
//       {/* Desktop Video (md and larger: 768px+) */}
//       <video
//         className="hidden md:block absolute inset-0 w-full h-full object-cover"
//         src={desktopVideoSrc}
//         poster={desktopPoster}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="metadata"
//       />

//       {/* Mobile Video (smaller than 768px) */}
//       <video
//         className="block md:hidden absolute inset-0 w-full h-full object-cover"
//         src={mobileVideoSrc}
//         poster={mobilePoster}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="metadata"
//       />

//       {/* Subtle Top & Bottom Gradient Scrim (Keeps transparent navbar & text readable) */}
//       <div
//         className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/55 via-black/15 to-black/60"
//         aria-hidden="true"
//       />

//       {/* Hero Editorial Overlay Content */}
//       <div className="relative z-10 content-container h-full flex flex-col justify-end pb-14 md:pb-20 px-6 md:px-10">
//         <div className="max-w-2xl space-y-4">
//           <p className="font-serif text-xs md:text-sm uppercase tracking-[0.25em] text-white/90 font-semibold">
//             New Collection
//           </p>

//           <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
//             Crafted for Timeless Elegance
//           </h1>

//           <p className="font-serif text-sm md:text-base text-white/85 max-w-md leading-relaxed">
//             Discover heritage silhouettes reimagined with modern sophistication.
//           </p>

//           <div className="pt-3 flex flex-wrap items-center gap-4">
//             <LocalizedClientLink
//               href="/store"
//               className="inline-flex items-center justify-center px-8 py-3.5 bg-[#800020] text-white font-serif text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#660019] transition-colors duration-300"
//             >
//               Explore Store
//             </LocalizedClientLink>

//             <LocalizedClientLink
//               href="/collections"
//               className="inline-flex items-center justify-center px-8 py-3.5 bg-white/90 backdrop-blur-sm text-[#800020] font-serif text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300"
//             >
//               View Lookbook
//             </LocalizedClientLink>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

type HeroProps = {
  desktopVideoSrc?: string
  mobileVideoSrc?: string
  desktopPoster?: string
  mobilePoster?: string
}

export default function Hero({
  desktopVideoSrc = "/v2.mp4",
  mobileVideoSrc = "/video.mp4",
  desktopPoster = "/images/hero-desktop-poster.jpg",
  mobilePoster = "/images/hero-mobile-poster.jpg",
}: HeroProps) {
  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden bg-neutral-950 select-none"
      aria-label="Featured collection"
    >
      {/* Desktop Video (md and larger: 768px+) */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src={desktopVideoSrc}
        poster={desktopPoster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Mobile Video (smaller than 768px) */}
      <video
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
        src={mobileVideoSrc}
        poster={mobilePoster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Subtle Top & Bottom Gradient Scrim */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/50 via-transparent to-black/65"
        aria-hidden="true"
      />

      {/* Minimal Editorial Bottom Bar */}
      {/* <div className="relative z-10 content-container h-full flex flex-col justify-end pb-12 md:pb-16 px-6 md:px-10">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/25 pt-6">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-none">
            The Heritage Edit
          </h1>

          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center gap-3 text-white font-serif text-xs md:text-sm uppercase tracking-[0.25em] font-semibold border-b border-white pb-1.5 hover:text-[#f0d5db] hover:border-[#f0d5db] transition-colors duration-300 w-fit"
          >
            <span>Discover Collection</span>
            <span aria-hidden="true">→</span>
          </LocalizedClientLink>
        </div>
      </div> */}
    </section>
  )
}