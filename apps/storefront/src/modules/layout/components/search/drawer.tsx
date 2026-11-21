// // "use client"

// // import { Dialog, Transition } from "@headlessui/react"
// // import { XMark } from "@medusajs/icons"
// // import React, { Fragment } from "react"

// // type SearchDrawerProps = {
// //   isOpen: boolean
// //   close: () => void
// //   children: React.ReactNode
// // }

// // const SearchDrawer = ({ isOpen, close, children }: SearchDrawerProps) => {
// //   return (
// //     <Transition appear show={isOpen} as={Fragment}>
// //       <Dialog as="div" className="relative z-[75]" onClose={close}>
// //         <Transition.Child
// //           as={Fragment}
// //           enter="ease-out duration-300"
// //           enterFrom="opacity-0"
// //           enterTo="opacity-100"
// //           leave="ease-in duration-200"
// //           leaveFrom="opacity-100"
// //           leaveTo="opacity-0"
// //         >
// //           <div className="fixed inset-0 bg-ui-bg-overlay backdrop-blur-sm" />
// //         </Transition.Child>

// //         <div className="fixed inset-0 overflow-hidden">
// //           <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
// //             <Transition.Child
// //               as={Fragment}
// //               enter="transform transition ease-in-out duration-300"
// //               enterFrom="translate-x-full"
// //               enterTo="translate-x-0"
// //               leave="transform transition ease-in-out duration-200"
// //               leaveFrom="translate-x-0"
// //               leaveTo="translate-x-full"
// //             >
// //               <Dialog.Panel
// //                 className="pointer-events-auto w-screen max-w-md"
// //                 data-testid="search-drawer"
// //               >
// //                 <div className="flex h-full flex-col border-l border-ui-border-base bg-ui-bg-base shadow-elevation-modal">
// //                   <div className="flex items-center justify-between border-b border-ui-border-base px-4 py-3">
// //                     <Dialog.Title className="text-large-semi text-ui-fg-base">
// //                       Search
// //                     </Dialog.Title>
// //                     <button
// //                       type="button"
// //                       onClick={close}
// //                       aria-label="Close search"
// //                       className="text-ui-fg-muted hover:text-ui-fg-base"
// //                       data-testid="close-search-drawer"
// //                     >
// //                       <XMark />
// //                     </button>
// //                   </div>
// //                   {children}
// //                 </div>
// //               </Dialog.Panel>
// //             </Transition.Child>
// //           </div>
// //         </div>
// //       </Dialog>
// //     </Transition>
// //   )
// // }

// // export default SearchDrawer


// "use client"

// import { Dialog, Transition } from "@headlessui/react"
// import { XMark } from "@medusajs/icons"
// import React, { Fragment } from "react"

// type SearchDrawerProps = {
//   isOpen: boolean
//   close: () => void
//   children: React.ReactNode
// }

// const SearchDrawer = ({ isOpen, close, children }: SearchDrawerProps) => {
//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-[75]" onClose={close}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-[#171715]/35 backdrop-blur-[3px]" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full justify-end pl-4 small:pl-10">
//             <Transition.Child
//               as={Fragment}
//               enter="transform transition ease-in-out duration-300"
//               enterFrom="translate-x-full"
//               enterTo="translate-x-0"
//               leave="transform transition ease-in-out duration-200"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-full"
//             >
//               <Dialog.Panel
//                 className="pointer-events-auto h-full w-full max-w-md overflow-hidden rounded-l-2xl bg-[#faf9f6] shadow-2xl"
//                 data-testid="search-drawer"
//               >
//                 <div className="flex h-full flex-col bg-[#faf9f6] text-[#171715]">
//                   <div className="flex shrink-0 items-center justify-between px-4 py-3 small:px-5 small:py-4">
//                     <Dialog.Title className="m-0 text-base font-semibold tracking-[-0.02em] text-[#171715] small:text-lg">Search</Dialog.Title>
//                     <button
//                       type="button"
//                       onClick={close}
//                       aria-label="Close search"
//                       title="Close search"
//                       className="grid h-11 w-11 place-items-center rounded-full border border-[#e9e5dd] bg-[#171715] text-white shadow-sm transition-all duration-200 hover:scale-[1.04] hover:bg-[#756148] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#756148]"
//                       data-testid="close-search-drawer"
//                     >
//                       <XMark className="h-5 w-5" aria-hidden="true" />
//                     </button>
//                   </div>

//                   <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   )
// }

// export default SearchDrawer 

"use client"

import { Dialog, Transition } from "@headlessui/react"
import { XMark } from "@medusajs/icons"
import React, { Fragment } from "react"

type SearchDrawerProps = {
  isOpen: boolean
  close: () => void
  children: React.ReactNode
}

const SearchDrawer = ({ isOpen, close, children }: SearchDrawerProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[75]" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#171715]/35 backdrop-blur-[3px]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full justify-end pl-4 small:pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel
                className="pointer-events-auto h-full w-full max-w-md overflow-hidden rounded-l-2xl bg-[#faf9f6] shadow-2xl"
                data-testid="search-drawer"
              >
                <div className="flex h-full flex-col bg-[#faf9f6] text-[#171715]">
                  <div className="relative flex h-14 shrink-0 items-center justify-center border-b border-[#ebe7df] px-4 small:h-16">
                    <Dialog.Title className="m-0 whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#171715] small:text-xs">
                      Search
                    </Dialog.Title>

                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close search"
                      title="Close search"
                      className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#e9e5dd] bg-[#171715] text-white shadow-sm transition-all duration-200 hover:scale-[1.04] hover:bg-[#756148] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#756148] small:right-4 small:h-11 small:w-11"
                      data-testid="close-search-drawer"
                    >
                      <XMark className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SearchDrawer
