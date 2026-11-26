// // // // // // // // import { Suspense } from "react"

// // // // // // // // import { listLocales } from "@lib/data/locales"
// // // // // // // // import { getLocale } from "@lib/data/locale-actions"
// // // // // // // // import { listRegions } from "@lib/data/regions"
// // // // // // // // import { StoreRegion } from "@medusajs/types"
// // // // // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // // // // import CartButton from "@modules/layout/components/cart-button"
// // // // // // // // import Search from "@modules/layout/components/search"
// // // // // // // // import SideMenu from "@modules/layout/components/side-menu"

// // // // // // // // export default async function Nav() {
// // // // // // // //   const [regions, locales, currentLocale] = await Promise.all([
// // // // // // // //     listRegions().then((regions: StoreRegion[]) => regions),
// // // // // // // //     listLocales(),
// // // // // // // //     getLocale(),
// // // // // // // //   ])

// // // // // // // //   return (
// // // // // // // //     <div className="sticky top-0 inset-x-0 z-50 group">
// // // // // // // //       <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
// // // // // // // //         <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
// // // // // // // //           <div className="flex-1 basis-0 h-full flex items-center">
// // // // // // // //             <div className="h-full">
// // // // // // // //               <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           <div className="flex items-center h-full">
// // // // // // // //             <LocalizedClientLink
// // // // // // // //               href="/"
// // // // // // // //               className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
// // // // // // // //               data-testid="nav-store-link"
// // // // // // // //             >
// // // // // // // //               KHOJ
// // // // // // // //             </LocalizedClientLink>
// // // // // // // //           </div>

// // // // // // // //           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
// // // // // // // //             <Search />
// // // // // // // //             <div className="hidden small:flex items-center gap-x-6 h-full">
// // // // // // // //               <LocalizedClientLink
// // // // // // // //                 className="hover:text-ui-fg-base"
// // // // // // // //                 href="/account"
// // // // // // // //                 data-testid="nav-account-link"
// // // // // // // //               >
// // // // // // // //                 Account
// // // // // // // //               </LocalizedClientLink>
// // // // // // // //             </div>
// // // // // // // //             <Suspense
// // // // // // // //               fallback={
// // // // // // // //                 <LocalizedClientLink
// // // // // // // //                   className="hover:text-ui-fg-base flex gap-2"
// // // // // // // //                   href="/cart"
// // // // // // // //                   data-testid="nav-cart-link"
// // // // // // // //                 >
// // // // // // // //                   Cart (0)
// // // // // // // //                 </LocalizedClientLink>
// // // // // // // //               }
// // // // // // // //             >
// // // // // // // //               <CartButton />
// // // // // // // //             </Suspense>
// // // // // // // //           </div>
// // // // // // // //         </nav>
// // // // // // // //       </header>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }


// // // // // // // import { Suspense } from "react"

// // // // // // // import { listLocales } from "@lib/data/locales"
// // // // // // // import { getLocale } from "@lib/data/locale-actions"
// // // // // // // import { listRegions } from "@lib/data/regions"
// // // // // // // import { StoreRegion } from "@medusajs/types"
// // // // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // // // import CartButton from "@modules/layout/components/cart-button"
// // // // // // // import Search from "@modules/layout/components/search"
// // // // // // // import SideMenu from "@modules/layout/components/side-menu"

// // // // // // // export default async function Nav() {
// // // // // // //   const [regions, locales, currentLocale] = await Promise.all([
// // // // // // //     listRegions().then((regions: StoreRegion[]) => regions),
// // // // // // //     listLocales(),
// // // // // // //     getLocale(),
// // // // // // //   ])

// // // // // // //   return (
// // // // // // //     <div className="sticky top-0 inset-x-0 z-50 group">
// // // // // // //       <header className="relative h-16 mx-auto border-b duration-200 bg-neutral-950 border-neutral-800 text-neutral-300">
// // // // // // //         <nav className="content-container txt-xsmall-plus flex items-center justify-between w-full h-full text-small-regular px-6 md:px-8">
          
// // // // // // //           {/* Left: Side Menu */}
// // // // // // //           <div className="flex-1 basis-0 h-full flex items-center">
// // // // // // //             <div className="h-full flex items-center text-neutral-400 hover:text-white transition-colors">
// // // // // // //               <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Center: Brand Name */}
// // // // // // //           <div className="flex items-center h-full">
// // // // // // //             <LocalizedClientLink
// // // // // // //               href="/"
// // // // // // //               className="font-bold tracking-tight text-lg text-white hover:text-neutral-300 transition-colors uppercase"
// // // // // // //               data-testid="nav-store-link"
// // // // // // //             >
// // // // // // //               khoj
// // // // // // //             </LocalizedClientLink>
// // // // // // //           </div>

// // // // // // //           {/* Right: Search, Account, Cart */}
// // // // // // //           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
// // // // // // //             <div className="text-neutral-400 hover:text-white transition-colors">
// // // // // // //               <Search />
// // // // // // //             </div>
            
// // // // // // //             <div className="hidden small:flex items-center gap-x-6 h-full">
// // // // // // //               <LocalizedClientLink
// // // // // // //                 className="text-neutral-400 hover:text-white transition-colors font-medium"
// // // // // // //                 href="/account"
// // // // // // //                 data-testid="nav-account-link"
// // // // // // //               >
// // // // // // //                 Account
// // // // // // //               </LocalizedClientLink>
// // // // // // //             </div>

