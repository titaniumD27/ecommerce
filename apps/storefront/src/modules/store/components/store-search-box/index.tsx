// // "use client"

// // import { MagnifyingGlass, XMarkMini } from "@medusajs/icons"
// // import { useCallback, useEffect, useRef, useState } from "react"
// // import { useSearchBox } from "react-instantsearch"

// // const DEBOUNCE_MS = 250

// // /**
// //  * Free-text search over the listing, refining the same InstantSearch state the
// //  * sidebar filters do. The input is held locally so typing stays responsive
// //  * while the query itself is debounced.
// //  */
// // const StoreSearchBox = () => {
// //   const timer = useRef<number | undefined>(undefined)

// //   const queryHook = useCallback(
// //     (nextQuery: string, search: (value: string) => void) => {
// //       window.clearTimeout(timer.current)
// //       timer.current = window.setTimeout(() => search(nextQuery), DEBOUNCE_MS)
// //     },
// //     []
// //   )

// //   const { query, refine } = useSearchBox({ queryHook })
// //   const [inputValue, setInputValue] = useState(query)

// //   useEffect(() => () => window.clearTimeout(timer.current), [])

// //   // Follow the query when it changes elsewhere — cleared with the filters, or
// //   // arriving from the URL on load, which `routing` restores after mount.
// //   useEffect(() => {
// //     setInputValue(query)
// //   }, [query])

// //   const clear = () => {
// //     window.clearTimeout(timer.current)
// //     setInputValue("")
// //     refine("")
// //   }

// //   return (
// //     <div className="mb-6 flex items-center gap-x-3 border-b border-ui-border-base">
// //       <MagnifyingGlass className="shrink-0 text-ui-fg-muted" />
// //       <input
// //         type="search"
// //         value={inputValue}
// //         onChange={(event) => {
// //           setInputValue(event.target.value)
// //           refine(event.target.value)
// //         }}
// //         placeholder="Search products"
// //         aria-label="Search products"
// //         className="txt-medium w-full bg-transparent py-3 text-ui-fg-base outline-none placeholder:text-ui-fg-muted [&::-webkit-search-cancel-button]:hidden"
// //         data-testid="store-search-input"
// //       />
// //       {inputValue && (
// //         <button
// //           type="button"
// //           onClick={clear}
// //           aria-label="Clear search"
// //           className="shrink-0 text-ui-fg-muted hover:text-ui-fg-base"
// //           data-testid="store-search-clear"
// //         >
// //           <XMarkMini />
// //         </button>
// //       )}
// //     </div>
// //   )
// // }

// // export default StoreSearchBox


// "use client"

// import { MagnifyingGlass, XMarkMini } from "@medusajs/icons"
// import { useCallback, useEffect, useRef, useState } from "react"
// import { useSearchBox } from "react-instantsearch"

// const DEBOUNCE_MS = 250

// /**
//  * Free-text search over the listing, refining the same InstantSearch state the
//  * sidebar filters use. The input is held locally so typing stays responsive
//  * while the query itself is debounced.
//  */
// const StoreSearchBox = () => {
//   const timer = useRef<number | undefined>(undefined)

//   const queryHook = useCallback(
//     (nextQuery: string, search: (value: string) => void) => {
//       window.clearTimeout(timer.current)
//       timer.current = window.setTimeout(() => search(nextQuery), DEBOUNCE_MS)
//     },
//     []
//   )

//   const { query, refine } = useSearchBox({ queryHook })
//   const [inputValue, setInputValue] = useState(query)

//   useEffect(() => () => window.clearTimeout(timer.current), [])

//   // Follow query changes from filters clearing or URL state restoration.
//   useEffect(() => {
//     setInputValue(query)
//   }, [query])

//   const clear = () => {
//     window.clearTimeout(timer.current)
//     setInputValue("")
//     refine("")
//   }

//   return (
//     <div className="group mb-5 flex w-full min-w-0 items-center gap-2.5 rounded-2xl border border-[#e4dfd4] bg-[#fffefa] px-3 py-1 shadow-sm transition-all duration-300 ease-out hover:border-[#d4decf] hover:shadow-md focus-within:border-[#75967a] focus-within:ring-4 focus-within:ring-[#e6eee5] small:mb-6 small:gap-3 small:rounded-[1.35rem] small:px-4">
//       <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f4f1ea] text-[#3f5f45] transition-colors duration-200 group-focus-within:bg-[#edf3ed] group-focus-within:text-[#245d35] small:h-10 small:w-10">
//         <MagnifyingGlass className="h-[18px] w-[18px]" aria-hidden="true" />
//       </span>

