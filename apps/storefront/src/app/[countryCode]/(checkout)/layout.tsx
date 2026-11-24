// // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // import ChevronDown from "@modules/common/icons/chevron-down"
// // import MedusaCTA from "@modules/layout/components/medusa-cta"
// // import Image from "next/image"

// // export default function CheckoutLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <div className="w-full bg-white relative small:min-h-screen">
// //       <div className="h-16 bg-white border-b ">
// //         <nav className="flex h-full items-center content-container justify-between">
// //           <LocalizedClientLink
// //             href="/cart"
// //             className="text-small-semi text-ui-fg-base flex items-center gap-x-2 uppercase flex-1 basis-0"
// //             data-testid="back-to-cart-link"
// //           >
// //             <ChevronDown className="rotate-90" size={16} />
// //             <span className="mt-px hidden small:block txt-compact-plus text-ui-fg-subtle hover:text-ui-fg-base ">
// //               Back to shopping cart
// //             </span>
// //             <span className="mt-px block small:hidden txt-compact-plus text-ui-fg-subtle hover:text-ui-fg-base">
// //               Back
// //             </span>
// //           </LocalizedClientLink>
// //           {/* <LocalizedClientLink
// //             href="/"
// //             className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
// //             data-testid="store-link"
// //           >
// //             KHOJ
// //           </LocalizedClientLink> */}

// //           <LocalizedClientLink
// //   href="/"
// //   className="flex items-center hover:opacity-80 transition-opacity"
// //   data-testid="store-link"
// // >
// //   <Image
// //     src="/khojnav1.png"
// //     alt="KHOJ"
// //     width={120}
// //     height={40}
// //     priority
// //     className="h-7 w-auto object-contain"
// //   />
// // </LocalizedClientLink>
// //           <div className="flex-1 basis-0" />
// //         </nav>
// //       </div>
// //       <div className="relative" data-testid="checkout-container">{children}</div>
// //       <div className="py-4 w-full flex items-center justify-center">
// //         <MedusaCTA />
// //       </div>
// //     </div>
// //   )
// // }

// // top is is real

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import ChevronDown from "@modules/common/icons/chevron-down"
// import MedusaCTA from "@modules/layout/components/medusa-cta"
// import Image from "next/image"

// export default function CheckoutLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="relative w-full bg-[#f3f0e7] text-[#171915] small:min-h-screen">
//       <div className="sticky top-0 z-40 h-16 border-b border-[#e6e0d5] bg-[#f8f6f0]/95 backdrop-blur-xl">
//         <nav className="content-container flex h-full items-center justify-between">
//           <LocalizedClientLink
//             href="/cart"
//             className="flex flex-1 basis-0 items-center gap-x-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#42463f] transition-colors hover:text-[#477b52]"
//             data-testid="back-to-cart-link"
//             aria-label="Back to shopping cart"
//           >
//             <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e6e0d5] bg-white text-[#171915] shadow-sm transition-colors hover:border-[#c8d5c9]">
//               <ChevronDown className="rotate-90" size={16} />
//             </span>
//             <span className="mt-px hidden small:block">Back to shopping cart</span>
//             <span className="mt-px block small:hidden">Back</span>
//           </LocalizedClientLink>

//           <LocalizedClientLink
//             href="/"
//             className="flex items-center transition-opacity duration-200 hover:opacity-75"
//             data-testid="store-link"
//             aria-label="KHOJ home"
//           >
//             <Image
//               src="/khojnav1.png"
//               alt="KHOJ"
//               width={120}
//               height={40}
//               priority
//               className="h-7 w-auto object-contain"
//             />
//           </LocalizedClientLink>

//           <div className="flex-1 basis-0" aria-hidden="true" />
//         </nav>
//       </div>