// // // // // // //             <Suspense
// // // // // // //               fallback={
// // // // // // //                 <LocalizedClientLink
// // // // // // //                   className="text-neutral-400 hover:text-white transition-colors flex gap-2 font-medium"
// // // // // // //                   href="/cart"
// // // // // // //                   data-testid="nav-cart-link"
// // // // // // //                 >
// // // // // // //                   Cart (0)
// // // // // // //                 </LocalizedClientLink>
// // // // // // //               }
// // // // // // //             >
// // // // // // //               <CartButton />
// // // // // // //             </Suspense>
// // // // // // //           </div>

// // // // // // //         </nav>
// // // // // // //       </header>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }



// // // // // // import { Suspense } from "react"
// // // // // // import Image from "next/image"

// // // // // // import { listLocales } from "@lib/data/locales"
// // // // // // import { getLocale } from "@lib/data/locale-actions"
// // // // // // import { listRegions } from "@lib/data/regions"
// // // // // // import { StoreRegion } from "@medusajs/types"
// // // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // // import CartButton from "@modules/layout/components/cart-button"
// // // // // // import Search from "@modules/layout/components/search"
// // // // // // import SideMenu from "@modules/layout/components/side-menu"

// // // // // // export default async function Nav() {
// // // // // //   const [regions, locales, currentLocale] = await Promise.all([
// // // // // //     listRegions().then((regions: StoreRegion[]) => regions),
// // // // // //     listLocales(),
// // // // // //     getLocale(),
// // // // // //   ])

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* Pure CSS scroll detection & animation (keeps this as a single Server Component file) */}
// // // // // //       <style>{`
// // // // // //         @keyframes navScrollAnimation {
// // // // // //           to {
// // // // // //             background-color: rgba(255, 255, 255, 0.98);
// // // // // //             backdrop-filter: blur(8px);
// // // // // //             border-bottom-color: #e5e5e5;
// // // // // //             box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
// // // // // //             color: #171717;
// // // // // //           }
// // // // // //         }
// // // // // //         .nav-scroll-container {
// // // // // //           animation: navScrollAnimation linear both;
// // // // // //           animation-timeline: scroll();
// // // // // //           animation-range: 0px 80px;
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       <div className="fixed top-0 inset-x-0 z-50 nav-scroll-container bg-transparent text-white border-b border-transparent transition-colors duration-300">
// // // // // //         <header className="relative h-16 mx-auto">
// // // // // //           <nav className="content-container txt-xsmall-plus flex items-center justify-between w-full h-full text-small-regular px-6 md:px-8">
            
// // // // // //             {/* Left: Side Menu (Hamburger icon on mobile, text on desktop, inherits text color) */}
// // // // // //             <div className="flex-1 basis-0 h-full flex items-center">
// // // // // //               <div className="h-full flex items-center hover:opacity-75 transition-opacity">
// // // // // //                 <SideMenu
// // // // // //                   regions={regions}
// // // // // //                   locales={locales}
// // // // // //                   currentLocale={currentLocale}
// // // // // //                 />
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Center: Brand Logo */}
// // // // // //             <div className="flex items-center h-full">
// // // // // //               <LocalizedClientLink
// // // // // //                 href="/"
// // // // // //                 className="flex items-center hover:opacity-80 transition-opacity"
// // // // // //                 data-testid="nav-store-link"
// // // // // //               >
// // // // // //                 {/* 
// // // // // //                   Assumes your logo at /public/logo.svg is black. 
// // // // // //                   'brightness-0 invert' turns it white at the top of the page.
// // // // // //                 */}
// // // // // //                 <Image
// // // // // //                   src="/khojnav1.png"
// // // // // //                   alt="KHOJ"
// // // // // //                   width={100}
// // // // // //                   height={32}
// // // // // //                   priority
// // // // // //                   className="h-7 w-auto object-contain "
// // // // // //                 />
// // // // // //               </LocalizedClientLink>
// // // // // //             </div>

// // // // // //             {/* Right: Search, Account, Cart */}
// // // // // //             <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
// // // // // //               <div className="hover:opacity-75 transition-opacity">
// // // // // //                 <Search />
// // // // // //               </div>

// // // // // //               <div className="hidden small:flex items-center gap-x-6 h-full">
// // // // // //                 <LocalizedClientLink
// // // // // //                   className="hover:opacity-75 transition-opacity font-medium"
// // // // // //                   href="/account"
// // // // // //                   data-testid="nav-account-link"
// // // // // //                 >
// // // // // //                   Account
// // // // // //                 </LocalizedClientLink>
// // // // // //               </div>

// // // // // //               <div className="hover:opacity-75 transition-opacity">
// // // // // //                 <Suspense
// // // // // //                   fallback={
// // // // // //                     <LocalizedClientLink
// // // // // //                       className="flex gap-2 font-medium"
// // // // // //                       href="/cart"
// // // // // //                       data-testid="nav-cart-link"
// // // // // //                     >
// // // // // //                       Cart (0)
// // // // // //                     </LocalizedClientLink>
// // // // // //                   }
// // // // // //                 >
// // // // // //                   <CartButton />
// // // // // //                 </Suspense>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //           </nav>
// // // // // //         </header>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   )
// // // // // // }

// // // // // import { Suspense } from "react"
// // // // // import Image from "next/image"

