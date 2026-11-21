// "use client"

// import Link from "next/link"
// import type { CSSProperties } from "react"
// import { useEffect, useRef, useState } from "react"
// import type { SearchClient } from "instantsearch.js"
// import { Configure, InstantSearch, useHits, useInstantSearch } from "react-instantsearch"

// import { PRODUCT_INDEX_NAME, searchClient } from "../../../../lib/search-client"

// type ProductHit = {
//   objectID?: string
//   title?: string
//   handle?: string
//   thumbnail?: string | null
//   [key: string]: unknown
// }

// type ProductGridProps = {
//   currencyCode: string
// }

// type ProductCardsProps = {
//   isMobile: boolean
//   isVisible: boolean
// }

// function ProductCards({ isMobile, isVisible }: ProductCardsProps) {
//   const { hits } = useHits<ProductHit>()
//   const { status, error } = useInstantSearch()
//   const isLoading = status === "loading" || status === "stalled"
//   const products = hits.filter((hit) => Boolean(hit.handle && hit.thumbnail)).slice(0, 5)

//   const mosaicStyle: CSSProperties = {
//     display: "grid",
//     width: "100%",
//     gridTemplateColumns: isMobile
//       ? "minmax(0, 2fr) minmax(0, 1fr)"
//       : "minmax(0, 2fr) repeat(2, minmax(0, 1fr))",
//     gridTemplateAreas: isMobile
//       ? '"hero small-1" "hero small-2"'
//       : '"hero small-1 small-2" "hero small-3 small-4"',
//     gap: isMobile ? 3 : 4,
//     alignItems: "start",
//   }

//   if (error) {
//     return (
//       <div
//         role="alert"
//         style={{ padding: "32px 16px", color: "#77766f", textAlign: "center", fontFamily: "Arial, sans-serif" }}
//       >
//         Products couldn’t be loaded right now. Please try again in a moment.
//       </div>
//     )
//   }

//   if (isLoading && products.length === 0) {
//     const skeletonCount = isMobile ? 3 : 5
//     return (
//       <div style={mosaicStyle} aria-label="Loading products" aria-busy="true">
//         {Array.from({ length: skeletonCount }, (_, index) => (
//           <div
//             key={index}
//             style={{
//               gridArea: index === 0 ? "hero" : `small-${index}`,
//               aspectRatio: "1 / 1",
//               width: "100%",
//               backgroundColor: "#e9eae8",
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "translateY(0)" : "translateY(16px)",
//               transition: `opacity 600ms ease ${index * 55}ms, transform 600ms ease ${index * 55}ms`,
//             }}
//           />
//         ))}
//       </div>
//     )
//   }

//   if (products.length === 0) {
//     return (
//       <div
//         role="status"
//         style={{ padding: "32px 16px", color: "#77766f", textAlign: "center", fontFamily: "Arial, sans-serif" }}
//       >
//         No products are available in this collection yet.
//       </div>
//     )
//   }

//   return (
//     <div style={mosaicStyle}>
//       {products.map((hit, index) => {
//         const area = index === 0 ? "hero" : `small-${index}`
//         const cardStyle: CSSProperties = {
//           gridArea: area,
//           minWidth: 0,
//           width: "100%",
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? "translateY(0)" : "translateY(18px)",
//           transition: `opacity 650ms ease ${index * 55}ms, transform 650ms cubic-bezier(.2,.7,.2,1) ${index * 55}ms`,
//           display: isMobile && index > 2 ? "none" : "block",
//         }

//         return (
//           <ProductTile
//             key={hit.objectID ?? hit.handle ?? index}
//             hit={hit}
//             cardStyle={cardStyle}
//           />
//         )
//       })}
//     </div>
//   )
// }

// type ProductTileProps = {
//   hit: ProductHit
//   cardStyle: CSSProperties
// }

