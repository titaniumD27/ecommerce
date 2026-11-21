// // // "use client"

// // // import Link from "next/link"
// // // import { useEffect, useRef, useState } from "react"
// // // import type { SearchClient } from "instantsearch.js"
// // // import { Configure, InstantSearch, useHits, useInstantSearch } from "react-instantsearch"

// // // import { PRODUCT_INDEX_NAME, searchClient } from "../../../../lib/search-client"

// // // type ProductHit = {
// // //   objectID?: string
// // //   title?: string
// // //   handle?: string
// // //   thumbnail?: string | null
// // //   min_price?: number | string | null
// // //   max_price?: number | string | null
// // //   original_price?: number | string | null
// // //   on_sale?: boolean
// // //   [key: string]: unknown
// // // }

// // // type ProductGridProps = {
// // //   /** The active Medusa region currency, e.g. "eur" or "usd". */
// // //   currencyCode: string
// // // }

// // // function amount(value: unknown): number | null {
// // //   if (typeof value === "number" && Number.isFinite(value)) return value
// // //   if (typeof value === "string" && value.trim() !== "") {
// // //     const parsed = Number(value)
// // //     if (Number.isFinite(parsed)) return parsed
// // //   }
// // //   return null
// // // }

// // // function getPrice(hit: ProductHit, currencyCode: string): number | null {
// // //   const currencyField = `min_price_${currencyCode.toLowerCase()}`
// // //   return amount(hit[currencyField]) ?? amount(hit.min_price)
// // // }

// // // function formatPrice(value: number, currencyCode: string): string {
// // //   const currency = currencyCode.toUpperCase()
// // //   try {
// // //     return new Intl.NumberFormat(undefined, {
// // //       style: "currency",
// // //       currency,
// // //       maximumFractionDigits: 2,
// // //     }).format(value)
// // //   } catch {
// // //     return `${currency} ${value.toFixed(2)}`
// // //   }
// // // }

// // // function ProductCards({ currencyCode }: ProductGridProps) {
// // //   const { hits } = useHits<ProductHit>()
// // //   const { status, error } = useInstantSearch()
// // //   const isLoading = status === "loading" || status === "stalled"
// // //   const products = hits.filter((hit) => Boolean(hit.handle && hit.thumbnail))

// // //   if (error) {
// // //     return (
// // //       <div className="khoj-grid-message" role="alert">
// // //         Products couldn’t be loaded right now. Please try again in a moment.
// // //       </div>
// // //     )
// // //   }

// // //   if (isLoading && products.length === 0) {
// // //     return (
// // //       <div className="khoj-grid" aria-label="Loading products" aria-busy="true">
// // //         {Array.from({ length: 10 }, (_, index) => (
// // //           <div className="khoj-card-skeleton" key={index}>
// // //             <div className="khoj-skeleton-image" />
// // //             <div className="khoj-skeleton-line" />
// // //             <div className="khoj-skeleton-line khoj-skeleton-line-short" />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     )
// // //   }

// // //   if (products.length === 0) {
// // //     return (
// // //       <div className="khoj-grid-message" role="status">
// // //         No products are available in this collection yet.
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div className="khoj-grid">
// // //       {products.map((hit, index) => {
// // //         const price = getPrice(hit, currencyCode)
// // //         const originalPrice = amount(hit.original_price)
// // //         const showSalePrice = Boolean(
// // //           hit.on_sale && price !== null && originalPrice !== null && originalPrice > price
// // //         )
// // //         const maxPrice = amount(hit.max_price)
// // //         const hasPriceRange = !showSalePrice && price !== null && maxPrice !== null && maxPrice > price

// // //         return (
// // //           <article
// // //             className="khoj-product-card"
// // //             key={hit.objectID ?? hit.handle ?? index}
// // //             style={{ "--card-index": index } as { "--card-index": number }}
// // //           >
// // //             <Link
// // //               className="khoj-product-link"
// // //               href={`/products/${hit.handle}`}
// // //               aria-label={`View ${hit.title ?? "product"}`}
// // //             >
// // //               <div className="khoj-product-image-wrap">
// // //                 {/* This is the real Medusa thumbnail URL returned by the existing search index. */}
// // //                 <img
// // //                   className="khoj-product-image"
// // //                   src={hit.thumbnail ?? ""}
// // //                   alt={hit.title ?? ""}
// // //                   loading={index < 5 ? "eager" : "lazy"}
// // //                   decoding="async"
// // //                 />
// // //                 {showSalePrice && <span className="khoj-sale-label">Special price</span>}
// // //               </div>
// // //               <div className="khoj-product-meta">
// // //                 <h3 className="khoj-product-title">{hit.title}</h3>
// // //                 <div className="khoj-price-line">
// // //                   {showSalePrice && originalPrice !== null && (
// // //                     <span className="khoj-original-price">
// // //                       {formatPrice(originalPrice, currencyCode)}
// // //                     </span>
// // //                   )}
// // //                   <span className={showSalePrice ? "khoj-current-price khoj-current-price-sale" : "khoj-current-price"}>
// // //                     {price === null
// // //                       ? "Price unavailable"
// // //                       : hasPriceRange && maxPrice !== null
// // //                         ? `${formatPrice(price, currencyCode)} – ${formatPrice(maxPrice, currencyCode)}`
// // //                         : formatPrice(price, currencyCode)}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </Link>
// // //           </article>
// // //         )
// // //       })}
// // //     </div>
// // //   )
// // // }

// // // export default function ProductGrid({ currencyCode }: ProductGridProps) {
// // //   const sectionRef = useRef<HTMLElement | null>(null)
// // //   const [isVisible, setIsVisible] = useState(false)

// // //   useEffect(() => {
// // //     const section = sectionRef.current
// // //     if (!section) return