// // // // // import { listLocales } from "@lib/data/locales"
// // // // // import { getLocale } from "@lib/data/locale-actions"
// // // // // import { listRegions } from "@lib/data/regions"
// // // // // import { StoreRegion } from "@medusajs/types"
// // // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // // import CartButton from "@modules/layout/components/cart-button"
// // // // // import Search from "@modules/layout/components/search"
// // // // // import SideMenu from "@modules/layout/components/side-menu"

// // // // // export default async function Nav() {
// // // // //   const [regions, locales, currentLocale] = await Promise.all([
// // // // //     listRegions().then((regions: StoreRegion[]) => regions),
// // // // //     listLocales(),
// // // // //     getLocale(),
// // // // //   ])

// // // // //   return (
// // // // //     <>
// // // // //       <style>{`
// // // // //         @keyframes navScrollAnimation {
// // // // //           to {
// // // // //             background-color: rgba(255, 255, 255, 0.98);
// // // // //             backdrop-filter: blur(8px);
// // // // //             border-bottom-color: #f0d5db;
// // // // //             box-shadow: 0 4px 20px -2px rgba(128, 0, 32, 0.06);
// // // // //           }
// // // // //         }
// // // // //         .nav-scroll-container {
// // // // //           animation: navScrollAnimation linear both;
// // // // //           animation-timeline: scroll();
// // // // //           animation-range: 0px 80px;
// // // // //         }
// // // // //       `}</style>

// // // // //       <div className="fixed top-0 inset-x-0 z-50 nav-scroll-container bg-transparent border-b border-transparent transition-all duration-300">
// // // // //         <header className="relative h-20 mx-auto">
// // // // //           <nav className="content-container flex items-center justify-between w-full h-full px-6 md:px-10">
            
// // // // //             {/* Left: Side Menu / Hamburger Icon */}
// // // // //             <div className="flex-1 basis-0 h-full flex items-center">
// // // // //               <div className="h-full flex items-center text-[#800020] hover:opacity-75 transition-opacity cursor-pointer">
// // // // //                 <div className="flex items-center gap-2 font-serif font-medium tracking-wider text-sm">
// // // // //                   {/* Custom visible mobile hamburger icon alongside SideMenu */}
// // // // //                   <div className="flex flex-col justify-between w-6 h-4">
// // // // //                     <span className="w-full h-[2px] bg-[#800020] rounded-full"></span>
// // // // //                     <span className="w-full h-[2px] bg-[#800020] rounded-full"></span>
// // // // //                     <span className="w-full h-[2px] bg-[#800020] rounded-full"></span>
// // // // //                   </div>
// // // // //                   <span className="hidden md:inline uppercase text-xs">Menu</span>
// // // // //                 </div>
// // // // //                 <div className="absolute opacity-0 pointer-events-none">
// // // // //                   <SideMenu
// // // // //                     regions={regions}
// // // // //                     locales={locales}
// // // // //                     currentLocale={currentLocale}
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Center: Brand Logo */}
// // // // //             <div className="flex items-center h-full justify-center">
// // // // //               <LocalizedClientLink
// // // // //                 href="/"
// // // // //                 className="flex items-center hover:opacity-90 transition-opacity"
// // // // //                 data-testid="nav-store-link"
// // // // //               >
// // // // //                 <Image
// // // // //                   src="/khojnav1.png"
// // // // //                   alt="KHOJ"
// // // // //                   width={120}
// // // // //                   height={38}
// // // // //                   priority
// // // // //                   className="h-8 w-auto object-contain drop-shadow-sm"
// // // // //                 />
// // // // //               </LocalizedClientLink>
// // // // //             </div>

// // // // //             {/* Right: Search, Account, Cart */}
// // // // //             <div className="flex items-center gap-x-6 md:gap-x-8 h-full flex-1 basis-0 justify-end text-[#800020]">
// // // // //               <div className="hover:opacity-75 transition-opacity">
// // // // //                 <Search />
// // // // //               </div>

// // // // //               <div className="hidden small:flex items-center h-full">
// // // // //                 <LocalizedClientLink
// // // // //                   className="hover:opacity-75 transition-opacity font-serif text-sm tracking-wide font-medium"
// // // // //                   href="/account"
// // // // //                   data-testid="nav-account-link"
// // // // //                 >
// // // // //                   Account
// // // // //                 </LocalizedClientLink>
// // // // //               </div>

// // // // //               <div className="hover:opacity-75 transition-opacity font-serif text-sm tracking-wide font-medium">
// // // // //                 <Suspense
// // // // //                   fallback={
// // // // //                     <LocalizedClientLink
// // // // //                       className="flex gap-1"
// // // // //                       href="/cart"
// // // // //                       data-testid="nav-cart-link"
// // // // //                     >
// // // // //                       Cart (0)
// // // // //                     </LocalizedClientLink>
// // // // //                   }
// // // // //                 >
// // // // //                   <CartButton />
// // // // //                 </Suspense>
// // // // //               </div>
// // // // //             </div>

// // // // //           </nav>
// // // // //         </header>
// // // // //       </div>
// // // // //     </>
// // // // //   )
// // // // // }

// // // // import { Suspense } from "react"
// // // // import Image from "next/image"

// // // // import { listLocales } from "@lib/data/locales"
// // // // import { getLocale } from "@lib/data/locale-actions"
// // // // import { listRegions } from "@lib/data/regions"
// // // // import { StoreRegion } from "@medusajs/types"
// // // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // // import CartButton from "@modules/layout/components/cart-button"
// // // // import Search from "@modules/layout/components/search"
// // // // import SideMenu from "@modules/layout/components/side-menu"

