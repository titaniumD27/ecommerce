
"use client"

import { useRef } from "react"
import type { SearchClient, Hit } from "instantsearch.js"
import {
  Configure,
  InstantSearch,
  useHits,
  useInstantSearch,
} from "react-instantsearch"

import {
  PRODUCT_INDEX_NAME,
  searchClient,
} from "@lib/search-client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text } from "@modules/common/components/ui"
// import Thumbnail from "@modules/products/components/thumbnail"
import Image from "next/image"

import HitPrice, {
  HitPricing,
} from "@modules/store/components/store-hits/price"

const PRODUCT_LIMIT = 12

type ProductHit = Hit<
  {
    title: string | null
    handle: string | null
    thumbnail: string | null
  } & HitPricing
>

type BestsellersProps = {
  currencyCode: string
}

const BestsellerProducts = ({
  currencyCode,
}: BestsellersProps) => {
  const { items } = useHits<ProductHit>()
  const { status, error } = useInstantSearch()

  const sliderRef = useRef<HTMLUListElement>(null)

  // Move exactly one product at a time
  const slide = (direction: -1 | 1) => {
    const slider = sliderRef.current

    if (!slider) return

    const firstCard = slider.querySelector<HTMLElement>(
      "[data-product-card]"
    )

    if (!firstCard) return

    const gap = parseFloat(
      window.getComputedStyle(slider).columnGap || "0"
    )

    const cardWidth = firstCard.getBoundingClientRect().width

    slider.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    })
  }

  const isLoading =
    status === "loading" || status === "stalled"

  return (
    <section className="w-full bg-white py-6 md:py-16">

      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between px-4 md:px-8">

        <h2 className="text-3xl font-bold uppercase tracking-tight text-black md:text-2xl">
          Bestsellers
        </h2>

        <LocalizedClientLink
          href="/store"
          className="group flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-black md:text-xs"
        >
          All Collections

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </LocalizedClientLink>

      </div>

      {/* PRODUCT CAROUSEL */}
      <div className="w-full px-4 md:px-8">

        <ul
          ref={sliderRef}
          className="
            flex
            w-full
            gap-3
            overflow-x-auto
            snap-x
            snap-mandatory
            scroll-smooth
            pb-2
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            md:gap-4
          "
        >

          {/* LOADING SKELETON */}
          {isLoading && !items.length ? (
            Array.from({ length: 5 }).map((_, index) => (
              <li
                key={index}
                className="
                  min-w-0
                  basis-[calc((100%-12px)/2)]
                  shrink-0
                  snap-start
                  small:basis-[calc((100%-64px)/5)]
                  animate-pulse
                "
              >
                <div className="aspect-[3/4] w-full bg-[#f1f1f1]" />

                <div className="mt-4 h-3 w-3/4 bg-[#f1f1f1]" />

                <div className="mt-2 h-3 w-1/3 bg-[#f1f1f1]" />
              </li>
            ))
          ) : items.length > 0 ? (

            /* PRODUCTS */
            items.map((hit) =>
              hit.handle ? (
                <li
                  key={hit.objectID}
                  data-product-card
                  className="
                    min-w-0
                    basis-[calc((100%-12px)/2)]
                    shrink-0
                    snap-start
                    small:basis-[calc((100%-64px)/5)]
                  "
                >

                  <LocalizedClientLink
                    href={`/products/${hit.handle}`}
                    className="group block"
                  >

                    {/* IMAGE */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f5f4f1]">
  {hit.thumbnail ? (
    <Image
      src={hit.thumbnail}
      alt={hit.title || "Product image"}
      fill
      sizes="(max-width: 768px) 50vw, 20vw"
      quality={75}
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
      No image
    </div>
  )}
</div>

                    {/* PRODUCT NAME */}
                    <div className="mt-4">

                      <Text
                        className="
                          line-clamp-2
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-wide
                          text-black
                          md:text-xs
                        "
                      >
                        {hit.title}
                      </Text>

                      {/* PRICE */}
                      <div className="mt-2 text-xs font-semibold text-black md:text-sm">

                        <HitPrice
                          hit={hit}
                          currencyCode={currencyCode}
                        />

                      </div>

                    </div>

                  </LocalizedClientLink>

                </li>
              ) : null
            )

          ) : (

            /* EMPTY STATE */
            <li className="w-full py-12 text-center">
              <Text className="text-sm text-ui-fg-subtle">
                {status === "error"
                  ? error?.message || "Unable to load products."
                  : "No products available."}
              </Text>
            </li>

          )}

        </ul>

        {/* NAVIGATION BUTTONS */}
        {items.length > 0 && (
          <div className="mt-6 flex items-center justify-center gap-3">

            <button
              type="button"
              onClick={() => slide(-1)}
              aria-label="Previous product"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-black/20
                text-lg text-black
                transition-all duration-200
                hover:border-black
                hover:bg-black
                hover:text-white
                active:scale-95
              "
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => slide(1)}
              aria-label="Next product"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-black/20
                text-lg text-black
                transition-all duration-200
                hover:border-black
                hover:bg-black
                hover:text-white
                active:scale-95
              "
            >
              →
            </button>

          </div>
        )}

      </div>

    </section>
  )
}

// MAIN COMPONENT
const Bestsellers = ({
  currencyCode,
}: BestsellersProps) => {
  return (
    <InstantSearch
      indexName={PRODUCT_INDEX_NAME}
      searchClient={searchClient as unknown as SearchClient}
    >
      <Configure hitsPerPage={PRODUCT_LIMIT} />

      <BestsellerProducts currencyCode={currencyCode} />

    </InstantSearch>
  )
}

export default Bestsellers