// // //     if (!("IntersectionObserver" in window)) {
// // //       setIsVisible(true)
// // //       return
// // //     }

// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setIsVisible(true)
// // //           observer.disconnect()
// // //         }
// // //       },
// // //       { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
// // //     )

// // //     observer.observe(section)
// // //     return () => observer.disconnect()
// // //   }, [])

// // //   return (
// // //     <section
// // //       ref={sectionRef}
// // //       className={`khoj-collection${isVisible ? " is-visible" : ""}`}
// // //       aria-labelledby="khoj-collection-title"
// // //     >
// // //       <div className="khoj-collection-inner">
// // //         <header className="khoj-collection-heading">
// // //           <div>
// // //             <p className="khoj-eyebrow">KHOJ / SEASONAL EDIT</p>
// // //             <h2 id="khoj-collection-title">БАЗОВАЯ КОЛЛЕКЦИЯ</h2>
// // //           </div>
// // //           <span className="khoj-heading-index" aria-hidden="true">01 — 10</span>
// // //         </header>

// // //         <InstantSearch
// // //           searchClient={searchClient as unknown as SearchClient}
// // //           indexName={PRODUCT_INDEX_NAME}
// // //         >
// // //           <Configure hitsPerPage={10} />
// // //           <ProductCards currencyCode={currencyCode} />
// // //         </InstantSearch>

// // //         <style>{`
// // //           .khoj-collection {
// // //             --khoj-ink: #171715;
// // //             --khoj-muted: #77766f;
// // //             --khoj-paper: #f1f0ec;
// // //             --khoj-line: rgba(23, 23, 21, .14);
// // //             width: 100%;
// // //             padding: clamp(3.25rem, 7vw, 7rem) clamp(1rem, 4.2vw, 4.5rem);
// // //             color: var(--khoj-ink);
// // //             background: #fff;
// // //           }
// // //           .khoj-collection-inner { width: min(100%, 1680px); margin: 0 auto; }
// // //           .khoj-collection-heading {
// // //             display: flex;
// // //             align-items: flex-end;
// // //             justify-content: space-between;
// // //             gap: 1rem;
// // //             padding-bottom: clamp(1.25rem, 2vw, 2rem);
// // //             border-bottom: 1px solid var(--khoj-line);
// // //             margin-bottom: clamp(1.1rem, 2vw, 1.75rem);
// // //             opacity: 0;
// // //             transform: translateY(18px);
// // //             transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1);
// // //           }
// // //           .khoj-collection.is-visible .khoj-collection-heading { opacity: 1; transform: translateY(0); }
// // //           .khoj-eyebrow {
// // //             margin: 0 0 .58rem;
// // //             color: var(--khoj-muted);
// // //             font: 600 .62rem/1.2 Arial, sans-serif;
// // //             letter-spacing: .17em;
// // //             text-transform: uppercase;
// // //           }
// // //           .khoj-collection-heading h2 {
// // //             margin: 0;
// // //             font-family: var(--font-heading, "Arial", "Helvetica Neue", sans-serif);
// // //             font-size: clamp(1.45rem, 3.4vw, 3.35rem);
// // //             line-height: .96;
// // //             font-weight: 850;
// // //             letter-spacing: -.065em;
// // //           }
// // //           .khoj-heading-index {
// // //             flex: 0 0 auto;
// // //             padding-bottom: .16rem;
// // //             color: var(--khoj-muted);
// // //             font: 500 .67rem/1 Arial, sans-serif;
// // //             letter-spacing: .09em;
// // //           }
// // //           .khoj-grid {
// // //             display: grid;
// // //             grid-template-columns: repeat(3, minmax(0, 1fr));
// // //             gap: clamp(.45rem, 1.2vw, 1.1rem);
// // //           }
// // //           .khoj-product-card {
// // //             min-width: 0;
// // //             opacity: 0;
// // //             transform: translateY(22px);
// // //             transition: opacity .65s ease, transform .65s cubic-bezier(.2,.7,.2,1);
// // //             transition-delay: calc(var(--card-index, 0) * 55ms);
// // //           }
// // //           .khoj-collection.is-visible .khoj-product-card { opacity: 1; transform: translateY(0); }
// // //           .khoj-product-link { display: block; color: inherit; text-decoration: none; }
// // //           .khoj-product-image-wrap {
// // //             position: relative;
// // //             overflow: hidden;
// // //             aspect-ratio: 4 / 5;
// // //             background: var(--khoj-paper);
// // //           }
// // //           .khoj-product-image {
// // //             display: block;
// // //             width: 100%;
// // //             height: 100%;
// // //             object-fit: cover;
// // //             transition: transform .8s cubic-bezier(.2,.65,.25,1);
// // //           }
// // //           @media (hover: hover) and (pointer: fine) {
// // //             .khoj-product-link:hover .khoj-product-image,
// // //             .khoj-product-link:focus-visible .khoj-product-image { transform: scale(1.035); }
// // //           }
// // //           .khoj-product-link:focus-visible { outline: 2px solid var(--khoj-ink); outline-offset: 4px; }
// // //           .khoj-sale-label {
// // //             position: absolute;
// // //             top: .65rem;
// // //             left: .65rem;
// // //             padding: .4rem .52rem;
// // //             color: var(--khoj-ink);
// // //             background: rgba(255,255,255,.88);
// // //             font: 600 .58rem/1 Arial, sans-serif;
// // //             letter-spacing: .07em;
// // //             text-transform: uppercase;
// // //           }
// // //           .khoj-product-meta { display: flex; flex-direction: column; gap: .42rem; padding: .7rem 0 0; }
// // //           .khoj-product-title {
// // //             overflow: hidden;
// // //             margin: 0;
// // //             font: 600 clamp(.68rem, .88vw, .84rem)/1.35 Arial, sans-serif;
// // //             letter-spacing: -.015em;
// // //             text-overflow: ellipsis;
// // //             white-space: nowrap;
// // //           }
// // //           .khoj-price-line { display: flex; flex-wrap: wrap; align-items: baseline; gap: .42rem; }
// // //           .khoj-current-price, .khoj-original-price { font: 500 clamp(.64rem, .8vw, .77rem)/1.35 Arial, sans-serif; }
// // //           .khoj-current-price-sale { color: #8c392e; }
// // //           .khoj-original-price { color: var(--khoj-muted); text-decoration: line-through; }
// // //           .khoj-grid-message {
// // //             padding: 3rem 1rem;
// // //             border: 1px solid var(--khoj-line);
// // //             color: var(--khoj-muted);
// // //             font: 500 .9rem/1.5 Arial, sans-serif;
// // //             text-align: center;
// // //           }
// // //           .khoj-card-skeleton { min-width: 0; }
// // //           .khoj-skeleton-image, .khoj-skeleton-line {
// // //             background: linear-gradient(100deg, #efeee9 25%, #f8f7f4 43%, #efeee9 62%);
// // //             background-size: 220% 100%;
// // //             animation: khoj-shimmer 1.25s ease-in-out infinite;
// // //           }
// // //           .khoj-skeleton-image { aspect-ratio: 4 / 5; }
// // //           .khoj-skeleton-line { height: .68rem; margin-top: .72rem; }
// // //           .khoj-skeleton-line-short { width: 58%; height: .58rem; margin-top: .44rem; }
// // //           @keyframes khoj-shimmer { to { background-position-x: -220%; } }
// // //           @media (min-width: 1024px) {
// // //             .khoj-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
// // //           }
// // //           @media (max-width: 380px) {
// // //             .khoj-collection { padding-right: .75rem; padding-left: .75rem; }
// // //             .khoj-grid { gap: .35rem; }
// // //             .khoj-product-meta { gap: .28rem; padding-top: .55rem; }
// // //           }
// // //           @media (prefers-reduced-motion: reduce) {
// // //             .khoj-collection-heading, .khoj-product-card, .khoj-product-image,
// // //             .khoj-skeleton-image, .khoj-skeleton-line {
// // //               animation: none !important;
// // //               transition: none !important;
// // //               transform: none !important;
// // //             }
// // //             .khoj-collection-heading, .khoj-product-card { opacity: 1 !important; }
// // //           }
// // //         `}</style>
// // //       </div>
// // //     </section>
// // //   )
// // // }