// // // // export default async function Nav() {
// // // //   const [regions, locales, currentLocale] = await Promise.all([
// // // //     listRegions().then((regions: StoreRegion[]) => regions),
// // // //     listLocales(),
// // // //     getLocale(),
// // // //   ])

// // // //   return (
// // // //     <>
// // // //       <style>{`
// // // //         @keyframes navScrollAnimation {
// // // //           to {
// // // //             background-color: rgba(255, 255, 255, 0.98);
// // // //             backdrop-filter: blur(8px);
// // // //             border-bottom-color: #f0d5db;
// // // //             box-shadow: 0 4px 20px -2px rgba(128, 0, 32, 0.06);
// // // //           }
// // // //         }
// // // //         .nav-scroll-container {
// // // //           animation: navScrollAnimation linear both;
// // // //           animation-timeline: scroll();
// // // //           animation-range: 0px 80px;
// // // //         }
// // // //         /* Inject crisp burgundy hamburger icon onto the real SideMenu button on mobile */
// // // //         @media (max-width: 1023px) {
// // // //           [data-testid="nav-menu-button"] {
// // // //             font-size: 0 !important;
// // // //             display: inline-flex !important;
// // // //             align-items: center !important;
// // // //             gap: 0 !important;
// // // //           }
// // // //           [data-testid="nav-menu-button"]::before {
// // // //             content: "";
// // // //             display: inline-block;
// // // //             width: 24px;
// // // //             height: 24px;
// // // //             background-color: #800020;
// // // //             -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
// // // //             mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
// // // //           }
// // // //         }
// // // //       `}</style>

// // // //       <div className="fixed top-0 inset-x-0 z-50 group nav-scroll-container bg-transparent border-b border-transparent transition-all duration-300">
// // // //         <header className="relative h-20 mx-auto">
// // // //           <nav className="content-container flex items-center justify-between w-full h-full px-6 md:px-10 font-serif font-semibold tracking-wider text-sm text-[#800020]">
            
// // // //             {/* Left: Original SideMenu (Clickable & Connected) */}
// // // //             <div className="flex-1 basis-0 h-full flex items-center">
// // // //               <div className="h-full flex items-center [&_button]:text-[#800020] [&_button]:font-serif [&_button]:font-semibold [&_button]:tracking-wider [&_button]:uppercase hover:opacity-75 transition-opacity">
// // // //                 <SideMenu
// // // //                   regions={regions}
// // // //                   locales={locales}
// // // //                   currentLocale={currentLocale}
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             {/* Center: Brand Logo */}
// // // //             <div className="flex items-center h-full justify-center">
// // // //               <LocalizedClientLink
// // // //                 href="/"
// // // //                 className="flex items-center hover:opacity-85 transition-opacity"
// // // //                 data-testid="nav-store-link"
// // // //               >
// // // //                 <Image
// // // //                   src="/khojnav1.png"
// // // //                   alt="KHOJ"
// // // //                   width={120}
// // // //                   height={38}
// // // //                   priority
// // // //                   className="h-8 w-auto object-contain"
// // // //                 />
// // // //               </LocalizedClientLink>
// // // //             </div>

// // // //             {/* Right: Original Search, Account, Cart (100% Intact) */}
// // // //             <div className="flex items-center gap-x-6 md:gap-x-8 h-full flex-1 basis-0 justify-end text-[#800020]">
// // // //               <div className="[&_a]:text-[#800020] [&_button]:text-[#800020] hover:opacity-75 transition-opacity">
// // // //                 <Search />
// // // //               </div>

// // // //               <div className="hidden small:flex items-center gap-x-6 h-full">
// // // //                 <LocalizedClientLink
// // // //                   className="text-[#800020] hover:opacity-75 transition-opacity font-serif font-semibold tracking-wider"
// // // //                   href="/account"
// // // //                   data-testid="nav-account-link"
// // // //                 >
// // // //                   Account
// // // //                 </LocalizedClientLink>
// // // //               </div>

// // // //               <div className="[&_a]:text-[#800020] [&_button]:text-[#800020] hover:opacity-75 transition-opacity font-serif font-semibold tracking-wider">
// // // //                 <Suspense
// // // //                   fallback={
// // // //                     <LocalizedClientLink
// // // //                       className="text-[#800020] hover:opacity-75 flex gap-2"
// // // //                       href="/cart"
// // // //                       data-testid="nav-cart-link"
// // // //                     >
// // // //                       Cart (0)
// // // //                     </LocalizedClientLink>
// // // //                   }
// // // //                 >
// // // //                   <CartButton />
// // // //                 </Suspense>
// // // //               </div>
// // // //             </div>

// // // //           </nav>
// // // //         </header>
// // // //       </div>
// // // //     </>
// // // //   )
// // // // }

// // // import { Suspense } from "react"
// // // import Image from "next/image"

// // // import { listLocales } from "@lib/data/locales"
// // // import { getLocale } from "@lib/data/locale-actions"
// // // import { listRegions } from "@lib/data/regions"
// // // import { StoreRegion } from "@medusajs/types"
// // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // import CartButton from "@modules/layout/components/cart-button"
// // // import Search from "@modules/layout/components/search"
// // // import SideMenu from "@modules/layout/components/side-menu"

// // // const DesktopNavItems = {
// // //   Home: "/",
// // //   Store: "/store",
// // // }

// // // export default async function Nav() {
// // //   const [regions, locales, currentLocale] = await Promise.all([
// // //     listRegions().then((regions: StoreRegion[]) => regions),
// // //     listLocales(),
// // //     getLocale(),
// // //   ])

