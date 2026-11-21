// "use client"

// import { Popover, PopoverPanel, Transition } from "@headlessui/react"
// import useToggleState from "@lib/hooks/use-toggle-state"
// import { ArrowRightMini, XMark } from "@medusajs/icons"
// import { HttpTypes } from "@medusajs/types"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import { Text, clx } from "@modules/common/components/ui"
// import { Fragment } from "react"
// import CountrySelect from "../country-select"
// import LanguageSelect from "../language-select"
// import { Locale } from "@lib/data/locales"


// const SideMenuItems = {
//   Home: "/",
//   Store: "/store",
//   Account: "/account",
//   Cart: "/cart",
// }

// type SideMenuProps = {
//   regions: HttpTypes.StoreRegion[] | null
//   locales: Locale[] | null
//   currentLocale: string | null
// }

// const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
//   const countryToggleState = useToggleState()
//   const languageToggleState = useToggleState()

//   return (
//     <div className="h-full">
//       <div className="flex items-center h-full">
//         <Popover className="h-full flex">
//           {({ open, close }) => (
//             <>
//               <div className="relative flex h-full">
//                 <Popover.Button
//                   data-testid="nav-menu-button"
//                   className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
//                 >
//                   Menu
//                 </Popover.Button>
//               </div>

//               {open && (
//                 <div
//                   className="fixed inset-0 z-[50] bg-black/0 pointer-events-auto"
//                   onClick={close}
//                   data-testid="side-menu-backdrop"
//                 />
//               )}

//               <Transition
//                 show={open}
//                 as={Fragment}
//                 enter="transition ease-out duration-150"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100 backdrop-blur-2xl"
//                 leave="transition ease-in duration-150"
//                 leaveFrom="opacity-100 backdrop-blur-2xl"
//                 leaveTo="opacity-0"
//               >
//                 <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-[51] inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
//                   <div
//                     data-testid="nav-menu-popup"
//                     className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] rounded-rounded justify-between p-6"
//                   >
//                     <div className="flex justify-end" id="xmark">
//                       <button
//                         data-testid="close-menu-button"
//                         onClick={close}
//                         aria-label="Close menu"
//                       >
//                         <XMark />
//                       </button>
//                     </div>
//                     <ul className="flex flex-col gap-6 items-start justify-start">
//                       {Object.entries(SideMenuItems).map(([name, href]) => {
//                         return (
//                           <li key={name}>
//                             <LocalizedClientLink
//                               href={href}
//                               className="text-3xl leading-10 hover:text-ui-fg-disabled"
//                               onClick={close}
//                               data-testid={`${name.toLowerCase()}-link`}
//                             >
//                               {name}
//                             </LocalizedClientLink>
//                           </li>
//                         )
//                       })}
//                     </ul>
//                     <div className="flex flex-col gap-y-6">
//                       {!!locales?.length && (
//                         <div
//                           className="flex justify-between"
//                           onMouseEnter={languageToggleState.open}
//                           onMouseLeave={languageToggleState.close}
//                         >
//                           <LanguageSelect
//                             toggleState={languageToggleState}
//                             locales={locales}
//                             currentLocale={currentLocale}
//                           />
//                           <ArrowRightMini
//                             className={clx(
//                               "transition-transform duration-150",
//                               languageToggleState.state ? "-rotate-90" : ""
//                             )}
//                           />
//                         </div>
//                       )}
//                       <div
//                         className="flex justify-between"
//                         onMouseEnter={countryToggleState.open}
//                         onMouseLeave={countryToggleState.close}
//                       >
//                         {regions && (
//                           <CountrySelect
//                             toggleState={countryToggleState}
//                             regions={regions}
//                           />
//                         )}
//                         <ArrowRightMini
//                           className={clx(
//                             "transition-transform duration-150",
//                             countryToggleState.state ? "-rotate-90" : ""
//                           )}
//                         />
//                       </div>
//                       <Text className="flex justify-between txt-compact-small">
//                         © {new Date().getFullYear()} Medusa Store. All rights
//                         reserved.
//                       </Text>
//                     </div>
//                   </div>
//                 </PopoverPanel>
//               </Transition>
//             </>
//           )}
//         </Popover>
//       </div>
//     </div>
//   )
// }

// export default SideMenu


"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text, clx } from "@modules/common/components/ui"
import { Fragment } from "react"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none text-[#800020] hover:opacity-75"
                >
                  Menu
                </Popover.Button>
              </div>

              {/* Backdrop */}
              {open && (
                <div
                  className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm pointer-events-auto transition-opacity duration-300"
                  onClick={close}
                  data-testid="side-menu-backdrop"
                />
              )}

              {/* Full-Screen Smooth Transition from Top */}
              <Transition
                show={open}
                as={Fragment}
                enter="transition-all ease-out duration-300"
                enterFrom="opacity-0 -translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-4"
              >
                <PopoverPanel className="fixed inset-0 z-[70] w-screen h-screen bg-white text-[#800020] flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
                  
                  {/* Top Header: Close Button on Top Right */}
                  <div className="flex justify-end w-full">
                    <button
                      data-testid="close-menu-button"
                      onClick={close}
                      aria-label="Close menu"
                      className="p-2.5 rounded-full hover:bg-neutral-100 transition-colors text-[#800020] border border-[#800020]/20"
                    >
                      <XMark className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Main Navigation Links: Clean, Smooth Appearance */}
                  <ul className="flex flex-col gap-8 items-start justify-center my-auto py-6">
                    {Object.entries(SideMenuItems).map(([name, href], index) => {
                      return (
                        <li 
                          key={name} 
                          className="overflow-hidden transform transition-all duration-500 ease-out"
                          style={{ transitionDelay: `${index * 60 + 100}ms` }}
                        >
                          <LocalizedClientLink
                            href={href}
                            className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#800020] hover:opacity-60 transition-opacity duration-200 block"
                            onClick={close}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      )
                    })}
                  </ul>

                  {/* Footer Section: Locales, Regions, and Copyright */}
                  <div className="flex flex-col gap-y-6 pt-6 border-t border-[#800020]/15 w-full max-w-md mx-auto">
                    {!!locales?.length && (
                      <div
                        className="flex justify-between items-center text-sm font-serif tracking-wide"
                        onMouseEnter={languageToggleState.open}
                        onMouseLeave={languageToggleState.close}
                      >
                        <LanguageSelect
                          toggleState={languageToggleState}
                          locales={locales}
                          currentLocale={currentLocale}
                        />
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-[#800020]",
                            languageToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                    )}

                    <div
                      className="flex justify-between items-center text-sm font-serif tracking-wide"
                      onMouseEnter={countryToggleState.open}
                      onMouseLeave={countryToggleState.close}
                    >
                      {regions && (
                        <CountrySelect
                          toggleState={countryToggleState}
                          regions={regions}
                        />
                      )}
                      <ArrowRightMini
                        className={clx(
                          "transition-transform duration-150 text-[#800020]",
                          countryToggleState.state ? "-rotate-90" : ""
                        )}
                      />
                    </div>

                    <Text className="flex justify-between text-xs font-serif tracking-wider text-neutral-500 pt-2">
                      © {new Date().getFullYear()} KHOJ. All rights reserved.
                    </Text>
                  </div>

                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu