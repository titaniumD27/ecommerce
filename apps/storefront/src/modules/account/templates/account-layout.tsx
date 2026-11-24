// import React from "react"

// import UnderlineLink from "@modules/common/components/interactive-link"

// import AccountNav from "../components/account-nav"
// import { HttpTypes } from "@medusajs/types"

// interface AccountLayoutProps {
//   customer: HttpTypes.StoreCustomer | null
//   children: React.ReactNode
// }

// const AccountLayout: React.FC<AccountLayoutProps> = ({
//   customer,
//   children,
// }) => {
//   return (
//     <div className="flex-1 small:py-12" data-testid="account-page">
//       <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col">
//         <div className="grid grid-cols-1  small:grid-cols-[240px_1fr] py-12">
//           <div>{customer && <AccountNav customer={customer} />}</div>
//           <div className="flex-1">{children}</div>
//         </div>
//         <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
//           <div>
//             <h3 className="text-xl-semi mb-4">Got questions?</h3>
//             <span className="txt-medium">
//               You can find frequently asked questions and answers on our
//               customer service page.
//             </span>
//           </div>
//           <div>
//             <UnderlineLink href="/customer-service">
//               Customer Service
//             </UnderlineLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AccountLayout


import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div
      className="flex-1 bg-[#f3f0e7] px-4 pt-20 pb-8 small:px-6 small:pt-28 small:pb-16"
      data-testid="account-page"
    >
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-[#fbfaf6] border border-[#e5dfd2] rounded-[28px] shadow-[0_18px_60px_rgba(33,33,33,0.06)] flex flex-col overflow-hidden">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] gap-y-8 small:gap-x-12 px-6 py-8 small:px-12 small:py-12">
          <div className="small:border-r small:border-[#e5dfd2] small:pr-8">
            {customer && <AccountNav customer={customer} />}
          </div>
          <div className="flex-1 min-w-0">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-start small:items-end justify-between border-t border-[#e5dfd2] px-6 py-8 small:px-12 small:py-10 gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#800020] mb-3">
              Customer care
            </p>
            <h3 className="text-xl-semi mb-3">Got questions?</h3>
            <span className="txt-medium text-ui-fg-subtle">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