// // //   return (
// // //     <>
// // //       <style>{`
// // //         @keyframes navScrollAnimation {
// // //           to {
// // //             background-color: rgba(255, 255, 255, 0.98);
// // //             backdrop-filter: blur(8px);
// // //             border-bottom-color: #f0d5db;
// // //             box-shadow: 0 4px 20px -2px rgba(128, 0, 32, 0.06);
// // //           }
// // //         }
// // //         .nav-scroll-container {
// // //           animation: navScrollAnimation linear both;
// // //           animation-timeline: scroll();
// // //           animation-range: 0px 80px;
// // //         }

// // //         /* On Desktop (md+), hide the text "Menu" from SideMenu and let inline links handle navigation */
// // //         @media (min-width: 768px) {
// // //           [data-testid="nav-menu-button"] {
// // //             display: none !important;
// // //           }
// // //         }

// // //         /* On Mobile (<md), show crisp burgundy hamburger icon via SideMenu button */
// // //         @media (max-width: 767px) {
// // //           [data-testid="nav-menu-button"] {
// // //             font-size: 0 !important;
// // //             display: inline-flex !important;
// // //             align-items: center !important;
// // //           }
// // //           [data-testid="nav-menu-button"]::before {
// // //             content: "";
// // //             display: inline-block;
// // //             width: 24px;
// // //             height: 24px;
// // //             background-color: #800020;
// // //             -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
// // //             mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
// // //           }
// // //         }
// // //       `}</style>

// // //       <div className="fixed top-0 inset-x-0 z-50 group nav-scroll-container bg-transparent border-b border-transparent transition-all duration-300">
// // //         <header className="relative h-20 mx-auto">
// // //           <nav className="content-container flex items-center justify-between w-full h-full px-6 md:px-10 font-serif font-semibold tracking-wider text-sm text-[#800020]">
            
// // //             {/* Left: Mobile SideMenu & Desktop Inline Links */}
// // //             <div className="flex-1 basis-0 h-full flex items-center gap-x-6">
// // //               {/* Mobile Drawer trigger (Hidden on desktop via CSS, active on mobile) */}
// // //               <div className="h-full flex items-center md:hidden">
// // //                 <SideMenu
// // //                   regions={regions}
// // //                   locales={locales}
// // //                   currentLocale={currentLocale}
// // //                 />
// // //               </div>

// // //               {/* Desktop Always-Visible Inline Links */}
// // //               <div className="hidden md:flex items-center gap-x-6 h-full">
// // //                 {Object.entries(DesktopNavItems).map(([name, href]) => (
// // //                   <LocalizedClientLink
// // //                     key={name}
// // //                     href={href}
// // //                     className="text-[#800020] hover:opacity-75 transition-opacity font-serif font-semibold tracking-wider uppercase text-xs"
// // //                     data-testid={`desktop-${name.toLowerCase()}-link`}
// // //                   >
// // //                     {name}
// // //                   </LocalizedClientLink>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Center: Brand Logo */}
// // //             <div className="flex items-center h-full justify-center">
// // //               <LocalizedClientLink
// // //                 href="/"
// // //                 className="flex items-center hover:opacity-85 transition-opacity"
// // //                 data-testid="nav-store-link"
// // //               >
// // //                 <Image
// // //                   src="/khojnav1.png"
// // //                   alt="KHOJ"
// // //                   width={120}
// // //                   height={38}
// // //                   priority
// // //                   className="h-8 w-auto object-contain"
// // //                 />
// // //               </LocalizedClientLink>
// // //             </div>

// // //             {/* Right: Search, Account, Cart */}
// // //             <div className="flex items-center gap-x-6 md:gap-x-8 h-full flex-1 basis-0 justify-end text-[#800020]">
// // //               <div className="[&_a]:text-[#800020] [&_button]:text-[#800020] hover:opacity-75 transition-opacity">
// // //                 <Search />
// // //               </div>

// // //               <div className="hidden small:flex items-center gap-x-6 h-full">
// // //                 <LocalizedClientLink
// // //                   className="text-[#800020] hover:opacity-75 transition-opacity font-serif font-semibold tracking-wider uppercase text-xs"
// // //                   href="/account"
// // //                   data-testid="nav-account-link"
// // //                 >
// // //                   Account
// // //                 </LocalizedClientLink>
// // //               </div>

// // //               <div className="[&_a]:text-[#800020] [&_button]:text-[#800020] hover:opacity-75 transition-opacity font-serif font-semibold tracking-wider uppercase text-xs">
// // //                 <Suspense
// // //                   fallback={
// // //                     <LocalizedClientLink
// // //                       className="text-[#800020] hover:opacity-75 flex gap-2"
// // //                       href="/cart"
// // //                       data-testid="nav-cart-link"
// // //                     >
// // //                       Cart (0)
// // //                     </LocalizedClientLink>
// // //                   }
// // //                 >
// // //                   <CartButton />
// // //                 </Suspense>
// // //               </div>
// // //             </div>

// // //           </nav>
// // //         </header>
// // //       </div>
// // //     </>
// // //   )
// // // }


// // import { Suspense } from "react"
// // import Image from "next/image"

