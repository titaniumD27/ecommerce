// import { Heading } from "@modules/common/components/ui"

// import ItemsPreviewTemplate from "@modules/cart/templates/preview"
// import DiscountCode from "@modules/checkout/components/discount-code"
// import CartTotals from "@modules/common/components/cart-totals"
// import Divider from "@modules/common/components/divider"
// import { HttpTypes } from "@medusajs/types"

// const CheckoutSummary = ({ cart }: { cart: HttpTypes.StoreCart }) => {
//   return (
//     <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 py-8 small:py-0 ">
//       <div className="w-full bg-white flex flex-col">
//         <Divider className="my-6 small:hidden" />
//         <Heading
//           level="h2"
//           className="flex flex-row text-3xl-regular items-baseline"
//         >
//           In your Cart
//         </Heading>
//         <Divider className="my-6" />
//         <CartTotals totals={cart} />
//         <ItemsPreviewTemplate cart={cart} />
//         <div className="my-6">
//           <DiscountCode cart={cart} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CheckoutSummary


import { Heading } from "@modules/common/components/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CheckoutSummary = ({ cart }: { cart: HttpTypes.StoreCart }) => {
  return (
    <div className="sticky top-0 flex flex-col-reverse gap-y-8 py-8 small:flex-col small:py-0">
      <div className="w-full rounded-2xl border border-[#e2ddd2] bg-[#f8f6f0]/85 p-5 shadow-[0_12px_30px_rgba(63,49,31,0.05)] small:p-6">
        <Divider className="my-6 small:hidden" />
        <Heading
          level="h2"
          className="flex flex-row text-3xl-regular items-baseline"
        >
          In your Cart
        </Heading>
        <Divider className="my-6" />
        <CartTotals totals={cart} />
        <ItemsPreviewTemplate cart={cart} />
        <div className="my-6">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
