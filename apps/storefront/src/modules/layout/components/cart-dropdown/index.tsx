// // "use client"

// // import {
// //   Popover,
// //   PopoverButton,
// //   PopoverPanel,
// //   Transition,
// // } from "@headlessui/react"
// // import { retrieveCart } from "@lib/data/cart"
// // import { CART_UPDATED_EVENT } from "@lib/util/cart-events"
// // import { convertToLocale } from "@lib/util/money"
// // import { HttpTypes } from "@medusajs/types"
// // import { Button } from "@modules/common/components/ui"
// // import DeleteButton from "@modules/common/components/delete-button"
// // import LineItemOptions from "@modules/common/components/line-item-options"
// // import LineItemPrice from "@modules/common/components/line-item-price"
// // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // import Thumbnail from "@modules/products/components/thumbnail"
// // import { usePathname } from "next/navigation"
// // import { Fragment, useEffect, useRef, useState } from "react"

// // const countItems = (cart?: HttpTypes.StoreCart | null) =>
// //   cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0

// // const CartDropdown = ({
// //   cart: serverCart,
// // }: {
// //   cart?: HttpTypes.StoreCart | null
// // }) => {
// //   // Statically rendered pages can't read the cart cookie, so the cart is loaded in the browser.
// //   const [clientCart, setClientCart] = useState<HttpTypes.StoreCart | null>(null)
// //   const cartState = serverCart ?? clientCart
// //   const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
// //     undefined
// //   )
// //   const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

// //   const open = () => setCartDropdownOpen(true)
// //   const close = () => setCartDropdownOpen(false)

// //   const totalItems = countItems(cartState)

// //   const subtotal = cartState?.subtotal ?? 0
// //   const itemRef = useRef<number>(totalItems || 0)

// //   useEffect(() => {
// //     if (serverCart) {
// //       return
// //     }

// //     let isInitialLoad = true
// //     const load = () =>
// //       retrieveCart()
// //         .then((cart) => {
// //           if (isInitialLoad) {
// //             // Don't auto-open the dropdown for items that were already in the cart.
// //             itemRef.current = countItems(cart)
// //             isInitialLoad = false
// //           }
// //           setClientCart(cart)
// //         })
// //         .catch(() => {})

// //     load()
// //     window.addEventListener(CART_UPDATED_EVENT, load)
// //     return () => window.removeEventListener(CART_UPDATED_EVENT, load)
// //   }, [serverCart])

// //   const timedOpen = () => {
// //     open()

// //     const timer = setTimeout(close, 5000)

// //     setActiveTimer(timer)
// //   }

// //   const openAndCancel = () => {
// //     if (activeTimer) {
// //       clearTimeout(activeTimer)
// //     }

// //     open()
// //   }

// //   // Clean up the timer when the component unmounts
// //   useEffect(() => {
// //     return () => {
// //       if (activeTimer) {
// //         clearTimeout(activeTimer)
// //       }
// //     }
// //   }, [activeTimer])

// //   const pathname = usePathname()

// //   // open cart dropdown when modifying the cart items, but only if we're not on the cart page
// //   useEffect(() => {
// //     if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
// //       timedOpen()
// //     }
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [totalItems, itemRef.current])