//       <div className="relative" data-testid="checkout-container">
//         <div className="[&_h1]:!font-bold [&_h1]:!tracking-[-0.04em] [&_h1]:!text-[#171915] [&_h2]:!font-bold [&_h2]:!tracking-[-0.03em] [&_h2]:!text-[#171915] [&_label]:!text-xs [&_label]:!font-semibold [&_label]:!tracking-[0.02em] [&_label]:!text-[#55584f] [&_input]:!min-h-12 [&_input]:!rounded-xl [&_input]:!border [&_input]:!border-[#e4dfd4] [&_input]:!bg-[#fffefa] [&_input]:!px-4 [&_input]:!text-sm [&_input]:!font-medium [&_input]:!text-[#171915] [&_input]:!shadow-sm [&_input]:!transition-all [&_input]:!duration-200 [&_input]:placeholder:!text-[#97968d] [&_input]:focus:!border-[#6f9277] [&_input]:focus:!outline-none [&_input]:focus:!ring-2 [&_input]:focus:!ring-[#e2ebe3] [&_input[type=checkbox]]:!h-4 [&_input[type=checkbox]]:!min-h-4 [&_input[type=checkbox]]:!w-4 [&_input[type=checkbox]]:!rounded [&_input[type=checkbox]]:!px-0 [&_input[type=checkbox]]:!shadow-none [&_input[type=radio]]:!h-4 [&_input[type=radio]]:!min-h-4 [&_input[type=radio]]:!w-4 [&_input[type=radio]]:!rounded-full [&_input[type=radio]]:!px-0 [&_input[type=radio]]:!shadow-none [&_select]:!min-h-12 [&_select]:!rounded-xl [&_select]:!border [&_select]:!border-[#e4dfd4] [&_select]:!bg-[#fffefa] [&_select]:!px-4 [&_select]:!text-sm [&_select]:!font-medium [&_select]:!text-[#171915] [&_select]:focus:!border-[#6f9277] [&_select]:focus:!outline-none [&_select]:focus:!ring-2 [&_select]:focus:!ring-[#e2ebe3] [&_textarea]:!min-h-28 [&_textarea]:!rounded-xl [&_textarea]:!border [&_textarea]:!border-[#e4dfd4] [&_textarea]:!bg-[#fffefa] [&_textarea]:!px-4 [&_textarea]:!py-3 [&_textarea]:!text-sm [&_textarea]:!font-medium [&_textarea]:!text-[#171915] [&_textarea]:!shadow-sm [&_textarea]:!transition-all [&_textarea]:!duration-200 [&_textarea]:placeholder:!text-[#97968d] [&_textarea]:focus:!border-[#6f9277] [&_textarea]:focus:!outline-none [&_textarea]:focus:!ring-2 [&_textarea]:focus:!ring-[#e2ebe3]">
//           {children}
//         </div>
//       </div>

//       {/* <div className="flex w-full items-center justify-center border-t border-[#e6e0d5] bg-[#f8f6f0] py-4">
//         <MedusaCTA />
//       </div> */}
//     </div>
//   )
// }


// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import ChevronDown from "@modules/common/icons/chevron-down"
// import MedusaCTA from "@modules/layout/components/medusa-cta"
// import Image from "next/image"

// export default function CheckoutLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="w-full bg-white relative small:min-h-screen">
//       <div className="h-16 bg-white border-b ">
//         <nav className="flex h-full items-center content-container justify-between">
//           <LocalizedClientLink
//             href="/cart"
//             className="text-small-semi text-ui-fg-base flex items-center gap-x-2 uppercase flex-1 basis-0"
//             data-testid="back-to-cart-link"
//           >
//             <ChevronDown className="rotate-90" size={16} />
//             <span className="mt-px hidden small:block txt-compact-plus text-ui-fg-subtle hover:text-ui-fg-base ">
//               Back to shopping cart
//             </span>
//             <span className="mt-px block small:hidden txt-compact-plus text-ui-fg-subtle hover:text-ui-fg-base">
//               Back
//             </span>
//           </LocalizedClientLink>
//           {/* <LocalizedClientLink
//             href="/"
//             className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             data-testid="store-link"
//           >
//             KHOJ
//           </LocalizedClientLink> */}

//           <LocalizedClientLink
//   href="/"
//   className="flex items-center hover:opacity-80 transition-opacity"
//   data-testid="store-link"
// >
//   <Image
//     src="/khojnav1.png"
//     alt="KHOJ"
//     width={120}
//     height={40}
//     priority
//     className="h-7 w-auto object-contain"
//   />
// </LocalizedClientLink>
//           <div className="flex-1 basis-0" />
//         </nav>
//       </div>
//       <div className="relative" data-testid="checkout-container">{children}</div>
//       <div className="py-4 w-full flex items-center justify-center">
//         <MedusaCTA />
//       </div>
//     </div>
//   )
// }

