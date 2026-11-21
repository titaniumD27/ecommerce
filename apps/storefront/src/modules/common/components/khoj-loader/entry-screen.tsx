
// // // "use client"

// // // import { useEffect, useState } from "react"
// // // import Image from "next/image"

// // // export default function StorefrontEntry({
// // //   children,
// // // }: {
// // //   children: React.ReactNode
// // // }) {
// // //   const [showSplash, setShowSplash] = useState(true)

// // //   useEffect(() => {
// // //     let timeout: ReturnType<typeof setTimeout>

// // //     const revealStore = () => {
// // //       timeout = setTimeout(() => {
// // //         setShowSplash(false)
// // //       }, 1200)
// // //     }

// // //     if (document.readyState === "complete") {
// // //       revealStore()
// // //     } else {
// // //       window.addEventListener("load", revealStore, { once: true })
// // //     }

// // //     return () => {
// // //       clearTimeout(timeout)
// // //       window.removeEventListener("load", revealStore)
// // //     }
// // //   }, [])

// // //   return (
// // //     <>
// // //       {children}

// // //       {showSplash && (
// // //         <div
// // //           className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F7E7CE]/35 backdrop-blur-[5px]"
// // //           role="status"
// // //           aria-label="Loading KHOJ store"
// // //         >
// // //           <div className="flex flex-col items-center gap-[18px]">
// // //             <Image
// // //               src="/logo2.png"
// // //               alt="KHOJ"
// // //               width={140}
// // //               height={60}
// // //               priority
// // //               className="h-auto w-[120px] object-contain"
// // //             />

// // //             <div className="h-[30px] w-[30px] animate-spin rounded-full border-[4px] border-[#4B0A14]/15 border-t-[#4B0A14]" />
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   )
// // // }


// // "use client"

// // import { useEffect, useState } from "react"

// // export default function StorefrontEntry({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   const [isExiting, setIsExiting] = useState(false)
// //   const [isHidden, setIsHidden] = useState(false)

// //   useEffect(() => {
// //     let startTimeout: ReturnType<typeof setTimeout>
// //     let exitTimeout: ReturnType<typeof setTimeout>

// //     const startIntro = () => {
// //       // Keep the poster visible before opening the storefront
// //       startTimeout = setTimeout(() => {
// //         setIsExiting(true)

// //         // Match this to the CSS transition duration
// //         exitTimeout = setTimeout(() => {
// //           setIsHidden(true)
// //         }, 2000)
// //       }, 2200)
// //     }

// //     if (document.readyState === "complete") {
// //       startIntro()
// //     } else {
// //       window.addEventListener("load", startIntro, { once: true })
// //     }

// //     return () => {
// //       clearTimeout(startTimeout)
// //       clearTimeout(exitTimeout)
// //       window.removeEventListener("load", startIntro)
// //     }
// //   }, [])

// //   return (
// //     <>
// //       {children}

// //       {!isHidden && (
// //         <div
// //           className={`fixed inset-0 z-[99999] overflow-hidden bg-[#F7E7CE] transition-transform duration-[2000ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
// //             isExiting ? "-translate-y-full" : "translate-y-0"
// //           }`}
// //         >
// //           {/* Responsive poster */}
// //           <picture className="absolute inset-0 block h-full w-full">
// //             <source
// //               media="(max-width: 767px)"
// //               srcSet="/mobileposter.png"
// //             />

// //             <img
// //               src="/posters/khoj-desktop.jpg"
// //               alt="KHOJ fashion collection"
// //               className="h-full w-full object-cover"
// //             />
// //           </picture>

// //           {/* Optional readability overlay */}
// //           <div className="absolute inset-0 bg-black/10" />

// //           {/* Editorial typography */}
// //           <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-10 md:p-14">

// //             {/* Top section */}
// //             <div className="flex items-start justify-between">
// //               <p className="text-xs font-semibold tracking-[0.35em] md:text-sm">
// //                 KHOJ
// //               </p>

// //               <p className="text-[9px] tracking-[0.2em] md:text-xs">
// //                 EST. 2026
// //               </p>
// //             </div>

// //             {/* Center section */}
// //             <div className="max-w-3xl">
// //               <p className="mb-3 text-[10px] font-medium tracking-[0.3em] md:mb-5 md:text-xs">
// //                 DISCOVER YOUR STYLE
// //               </p>

// //               <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
// //                 FIND
// //                 <br />
// //                 YOUR
// //                 <br />
// //                 OWN.
// //               </h1>

// //               <p className="mt-5 max-w-[220px] text-xs leading-relaxed tracking-wide md:mt-7 md:text-sm">
// //                 A different perspective on everyday fashion.
// //               </p>
// //             </div>