// //   return (
// //     <div
// //       className="h-full z-50"
// //       onMouseEnter={openAndCancel}
// //       onMouseLeave={close}
// //     >
// //       <Popover className="relative h-full">
// //         <PopoverButton className="h-full">
// //           <LocalizedClientLink
// //             className="hover:text-ui-fg-base"
// //             href="/cart"
// //             data-testid="nav-cart-link"
// //           >{`Cart (${totalItems})`}</LocalizedClientLink>
// //         </PopoverButton>
// //         <Transition
// //           show={cartDropdownOpen}
// //           as={Fragment}
// //           enter="transition ease-out duration-200"
// //           enterFrom="opacity-0 translate-y-1"
// //           enterTo="opacity-100 translate-y-0"
// //           leave="transition ease-in duration-150"
// //           leaveFrom="opacity-100 translate-y-0"
// //           leaveTo="opacity-0 translate-y-1"
// //         >
// //           <PopoverPanel
// //             static
// //             className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[420px] text-ui-fg-base"
// //             data-testid="nav-cart-dropdown"
// //           >
// //             <div className="p-4 flex items-center justify-center">
// //               <h3 className="text-large-semi">Cart</h3>
// //             </div>
// //             {cartState && cartState.items?.length ? (
// //               <>
// //                 <div className="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-px">
// //                   {cartState.items
// //                     .sort((a, b) => {
// //                       return (a.created_at ?? "") > (b.created_at ?? "")
// //                         ? -1
// //                         : 1
// //                     })
// //                     .map((item) => (
// //                       <div
// //                         className="grid grid-cols-[122px_1fr] gap-x-4"
// //                         key={item.id}
// //                         data-testid="cart-item"
// //                       >
// //                         <LocalizedClientLink
// //                           href={`/products/${item.product_handle}`}
// //                           className="w-24"
// //                         >
// //                           <Thumbnail
// //                             thumbnail={item.thumbnail}
// //                             images={item.variant?.product?.images}
// //                             size="square"
// //                           />
// //                         </LocalizedClientLink>
// //                         <div className="flex flex-col justify-between flex-1">
// //                           <div className="flex flex-col flex-1">
// //                             <div className="flex items-start justify-between">
// //                               <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-[180px]">
// //                                 <h3 className="text-base-regular overflow-hidden text-ellipsis">
// //                                   <LocalizedClientLink
// //                                     href={`/products/${item.product_handle}`}
// //                                     data-testid="product-link"
// //                                   >
// //                                     {item.title}
// //                                   </LocalizedClientLink>
// //                                 </h3>
// //                                 <LineItemOptions
// //                                   variant={item.variant}
// //                                   data-testid="cart-item-variant"
// //                                   data-value={item.variant}
// //                                 />
// //                                 <span
// //                                   data-testid="cart-item-quantity"
// //                                   data-value={item.quantity}
// //                                 >
// //                                   Quantity: {item.quantity}
// //                                 </span>
// //                               </div>
// //                               <div className="flex justify-end">
// //                                 <LineItemPrice
// //                                   item={item}
// //                                   style="tight"
// //                                   currencyCode={cartState.currency_code}
// //                                 />
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <DeleteButton
// //                             id={item.id}
// //                             className="mt-1"
// //                             data-testid="cart-item-remove-button"
// //                           >
// //                             Remove
// //                           </DeleteButton>
// //                         </div>
// //                       </div>
// //                     ))}
// //                 </div>
// //                 <div className="p-4 flex flex-col gap-y-4 text-small-regular">
// //                   <div className="flex items-center justify-between">
// //                     <span className="text-ui-fg-base font-semibold">
// //                       Subtotal{" "}
// //                       <span className="font-normal">(excl. taxes)</span>
// //                     </span>
// //                     <span
// //                       className="text-large-semi"
// //                       data-testid="cart-subtotal"
// //                       data-value={subtotal}
// //                     >
// //                       {convertToLocale({
// //                         amount: subtotal,
// //                         currency_code: cartState.currency_code,
// //                       })}
// //                     </span>
// //                   </div>
// //                   <LocalizedClientLink href="/cart" passHref>
// //                     <Button
// //                       className="w-full"
// //                       size="large"
// //                       data-testid="go-to-cart-button"
// //                     >
// //                       Go to cart
// //                     </Button>
// //                   </LocalizedClientLink>
// //                 </div>
// //               </>
// //             ) : (
// //               <div>
// //                 <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
// //                   <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
// //                     <span>0</span>
// //                   </div>
// //                   <span>Your shopping bag is empty.</span>
// //                   <div>
// //                     <LocalizedClientLink href="/store">
// //                       <>
// //                         <span className="sr-only">Go to all products page</span>
// //                         <Button onClick={close}>Explore products</Button>
// //                       </>
// //                     </LocalizedClientLink>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </PopoverPanel>
// //         </Transition>
// //       </Popover>
// //     </div>
// //   )
// // }

// // export default CartDropdown


// "use client"