// top is is real

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Image from "next/image"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen w-full bg-[#f3f0e7] text-[#171915] small:min-h-screen">
      <div className="sticky top-0 z-40 h-16 border-b border-[#ddd7ca] bg-[#f3f0e7]/95 backdrop-blur-xl">
        <nav className="content-container flex h-full items-center justify-between">
          <LocalizedClientLink
            href="/cart"
            className="flex flex-1 basis-0 items-center gap-x-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#42463f] transition-colors hover:text-[#477b52]"
            data-testid="back-to-cart-link"
            aria-label="Back to shopping cart"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#d8d1c4] bg-[#f8f6f0] text-[#171915] shadow-sm transition-colors hover:border-[#7f1d2d]">
              <ChevronDown className="rotate-90" size={16} />
            </span>
            <span className="mt-px hidden small:block">Back to shopping cart</span>
            <span className="mt-px block small:hidden">Back</span>
          </LocalizedClientLink>

          <LocalizedClientLink
            href="/"
            className="flex items-center transition-opacity duration-200 hover:opacity-75"
            data-testid="store-link"
            aria-label="KHOJ home"
          >
            <Image
              src="/khojnav1.png"
              alt="KHOJ"
              width={120}
              height={40}
              priority
              className="h-7 w-auto object-contain"
            />
          </LocalizedClientLink>

          <div className="flex-1 basis-0" aria-hidden="true" />
        </nav>
      </div>

      <div className="relative" data-testid="checkout-container">
        <div className="[&_h1]:!font-bold [&_h1]:!tracking-[-0.04em] [&_h1]:!text-[#171915] [&_h2]:!font-bold [&_h2]:!tracking-[-0.03em] [&_h2]:!text-[#171915] [&_label]:!text-xs [&_label]:!font-semibold [&_label]:!tracking-[0.02em] [&_label]:!text-[#55584f] [&_input]:!min-h-12 [&_input]:!rounded-xl [&_input]:!border [&_input]:!border-[#d8d1c4] [&_input]:!bg-[#f8f6f0] [&_input]:!px-4 [&_input]:!text-sm [&_input]:!font-medium [&_input]:!text-[#171915] [&_input]:!shadow-none [&_input]:!transition-all [&_input]:!duration-200 [&_input]:placeholder:!text-[#97968d] [&_input]:focus:!border-[#7f1d2d] [&_input]:focus:!outline-none [&_input]:focus:!ring-2 [&_input]:focus:!ring-[#ead9dc] [&_input[type=checkbox]]:!h-4 [&_input[type=checkbox]]:!min-h-4 [&_input[type=checkbox]]:!w-4 [&_input[type=checkbox]]:!rounded [&_input[type=checkbox]]:!px-0 [&_input[type=checkbox]]:!shadow-none [&_input[type=radio]]:!h-4 [&_input[type=radio]]:!min-h-4 [&_input[type=radio]]:!w-4 [&_input[type=radio]]:!rounded-full [&_input[type=radio]]:!px-0 [&_input[type=radio]]:!shadow-none [&_select]:!min-h-12 [&_select]:!rounded-xl [&_select]:!border [&_select]:!border-[#d8d1c4] [&_select]:!bg-[#f8f6f0] [&_select]:!px-4 [&_select]:!text-sm [&_select]:!font-medium [&_select]:!text-[#171915] [&_select]:focus:!border-[#7f1d2d] [&_select]:focus:!outline-none [&_select]:focus:!ring-2 [&_select]:focus:!ring-[#ead9dc] [&_textarea]:!min-h-28 [&_textarea]:!rounded-xl [&_textarea]:!border [&_textarea]:!border-[#d8d1c4] [&_textarea]:!bg-[#f8f6f0] [&_textarea]:!px-4 [&_textarea]:!py-3 [&_textarea]:!text-sm [&_textarea]:!font-medium [&_textarea]:!shadow-none [&_textarea]:!transition-all [&_textarea]:!duration-200 [&_textarea]:!placeholder:!text-[#97968d] [&_textarea]:focus:!border-[#7f1d2d] [&_textarea]:focus:!outline-none [&_textarea]:focus:!ring-2 [&_textarea]:!ring-[#ead9dc]">
          {children}
        </div>
      </div>

      {/* <div className="flex w-full items-center justify-center border-t border-[#e6e0d5] bg-[#f8f6f0] py-4">
        <MedusaCTA />
      </div> */}
    </div>
  )
}
