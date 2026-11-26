// import { Heading } from "@modules/common/components/ui"
// import { cookies as nextCookies } from "next/headers"

// import CartTotals from "@modules/common/components/cart-totals"
// import Help from "@modules/order/components/help"
// import Items from "@modules/order/components/items"
// import OnboardingCta from "@modules/order/components/onboarding-cta"
// import OrderDetails from "@modules/order/components/order-details"
// import ShippingDetails from "@modules/order/components/shipping-details"
// import PaymentDetails from "@modules/order/components/payment-details"
// import { HttpTypes } from "@medusajs/types"

// type OrderCompletedTemplateProps = {
//   order: HttpTypes.StoreOrder
// }

// export default async function OrderCompletedTemplate({
//   order,
// }: OrderCompletedTemplateProps) {
//   const cookies = await nextCookies()

//   const isOnboarding = cookies.get("_medusa_onboarding")?.value === "true"

//   return (
//     <div className="py-6 min-h-[calc(100vh-64px)]">
//       <div className="content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full">
//         {isOnboarding && <OnboardingCta orderId={order.id} />}
//         <div
//           className="flex flex-col gap-4 max-w-4xl h-full bg-white w-full py-10"
//           data-testid="order-complete-container"
//         >
//           <Heading
//             level="h1"
//             className="flex flex-col gap-y-3 text-ui-fg-base text-3xl mb-4"
//           >
//             <span>Thank you!</span>
//             <span>Your order was placed successfully.</span>
//           </Heading>
//           <OrderDetails order={order} />
//           <Heading level="h2" className="flex flex-row text-3xl-regular">
//             Summary
//           </Heading>
//           <Items order={order} />
//           <CartTotals totals={order} />
//           <ShippingDetails order={order} />
//           <PaymentDetails order={order} />
//           <Help />
//         </div>
//       </div>
//     </div>
//   )
// }


import { Heading } from "@modules/common/components/ui"
import { cookies as nextCookies } from "next/headers"

import CartTotals from "@modules/common/components/cart-totals"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OnboardingCta from "@modules/order/components/onboarding-cta"
import OrderDetails from "@modules/order/components/order-details"
import PaymentDetails from "@modules/order/components/payment-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import { HttpTypes } from "@medusajs/types"

type OrderCompletedTemplateProps = {
  order: HttpTypes.StoreOrder
}

export default async function OrderCompletedTemplate({
  order,
}: OrderCompletedTemplateProps) {
  const cookies = await nextCookies()

  const isOnboarding = cookies.get("_medusa_onboarding")?.value === "true"

  return (
<main className="min-h-[calc(100vh-64px)] bg-[#f3f0e7] px-4 pt-24 pb-8 small:px-6 small:pt-25 small:pb-14">      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
        {isOnboarding && <OnboardingCta orderId={order.id} />}

        <section
          className="relative w-full overflow-hidden rounded-[28px] border border-[#d8d1c4] bg-[#fbfaf6] shadow-[0_22px_60px_rgba(63,49,31,0.08)]"
          data-testid="order-complete-container"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#8b1e2d]" />

          <div className="border-b border-dashed border-[#cfc6b8] px-5 pb-8 pt-10 text-center small:px-12">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8b1e2d]">
              Order receipt
            </p>
            <Heading
              level="h1"
              className="text-3xl font-semibold tracking-[-0.04em] text-[#171915] small:text-5xl"
            >
              Thank you for your order.
            </Heading>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#6e675d]">
              Your order was placed successfully. Keep this receipt for your
              records.
            </p>
          </div>

          <div className="space-y-10 px-5 py-8 small:px-12 small:py-10">
            <div className="rounded-2xl border border-[#e2ddd2] bg-[#f3f0e7]/55 p-5 small:p-6">
              <OrderDetails order={order} />
            </div>

            <div>
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#d8d1c4] pb-4">
                <Heading
                  level="h2"
                  className="text-2xl font-semibold tracking-[-0.03em] text-[#171915]"
                >
                  Summary
                </Heading>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b1e2d]">
                  Paid on delivery
                </span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#e2ddd2] bg-[#fffefa] px-4 small:px-6">
                <Items order={order} />
              </div>
              <div className="mt-5 rounded-2xl border border-[#e2ddd2] bg-[#f3f0e7]/55 p-5 small:p-6">
                <CartTotals totals={order} />
              </div>
            </div>

            <div className="rounded-2xl border border-[#e2ddd2] bg-[#fffefa] px-5 py-1 small:px-6">
              <ShippingDetails order={order} />
              <PaymentDetails order={order} />
            </div>

            <div className="border-t border-dashed border-[#cfc6b8] pt-7">
              <Help />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