// import {
//   Popover,
//   PopoverButton,
//   PopoverPanel,
//   Transition,
// } from "@headlessui/react"
// import { retrieveCart } from "@lib/data/cart"
// import { CART_UPDATED_EVENT } from "@lib/util/cart-events"
// import { convertToLocale } from "@lib/util/money"
// import { HttpTypes } from "@medusajs/types"
// import { Button } from "@modules/common/components/ui"
// import DeleteButton from "@modules/common/components/delete-button"
// import LineItemOptions from "@modules/common/components/line-item-options"
// import LineItemPrice from "@modules/common/components/line-item-price"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Thumbnail from "@modules/products/components/thumbnail"
// import { usePathname } from "next/navigation"
// import { Fragment, useEffect, useRef, useState } from "react"

// const countItems = (cart?: HttpTypes.StoreCart | null) =>
//   cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0

// const CartDropdown = ({
//   cart: serverCart,
// }: {
//   cart?: HttpTypes.StoreCart | null
// }) => {
//   // Statically rendered pages can't read the cart cookie, so the cart is loaded in the browser.
//   const [clientCart, setClientCart] = useState<HttpTypes.StoreCart | null>(null)
//   const cartState = serverCart ?? clientCart
//   const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
//     undefined
//   )
//   const [cartDropdownOpen, setCartDropdownOpen] = useState(false)
//   const [cartBump, setCartBump] = useState(false)

//   const open = () => setCartDropdownOpen(true)
//   const close = () => setCartDropdownOpen(false)

//   const totalItems = countItems(cartState)

//   const subtotal = cartState?.subtotal ?? 0
//   const itemRef = useRef<number>(totalItems || 0)

//   useEffect(() => {
//     if (serverCart) {
//       return
//     }

//     let isInitialLoad = true
//     const load = () =>
//       retrieveCart()
//         .then((cart) => {
//           if (isInitialLoad) {
//             // Don't auto-open the dropdown for items that were already in the cart.
//             itemRef.current = countItems(cart)
//             isInitialLoad = false
//           }
//           setClientCart(cart)
//         })
//         .catch(() => {})

//     load()
//     window.addEventListener(CART_UPDATED_EVENT, load)
//     return () => window.removeEventListener(CART_UPDATED_EVENT, load)
//   }, [serverCart])

//   useEffect(() => {
//     const animateCart = () => {
//       setCartBump(true)
//       const resetTimer = window.setTimeout(() => setCartBump(false), 650)
//       window.setTimeout(() => window.clearTimeout(resetTimer), 650)
//     }

//     window.addEventListener(CART_UPDATED_EVENT, animateCart)
//     return () => window.removeEventListener(CART_UPDATED_EVENT, animateCart)
//   }, [])

//   const timedOpen = () => {
//     open()

//     const timer = setTimeout(close, 5000)

//     setActiveTimer(timer)
//   }

//   const openAndCancel = () => {
//     if (activeTimer) {
//       clearTimeout(activeTimer)
//     }

//     open()
//   }

//   // Clean up the timer when the component unmounts
//   useEffect(() => {
//     return () => {
//       if (activeTimer) {
//         clearTimeout(activeTimer)
//       }
//     }
//   }, [activeTimer])

//   const pathname = usePathname()

//   // open cart dropdown when modifying the cart items, but only if we're not on the cart page
//   useEffect(() => {
//     const previousTotal = itemRef.current

//     if (previousTotal === totalItems) {
//       return
//     }

//     itemRef.current = totalItems

//     if (totalItems > previousTotal) {
//       setCartBump(true)
//       const resetTimer = window.setTimeout(() => setCartBump(false), 650)

//       if (!pathname.includes("/cart")) {
//         timedOpen()
//       }

//       return () => window.clearTimeout(resetTimer)
//     }

//     if (!pathname.includes("/cart")) {
//       timedOpen()
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [totalItems, pathname])

