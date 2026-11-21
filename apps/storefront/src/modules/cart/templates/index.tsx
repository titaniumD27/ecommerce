// // import ItemsTemplate from "./items"
// // import Summary from "./summary"
// // import EmptyCartMessage from "../components/empty-cart-message"
// // import SignInPrompt from "../components/sign-in-prompt"
// // import Divider from "@modules/common/components/divider"
// // import { HttpTypes } from "@medusajs/types"

// // const CartTemplate = ({
// //   cart,
// //   customer,
// // }: {
// //   cart: HttpTypes.StoreCart | null
// //   customer: HttpTypes.StoreCustomer | null
// // }) => {
// //   return (
// //     <div className="pt-12 pb-10">
// //       <div className="content-container" data-testid="cart-container">
// //         {cart?.items?.length ? (
// //           <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
// //             <div className="flex flex-col bg-white py-6 gap-y-6">
// //               {!customer && (
// //                 <>
// //                   <SignInPrompt />
// //                   <Divider />
// //                 </>
// //               )}
// //               <ItemsTemplate cart={cart} />
// //             </div>
// //             <div className="relative">
// //               <div className="flex flex-col gap-y-8 sticky top-12">
// //                 {cart && cart.region && (
// //                   <>
// //                     <div className="bg-white py-6">
// //                       <Summary cart={cart} />
// //                     </div>
// //                   </>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         ) : (
// //           <div>
// //             <EmptyCartMessage />
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }

// // export default CartTemplate


// import ItemsTemplate from "./items"
// import Summary from "./summary"
// import EmptyCartMessage from "../components/empty-cart-message"
// import SignInPrompt from "../components/sign-in-prompt"
// import Divider from "@modules/common/components/divider"
// import type { HttpTypes } from "@medusajs/types"

// type CartTemplateProps = {
//   cart: HttpTypes.StoreCart | null
//   customer: HttpTypes.StoreCustomer | null
// }

// const CartTemplate = ({ cart, customer }: CartTemplateProps) => {
//   return (
//     <div className="min-h-screen bg-[#f3f0e7] pb-10 pt-20 text-[#171915] small:pb-14 small:pt-24">
//       <div className="content-container" data-testid="cart-container">
//         {cart?.items?.length ? (
//           <>
//             <div className="mb-5 flex items-end justify-between gap-4 small:mb-7">
//               {/* <div className="min-w-0">
//                 <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6d7169]">
//                   KHOJ / YOUR SELECTION
//                 </p>
//                 <h1 className="m-0 text-2xl font-bold tracking-[-0.05em] text-[#171915] small:text-3xl">
//                   My cart
//                 </h1>
//               </div> */}
//               {/* <p className="mb-1 shrink-0 text-xs font-semibold text-[#656960] small:text-sm">
//                 {cart.items.length} {cart.items.length === 1 ? "item" : "items"}
//               </p> */}
//             </div>

//             <div className="grid grid-cols-1 items-start gap-5 small:grid-cols-[minmax(0,1fr)_340px] small:gap-6 medium:grid-cols-[minmax(0,1fr)_380px] medium:gap-8">
//               <section
//                 className="min-w-0 overflow-hidden rounded-3xl border border-[#e7e1d6] bg-white p-4 shadow-sm small:p-6"
//                 aria-label="Cart items"
//               >
//                 {!customer && (
//                   <>
//                     <div className="rounded-2xl bg-[#f7f5ef] p-4 small:p-5">
//                       <SignInPrompt />
//                     </div>
//                     <div className="my-5 [&_hr]:border-[#e8e3d9]">
//                       <Divider />
//                     </div>
//                   </>
//                 )}

//                 <div className="[&_button]:translate-x-1 [&_button]:rounded-full [&_button]:transition-colors [&_button:hover]:border-[#b9d8c3] [&_button:hover]:text-[#177c43] [&_img]:rounded-2xl [&_input]:rounded-xl [&_input[type=checkbox]]:translate-x-1 small:[&_button]:translate-x-0 small:[&_input[type=checkbox]]:translate-x-0">
//                   <ItemsTemplate cart={cart} />
//                 </div>
//               </section>