// // "use client"

// // import Link from "next/link"
// // import type { CSSProperties } from "react"
// // import { useEffect, useRef, useState } from "react"
// // import type { SearchClient } from "instantsearch.js"
// // import { Configure, InstantSearch, useHits, useInstantSearch } from "react-instantsearch"

// // import { PRODUCT_INDEX_NAME, searchClient } from "../../../../lib/search-client"

// // type ProductHit = {
// //   objectID?: string
// //   title?: string
// //   handle?: string
// //   thumbnail?: string | null
// //   min_price?: number | string | null
// //   max_price?: number | string | null
// //   original_price?: number | string | null
// //   on_sale?: boolean
// //   [key: string]: unknown
// // }

// // type ProductGridProps = {
// //   /** The active Medusa region currency, e.g. "eur" or "usd". */
// //   currencyCode: string
// // }

// // function amount(value: unknown): number | null {
// //   if (typeof value === "number" && Number.isFinite(value)) return value
// //   if (typeof value === "string" && value.trim() !== "") {
// //     const parsed = Number(value)
// //     if (Number.isFinite(parsed)) return parsed
// //   }
// //   return null
// // }

// // function getPrice(hit: ProductHit, currencyCode: string): number | null {
// //   const currencyField = `min_price_${currencyCode.toLowerCase()}`
// //   return amount(hit[currencyField]) ?? amount(hit.min_price)
// // }

// // function formatPrice(value: number, currencyCode: string): string {
// //   const currency = currencyCode.toUpperCase()
// //   try {
// //     return new Intl.NumberFormat(undefined, {
// //       style: "currency",
// //       currency,
// //       maximumFractionDigits: 2,
// //     }).format(value)
// //   } catch {
// //     return `${currency} ${value.toFixed(2)}`
// //   }
// // }

// // function ProductCards({ currencyCode }: ProductGridProps) {
// //   const { hits } = useHits<ProductHit>()
// //   const { status, error } = useInstantSearch()
// //   const isLoading = status === "loading" || status === "stalled"
// //   const products = hits.filter((hit) => Boolean(hit.handle && hit.thumbnail))

// //   if (error) {
// //     return (
// //       <div className="khoj-grid-message" role="alert">
// //         Products couldn’t be loaded right now. Please try again in a moment.
// //       </div>
// //     )
// //   }

// //   if (isLoading && products.length === 0) {
// //     return (
// //       <div className="khoj-grid" aria-label="Loading products" aria-busy="true">
// //         {Array.from({ length: 10 }, (_, index) => (
// //           <div className="khoj-card-skeleton" key={index}>
// //             <div className="khoj-skeleton-image" />
// //             <div className="khoj-skeleton-line" />
// //             <div className="khoj-skeleton-line khoj-skeleton-line-short" />
// //           </div>
// //         ))}
// //       </div>
// //     )
// //   }

// //   if (products.length === 0) {
// //     return (
// //       <div className="khoj-grid-message" role="status">
// //         No products are available in this collection yet.
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="khoj-grid">
// //       {products.map((hit, index) => {
// //         const price = getPrice(hit, currencyCode)
// //         const originalPrice = amount(hit.original_price)
// //         const showSalePrice = Boolean(
// //           hit.on_sale && price !== null && originalPrice !== null && originalPrice > price
// //         )
// //         const maxPrice = amount(hit.max_price)
// //         const hasPriceRange = !showSalePrice && price !== null && maxPrice !== null && maxPrice > price