//       <input
//         type="search"
//         value={inputValue}
//         onChange={(event) => {
//           setInputValue(event.target.value)
//           refine(event.target.value)
//         }}
//         placeholder="Search products"
//         aria-label="Search products"
//         className="txt-medium w-full min-w-0 border-0 bg-transparent py-3 text-sm font-semibold tracking-[-0.02em] text-[#171915] outline-none transition-colors duration-200 placeholder:font-medium placeholder:tracking-normal placeholder:text-[#96968d] focus:border-0 focus:outline-none focus:ring-0 small:py-3.5 small:text-base [&::-webkit-search-cancel-button]:hidden"
//         data-testid="store-search-input"
//       />

//       {inputValue && (
//         <button
//           type="button"
//           onClick={clear}
//           aria-label="Clear search"
//           className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-[#f2f0e9] text-[#60645b] transition-all duration-200 hover:border-[#d9e2d8] hover:bg-[#e9f0e8] hover:text-[#245d35] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9cb49f]"
//           data-testid="store-search-clear"
//         >
//           <XMarkMini aria-hidden="true" />
//         </button>
//       )}
//     </div>
//   )
// }

// export default StoreSearchBox

"use client"

import { MagnifyingGlass, XMarkMini } from "@medusajs/icons"
import { useCallback, useEffect, useRef, useState } from "react"
import { useSearchBox } from "react-instantsearch"

const DEBOUNCE_MS = 250

/**
 * Free-text search over the listing, refining the same InstantSearch state the
 * sidebar filters use. The input is held locally so typing stays responsive
 * while the query itself is debounced.
 */
const StoreSearchBox = () => {
  const timer = useRef<number | undefined>(undefined)

  const queryHook = useCallback(
    (nextQuery: string, search: (value: string) => void) => {
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => search(nextQuery), DEBOUNCE_MS)
    },
    []
  )

  const { query, refine } = useSearchBox({ queryHook })
  const [inputValue, setInputValue] = useState(query)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  // Follow query changes from filters clearing or URL state restoration.
  useEffect(() => {
    setInputValue(query)
  }, [query])

  const clear = () => {
    window.clearTimeout(timer.current)
    setInputValue("")
    refine("")
  }

  return (
    <div className="group mb-5 flex w-full min-w-0 items-center gap-2.5 rounded-2xl border border-[#e4dfd4] bg-[#fffefa] px-3 py-1 shadow-sm transition-all duration-300 ease-out hover:border-[#d4decf] hover:shadow-md focus-within:border-[#75967a] focus-within:ring-4 focus-within:ring-[#e6eee5] small:mb-6 small:gap-3 small:rounded-[1.35rem] small:px-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f4f1ea] text-[#3f5f45] transition-colors duration-200 group-focus-within:bg-[#edf3ed] group-focus-within:text-[#245d35] small:h-10 small:w-10">
        <MagnifyingGlass className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>

      <input
        type="search"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
          refine(event.target.value)
        }}
        placeholder="Search products"
        aria-label="Search products"
        className="txt-medium w-full min-w-0 border-0 bg-transparent py-3 text-sm font-semibold tracking-[-0.02em] text-[#171915] outline-none transition-colors duration-200 placeholder:font-medium placeholder:tracking-normal placeholder:text-[#96968d] focus:border-0 focus:outline-none focus:ring-0 small:py-3.5 small:text-base [&::-webkit-search-cancel-button]:hidden"
        data-testid="store-search-input"
      />

      {inputValue && (
        <button
          type="button"
          onClick={clear}
          aria-label="Clear search"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-[#f2f0e9] text-[#60645b] transition-all duration-200 hover:border-[#d9e2d8] hover:bg-[#e9f0e8] hover:text-[#245d35] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9cb49f]"
          data-testid="store-search-clear"
        >
          <XMarkMini aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export default StoreSearchBox
