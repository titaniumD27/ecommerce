// "use client"

// import { MagnifyingGlass } from "@medusajs/icons"
// import Link from "next/link"
// import { useParams } from "next/navigation"
// import { useCallback, useEffect, useRef, useState } from "react"
// import type { SearchClient } from "instantsearch.js"
// import {
//   Configure,
//   InstantSearch,
//   useHits,
//   useInstantSearch,
//   useSearchBox,
// } from "react-instantsearch"

// import useSearchSettled from "@lib/hooks/use-search-settled"
// import useToggleState from "@lib/hooks/use-toggle-state"
// import { PRODUCT_INDEX_NAME, searchClient } from "@lib/search-client"
// import { Text } from "@modules/common/components/ui"
// import SearchDrawer from "./drawer"
// import SearchHit, { ProductHit } from "./hit"

// const HITS_PER_PAGE = 12
// const DEBOUNCE_MS = 250

// const SearchPanel = ({ onNavigate }: { onNavigate: () => void }) => {
//   const timer = useRef<number | undefined>(undefined)

//   const queryHook = useCallback(
//     (nextQuery: string, search: (value: string) => void) => {
//       window.clearTimeout(timer.current)
//       timer.current = window.setTimeout(() => search(nextQuery), DEBOUNCE_MS)
//     },
//     []
//   )

//   const { query, refine } = useSearchBox({ queryHook })
//   const { items } = useHits<ProductHit>()
//   const { status, error } = useInstantSearch()
//   const { isSettled } = useSearchSettled()

//   const [inputValue, setInputValue] = useState(query)

//   useEffect(() => () => window.clearTimeout(timer.current), [])

//   const hasInput = Boolean(inputValue.trim())
//   const isPending = inputValue.trim() !== query.trim()
//   const hasResults = Boolean(query.trim()) && items.length > 0

//   return (
//     <>
//       <div className="flex items-center gap-x-3 border-b border-ui-border-base px-4">
//         <MagnifyingGlass className="shrink-0 text-ui-fg-muted" />
//         <input
//           type="search"
//           value={inputValue}
//           onChange={(event) => {
//             setInputValue(event.target.value)
//             refine(event.target.value)
//           }}
//           placeholder="Search products"
//           aria-label="Search products"
//           autoFocus
//           className="txt-medium w-full bg-transparent py-4 text-ui-fg-base outline-none placeholder:text-ui-fg-muted"
//           data-testid="search-input"
//         />
//       </div>

//       <div className="flex-1 overflow-y-auto">
//         {!hasInput ? (
//           <Text
//             className="px-4 py-6 text-center text-ui-fg-muted"
//             data-testid="search-empty"
//           >
//             Start typing to search for products.
//           </Text>
//         ) : status === "error" ? (
//           <Text
//             className="px-4 py-6 text-center text-ui-fg-error"
//             data-testid="search-error"
//           >
//             Couldn&apos;t search products
//             {error?.message ? `: ${error.message}` : "."}
//           </Text>
//         ) : !isSettled ? (
//           <Text
//             className="px-4 py-6 text-center text-ui-fg-muted"
//             data-testid="search-loading"
//           >
//             Searching&hellip;
//           </Text>
//         ) : hasResults ? (
//           <ul className="py-2" data-testid="search-results">
//             {items.map((hit) => (
//               <SearchHit key={hit.objectID} hit={hit} onNavigate={onNavigate} />
//             ))}
//           </ul>
//         ) : isPending || !query.trim() ? (
//           <Text
//             className="px-4 py-6 text-center text-ui-fg-muted"
//             data-testid="search-loading"
//           >
//             Searching&hellip;
//           </Text>
//         ) : (
//           <Text
//             className="px-4 py-6 text-center text-ui-fg-subtle"
//             data-testid="search-no-results"
//           >
//             No products found for &quot;{query}&quot;
//           </Text>
//         )}
//       </div>
//     </>
//   )
// }

// const Search = () => {
//   const { state: isOpen, open, close } = useToggleState()
//   const { countryCode } = useParams<{ countryCode: string }>()

//   return (
//     <>
//       {/* A real link so search works without JavaScript; with JS it opens the drawer instead. */}
//       <Link
//         href={`/${countryCode}/search`}
//         onClick={(event) => {
//           event.preventDefault()
//           open()
//         }}
//         aria-label="Search products"
//         className="flex items-center hover:text-ui-fg-base"
//         data-testid="nav-search-button"
//       >
//         <MagnifyingGlass />
//       </Link>

//       <SearchDrawer isOpen={isOpen} close={close}>
//         <InstantSearch
//           indexName={PRODUCT_INDEX_NAME}
//           searchClient={searchClient as unknown as SearchClient}
//           future={{ preserveSharedStateOnUnmount: true }}
//         >
//           <Configure hitsPerPage={HITS_PER_PAGE} />
//           <SearchPanel onNavigate={close} />
//         </InstantSearch>
//       </SearchDrawer>
//     </>
//   )
// }

// export default Search


"use client"

import { MagnifyingGlass } from "@medusajs/icons"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import type { SearchClient } from "instantsearch.js"
import {
  Configure,
  InstantSearch,
  useHits,
  useInstantSearch,
  useSearchBox,
} from "react-instantsearch"

import useSearchSettled from "@lib/hooks/use-search-settled"
import useToggleState from "@lib/hooks/use-toggle-state"
import { PRODUCT_INDEX_NAME, searchClient } from "@lib/search-client"
import { Text } from "@modules/common/components/ui"
import SearchDrawer from "./drawer"
import SearchHit from "./hit"
import type { ProductHit } from "./hit"

const HITS_PER_PAGE = 12
const DEBOUNCE_MS = 250