// //         return (
// //           <article
// //             className="khoj-product-card"
// //             key={hit.objectID ?? hit.handle ?? index}
// //             style={{ "--card-index": index } as CSSProperties & { "--card-index": number }}
// //           >
// //             <Link
// //               className="khoj-product-link"
// //               href={`/products/${hit.handle}`}
// //               aria-label={`View ${hit.title ?? "product"}`}
// //             >
// //               <div className="khoj-product-image-wrap">
// //                 {/* This is the real Medusa thumbnail URL returned by the existing search index. */}
// //                 <img
// //                   className="khoj-product-image"
// //                   src={hit.thumbnail ?? ""}
// //                   alt={hit.title ?? ""}
// //                   loading={index < 5 ? "eager" : "lazy"}
// //                   decoding="async"
// //                 />
// //                 {showSalePrice && <span className="khoj-sale-label">Special price</span>}
// //               </div>
// //               <div className="khoj-product-meta">
// //                 <h3 className="khoj-product-title">{hit.title}</h3>
// //                 <div className="khoj-price-line">
// //                   {showSalePrice && originalPrice !== null && (
// //                     <span className="khoj-original-price">
// //                       {formatPrice(originalPrice, currencyCode)}
// //                     </span>
// //                   )}
// //                   <span className={showSalePrice ? "khoj-current-price khoj-current-price-sale" : "khoj-current-price"}>
// //                     {price === null
// //                       ? "Price unavailable"
// //                       : hasPriceRange && maxPrice !== null
// //                         ? `${formatPrice(price, currencyCode)} – ${formatPrice(maxPrice, currencyCode)}`
// //                         : formatPrice(price, currencyCode)}
// //                   </span>
// //                 </div>
// //               </div>
// //             </Link>
// //           </article>
// //         )
// //       })}
// //     </div>
// //   )
// // }

// // export default function ProductGrid({ currencyCode }: ProductGridProps) {
// //   const sectionRef = useRef<HTMLElement | null>(null)
// //   const [isVisible, setIsVisible] = useState(false)

// //   useEffect(() => {
// //     const section = sectionRef.current
// //     if (!section) return

// //     if (!("IntersectionObserver" in window)) {
// //       setIsVisible(true)
// //       return
// //     }

// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true)
// //           observer.disconnect()
// //         }
// //       },
// //       { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
// //     )

// //     observer.observe(section)
// //     return () => observer.disconnect()
// //   }, [])

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className={`khoj-collection${isVisible ? " is-visible" : ""}`}
// //       aria-labelledby="khoj-collection-title"
// //     >
// //       <div className="khoj-collection-inner">
// //         <header className="khoj-collection-heading">
// //           <div>
// //             <p className="khoj-eyebrow">KHOJ / SEASONAL EDIT</p>
// //             <h2 id="khoj-collection-title">БАЗОВАЯ КОЛЛЕКЦИЯ</h2>
// //           </div>
// //           <span className="khoj-heading-index" aria-hidden="true">01 — 10</span>
// //         </header>

// //         <InstantSearch
// //           searchClient={searchClient as unknown as SearchClient}
// //           indexName={PRODUCT_INDEX_NAME}
// //         >
// //           <Configure hitsPerPage={10} />
// //           <ProductCards currencyCode={currencyCode} />
// //         </InstantSearch>