// // import { listLocales } from "@lib/data/locales"
// // import { getLocale } from "@lib/data/locale-actions"
// // import { listRegions } from "@lib/data/regions"
// // import { StoreRegion } from "@medusajs/types"
// // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // import ActiveNavLink from "@modules/layout/components/active-nav-link"
// // import CartButton from "@modules/layout/components/cart-button"
// // import Search from "@modules/layout/components/search"
// // import SideMenu from "@modules/layout/components/side-menu"

// // const DesktopNavItems = {
// //   Home: "/",
// //   Store: "/store",
// // }

// // export default async function Nav() {
// //   const [regions, locales, currentLocale] = await Promise.all([
// //     listRegions().then((regions: StoreRegion[]) => regions),
// //     listLocales(),
// //     getLocale(),
// //   ])

// //   return (
// //     <>
// //       <style>{`
// //         @keyframes navScrollAnimation {
// //           to {
// //             background-color: rgba(255, 255, 255, 0.98);
// //             backdrop-filter: blur(8px);
// //             border-bottom-color: #f0d5db;
// //             box-shadow: 0 4px 20px -2px rgba(128, 0, 32, 0.06);
// //           }
// //         }
// //         .nav-scroll-container {
// //           animation: navScrollAnimation linear both;
// //           animation-timeline: scroll();
// //           animation-range: 0px 80px;
// //         }

// //         /* On Desktop (md+), hide the text "Menu" from SideMenu and let inline links handle navigation */
// //         @media (min-width: 768px) {
// //           [data-testid="nav-menu-button"] {
// //             display: none !important;
// //           }
// //         }

// //         /* On Mobile (<md), show crisp burgundy hamburger icon via SideMenu button */
// //         @media (max-width: 767px) {
// //           [data-testid="nav-menu-button"] {
// //             font-size: 0 !important;
// //             display: inline-flex !important;
// //             align-items: center !important;
// //           }
// //           [data-testid="nav-menu-button"]::before {
// //             content: "";
// //             display: inline-block;
// //             width: 24px;
// //             height: 24px;
// //             background-color: #800020;
// //             -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
// //             mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
// //           }
// //         }
// //       `}</style>

// //       <div className="fixed top-0 inset-x-0 z-50 group nav-scroll-container bg-transparent border-b border-transparent transition-all duration-300">
// //         <header className="relative h-20 mx-auto">
// //           <nav className="content-container flex items-center justify-between w-full h-full px-6 md:px-10 font-serif font-semibold tracking-wider text-sm text-[#800020]">
            
// //             {/* Left: Mobile SideMenu & Desktop Inline Links */}
// //             <div className="flex-1 basis-0 h-full flex items-center gap-x-6">
// //               {/* Mobile Drawer trigger (Hidden on desktop via CSS, active on mobile) */}
// //               <div className="h-full flex items-center md:hidden">
// //                 <SideMenu
// //                   regions={regions}
// //                   locales={locales}
// //                   currentLocale={currentLocale}
// //                 />
// //               </div>

// //               {/* Desktop Always-Visible Inline Links */}
// //               <div className="hidden md:flex items-center gap-x-6 h-full">
// //                 {Object.entries(DesktopNavItems).map(([name, href]) => (
// //                     <ActiveNavLink
// //                       key={name}
// //                       href={href}
// //                       className="inline-flex items-center rounded-full px-3 py-2 text-[#800020] transition-all duration-200 hover:opacity-100 font-serif font-semibold tracking-wider uppercase text-xs"
// //                       activeClassName="bg-[#800020] text-[#f3f0e7] shadow-sm ring-1 ring-[#800020]"
// //                       data-testid={`desktop-${name.toLowerCase()}-link`}
// //                     >
// //                       {name}
// //                     </ActiveNavLink>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Center: Brand Logo */}
// //             <div className="flex items-center h-full justify-center">
// //               <LocalizedClientLink
// //                 href="/"
// //                 className="flex items-center hover:opacity-85 transition-opacity"
// //                 data-testid="nav-store-link"
// //               >
// //                 <Image
// //                   src="/khojnav1.png"
// //                   alt="KHOJ"
// //                   width={120}
// //                   height={38}
// //                   priority
// //                   className="h-8 w-auto object-contain"
// //                 />
// //               </LocalizedClientLink>
// //             </div>

// //             {/* Right: Search, Account, Cart */}
// //             <div className="flex items-center gap-x-6 md:gap-x-8 h-full flex-1 basis-0 justify-end text-[#800020]">
// //               <div className="[&_a]:text-[#800020] [&_button]:text-[#800020] hover:opacity-75 transition-opacity">
// //                 <Search />
// //               </div>

// //               <div className="hidden small:flex items-center gap-x-6 h-full">
// //                 <ActiveNavLink
// //                   className="inline-flex items-center rounded-full px-3 py-2 text-[#800020] transition-all duration-200 hover:opacity-100 font-serif font-semibold tracking-wider uppercase text-xs"
// //                   activeClassName="bg-[#800020] text-[#f3f0e7] shadow-sm ring-1 ring-[#800020]"
// //                   href="/account"
// //                   data-testid="nav-account-link"
// //                 >
// //                   Account
// //                 </ActiveNavLink>
// //               </div>

// //               <div className="[&_a]:text-[#800020] [&_button]:text-[#800020] hover:opacity-100 transition-opacity font-serif font-semibold tracking-wider uppercase text-xs">
// //                 <Suspense
// //                   fallback={
// //                     <LocalizedClientLink
// //                       className="text-[#800020] hover:opacity-75 flex gap-2"
// //                       href="/cart"
// //                       data-testid="nav-cart-link"
// //                     >
// //                       Cart (0)
// //                     </LocalizedClientLink>
// //                   }
// //                 >
// //                   <CartButton />
// //                 </Suspense>
// //               </div>
// //             </div>