// //             {/* Bottom section */}
// //             <div className="flex items-end justify-between">
// //               <p className="text-[9px] tracking-[0.25em] md:text-xs">
// //                 CLOTHING • CULTURE • IDENTITY
// //               </p>

// //               <p className="text-[9px] tracking-[0.2em] md:text-xs">
// //                 WELCOME TO KHOJ
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   )
// // }


// "use client"

// import { useEffect, useState } from "react"

// export default function StorefrontEntry({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [isExiting, setIsExiting] = useState(false)
//   const [isHidden, setIsHidden] = useState(false)

//   // Adjust these timings as needed (in milliseconds)
//   const HOLD_DURATION = 1200 // Time the poster stays still before lifting
//   const EXIT_DURATION = 4500 // How slowly the shutter rolls up

//   useEffect(() => {
//     // Lock background scroll while the storefront is closed
//     document.body.style.overflow = "hidden"

//     let startTimeout: ReturnType<typeof setTimeout>
//     let exitTimeout: ReturnType<typeof setTimeout>

//     const startIntro = () => {
//       startTimeout = setTimeout(() => {
//         setIsExiting(true)
//         // Unlock scroll partway through the lift so the site feels alive
//         document.body.style.overflow = ""

//         exitTimeout = setTimeout(() => {
//           setIsHidden(true)
//         }, EXIT_DURATION)
//       }, HOLD_DURATION)
//     }

//     if (document.readyState === "complete") {
//       startIntro()
//     } else {
//       window.addEventListener("load", startIntro, { once: true })
//     }

//     return () => {
//       document.body.style.overflow = ""
//       clearTimeout(startTimeout)
//       clearTimeout(exitTimeout)
//       window.removeEventListener("load", startIntro)
//     }
//   }, [])

//   return (
//     <>
//       {children}

//       {!isHidden && (
//         <div
//           style={{
//             transform: isExiting ? "translate3d(0, -100%, 0)" : "translate3d(0, 0, 0)",
//             transitionProperty: "transform",
//             transitionDuration: `${EXIT_DURATION}ms`,
//             // Heavy, smooth mechanical shutter curve
//             transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
//           }}
//           className="fixed inset-0 z-[99999] overflow-hidden bg-[#F7E7CE] shadow-[0_25px_60px_rgba(0,0,0,0.45)] will-change-transform"
//         >
//           {/* Responsive poster with subtle parallax lift */}
//           <picture
//             style={{
//               transform: isExiting ? "translate3d(0, 12%, 0) scale(1.04)" : "translate3d(0, 0, 0) scale(1)",
//               transitionProperty: "transform",
//               transitionDuration: `${EXIT_DURATION}ms`,
//               transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
//             }}
//             className="absolute inset-0 block h-full w-full will-change-transform"
//           >
//             <source
//               media="(max-width: 767px)"
//               srcSet="/mobileposter.png"
//             />

//             <img
//               src="/pcposter1.png"
//               alt="KHOJ fashion collection"
//               className="h-full w-full object-cover"
//             />
//           </picture>

//           {/* Subtle overlay */}
//           <div className="absolute inset-0 bg-black/15" />

//           {/* Editorial typography */}
//           <div
//             style={{
//               opacity: isExiting ? 0.65 : 1,
//               transform: isExiting ? "translate3d(0, -24px, 0)" : "translate3d(0, 0, 0)",
//               transitionProperty: "opacity, transform",
//               transitionDuration: `${EXIT_DURATION * 0.8}ms`,
//               transitionTimingFunction: "ease-out",
//             }}
//             className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-10 md:p-14"
//           >
//             {/* Top */}
//             <div className="flex items-start justify-between">
//               <p className="text-xs font-semibold tracking-[0.35em] md:text-sm">
//                 KHOJ
//               </p>

//               <p className="text-[9px] tracking-[0.2em] md:text-xs">
//                 EST. 2025
//               </p>
//             </div>

//             {/* Center */}
//             <div className="max-w-3xl">
//               <p className="mb-3 text-[10px] font-medium tracking-[0.3em] md:mb-5 md:text-xs">
//                 DISCOVER YOUR STYLE
//               </p>

//               <h1 className="font-serif md:text-[#4B0A14] text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
//                 FIND
//                 <br />
//                 YOUR
//                 <br />
//                 OWN.
//               </h1>

//               <p className="mt-5 max-w-[220px] text-xs leading-relaxed tracking-wide md:mt-7 md:text-sm">
//                 A different perspective on everyday fashion.
//               </p>
//             </div>

//             {/* Bottom */}
//             <div className="flex text-[#4B0A14] items-end justify-between border-b border-white/20 pb-3">
//               <p className="text-[9px] tracking-[0.25em] md:text-xs">
//                 CLOTHING • CULTURE • IDENTITY
//               </p>