//   return (
//     <div
//       className="h-full z-50"
//       onMouseEnter={openAndCancel}
//       onMouseLeave={close}
//     >
//       <Popover className="relative h-full">
//           <PopoverButton className="h-full">
//             <LocalizedClientLink
//             className={`inline-flex items-center rounded-full px-3 py-2 transition-all duration-200 hover:opacity-100 ${
//               pathname.includes("/cart")
//                 ? "bg-[#800020] text-[#f3f0e7] shadow-sm ring-1 ring-[#800020]"
//                 : ""
//             } ${cartBump ? "cart-bump" : ""}`}
//             href="/cart"
//             data-testid="nav-cart-link"
//           >{`Cart (${totalItems})`}</LocalizedClientLink>
//         </PopoverButton>
//         <Transition
//           show={cartDropdownOpen}
//           as={Fragment}
//           enter="transition ease-out duration-200"
//           enterFrom="opacity-0 translate-y-1"
//           enterTo="opacity-100 translate-y-0"
//           leave="transition ease-in duration-150"
//           leaveFrom="opacity-100 translate-y-0"
//           leaveTo="opacity-0 translate-y-1"
//         >
//           <PopoverPanel
//             static
//             className="hidden small:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[420px] text-ui-fg-base"
//             data-testid="nav-cart-dropdown"
//           >
//             <div className="p-4 flex items-center justify-center">
//               <h3 className="text-large-semi">Cart</h3>
//             </div>
//             {cartState && cartState.items?.length ? (
//               <>
//                 <div className="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-px">
//                   {cartState.items
//                     .sort((a, b) => {
//                       return (a.created_at ?? "") > (b.created_at ?? "")
//                         ? -1
//                         : 1
//                     })
//                     .map((item) => (
//                       <div
//                         className="grid grid-cols-[122px_1fr] gap-x-4"
//                         key={item.id}
//                         data-testid="cart-item"
//                       >
//                         <LocalizedClientLink
//                           href={`/products/${item.product_handle}`}
//                           className="w-24"
//                         >
//                           <Thumbnail
//                             thumbnail={item.thumbnail}
//                             images={item.variant?.product?.images}
//                             size="square"
//                           />
//                         </LocalizedClientLink>
//                         <div className="flex flex-col justify-between flex-1">
//                           <div className="flex flex-col flex-1">
//                             <div className="flex items-start justify-between">
//                               <div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-[180px]">
//                                 <h3 className="text-base-regular overflow-hidden text-ellipsis">
//                                   <LocalizedClientLink
//                                     href={`/products/${item.product_handle}`}
//                                     data-testid="product-link"
//                                   >
//                                     {item.title}
//                                   </LocalizedClientLink>
//                                 </h3>
//                                 <LineItemOptions
//                                   variant={item.variant}
//                                   data-testid="cart-item-variant"
//                                   data-value={item.variant}
//                                 />
//                                 <span
//                                   data-testid="cart-item-quantity"
//                                   data-value={item.quantity}
//                                 >
//                                   Quantity: {item.quantity}
//                                 </span>
//                               </div>
//                               <div className="flex justify-end">
//                                 <LineItemPrice
//                                   item={item}
//                                   style="tight"
//                                   currencyCode={cartState.currency_code}
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                           <DeleteButton
//                             id={item.id}
//                             className="mt-1"
//                             data-testid="cart-item-remove-button"
//                           >
//                             Remove
//                           </DeleteButton>
//                         </div>
//                       </div>
//                     ))}
//                 </div>
//                 <div className="p-4 flex flex-col gap-y-4 text-small-regular">
//                   <div className="flex items-center justify-between">
//                     <span className="text-ui-fg-base font-semibold">
//                       Subtotal{" "}
//                       <span className="font-normal">(excl. taxes)</span>
//                     </span>
//                     <span
//                       className="text-large-semi"
//                       data-testid="cart-subtotal"
//                       data-value={subtotal}
//                     >
//                       {convertToLocale({
//                         amount: subtotal,
//                         currency_code: cartState.currency_code,
//                       })}
//                     </span>
//                   </div>
//                   <LocalizedClientLink href="/cart" passHref>
//                     <Button
//                       className="w-full !text-white font-bold hover:!text-white"
//                       size="large"
//                       data-testid="go-to-cart-button"
//                     >
//                       Go to cart
//                     </Button>
//                   </LocalizedClientLink>
//                 </div>
//               </>
//             ) : (
//               <div>
//                 <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
//                   <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
//                     <span>0</span>
//                   </div>
//                   <span>Your shopping bag is empty.</span>
//                   <div>
//                     <LocalizedClientLink href="/store">
//                       <>
//                         <span className="sr-only">Go to all products page</span>
//                         <Button onClick={close}>Explore products</Button>
//                       </>
//                     </LocalizedClientLink>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </PopoverPanel>
//         </Transition>
//       </Popover>
//     </div>
//   )
// }