// //           </nav>
// //         </header>
// //       </div>
// //     </>
// //   )
// // }


// import { Suspense } from "react"
// import Image from "next/image"

// import { listLocales } from "@lib/data/locales"
// import { getLocale } from "@lib/data/locale-actions"
// import { listRegions } from "@lib/data/regions"
// import { StoreRegion } from "@medusajs/types"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import ActiveNavLink from "@modules/layout/components/active-nav-link"
// import CartButton from "@modules/layout/components/cart-button"
// import Search from "@modules/layout/components/search"
// import SideMenu from "@modules/layout/components/side-menu"

// const DesktopNavItems = {
//   Home: "/",
//   Store: "/store",
// }

// export default async function Nav() {
//   const [regions, locales, currentLocale] = await Promise.all([
//     listRegions().then((regions: StoreRegion[]) => regions),
//     listLocales(),
//     getLocale(),
//   ])

//   return (
//     <>
//       <style>{`
//         @keyframes navScrollAnimation {
//           to {
//             background-color: rgba(255, 255, 255, 0.98);
//             backdrop-filter: blur(8px);
//             border-bottom-color: #f0d5db;
//             box-shadow: 0 4px 20px -2px rgba(128, 0, 32, 0.06);
//           }
//         }
//         .nav-scroll-container {
//           animation: navScrollAnimation linear both;
//           animation-timeline: scroll();
//           animation-range: 0px 80px;
//         }

//         /* On Desktop (md+), hide the text "Menu" from SideMenu and let inline links handle navigation */
//         @media (min-width: 768px) {
//           [data-testid="nav-menu-button"] {
//             display: none !important;
//           }
//         }

//         /* On Mobile (<md), show crisp burgundy hamburger icon via SideMenu button */
//         @media (max-width: 767px) {
//           [data-testid="nav-menu-button"] {
//             font-size: 0 !important;
//             display: inline-flex !important;
//             align-items: center !important;
//           }
//           [data-testid="nav-menu-button"]::before {
//             content: "";
//             display: inline-block;
//             width: 24px;
//             height: 24px;
//             background-color: #800020;
//             -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
//             mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
//           }
//         }
//       `}</style>

//       <div className="fixed top-0 inset-x-0 z-50 group nav-scroll-container bg-transparent border-b border-transparent transition-all duration-300">
//         <header className="relative h-20 mx-auto">
//           <nav className="content-container flex items-center justify-between w-full h-full px-6 md:px-10 font-serif font-semibold tracking-wider text-sm text-[#800020]">
            
//             {/* Left: Mobile SideMenu & Desktop Inline Links */}
//             <div className="flex-1 basis-0 h-full flex items-center gap-x-6">
//               {/* Mobile Drawer trigger (Hidden on desktop via CSS, active on mobile) */}
//               <div className="h-full flex items-center md:hidden">
//                 <SideMenu
//                   regions={regions}
//                   locales={locales}
//                   currentLocale={currentLocale}
//                 />
//               </div>

//               {/* Desktop Always-Visible Inline Links */}
//               <div className="hidden md:flex items-center gap-x-6 h-full">
//                 {Object.entries(DesktopNavItems).map(([name, href]) => (
//                     <ActiveNavLink
//                       key={name}
//                       href={href}
//                       className="inline-flex items-center rounded-full px-3 py-2 text-[#800020] transition-all duration-200 hover:opacity-100 font-serif font-semibold tracking-wider uppercase text-xs"
//                       activeClassName="bg-[#800020] text-[#f3f0e7] shadow-sm ring-1 ring-[#800020]"
//                       data-testid={`desktop-${name.toLowerCase()}-link`}
//                     >
//                       {name}
//                     </ActiveNavLink>
//                 ))}
//               </div>
//             </div>

//             {/* Center: Brand Logo */}
//             <div className="flex items-center h-full justify-center">
//               <LocalizedClientLink
//                 href="/"
//                 className="flex items-center hover:opacity-85 transition-opacity"
//                 data-testid="nav-store-link"
//               >
//                 <Image
//                   src="/khojnav1.png"
//                   alt="KHOJ"
//                   width={120}
//                   height={38}
//                   priority
//                   className="h-8 w-auto object-contain"
//                 />
//               </LocalizedClientLink>
//             </div>

//             {/* Right: Search, Account, Cart */}
//             <div className="flex items-center gap-x-6 md:gap-x-8 h-full flex-1 basis-0 justify-end text-[#800020]">
//               <div className="relative left-3 translate-x-3 [&_a]:text-[#800020] [&_button]:text-[#800020] hover:opacity-75 transition-opacity md:left-0 md:translate-x-0">
//                 <Search />
//               </div>

//               <div className="hidden small:flex items-center gap-x-6 h-full">
//                 <ActiveNavLink
//                   className="inline-flex items-center rounded-full px-3 py-2 text-[#800020] transition-all duration-200 hover:opacity-100 font-serif font-semibold tracking-wider uppercase text-xs"
//                   activeClassName="bg-[#800020] text-[#f3f0e7] shadow-sm ring-1 ring-[#800020]"
//                   href="/account"
//                   data-testid="nav-account-link"
//                 >
//                   Account
//                 </ActiveNavLink>
//               </div>