// //         <style>{`
// //           .khoj-collection {
// //             --khoj-ink: #171715;
// //             --khoj-muted: #77766f;
// //             --khoj-paper: #f1f0ec;
// //             --khoj-line: rgba(23, 23, 21, .14);
// //             width: 100%;
// //             padding: clamp(3.25rem, 7vw, 7rem) clamp(1rem, 4.2vw, 4.5rem);
// //             color: var(--khoj-ink);
// //             background: #fff;
// //           }
// //           .khoj-collection-inner { width: min(100%, 1680px); margin: 0 auto; }
// //           .khoj-collection-heading {
// //             display: flex;
// //             align-items: flex-end;
// //             justify-content: space-between;
// //             gap: 1rem;
// //             padding-bottom: clamp(1.25rem, 2vw, 2rem);
// //             border-bottom: 1px solid var(--khoj-line);
// //             margin-bottom: clamp(1.1rem, 2vw, 1.75rem);
// //             opacity: 0;
// //             transform: translateY(18px);
// //             transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1);
// //           }
// //           .khoj-collection.is-visible .khoj-collection-heading { opacity: 1; transform: translateY(0); }
// //           .khoj-eyebrow {
// //             margin: 0 0 .58rem;
// //             color: var(--khoj-muted);
// //             font: 600 .62rem/1.2 Arial, sans-serif;
// //             letter-spacing: .17em;
// //             text-transform: uppercase;
// //           }
// //           .khoj-collection-heading h2 {
// //             margin: 0;
// //             font-family: var(--font-heading, "Arial", "Helvetica Neue", sans-serif);
// //             font-size: clamp(1.45rem, 3.4vw, 3.35rem);
// //             line-height: .96;
// //             font-weight: 850;
// //             letter-spacing: -.065em;
// //           }
// //           .khoj-heading-index {
// //             flex: 0 0 auto;
// //             padding-bottom: .16rem;
// //             color: var(--khoj-muted);
// //             font: 500 .67rem/1 Arial, sans-serif;
// //             letter-spacing: .09em;
// //           }
// //           .khoj-grid {
// //             display: grid;
// //             grid-template-columns: repeat(3, minmax(0, 1fr));
// //             gap: clamp(.45rem, 1.2vw, 1.1rem);
// //           }
// //           .khoj-product-card {
// //             min-width: 0;
// //             opacity: 0;
// //             transform: translateY(22px);
// //             transition: opacity .65s ease, transform .65s cubic-bezier(.2,.7,.2,1);
// //             transition-delay: calc(var(--card-index, 0) * 55ms);
// //           }
// //           .khoj-collection.is-visible .khoj-product-card { opacity: 1; transform: translateY(0); }
// //           .khoj-product-link { display: block; color: inherit; text-decoration: none; }
// //           .khoj-product-image-wrap {
// //             position: relative;
// //             overflow: hidden;
// //             aspect-ratio: 4 / 5;
// //             background: var(--khoj-paper);
// //           }
// //           .khoj-product-image {
// //             display: block;
// //             width: 100%;
// //             height: 100%;
// //             object-fit: cover;
// //             transition: transform .8s cubic-bezier(.2,.65,.25,1);
// //           }
// //           @media (hover: hover) and (pointer: fine) {
// //             .khoj-product-link:hover .khoj-product-image,
// //             .khoj-product-link:focus-visible .khoj-product-image { transform: scale(1.035); }
// //           }
// //           .khoj-product-link:focus-visible { outline: 2px solid var(--khoj-ink); outline-offset: 4px; }
// //           .khoj-sale-label {
// //             position: absolute;
// //             top: .65rem;
// //             left: .65rem;
// //             padding: .4rem .52rem;
// //             color: var(--khoj-ink);
// //             background: rgba(255,255,255,.88);
// //             font: 600 .58rem/1 Arial, sans-serif;
// //             letter-spacing: .07em;
// //             text-transform: uppercase;
// //           }
// //           .khoj-product-meta { display: flex; flex-direction: column; gap: .42rem; padding: .7rem 0 0; }
// //           .khoj-product-title {
// //             overflow: hidden;
// //             margin: 0;
// //             font: 600 clamp(.68rem, .88vw, .84rem)/1.35 Arial, sans-serif;
// //             letter-spacing: -.015em;
// //             text-overflow: ellipsis;
// //             white-space: nowrap;
// //           }
// //           .khoj-price-line { display: flex; flex-wrap: wrap; align-items: baseline; gap: .42rem; }
// //           .khoj-current-price, .khoj-original-price { font: 500 clamp(.64rem, .8vw, .77rem)/1.35 Arial, sans-serif; }
// //           .khoj-current-price-sale { color: #8c392e; }
// //           .khoj-original-price { color: var(--khoj-muted); text-decoration: line-through; }
// //           .khoj-grid-message {
// //             padding: 3rem 1rem;
// //             border: 1px solid var(--khoj-line);
// //             color: var(--khoj-muted);
// //             font: 500 .9rem/1.5 Arial, sans-serif;
// //             text-align: center;
// //           }
// //           .khoj-card-skeleton { min-width: 0; }
// //           .khoj-skeleton-image, .khoj-skeleton-line {
// //             background: linear-gradient(100deg, #efeee9 25%, #f8f7f4 43%, #efeee9 62%);
// //             background-size: 220% 100%;
// //             animation: khoj-shimmer 1.25s ease-in-out infinite;
// //           }
// //           .khoj-skeleton-image { aspect-ratio: 4 / 5; }
// //           .khoj-skeleton-line { height: .68rem; margin-top: .72rem; }
// //           .khoj-skeleton-line-short { width: 58%; height: .58rem; margin-top: .44rem; }
// //           @keyframes khoj-shimmer { to { background-position-x: -220%; } }
// //           @media (min-width: 1024px) {
// //             .khoj-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); }
// //           }
// //           @media (max-width: 380px) {
// //             .khoj-collection { padding-right: .75rem; padding-left: .75rem; }
// //             .khoj-grid { gap: .35rem; }
// //             .khoj-product-meta { gap: .28rem; padding-top: .55rem; }
// //           }
// //           @media (prefers-reduced-motion: reduce) {
// //             .khoj-collection-heading, .khoj-product-card, .khoj-product-image,
// //             .khoj-skeleton-image, .khoj-skeleton-line {
// //               animation: none !important;
// //               transition: none !important;
// //               transform: none !important;
// //             }
// //             .khoj-collection-heading, .khoj-product-card { opacity: 1 !important; }
// //           }
// //         `}</style>
// //       </div>
// //     </section>
// //   )
// // }


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
//   min_price?: number | string | null
//   max_price?: number | string | null
//   original_price?: number | string | null
//   on_sale?: boolean
//   [key: string]: unknown
// }

// type ProductGridProps = {
//   /** The active Medusa region currency, e.g. "eur" or "usd". */
//   currencyCode: string
// }

// function amount(value: unknown): number | null {
//   if (typeof value === "number" && Number.isFinite(value)) return value
//   if (typeof value === "string" && value.trim() !== "") {
//     const parsed = Number(value)
//     if (Number.isFinite(parsed)) return parsed
//   }
//   return null
// }

// function getPrice(hit: ProductHit, currencyCode: string): number | null {
//   const currencyField = `min_price_${currencyCode.toLowerCase()}`
//   return amount(hit[currencyField]) ?? amount(hit.min_price)
// }

// function formatPrice(value: number, currencyCode: string): string {
//   const currency = currencyCode.toUpperCase()
//   try {
//     return new Intl.NumberFormat(undefined, {
//       style: "currency",
//       currency,
//       maximumFractionDigits: 2,
//     }).format(value)
//   } catch {
//     return `${currency} ${value.toFixed(2)}`
//   }
// }

// function ProductCards({ currencyCode }: ProductGridProps) {
//   const { hits } = useHits<ProductHit>()
//   const { status, error } = useInstantSearch()
//   const isLoading = status === "loading" || status === "stalled"
//   const products = hits.filter((hit) => Boolean(hit.handle && hit.thumbnail)).slice(0, 5)

//   if (error) {
//     return (
//       <div className="khoj-grid-message" role="alert">
//         Products couldn’t be loaded right now. Please try again in a moment.
//       </div>
//     )
//   }