// export default CartDropdown


"use client"

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import { retrieveCart } from "@lib/data/cart"
import { CART_UPDATED_EVENT } from "@lib/util/cart-events"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@modules/common/components/ui"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

const countItems = (cart?: HttpTypes.StoreCart | null) =>
  cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0

const CartDropdown = ({
  cart: serverCart,
}: {
  cart?: HttpTypes.StoreCart | null
}) => {
  const [clientCart, setClientCart] = useState<HttpTypes.StoreCart | null>(null)
  const cartState = serverCart ?? clientCart
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  )
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)
  const [cartBump, setCartBump] = useState(false)

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const totalItems = countItems(cartState)
  const subtotal = cartState?.subtotal ?? 0
  const itemRef = useRef<number>(totalItems || 0)

  useEffect(() => {
    if (serverCart) {
      return
    }

    let isInitialLoad = true

    const load = () =>
      retrieveCart()
        .then((cart) => {
          if (isInitialLoad) {
            itemRef.current = countItems(cart)
            isInitialLoad = false
          }
          setClientCart(cart)
        })
        .catch(() => {})

    load()
    window.addEventListener(CART_UPDATED_EVENT, load)
    return () => window.removeEventListener(CART_UPDATED_EVENT, load)
  }, [serverCart])

  useEffect(() => {
    const animateCart = () => {
      setCartBump(true)
      const resetTimer = window.setTimeout(() => setCartBump(false), 650)
      window.setTimeout(() => window.clearTimeout(resetTimer), 650)
    }

    window.addEventListener(CART_UPDATED_EVENT, animateCart)
    return () => window.removeEventListener(CART_UPDATED_EVENT, animateCart)
  }, [])

  const timedOpen = () => {
    open()
    const timer = setTimeout(close, 5000)
    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }
    open()
  }

  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  const pathname = usePathname()
  const isCartPage = pathname.includes("/cart")

  // Close the dropdown when navigation lands on the cart page.
  useEffect(() => {
    if (isCartPage) {
      setCartDropdownOpen(false)
    }
  }, [isCartPage])

  // Keep the existing auto-open behavior when cart contents change off the cart page.
  useEffect(() => {
    const previousTotal = itemRef.current

    if (previousTotal === totalItems) {
      return
    }

    itemRef.current = totalItems

    if (totalItems > previousTotal) {
      setCartBump(true)
      const resetTimer = window.setTimeout(() => setCartBump(false), 650)

      if (!isCartPage) {
        timedOpen()
      }

      return () => window.clearTimeout(resetTimer)
    }

    if (!isCartPage) {
      timedOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, pathname])

  return (
    <div
      className="z-50 h-full"
      onMouseEnter={() => {
        if (!isCartPage) {
          openAndCancel()
        }
      }}
      onMouseLeave={close}
    >
      <Popover className="relative h-full">
        <PopoverButton className="h-full">
          <LocalizedClientLink
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800020]/40 focus-visible:ring-offset-2 ${
              isCartPage
                ? "bg-[#800020] text-white shadow-sm ring-1 ring-[#800020]"
                : "text-[#800020] hover:bg-[#800020]/5"
            } ${cartBump ? "cart-bump" : ""}`}
            href="/cart"
            aria-label={`Cart (${totalItems} items)`}
            aria-current={isCartPage ? "page" : undefined}
            data-testid="nav-cart-link"
          >
            <span className="relative inline-flex h-6 w-6 items-center justify-center">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M3 4h2l2.2 10.8a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              <span
                className={`absolute -right-2 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-semibold leading-none tabular-nums ring-2 ${
                  isCartPage
                    ? "bg-[#f3f0e7] text-[#800020] ring-[#800020]"
                    : "bg-[#800020] text-white ring-[#fffdf9]"
                }`}
              >
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            </span>
          </LocalizedClientLink>
        </PopoverButton>

        <Transition
          show={cartDropdownOpen && !isCartPage}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            static
            className={`absolute right-0 top-full z-50 hidden max-h-[min(78vh,640px)] w-[min(92vw,420px)] overflow-hidden rounded-2xl border bg-[#fffdf9] text-ui-fg-base transition-[border-color,box-shadow] duration-300 ease-out small:block ${
              cartDropdownOpen
                ? "border-[#800020]/50 shadow-[0_16px_40px_rgba(45,10,24,0.16)]"
                : "border-[#800020]/25 shadow-[0_12px_32px_rgba(45,10,24,0.10)]"
            }`}
            data-testid="nav-cart-dropdown"
          >
            <div className="flex items-center justify-center border-b border-[#800020]/10 px-5 py-4">
              <h3 className="text-large-semi">Cart</h3>
            </div>

            {cartState && cartState.items?.length ? (
              <>
                <div className="grid max-h-[min(46vh,360px)] grid-cols-1 gap-y-5 overflow-y-auto overscroll-contain px-4 py-4 no-scrollbar">
                  {cartState.items
                    .sort((a, b) =>
                      (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                    )
                    .map((item) => (
                      <div
                        className="grid grid-cols-[84px_minmax(0,1fr)] gap-x-3"
                        key={item.id}
                        data-testid="cart-item"
                      >
                        <LocalizedClientLink
                          href={`/products/${item.product_handle}`}
                          className="w-[84px] shrink-0"
                        >
                          <Thumbnail
                            thumbnail={item.thumbnail}
                            images={item.variant?.product?.images}
                            size="square"
                          />
                        </LocalizedClientLink>

                        <div className="flex min-w-0 flex-col justify-between">
                          <div className="flex min-w-0 flex-1 flex-col">
                            <div className="flex min-w-0 items-start justify-between gap-3">
                              <div className="flex min-w-0 flex-1 flex-col">
                                <h3 className="min-w-0 break-words text-base-regular leading-5">
                                  <LocalizedClientLink
                                    href={`/products/${item.product_handle}`}
                                    data-testid="product-link"
                                  >
                                    {item.title}
                                  </LocalizedClientLink>
                                </h3>

                                <div className="mt-1 break-words text-xs leading-5 text-ui-fg-subtle">
                                  <LineItemOptions
                                    variant={item.variant}
                                    data-testid="cart-item-variant"
                                    data-value={item.variant}
                                  />
                                </div>

                                <span
                                  className="mt-0.5 text-xs leading-5 text-ui-fg-subtle"
                                  data-testid="cart-item-quantity"
                                  data-value={item.quantity}
                                >
                                  Quantity: {item.quantity}
                                </span>
                              </div>

                              <div className="shrink-0 whitespace-nowrap text-right">
                                <LineItemPrice
                                  item={item}
                                  style="tight"
                                  currencyCode={cartState.currency_code}
                                />
                              </div>
                            </div>
                          </div>

                          <DeleteButton
                            id={item.id}
                            className="mt-3 self-start"
                            data-testid="cart-item-remove-button"
                          >
                            Remove
                          </DeleteButton>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex flex-col gap-y-4 border-t border-[#800020]/10 p-4 text-small-regular">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-ui-fg-base">
                      Subtotal{" "}
                      <span className="font-normal text-ui-fg-subtle">
                        (excl. taxes)
                      </span>
                    </span>

                    <span
                      className="shrink-0 text-large-semi"
                      data-testid="cart-subtotal"
                      data-value={subtotal}
                    >
                      {convertToLocale({
                        amount: subtotal,
                        currency_code: cartState.currency_code,
                      })}
                    </span>
                  </div>

                  <LocalizedClientLink href="/cart" passHref>
                    <Button
                      className="w-full"
                      size="large"
                      data-testid="go-to-cart-button"
                    >
                      Go to cart
                    </Button>
                  </LocalizedClientLink>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-y-4 px-5 py-14 text-center">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#800020] text-small-regular text-[#f3f0e7]">
                  <span>0</span>
                </div>
                <span>Your shopping bag is empty.</span>
                <LocalizedClientLink href="/store">
                  <>
                    <span className="sr-only">Go to all products page</span>
                    <Button onClick={close}>Explore products</Button>
                  </>
                </LocalizedClientLink>
              </div>
            )}
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown