// "use client"

// import type { SearchClient } from "instantsearch.js"
// import { Configure, InstantSearch } from "react-instantsearch"

// import { PRODUCT_INDEX_NAME, searchClient } from "@lib/search-client"
// import StoreHits from "@modules/store/components/store-hits"
// import StoreRefinements from "@modules/store/components/store-refinements"
// import StoreSearchBox from "@modules/store/components/store-search-box"

// const PRODUCT_LIMIT = 12

// const StoreTemplate = ({ currencyCode }: { currencyCode: string }) => {
//   return (
//     <div className="pt-16 pb-6 content-container" data-testid="category-container">
//       <div className="mb-8 text-2xl-semi">
//         <h1 data-testid="store-page-title">DISCOVER</h1>
//       </div>

//       <div className="flex flex-col small:flex-row small:items-start">
//         <InstantSearch
//           indexName={PRODUCT_INDEX_NAME}
//           searchClient={searchClient as unknown as SearchClient}
//           routing
//           future={{ preserveSharedStateOnUnmount: true }}
//         >
//           <Configure hitsPerPage={PRODUCT_LIMIT} />
//           {/* <StoreRefinements currencyCode={currencyCode} /> */}
//           <div className="w-full min-w-0">
//             <StoreSearchBox />
//             <StoreHits
//               hitsPerPage={PRODUCT_LIMIT}
//               currencyCode={currencyCode}
//             />
//           </div>
//         </InstantSearch>
//       </div>
//     </div>
//   )
// }

// export default StoreTemplate

"use client"

import type { SearchClient } from "instantsearch.js"
import { Configure, InstantSearch } from "react-instantsearch"

import { PRODUCT_INDEX_NAME, searchClient } from "@lib/search-client"
import StoreHits from "@modules/store/components/store-hits"
import StoreSearchBox from "@modules/store/components/store-search-box"

const PRODUCT_LIMIT = 12

const StoreTemplate = ({ currencyCode }: { currencyCode: string }) => {
  return (
    <div
      className="content-container w-full pb-8 pt-20 text-[#171915] small:pb-10 small:pt-24"
      data-testid="category-container"
    >
      <div className="mb-5 flex items-end justify-between small:mb-7">
        <h1
          className="m-0 text-[2.35rem] font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#11120f] small:text-5xl medium:text-6xl"
          data-testid="store-page-title"
        >
          DISCOVER
        </h1>
        <span
          className="mb-1 grid grid-cols-2 gap-[3px] p-2 text-[#171915] small:mb-2"
          aria-hidden="true"
        >
          <span className="h-[3px] w-[3px] rounded-full bg-current" />
          <span className="h-[3px] w-[3px] rounded-full bg-current" />
          <span className="h-[3px] w-[3px] rounded-full bg-current" />
          <span className="h-[3px] w-[3px] rounded-full bg-current" />
        </span>
      </div>

      <InstantSearch
        indexName={PRODUCT_INDEX_NAME}
        searchClient={searchClient as unknown as SearchClient}
        routing
        future={{ preserveSharedStateOnUnmount: true }}
      >
        <Configure hitsPerPage={PRODUCT_LIMIT} />
        {/* StoreRefinements remains disabled, as in the existing page. */}
        <div className="w-full min-w-0">
          <StoreSearchBox />
          <StoreHits
            hitsPerPage={PRODUCT_LIMIT}
            currencyCode={currencyCode}
          />
        </div>
      </InstantSearch>
    </div>
  )
}

export default StoreTemplate