//   if (isLoading && products.length === 0) {
//     return (
//       <div className="khoj-product-mosaic" aria-label="Loading products" aria-busy="true">
//         {Array.from({ length: 5 }, (_, index) => (
//           <div className={`khoj-card-skeleton khoj-card-skeleton-${index}`} key={index}>
//             <div className="khoj-skeleton-image" />
//             <div className="khoj-skeleton-line" />
//             <div className="khoj-skeleton-line khoj-skeleton-line-short" />
//           </div>
//         ))}
//       </div>
//     )
//   }

//   if (products.length === 0) {
//     return (
//       <div className="khoj-grid-message" role="status">
//         No products are available in this collection yet.
//       </div>
//     )
//   }

//   return (
//     <div className="khoj-product-mosaic">
//       {products.map((hit, index) => {
//         const price = getPrice(hit, currencyCode)
//         const originalPrice = amount(hit.original_price)
//         const showSalePrice = Boolean(
//           hit.on_sale && price !== null && originalPrice !== null && originalPrice > price
//         )
//         const maxPrice = amount(hit.max_price)
//         const hasPriceRange = !showSalePrice && price !== null && maxPrice !== null && maxPrice > price
//         const placement = index === 0 ? "hero" : `small-${index}`
//         const cardStyle = { "--card-index": index } as CSSProperties & {
//           "--card-index": number
//         }

//         return (
//           <article
//             className={`khoj-product-card khoj-product-card-${placement}`}
//             key={hit.objectID ?? hit.handle ?? index}
//             style={cardStyle}
//           >
//             <Link
//               className="khoj-product-link"
//               href={`/products/${hit.handle}`}
//               aria-label={`View ${hit.title ?? "product"}`}
//             >
//               <div className="khoj-product-image-wrap">
//                 {/* Use the real Medusa thumbnail returned by the existing search index. */}
//                 <img
//                   className="khoj-product-image"
//                   src={hit.thumbnail ?? ""}
//                   alt={hit.title ?? ""}
//                   loading={index < 3 ? "eager" : "lazy"}
//                   decoding="async"
//                 />
//                 {showSalePrice && <span className="khoj-sale-label">Sale</span>}
//               </div>
//               <div className="khoj-product-meta">
//                 <h3 className="khoj-product-title">{hit.title}</h3>
//                 <div className="khoj-price-line">
//                   {showSalePrice && originalPrice !== null && (
//                     <span className="khoj-original-price">
//                       {formatPrice(originalPrice, currencyCode)}
//                     </span>
//                   )}
//                   <span className={showSalePrice ? "khoj-current-price khoj-current-price-sale" : "khoj-current-price"}>
//                     {price === null
//                       ? "Price unavailable"
//                       : hasPriceRange && maxPrice !== null
//                         ? `${formatPrice(price, currencyCode)} – ${formatPrice(maxPrice, currencyCode)}`
//                         : formatPrice(price, currencyCode)}
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </article>
//         )
//       })}
//     </div>
//   )
// }

// export default function ProductGrid({ currencyCode }: ProductGridProps) {
//   const sectionRef = useRef<HTMLElement | null>(null)
//   const [isVisible, setIsVisible] = useState(false)

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
//       className={`khoj-collection${isVisible ? " is-visible" : ""}`}
//       aria-labelledby="khoj-collection-title"
//     >
//       <div className="khoj-collection-inner">
//         <header className="khoj-collection-heading">
//           <div>
//             <p className="khoj-eyebrow">KHOJ / SEASONAL EDIT</p>
//             <h2 id="khoj-collection-title">БАЗОВАЯ КОЛЛЕКЦИЯ</h2>
//           </div>
//           <span className="khoj-heading-index" aria-hidden="true">01 — 05</span>
//         </header>

//         <InstantSearch
//           searchClient={searchClient as unknown as SearchClient}
//           indexName={PRODUCT_INDEX_NAME}
//         >
//           <Configure hitsPerPage={5} />
//           <ProductCards currencyCode={currencyCode} />
//         </InstantSearch>