//               <div className="[&_a]:text-[#800020] [&_button]:text-[#800020] hover:opacity-100 transition-opacity font-serif font-semibold tracking-wider uppercase text-xs">
//                 <Suspense
//                   fallback={
//                     <LocalizedClientLink
//                       className="text-[#800020] hover:opacity-75 flex gap-2"
//                       href="/cart"
//                       data-testid="nav-cart-link"
//                     >
//                       Cart (0)
//                     </LocalizedClientLink>
//                   }
//                 >
//                   <CartButton />
//                 </Suspense>
//               </div>
//             </div>

//           </nav>
//         </header>
//       </div>
//     </>
//   )
// }

import { Suspense } from "react"
import Image from "next/image"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ActiveNavLink from "@modules/layout/components/active-nav-link"
import CartButton from "@modules/layout/components/cart-button"
import Search from "@modules/layout/components/search"
import SideMenu from "@modules/layout/components/side-menu"

const DesktopNavItems = {
  Home: "/",
  Store: "/store",
}

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <>
      <style>{`
        @keyframes navScrollAnimation {
          to {
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(8px);
            border-bottom-color: #f0d5db;
            box-shadow: 0 4px 20px -2px rgba(128, 0, 32, 0.06);
          }
        }

        .nav-scroll-container {
          animation: navScrollAnimation linear both;
          animation-timeline: scroll();
          animation-range: 0px 80px;
        }

        /* On desktop, hide the SideMenu button and show inline navigation. */
        @media (min-width: 768px) {
          [data-testid="nav-menu-button"] {
            display: none !important;
          }
        }

        /* On mobile, show the burgundy hamburger icon. */
        @media (max-width: 767px) {
          [data-testid="nav-menu-button"] {
            font-size: 0 !important;
            display: inline-flex !important;
            align-items: center !important;
          }

          [data-testid="nav-menu-button"]::before {
            content: "";
            display: inline-block;
            width: 24px;
            height: 24px;
            background-color: #800020;
            -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
            mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'/%3E%3C/svg%3E") no-repeat center / contain;
          }
        }
      `}</style>

      <div className="nav-scroll-container group fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-all duration-300">
        <header className="relative mx-auto h-20">
          <nav className="content-container flex h-full w-full items-center justify-between px-6 font-serif text-sm font-semibold tracking-wider text-[#800020] md:px-10">
            {/* Left: mobile menu and desktop inline links */}
            <div className="flex h-full flex-1 basis-0 items-center gap-x-6">
              <div className="flex h-full items-center md:hidden">
                <SideMenu
                  regions={regions}
                  locales={locales}
                  currentLocale={currentLocale}
                />
              </div>

              <div className="hidden h-full items-center gap-x-6 md:flex">
                {Object.entries(DesktopNavItems).map(([name, href]) => (
                  <ActiveNavLink
                    key={name}
                    href={href}
                    className="inline-flex items-center rounded-full px-3 py-2 font-serif text-xs font-semibold uppercase tracking-wider text-[#800020] transition-all duration-200 hover:opacity-100"
                    activeClassName="bg-[#800020] text-[#f3f0e7] shadow-sm ring-1 ring-[#800020]"
                    data-testid={`desktop-${name.toLowerCase()}-link`}
                  >
                    {name}
                  </ActiveNavLink>
                ))}
              </div>
            </div>

            {/* Center: brand logo */}
            <div className="flex h-full items-center justify-center">
              <LocalizedClientLink
                href="/"
                className="flex items-center transition-opacity hover:opacity-85"
                data-testid="nav-store-link"
              >
                <Image
                  src="/khojnav1.png"
                  alt="KHOJ"
                  width={120}
                  height={38}
                  priority
                  className="h-8 w-auto object-contain"
                />
              </LocalizedClientLink>
            </div>

            {/* Right: search, account, cart */}
            <div className="flex h-full flex-1 basis-0 items-center justify-end gap-x-6 text-[#800020] md:gap-x-8">
              <div className="relative left-3 translate-x-3 transition-opacity hover:opacity-75 md:left-0 md:translate-x-0 [&_a]:text-[#800020] [&_button]:text-[#800020]">
                <Search />
              </div>

              <div className="hidden h-full items-center gap-x-6 small:flex">
                <ActiveNavLink
                  className="inline-flex items-center rounded-full px-3 py-2 font-serif text-xs font-semibold uppercase tracking-wider text-[#800020] transition-all duration-200 hover:opacity-100"
                  activeClassName="bg-[#800020] text-[#f3f0e7] shadow-sm ring-1 ring-[#800020]"
                  href="/account"
                  data-testid="nav-account-link"
                >
                  Account
                </ActiveNavLink>
              </div>

              {/* Use inherited crimson for the default link color; the CartDropdown
                  supplies white text on crimson when the cart page is active. */}
              <div className="font-serif text-xs font-semibold uppercase tracking-wider text-[#800020] transition-opacity hover:opacity-100">
                <Suspense
                  fallback={
                    <LocalizedClientLink
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#800020] transition-colors duration-200 hover:bg-[#800020]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800020]/40 focus-visible:ring-offset-2"
                      href="/cart"
                      aria-label="Cart"
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
                          aria-hidden="true"
                          className="absolute -right-2 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#800020] px-1 text-[10px] font-semibold leading-none tabular-nums text-white ring-2 ring-[#fffdf9]"
                        >
                          0
                        </span>
                      </span>
                    </LocalizedClientLink>
                  }
                >
                  <CartButton />
                </Suspense>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}