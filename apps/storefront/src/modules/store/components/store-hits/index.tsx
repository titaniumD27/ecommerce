// "use client"

// import type { Hit } from "instantsearch.js"
// import { useEffect, useRef } from "react"
// import { useHits, useInstantSearch } from "react-instantsearch"

// import useSearchSettled from "@lib/hooks/use-search-settled"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import { Text } from "@modules/common/components/ui"
// import Thumbnail from "@modules/products/components/thumbnail"
// import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
// import SearchPagination from "./pagination"
// import HitPrice, { HitPricing } from "./price"

// type ProductHit = Hit<
//   {
//     title: string | null
//     handle: string | null
//     thumbnail: string | null
//   } & HitPricing
// >

// type StoreHitsProps = {
//   hitsPerPage: number
//   currencyCode: string
// }

// const StoreHits = ({ hitsPerPage, currencyCode }: StoreHitsProps) => {
//   const { items } = useHits<ProductHit>()
//   const { status, error, indexUiState } = useInstantSearch()
//   const { isSearching, hasNoResultsYet } = useSearchSettled()

//   const { page, ...refinements } = indexUiState
//   const currentPage = page ?? 1
//   const refinementKey = JSON.stringify(refinements)

//   const settled = useRef({ page: currentPage, refinementKey })

//   useEffect(() => {
//     if (!isSearching) {
//       settled.current = { page: currentPage, refinementKey }
//     }
//   }, [isSearching, currentPage, refinementKey])

//   const isPagingOnly =
//     refinementKey === settled.current.refinementKey &&
//     currentPage !== settled.current.page

//   const showSkeleton = hasNoResultsYet || (isSearching && isPagingOnly)

//   if (status === "error") {
//     return (
//       <Text
//         className="py-16 text-center text-ui-fg-error"
//         data-testid="products-error"
//       >
//         Couldn&apos;t load products
//         {error?.message ? `: ${error.message}` : "."}
//       </Text>
//     )
//   }

//   return (
//     <>
//       {showSkeleton ? (
//         <SkeletonProductGrid numberOfProducts={hitsPerPage} />
//       ) : !items.length ? (
//         <Text
//           className="py-16 text-center text-ui-fg-subtle"
//           data-testid="no-products"
//         >
//           No products matched these filters.
//         </Text>
//       ) : (
//         <ul
//           className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
//           data-testid="products-list"
//         >
//           {items.map((hit) =>
//             hit.handle ? (
//               <li key={hit.objectID}>
//                 <LocalizedClientLink
//                   href={`/products/${hit.handle}`}
//                   className="group"
//                 >
//                   <div data-testid="product-wrapper">
//                     <Thumbnail thumbnail={hit.thumbnail} size="full" />
//                     <div className="flex txt-compact-medium mt-4 justify-between">
//                       <Text
//                         className="text-ui-fg-subtle"
//                         data-testid="product-title"
//                       >
//                         {hit.title}
//                       </Text>
//                       <HitPrice hit={hit} currencyCode={currencyCode} />
//                     </div>
//                   </div>
//                 </LocalizedClientLink>
//               </li>
//             ) : null
//           )}
//         </ul>
//       )}
//       <SearchPagination />
//     </>
//   )
// }

// export default StoreHits

"use client"

import type { Hit } from "instantsearch.js"
import { useEffect, useRef } from "react"
import { useHits, useInstantSearch } from "react-instantsearch"

import useSearchSettled from "@lib/hooks/use-search-settled"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text } from "@modules/common/components/ui"
import Thumbnail from "@modules/products/components/thumbnail"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import SearchPagination from "./pagination"
import HitPrice, { HitPricing } from "./price"

type ProductHit = Hit<
  {
    title: string | null
    handle: string | null
    thumbnail: string | null
  } & HitPricing
>

type StoreHitsProps = {
  hitsPerPage: number
  currencyCode: string
}

const StoreHits = ({ hitsPerPage, currencyCode }: StoreHitsProps) => {
  const { items } = useHits<ProductHit>()
  const { status, error, indexUiState } = useInstantSearch()
  const { isSearching, hasNoResultsYet } = useSearchSettled()

  const { page, ...refinements } = indexUiState
  const currentPage = page ?? 1
  const refinementKey = JSON.stringify(refinements)

  const settled = useRef({ page: currentPage, refinementKey })

  useEffect(() => {
    if (!isSearching) {
      settled.current = { page: currentPage, refinementKey }
    }
  }, [isSearching, currentPage, refinementKey])

  const isPagingOnly =
    refinementKey === settled.current.refinementKey &&
    currentPage !== settled.current.page

  const showSkeleton = hasNoResultsYet || (isSearching && isPagingOnly)

  if (status === "error") {
    return (
      <Text
        className="py-16 text-center text-sm font-semibold text-[#a33b31]"
        data-testid="products-error"
      >
        Couldn&apos;t load products
        {error?.message ? `: ${error.message}` : "."}
      </Text>
    )
  }

  return (
    <>
      {showSkeleton ? (
        <SkeletonProductGrid numberOfProducts={hitsPerPage} />
      ) : !items.length ? (
        <Text
          className="py-16 text-center text-sm font-medium text-[#6d7169]"
          data-testid="no-products"
        >
          No products matched these filters.
        </Text>
      ) : (
        <ul
          className="grid w-full grid-cols-1 gap-x-4 gap-y-6 small:grid-cols-2 small:gap-x-5 small:gap-y-8 medium:grid-cols-3 large:grid-cols-4 large:gap-x-7 large:gap-y-9"
          data-testid="products-list"
        >
          {items.map((hit) =>
            hit.handle ? (
              <li key={hit.objectID} className="min-w-0">
                <LocalizedClientLink
                  href={`/products/${hit.handle}`}
                  className="group block"
                >
                  <div data-testid="product-wrapper">
                    <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-[#f2f2ee] transition-colors duration-300 group-hover:bg-[#edede8] small:rounded-[1.6rem] [&>div]:!h-full [&>div]:!w-full [&_img]:!h-full [&_img]:!w-full [&_img]:!object-contain [&_img]:!opacity-100">
                      <Thumbnail thumbnail={hit.thumbnail} size="full" />
                    </div>

                    <div className="flex min-w-0 items-start justify-between gap-3 px-1 pt-3 small:pt-3.5">
                      <Text
                        className="m-0 line-clamp-2 min-w-0 text-sm font-semibold leading-snug tracking-[-0.025em] text-[#171915] transition-colors duration-200 group-hover:text-[#315a39] small:text-base"
                        data-testid="product-title"
                      >
                        {hit.title}
                      </Text>
                      <div className="shrink-0 pt-px text-base font-bold leading-none tracking-[-0.035em] text-[#171915] small:text-lg [&_*]:!m-0 [&_*]:!font-bold [&_*]:!text-base [&_*]:!text-[#171915] small:[&_*]:!text-lg">
                        <HitPrice hit={hit} currencyCode={currencyCode} />
                      </div>
                    </div>
                  </div>
                </LocalizedClientLink>
              </li>
            ) : null
          )}
        </ul>
      )}
      <SearchPagination />
    </>
  )
}

export default StoreHits