//         <style>{`
//           .khoj-collection {
//             --khoj-ink: #171715;
//             --khoj-muted: #77766f;
//             --khoj-paper: #e9eae8;
//             --khoj-line: rgba(23, 23, 21, .16);
//             width: 100%;
//             padding: clamp(2.5rem, 5vw, 5rem) 0;
//             color: var(--khoj-ink);
//             background: #fff;
//           }
//           .khoj-collection-inner { width: 100%; margin: 0 auto; }
//           .khoj-collection-heading {
//             display: flex;
//             align-items: flex-end;
//             justify-content: space-between;
//             gap: 1rem;
//             padding: 0 clamp(.75rem, 2.4vw, 2rem) clamp(1rem, 1.8vw, 1.6rem);
//             border-bottom: 1px solid var(--khoj-line);
//             margin-bottom: clamp(.65rem, 1vw, .9rem);
//             opacity: 0;
//             transform: translateY(16px);
//             transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1);
//           }
//           .khoj-collection.is-visible .khoj-collection-heading { opacity: 1; transform: translateY(0); }
//           .khoj-eyebrow {
//             margin: 0 0 .48rem;
//             color: var(--khoj-muted);
//             font: 600 .6rem/1.2 Arial, sans-serif;
//             letter-spacing: .16em;
//             text-transform: uppercase;
//           }
//           .khoj-collection-heading h2 {
//             margin: 0;
//             font-family: var(--font-heading, "Arial", "Helvetica Neue", sans-serif);
//             font-size: clamp(1.35rem, 3.1vw, 3.1rem);
//             line-height: .96;
//             font-weight: 850;
//             letter-spacing: -.065em;
//           }
//           .khoj-heading-index {
//             flex: 0 0 auto;
//             padding-bottom: .12rem;
//             color: var(--khoj-muted);
//             font: 500 .64rem/1 Arial, sans-serif;
//             letter-spacing: .09em;
//           }
//           .khoj-product-mosaic {
//             display: grid;
//             grid-template-columns: minmax(0, 2fr) repeat(2, minmax(0, 1fr));
//             grid-template-areas: "hero small-1 small-2" "hero small-3 small-4";
//             align-items: start;
//             gap: clamp(3px, .42vw, 6px);
//             width: 100%;
//           }
//           .khoj-product-card, .khoj-card-skeleton {
//             min-width: 0;
//             opacity: 0;
//             transform: translateY(18px);
//             transition: opacity .65s ease, transform .65s cubic-bezier(.2,.7,.2,1);
//             transition-delay: calc(var(--card-index, 0) * 55ms);
//           }
//           .khoj-collection.is-visible .khoj-product-card,
//           .khoj-collection.is-visible .khoj-card-skeleton { opacity: 1; transform: translateY(0); }
//           .khoj-product-card-hero { grid-area: hero; }
//           .khoj-product-card-small-1 { grid-area: small-1; }
//           .khoj-product-card-small-2 { grid-area: small-2; }
//           .khoj-product-card-small-3 { grid-area: small-3; }
//           .khoj-product-card-small-4 { grid-area: small-4; }
//           .khoj-product-link { display: block; color: inherit; text-decoration: none; }
//           .khoj-product-image-wrap {
//             position: relative;
//             overflow: hidden;
//             width: 100%;
//             aspect-ratio: 1 / 1;
//             background: var(--khoj-paper);
//           }
//           .khoj-product-image {
//             display: block;
//             width: 100%;
//             height: 100%;
//             object-fit: contain;
//             transition: transform .75s cubic-bezier(.2,.65,.25,1);
//           }
//           @media (hover: hover) and (pointer: fine) {
//             .khoj-product-link:hover .khoj-product-image,
//             .khoj-product-link:focus-visible .khoj-product-image { transform: scale(1.025); }
//           }
//           .khoj-product-link:focus-visible { outline: 2px solid var(--khoj-ink); outline-offset: -2px; }
//           .khoj-sale-label {
//             position: absolute;
//             top: .5rem;
//             left: .5rem;
//             padding: .35rem .42rem;
//             color: var(--khoj-ink);
//             background: rgba(255,255,255,.9);
//             font: 600 .55rem/1 Arial, sans-serif;
//             letter-spacing: .08em;
//             text-transform: uppercase;
//           }
//           .khoj-product-meta { display: flex; flex-direction: column; gap: .3rem; padding: .48rem .05rem 0; }
//           .khoj-product-title {
//             overflow: hidden;
//             margin: 0;
//             font: 600 clamp(.65rem, .78vw, .82rem)/1.3 Arial, sans-serif;
//             letter-spacing: -.015em;
//             text-overflow: ellipsis;
//             white-space: nowrap;
//           }
//           .khoj-price-line { display: flex; flex-wrap: wrap; align-items: baseline; gap: .38rem; }
//           .khoj-current-price, .khoj-original-price { font: 500 clamp(.62rem, .72vw, .76rem)/1.3 Arial, sans-serif; }
//           .khoj-current-price-sale { color: #8c392e; }
//           .khoj-original-price { color: var(--khoj-muted); text-decoration: line-through; }
//           .khoj-grid-message {
//             padding: 3rem 1rem;
//             border-top: 1px solid var(--khoj-line);
//             border-bottom: 1px solid var(--khoj-line);
//             color: var(--khoj-muted);
//             font: 500 .9rem/1.5 Arial, sans-serif;
//             text-align: center;
//           }
//           .khoj-card-skeleton { min-width: 0; }
//           .khoj-card-skeleton-0 { grid-area: hero; }
//           .khoj-card-skeleton-1 { grid-area: small-1; }
//           .khoj-card-skeleton-2 { grid-area: small-2; }
//           .khoj-card-skeleton-3 { grid-area: small-3; }
//           .khoj-card-skeleton-4 { grid-area: small-4; }
//           .khoj-skeleton-image, .khoj-skeleton-line {
//             background: linear-gradient(100deg, #e9eae8 25%, #f5f5f3 43%, #e9eae8 62%);
//             background-size: 220% 100%;
//             animation: khoj-shimmer 1.25s ease-in-out infinite;
//           }
//           .khoj-skeleton-image { aspect-ratio: 1 / 1; }
//           .khoj-skeleton-line { height: .62rem; margin-top: .58rem; }
//           .khoj-skeleton-line-short { width: 58%; height: .52rem; margin-top: .38rem; }
//           @keyframes khoj-shimmer { to { background-position-x: -220%; } }
//           @media (max-width: 767px) {
//             .khoj-product-mosaic {
//               grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
//               grid-template-areas: "hero small-1" "hero small-2";
//             }
//             .khoj-product-card-small-3, .khoj-product-card-small-4,
//             .khoj-card-skeleton-3, .khoj-card-skeleton-4 { display: none; }
//             .khoj-collection-heading { margin-bottom: .5rem; }
//             .khoj-product-meta { gap: .25rem; padding-top: .4rem; }
//           }
//           @media (max-width: 380px) {
//             .khoj-collection-heading { padding-right: .65rem; padding-left: .65rem; }
//             .khoj-eyebrow { font-size: .54rem; }
//             .khoj-product-title { font-size: .62rem; }
//             .khoj-current-price, .khoj-original-price { font-size: .58rem; }
//           }
//           @media (prefers-reduced-motion: reduce) {
//             .khoj-collection-heading, .khoj-product-card, .khoj-card-skeleton, .khoj-product-image,
//             .khoj-skeleton-image, .khoj-skeleton-line {
//               animation: none !important;
//               transition: none !important;
//               transform: none !important;
//             }
//             .khoj-collection-heading, .khoj-product-card, .khoj-card-skeleton { opacity: 1 !important; }
//           }
//         `}</style>
//       </div>
//     </section>
//   )
// }