//               <aside className="relative min-w-0" aria-label="Cart summary">
//                 <div className="flex flex-col gap-y-4 small:sticky small:top-8">
//                   {cart && cart.region && (
//                     <div className="rounded-3xl border border-[#e7e1d6] bg-white p-5 shadow-sm small:p-6">
//                       <div className="[&_a]:rounded-2xl [&_a]:bg-[#159447] [&_a]:font-semibold [&_a]:text-white [&_a]:transition-colors [&_a:hover]:bg-[#11783a] [&_button]:rounded-2xl [&_button]:bg-[#159447] [&_button]:font-semibold [&_button]:text-white [&_button]:transition-colors [&_button:hover]:bg-[#11783a] [&_form]:rounded-2xl [&_form]:bg-[#171915] [&_form]:p-3 [&_form_input]:min-h-12 [&_form_input]:rounded-xl [&_form_input]:border [&_form_input]:border-[#171915] [&_form_input]:bg-[#171915] [&_form_input]:px-4 [&_form_input]:py-3 [&_form_input]:font-semibold [&_form_input]:text-white [&_form_input]:placeholder:text-[#c9ccc4] [&_form_input]:outline-none [&_form_input]:focus:ring-2 [&_form_input]:focus:ring-[#159447]">
//                         <Summary cart={cart} />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </aside>
//             </div>
//           </>
//         ) : (
//           <div className="rounded-3xl border border-[#e7e1d6] bg-white px-5 py-10 shadow-sm small:px-8 small:py-14">
//             <EmptyCartMessage />
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default CartTemplate

import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import type { HttpTypes } from "@medusajs/types"

type CartTemplateProps = {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}

const CartTemplate = ({ cart, customer }: CartTemplateProps) => {
  return (
    <div className="min-h-screen bg-[#f3f0e7] pb-10 pt-20 text-[#171915] small:pb-14 small:pt-24">
      <div className="content-container" data-testid="cart-container">
        {cart?.items?.length ? (
          <>
            <div className="mb-5 flex items-end justify-between gap-4 small:mb-7">
              <div className="min-w-0">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6d7169]">
                  KHOJ / YOUR SELECTION
                </p>
                <h1 className="m-0 text-2xl font-bold tracking-[-0.05em] text-[#171915] small:text-3xl">
                  My cart
                </h1>
              </div>
              <p className="mb-1 shrink-0 text-xs font-semibold text-[#656960] small:text-sm">
                {cart.items.length} {cart.items.length === 1 ? "item" : "items"}
              </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-5 small:grid-cols-[minmax(0,1fr)_340px] small:gap-6 medium:grid-cols-[minmax(0,1fr)_380px] medium:gap-8">
              <section
                className="min-w-0 overflow-visible rounded-3xl border border-[#e7e1d6] bg-white p-4 shadow-sm small:p-6"
                aria-label="Cart items"
              >
                {!customer && (
                  <>
                    <div className="rounded-2xl bg-[#f7f5ef] p-4 small:p-5">
                      <SignInPrompt />
                    </div>
                    <div className="my-5 [&_hr]:border-[#e8e3d9]">
                      <Divider />
                    </div>
                  </>
                )}

                <div className="[&_button]:translate-x-1 [&_button]:rounded-full [&_button]:transition-colors [&_button:hover]:border-[#b9d8c3] [&_button:hover]:text-[#177c43] [&_img]:rounded-2xl [&_input]:rounded-xl [&_input[type=checkbox]]:translate-x-1 small:[&_button]:translate-x-0 small:[&_input[type=checkbox]]:translate-x-0">
                  <ItemsTemplate cart={cart} />
                </div>
              </section>

              <aside className="relative min-w-0" aria-label="Cart summary">
                <div className="flex flex-col gap-y-4 small:sticky small:top-8">
                  {cart && cart.region && (
                    <div className="rounded-3xl border border-[#e7e1d6] bg-white p-5 shadow-sm small:p-6">
                      <div className="[&_a]:rounded-2xl [&_a]:bg-[#159447] [&_a]:font-semibold [&_a]:text-white [&_a]:transition-colors [&_a:hover]:bg-[#11783a] [&_button]:rounded-2xl [&_button]:bg-[#159447] [&_button]:font-semibold [&_button]:text-white [&_button]:transition-colors [&_button:hover]:bg-[#11783a] [&_form]:rounded-2xl [&_form]:bg-[#171915] [&_form]:p-3 [&_form_input]:min-h-12 [&_form_input]:rounded-xl [&_form_input]:border [&_form_input]:border-[#171915] [&_form_input]:bg-[#171915] [&_form_input]:px-4 [&_form_input]:py-3 [&_form_input]:font-semibold [&_form_input]:text-white [&_form_input]:placeholder:text-[#c9ccc4] [&_form_input]:outline-none [&_form_input]:focus:ring-2 [&_form_input]:focus:ring-[#159447]">
                        <Summary cart={cart} />
                      </div>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </>
        ) : (
          <div className="rounded-3xl border border-[#e7e1d6] bg-white px-5 py-10 shadow-sm small:px-8 small:py-14">
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