// function ProductTile({ hit, cardStyle }: ProductTileProps) {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <div style={cardStyle}>
//       <Link
//         href={`/products/${hit.handle}`}
//         aria-label={`View ${hit.title ?? "product"}`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onFocus={() => setIsHovered(true)}
//         onBlur={() => setIsHovered(false)}
//         style={{
//           display: "block",
//           width: "100%",
//           overflow: "hidden",
//           outlineOffset: "-2px",
//         }}
//       >
//         <div
//           style={{
//             position: "relative",
//             width: "100%",
//             aspectRatio: "1 / 1",
//             overflow: "hidden",
//             backgroundColor: "#e9eae8",
//             borderRadius: 0,
//           }}
//         >
//           <img
//             src={hit.thumbnail ?? ""}
//             alt={hit.title ?? "Clothing product"}
//             loading="eager"
//             decoding="async"
//             style={{
//               display: "block",
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               objectPosition: "center",
//               padding: 0,
//               margin: 0,
//               border: 0,
//               borderRadius: 0,
//               transform: isHovered ? "scale(1.025)" : "scale(1)",
//               transition: "transform 700ms cubic-bezier(.2,.65,.25,1)",
//             }}
//           />
//         </div>
//       </Link>
//     </div>
//   )
// }

// export default function ProductGrid(_props: ProductGridProps) {
//   const sectionRef = useRef<HTMLElement | null>(null)
//   const [isVisible, setIsVisible] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 767px)")
//     const updateLayout = () => setIsMobile(mediaQuery.matches)

//     updateLayout()
//     mediaQuery.addEventListener("change", updateLayout)
//     return () => mediaQuery.removeEventListener("change", updateLayout)
//   }, [])

//   useEffect(() => {
//     const section = sectionRef.current
//     if (!section) return

//     if (!("IntersectionObserver" in window)) {
//       setIsVisible(true)
//       return
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//           observer.disconnect()
//         }
//       },
//       { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
//     )

//     observer.observe(section)
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       aria-labelledby="khoj-collection-title"
//       style={{
//         width: "100%",
//         padding: "clamp(32px, 5vw, 80px) 0",
//         color: "#171715",
//         backgroundColor: "#ffffff",
//         overflow: "hidden",
//       }}
//     >
//       <div style={{ width: "100%", margin: "0 auto" }}>
//         <header
//           style={{
//             display: "flex",
//             alignItems: "flex-end",
//             justifyContent: "space-between",
//             padding: "0 clamp(12px, 2.4vw, 32px) clamp(14px, 1.8vw, 26px)",
//             marginBottom: "clamp(8px, 1vw, 14px)",
//           }}
//         >
//           <h2
//             id="khoj-collection-title"
//             style={{
//               margin: 0,
//               fontFamily: "Arial, Helvetica Neue, sans-serif",
//               fontSize: "clamp(22px, 3.1vw, 50px)",
//               lineHeight: 0.96,
//               fontWeight: 850,
//               letterSpacing: "-0.065em",
//             }}
//           >
//             БАЗОВАЯ КОЛЛЕКЦИЯ
//           </h2>
//         </header>

//         <InstantSearch
//           searchClient={searchClient as unknown as SearchClient}
//           indexName={PRODUCT_INDEX_NAME}
//         >
//           <Configure hitsPerPage={5} />
//           <ProductCards isMobile={isMobile} isVisible={isVisible} />
//         </InstantSearch>
//       </div>
//     </section>
//   )
// }

const MOBILE_POSTER = "/posterr2.jpg"
const LANDSCAPE_POSTER = "/posterr1.jpg"

export default function ProductPoster() {
  return (
    <picture className="m-0 block w-full p-0">
      {/* Used on landscape screens 768px and wider */}
      <source
        media="(min-width: 768px) and (orientation: landscape)"
        srcSet={LANDSCAPE_POSTER}
      />

      {/* Used on screens narrower than 768px */}
      <source
        media="(max-width: 767px)"
        srcSet={MOBILE_POSTER}
      />

      {/* Fallback image */}
      <img
        src={LANDSCAPE_POSTER}
        alt="KHOJ clothing collection poster"
        loading="lazy"
        decoding="async"
        className="m-0 block h-auto w-full rounded-none border-0 object-contain p-0"
      />
    </picture>
  )
}