"use client"

import Link from "next/link"
import type { CSSProperties } from "react"
import { useEffect, useRef, useState } from "react"
import type { SearchClient } from "instantsearch.js"
import { Configure, InstantSearch, useHits, useInstantSearch } from "react-instantsearch"

import { PRODUCT_INDEX_NAME, searchClient } from "../../../../lib/search-client"

type ProductHit = {
  objectID?: string
  title?: string
  handle?: string
  thumbnail?: string | null
  [key: string]: unknown
}

type ProductGridProps = {
  currencyCode: string
}

type ProductCardsProps = {
  isMobile: boolean
  isVisible: boolean
}

function ProductCards({ isMobile, isVisible }: ProductCardsProps) {
  const { hits } = useHits<ProductHit>()
  const { status, error } = useInstantSearch()
  const isLoading = status === "loading" || status === "stalled"
  const products = hits.filter((hit) => Boolean(hit.handle && hit.thumbnail)).slice(0, 5)

  const mosaicStyle: CSSProperties = {
    display: "grid",
    width: "100%",
    gridTemplateColumns: isMobile
      ? "minmax(0, 2fr) minmax(0, 1fr)"
      : "minmax(0, 2fr) repeat(2, minmax(0, 1fr))",
    gridTemplateAreas: isMobile
      ? '"hero small-1" "hero small-2"'
      : '"hero small-1 small-2" "hero small-3 small-4"',
    gap: isMobile ? 3 : 4,
    alignItems: "start",
  }

  if (error) {
    return (
      <div
        role="alert"
        style={{ padding: "32px 16px", color: "#77766f", textAlign: "center", fontFamily: "Arial, sans-serif" }}
      >
        Products couldn’t be loaded right now. Please try again in a moment.
      </div>
    )
  }

  if (isLoading && products.length === 0) {
    const skeletonCount = isMobile ? 3 : 5
    return (
      <div style={mosaicStyle} aria-label="Loading products" aria-busy="true">
        {Array.from({ length: skeletonCount }, (_, index) => (
          <div
            key={index}
            style={{
              gridArea: index === 0 ? "hero" : `small-${index}`,
              aspectRatio: "1 / 1",
              width: "100%",
              backgroundColor: "#e9eae8",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 600ms ease ${index * 55}ms, transform 600ms ease ${index * 55}ms`,
            }}
          />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div
        role="status"
        style={{ padding: "32px 16px", color: "#77766f", textAlign: "center", fontFamily: "Arial, sans-serif" }}
      >
        No products are available in this collection yet.
      </div>
    )
  }

  return (
    <div style={mosaicStyle}>
      {products.map((hit, index) => {
        const area = index === 0 ? "hero" : `small-${index}`
        const cardStyle: CSSProperties = {
          gridArea: area,
          minWidth: 0,
          width: "100%",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(18px)",
          transition: `opacity 650ms ease ${index * 55}ms, transform 650ms cubic-bezier(.2,.7,.2,1) ${index * 55}ms`,
          display: isMobile && index > 2 ? "none" : "block",
        }

        return (
          <ProductTile
            key={hit.objectID ?? hit.handle ?? index}
            hit={hit}
            cardStyle={cardStyle}
          />
        )
      })}
    </div>
  )
}

type ProductTileProps = {
  hit: ProductHit
  cardStyle: CSSProperties
}

function ProductTile({ hit, cardStyle }: ProductTileProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div style={cardStyle}>
      <Link
        href={`/products/${hit.handle}`}
        aria-label={`View ${hit.title ?? "product"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        style={{
          display: "block",
          width: "100%",
          overflow: "hidden",
          outlineOffset: "-2px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            overflow: "hidden",
            backgroundColor: "#e9eae8",
            borderRadius: 0,
          }}
        >
          <img
            src={hit.thumbnail ?? ""}
            alt={hit.title ?? "Clothing product"}
            loading="eager"
            decoding="async"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              padding: 0,
              margin: 0,
              border: 0,
              borderRadius: 0,
              transform: isHovered ? "scale(1.025)" : "scale(1)",
              transition: "transform 700ms cubic-bezier(.2,.65,.25,1)",
            }}
          />
        </div>
      </Link>
    </div>
  )
}

export default function ProductGrid(_props: ProductGridProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const updateLayout = () => setIsMobile(mediaQuery.matches)

    updateLayout()
    mediaQuery.addEventListener("change", updateLayout)
    return () => mediaQuery.removeEventListener("change", updateLayout)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="khoj-collection-title"
      style={{
        width: "100%",
        padding: "clamp(32px, 5vw, 80px) 0",
        color: "#171715",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "100%", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 clamp(12px, 2.4vw, 32px) clamp(14px, 1.8vw, 26px)",
            marginBottom: "clamp(8px, 1vw, 14px)",
          }}
        >
          <h2
            id="khoj-collection-title"
            style={{
              margin: 0,
              fontFamily: "Arial, Helvetica Neue, sans-serif",
              fontSize: "clamp(22px, 3.1vw, 50px)",
              lineHeight: 0.96,
              fontWeight: 850,
              letterSpacing: "-0.065em",
            }}
          >
            БАЗОВАЯ КОЛЛЕКЦИЯ
          </h2>
        </header>

        <InstantSearch
          searchClient={searchClient as unknown as SearchClient}
          indexName={PRODUCT_INDEX_NAME}
        >
          <Configure hitsPerPage={5} />
          <ProductCards isMobile={isMobile} isVisible={isVisible} />
        </InstantSearch>
      </div>
    </section>
  )
}