const SearchPanel = ({ onNavigate }: { onNavigate: () => void }) => {
  const timer = useRef<number | undefined>(undefined)

  const queryHook = useCallback(
    (nextQuery: string, search: (value: string) => void) => {
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => search(nextQuery), DEBOUNCE_MS)
    },
    []
  )

  const { query, refine } = useSearchBox({ queryHook })
  const { items } = useHits<ProductHit>()
  const { status, error } = useInstantSearch()
  const { isSettled } = useSearchSettled()
  const [inputValue, setInputValue] = useState(query)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const hasInput = Boolean(inputValue.trim())
  const isPending = inputValue.trim() !== query.trim()
  const hasResults = Boolean(query.trim()) && items.length > 0

  const clearSearch = () => {
    setInputValue("")
    refine("")
  }

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#faf9f6] text-[#171715]">
      <div className="shrink-0 border-b border-[#d9d6cf] px-4 pb-5 pt-5 small:px-7 small:pb-6 small:pt-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.22em] text-[#69665f] small:text-xs">
            KHOJ 
          </p>
          <p className="m-0 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77746d] small:text-[10px]">
            {HITS_PER_PAGE} results max
          </p>
        </div>

        <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-[#e9e5dd] bg-white px-4 shadow-sm transition-all duration-200 focus-within:border-[#b7a48a] focus-within:shadow-md small:min-h-16 small:px-5">
          <MagnifyingGlass className="h-5 w-5 shrink-0 text-[#171715]" aria-hidden="true" />
          <input
            type="search"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value)
              refine(event.target.value)
            }}
            placeholder="Search the collection"
            aria-label="Search products"
            autoFocus
            className="min-w-0 flex-1 bg-transparent py-4 text-base font-semibold tracking-[-0.02em] text-[#171715] outline-none placeholder:font-medium placeholder:text-[#77746d] small:text-lg"
            data-testid="search-input"
          />
          {hasInput && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear search"
              title="Clear search"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-transparent bg-[#f2f0eb] text-2xl font-light leading-none text-[#171715] transition-colors hover:bg-[#171715] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171715]"
            >
              <span aria-hidden="true">×</span>
            </button>
          )}
        </div>
        <p className="mb-0 mt-3 text-[11px] font-medium leading-5 text-[#77746d] small:text-xs">
          Search by product name or keyword.
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto" aria-live="polite">
        {!hasInput ? (
          <div className="px-5 py-12 text-center small:px-8 small:py-16" data-testid="search-empty">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#77746d]">
              The collection awaits
            </p>
            <Text className="m-0 text-base font-bold leading-7 text-[#171715] small:text-lg">
              Start typing to search for products.
            </Text>
          </div>
        ) : status === "error" ? (
          <div className="px-5 py-12 text-center small:px-8 small:py-16" data-testid="search-error" role="alert">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a13b31]">
              Search unavailable
            </p>
            <Text className="m-0 text-sm font-bold leading-6 text-[#7e2c25]">
              Couldn&apos;t search products{error?.message ? `: ${error.message}` : "."}
            </Text>
          </div>
        ) : !isSettled ? (
          <div className="px-5 py-12 text-center small:px-8 small:py-16" data-testid="search-loading" role="status">
            <Text className="m-0 animate-pulse text-sm font-bold text-[#171715]">
              Searching&hellip;
            </Text>
          </div>
        ) : hasResults ? (
          <ul
            className="m-0 list-none space-y-2 px-3 pb-5 pt-3 small:space-y-3 small:px-6 [&>li]:rounded-xl [&>li]:px-2 [&>li]:py-2 [&>li]:transition-colors [&>li:hover]:bg-white"
            data-testid="search-results"
          >
            {items.map((hit) => (
              <SearchHit key={hit.objectID} hit={hit} onNavigate={onNavigate} />
            ))}
          </ul>
        ) : isPending || !query.trim() ? (
          <div className="px-5 py-12 text-center small:px-8 small:py-16" data-testid="search-loading" role="status">
            <Text className="m-0 animate-pulse text-sm font-bold text-[#171715]">
              Searching&hellip;
            </Text>
          </div>
        ) : (
          <div className="px-5 py-12 text-center small:px-8 small:py-16" data-testid="search-no-results" role="status">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#77746d]">
              No matches this time
            </p>
            <Text className="m-0 break-words text-base font-bold leading-7 text-[#171715] small:text-lg">
              No products found for &quot;{query}&quot;
            </Text>
            <p className="mb-0 mt-2 text-sm font-medium leading-6 text-[#77746d]">
              Try another keyword or use the × button to clear your search.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const Search = () => {
  const { state: isOpen, open, close } = useToggleState()
  const { countryCode } = useParams<{ countryCode: string }>()

  return (
    <>
      {/* A real link keeps search available without JavaScript; with JS it opens the drawer. */}
      <Link
        href={`/${countryCode}/search`}
        onClick={(event) => {
          event.preventDefault()
          open()
        }}
        aria-label="Search products"
        title="Search products"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-[#171715] transition-colors hover:bg-[#f2f0eb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171715]"
        data-testid="nav-search-button"
      >
        <MagnifyingGlass className="h-5 w-5" aria-hidden="true" />
      </Link>

      <SearchDrawer isOpen={isOpen} close={close}>
        <InstantSearch
          indexName={PRODUCT_INDEX_NAME}
          searchClient={searchClient as unknown as SearchClient}
          future={{ preserveSharedStateOnUnmount: true }}
        >
          <Configure hitsPerPage={HITS_PER_PAGE} />
          <SearchPanel onNavigate={close} />
        </InstantSearch>
      </SearchDrawer>
    </>
  )
}

export default Search