//               <p className="text-[9px] tracking-[0.2em] md:text-xs">
//                 WELCOME TO KHOJ
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }


// top one is accurate

"use client"

import { useEffect, useState } from "react"

export default function StorefrontEntry({
  children,
}: {
  children: React.ReactNode
}) {
  // 👇 Set to `true` to disable during local development testing, `false` for production
  const DISABLE_DURING_DEV = false

  const [isExiting, setIsExiting] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  // Adjust these timings as needed (in milliseconds)
  const HOLD_DURATION = 1200 // Time the poster stays still before lifting
  const EXIT_DURATION = 4500 // How slowly the shutter rolls up

  useEffect(() => {
    if (DISABLE_DURING_DEV) return

    // Check if already seen in this tab session
    const hasSeenInSession = sessionStorage.getItem("khoj_intro_shown")

    if (hasSeenInSession) {
      setIsHidden(true)
      return
    }

    // Show the shutter
    setIsHidden(false)
    document.body.style.overflow = "hidden"

    let startTimeout: ReturnType<typeof setTimeout>
    let exitTimeout: ReturnType<typeof setTimeout>

    const startIntro = () => {
      startTimeout = setTimeout(() => {
        // Save to sessionStorage ONLY once the exit actually begins (fixes React Strict Mode double-render!)
        sessionStorage.setItem("khoj_intro_shown", "true")
        setIsExiting(true)
        document.body.style.overflow = ""

        exitTimeout = setTimeout(() => {
          setIsHidden(true)
        }, EXIT_DURATION)
      }, HOLD_DURATION)
    }

    if (document.readyState === "complete") {
      startIntro()
    } else {
      window.addEventListener("load", startIntro, { once: true })
    }

    return () => {
      document.body.style.overflow = ""
      clearTimeout(startTimeout)
      clearTimeout(exitTimeout)
      window.removeEventListener("load", startIntro)
    }
  }, [DISABLE_DURING_DEV])

  return (
    <>
      {children}

      {!isHidden && (
        <div
          style={{
            transform: isExiting ? "translate3d(0, -100%, 0)" : "translate3d(0, 0, 0)",
            transitionProperty: "transform",
            transitionDuration: `${EXIT_DURATION}ms`,
            // Heavy, smooth mechanical shutter curve
            transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
          }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#F7E7CE] shadow-[0_25px_60px_rgba(0,0,0,0.45)] will-change-transform"
        >
          {/* Responsive poster with subtle parallax lift */}
          <picture
            style={{
              transform: isExiting ? "translate3d(0, 12%, 0) scale(1.04)" : "translate3d(0, 0, 0) scale(1)",
              transitionProperty: "transform",
              transitionDuration: `${EXIT_DURATION}ms`,
              transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
            }}
            className="absolute inset-0 block h-full w-full will-change-transform"
          >
            <source
              media="(max-width: 767px)"
              srcSet="/mobileposter.png"
            />

            <img
              src="/pcposter1.png"
              alt="KHOJ fashion collection"
              className="h-full w-full object-cover"
            />
          </picture>

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Editorial typography */}
          <div
            style={{
              opacity: isExiting ? 0.65 : 1,
              transform: isExiting ? "translate3d(0, -24px, 0)" : "translate3d(0, 0, 0)",
              transitionProperty: "opacity, transform",
              transitionDuration: `${EXIT_DURATION * 0.8}ms`,
              transitionTimingFunction: "ease-out",
            }}
            className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-10 md:p-14"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <p className="text-xs font-semibold tracking-[0.35em] md:text-sm">
                KHOJ
              </p>

              <p className="text-[9px] tracking-[0.2em] md:text-xs">
                EST. 2025
              </p>
            </div>

            {/* Center */}
            <div className="max-w-3xl">
              <p className="mb-3 text-[10px] font-medium tracking-[0.3em] md:mb-5 md:text-xs">
                DISCOVER YOUR STYLE
              </p>

              <h1 className="font-serif md:text-[#4B0A14] text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                FIND
                <br />
                YOUR
                <br />
                OWN.
              </h1>

              <p className="mt-5 max-w-[220px] text-xs leading-relaxed tracking-wide md:mt-7 md:text-sm">
                A different perspective on everyday fashion.
              </p>
            </div>

            {/* Bottom */}
            <div className="flex text-[#4B0A14] items-end justify-between border-b border-white/20 pb-3">
              <p className="text-[9px] tracking-[0.25em] md:text-xs">
                CLOTHING • CULTURE • IDENTITY
              </p>

              <p className="text-[9px] tracking-[0.2em] md:text-xs">
                WELCOME TO KHOJ
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}