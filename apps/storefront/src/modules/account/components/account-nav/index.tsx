// // "use client"

// // import { ArrowRightOnRectangle } from "@medusajs/icons"
// // import { clx } from "@modules/common/components/ui"
// // import { useParams, usePathname } from "next/navigation"

// // import { signout } from "@lib/data/customer"
// // import { HttpTypes } from "@medusajs/types"
// // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // import ChevronDown from "@modules/common/icons/chevron-down"
// // import MapPin from "@modules/common/icons/map-pin"
// // import Package from "@modules/common/icons/package"
// // import User from "@modules/common/icons/user"

// // const AccountNav = ({
// //   customer,
// // }: {
// //   customer: HttpTypes.StoreCustomer | null
// // }) => {
// //   const route = usePathname()
// //   const { countryCode } = useParams() as { countryCode: string }

// //   const handleLogout = async () => {
// //     await signout(countryCode)
// //   }

// //   return (
// //     <div>
// //       <div className="small:hidden" data-testid="mobile-account-nav">
// //         {route !== `/${countryCode}/account` ? (
// //           <LocalizedClientLink
// //             href="/account"
// //             className="flex items-center gap-x-2 text-small-regular py-2"
// //             data-testid="account-main-link"
// //           >
// //             <>
// //               <ChevronDown className="transform rotate-90" />
// //               <span>Account</span>
// //             </>
// //           </LocalizedClientLink>
// //         ) : (
// //           <>
// //             <div className="text-xl-semi mb-4 px-8">
// //               Hello {customer?.first_name}
// //             </div>
// //             <div className="text-base-regular">
// //               <ul>
// //                 <li>
// //                   <LocalizedClientLink
// //                     href="/account/profile"
// //                     className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
// //                     data-testid="profile-link"
// //                   >
// //                     <>
// //                       <div className="flex items-center gap-x-2">
// //                         <User size={20} />
// //                         <span>Profile</span>
// //                       </div>
// //                       <ChevronDown className="transform -rotate-90" />
// //                     </>
// //                   </LocalizedClientLink>
// //                 </li>
// //                 <li>
// //                   <LocalizedClientLink
// //                     href="/account/addresses"
// //                     className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
// //                     data-testid="addresses-link"
// //                   >
// //                     <>
// //                       <div className="flex items-center gap-x-2">
// //                         <MapPin size={20} />
// //                         <span>Addresses</span>
// //                       </div>
// //                       <ChevronDown className="transform -rotate-90" />
// //                     </>
// //                   </LocalizedClientLink>
// //                 </li>
// //                 <li>
// //                   <LocalizedClientLink
// //                     href="/account/orders"
// //                     className="flex items-center justify-between py-4 border-b border-gray-200 px-8"
// //                     data-testid="orders-link"
// //                   >
// //                     <div className="flex items-center gap-x-2">
// //                       <Package size={20} />
// //                       <span>Orders</span>
// //                     </div>
// //                     <ChevronDown className="transform -rotate-90" />
// //                   </LocalizedClientLink>
// //                 </li>
// //                 <li>
// //                   <button
// //                     type="button"
// //                     className="flex items-center justify-between py-4 border-b border-gray-200 px-8 w-full"
// //                     onClick={handleLogout}
// //                     data-testid="logout-button"
// //                   >
// //                     <div className="flex items-center gap-x-2">
// //                       <ArrowRightOnRectangle />
// //                       <span>Log out</span>
// //                     </div>
// //                     <ChevronDown className="transform -rotate-90" />
// //                   </button>
// //                 </li>
// //               </ul>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //       <div className="hidden small:block" data-testid="account-nav">
// //         <div>
// //           <div className="pb-4">
// //             <h3 className="text-base-semi">Account</h3>
// //           </div>
// //           <div className="text-base-regular">
// //             <ul className="flex mb-0 justify-start items-start flex-col gap-y-4">
// //               <li>
// //                 <AccountNavLink
// //                   href="/account"
// //                   route={route!}
// //                   data-testid="overview-link"
// //                 >
// //                   Overview
// //                 </AccountNavLink>
// //               </li>
// //               <li>
// //                 <AccountNavLink
// //                   href="/account/profile"
// //                   route={route!}
// //                   data-testid="profile-link"
// //                 >
// //                   Profile
// //                 </AccountNavLink>
// //               </li>
// //               <li>
// //                 <AccountNavLink
// //                   href="/account/addresses"
// //                   route={route!}
// //                   data-testid="addresses-link"
// //                 >
// //                   Addresses
// //                 </AccountNavLink>
// //               </li>
// //               <li>
// //                 <AccountNavLink
// //                   href="/account/orders"
// //                   route={route!}
// //                   data-testid="orders-link"
// //                 >
// //                   Orders
// //                 </AccountNavLink>
// //               </li>
// //               <li className="text-grey-700">
// //                 <button
// //                   type="button"
// //                   onClick={handleLogout}
// //                   data-testid="logout-button"
// //                 >
// //                   Log out
// //                 </button>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // type AccountNavLinkProps = {
// //   href: string
// //   route: string
// //   children: React.ReactNode
// //   "data-testid"?: string
// // }

// // const AccountNavLink = ({
// //   href,
// //   route,
// //   children,
// //   "data-testid": dataTestId,
// // }: AccountNavLinkProps) => {
// //   const { countryCode }: { countryCode: string } = useParams()

// //   const active = route.split(countryCode)[1] === href
// //   return (
// //     <LocalizedClientLink
// //       href={href}
// //       className={clx("text-ui-fg-subtle hover:text-ui-fg-base", {
// //         "text-ui-fg-base font-semibold": active,
// //       })}
// //       data-testid={dataTestId}
// //     >
// //       {children}
// //     </LocalizedClientLink>
// //   )
// // }

// // export default AccountNav


// "use client"

// import { ArrowRightOnRectangle } from "@medusajs/icons"
// import { clx } from "@modules/common/components/ui"
// import { useParams, usePathname } from "next/navigation"

// import { signout } from "@lib/data/customer"
// import { HttpTypes } from "@medusajs/types"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import ChevronDown from "@modules/common/icons/chevron-down"
// import MapPin from "@modules/common/icons/map-pin"
// import Package from "@modules/common/icons/package"
// import User from "@modules/common/icons/user"

// const AccountNav = ({
//   customer,
// }: {
//   customer: HttpTypes.StoreCustomer | null
// }) => {
//   const route = usePathname()
//   const { countryCode } = useParams() as { countryCode: string }

//   const handleLogout = async () => {
//     await signout(countryCode)
//   }

//   return (
//     <div>
//       <div className="small:hidden" data-testid="mobile-account-nav">
//         {route !== `/${countryCode}/account` ? (
//           <LocalizedClientLink
//             href="/account"
//             className="inline-flex items-center gap-x-2 rounded-full border border-[#e5dfd2] px-4 py-2 text-small-regular text-ui-fg-subtle transition-colors hover:border-[#800020] hover:text-[#800020]"
//             data-testid="account-main-link"
//           >
//             <>
//               <ChevronDown className="transform rotate-90" />
//               <span>Account</span>
//             </>
//           </LocalizedClientLink>
//         ) : (
//           <>
//             <div className="text-xl-semi mb-5">
//               Hello {customer?.first_name}
//             </div>
//             <div className="text-base-regular">
//               <ul className="overflow-hidden rounded-2xl border border-[#e5dfd2] bg-[#f6f3eb]">
//                 <li>
//                   <LocalizedClientLink
//                     href="/account/profile"
//                     className="flex items-center justify-between py-4 border-b border-[#e5dfd2] px-5 transition-colors hover:bg-[#800020] hover:text-[#f3f0e7]"
//                     data-testid="profile-link"
//                   >
//                     <>
//                       <div className="flex items-center gap-x-2">
//                         <User size={20} />
//                         <span>Profile</span>
//                       </div>
//                       <ChevronDown className="transform -rotate-90" />
//                     </>
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <LocalizedClientLink
//                     href="/account/addresses"
//                     className="flex items-center justify-between py-4 border-b border-[#e5dfd2] px-5 transition-colors hover:bg-[#800020] hover:text-[#f3f0e7]"
//                     data-testid="addresses-link"
//                   >
//                     <>
//                       <div className="flex items-center gap-x-2">
//                         <MapPin size={20} />
//                         <span>Addresses</span>
//                       </div>
//                       <ChevronDown className="transform -rotate-90" />
//                     </>
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <LocalizedClientLink
//                     href="/account/orders"
//                     className="flex items-center justify-between py-4 border-b border-[#e5dfd2] px-5 transition-colors hover:bg-[#800020] hover:text-[#f3f0e7]"
//                     data-testid="orders-link"
//                   >
//                     <div className="flex items-center gap-x-2">
//                       <Package size={20} />
//                       <span>Orders</span>
//                     </div>
//                     <ChevronDown className="transform -rotate-90" />
//                   </LocalizedClientLink>
//                 </li>
//                 <li>
//                   <button
//                     type="button"
//                     className="flex items-center justify-between py-4 border-b border-[#e5dfd2] px-5 w-full transition-colors hover:bg-[#800020] hover:text-[#f3f0e7]"
//                     onClick={handleLogout}
//                     data-testid="logout-button"
//                   >
//                     <div className="flex items-center gap-x-2">
//                       <ArrowRightOnRectangle />
//                       <span>Log out</span>
//                     </div>
//                     <ChevronDown className="transform -rotate-90" />
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="hidden small:block" data-testid="account-nav">
//         <div>
//           <div className="pb-4">
//             <p className="text-[11px] uppercase tracking-[0.24em] text-[#800020] mb-2">
//               Your space
//             </p>
//             <h3 className="text-base-semi">Account</h3>
//           </div>
//           <div className="text-base-regular">
//             <ul className="flex mb-0 justify-start items-start flex-col gap-y-2">
//               <li>
//                 <AccountNavLink href="/account" route={route!} data-testid="overview-link">
//                   Overview
//                 </AccountNavLink>
//               </li>
//               <li>
//                 <AccountNavLink href="/account/profile" route={route!} data-testid="profile-link">
//                   Profile
//                 </AccountNavLink>
//               </li>
//               <li>
//                 <AccountNavLink href="/account/addresses" route={route!} data-testid="addresses-link">
//                   Addresses
//                 </AccountNavLink>
//               </li>
//               <li>
//                 <AccountNavLink href="/account/orders" route={route!} data-testid="orders-link">
//                   Orders
//                 </AccountNavLink>
//               </li>
//               <li className="text-grey-700 pt-2">
//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   data-testid="logout-button"
//                   className="px-4 py-2 transition-colors hover:text-[#800020]"
//                 >
//                   Log out
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// type AccountNavLinkProps = {
//   href: string
//   route: string
//   children: React.ReactNode
//   "data-testid"?: string
// }

// const AccountNavLink = ({
//   href,
//   route,
//   children,
//   "data-testid": dataTestId,
// }: AccountNavLinkProps) => {
//   const { countryCode }: { countryCode: string } = useParams()

//   const active = route.split(countryCode)[1] === href
//   return (
//     <LocalizedClientLink
//       href={href}
//       className={clx(
//         "block rounded-full px-4 py-2 text-ui-fg-subtle transition-colors hover:bg-[#f3f0e7] hover:text-[#800020]",
//         {
//           "bg-[#800020] text-[#f3f0e7] font-semibold hover:bg-[#800020] hover:text-[#f3f0e7]":
//             active,
//         }
//       )}
//       data-testid={dataTestId}
//     >
//       {children}
//     </LocalizedClientLink>
//   )
// }

// export default AccountNav


"use client"

import { ArrowRightOnRectangle } from "@medusajs/icons"
import { clx } from "@modules/common/components/ui"
import { useParams, usePathname } from "next/navigation"

import { signout } from "@lib/data/customer"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MapPin from "@modules/common/icons/map-pin"
import Package from "@modules/common/icons/package"
import User from "@modules/common/icons/user"

const AccountNav = ({
  customer,
}: {
  customer: HttpTypes.StoreCustomer | null
}) => {
  const route = usePathname()
  const { countryCode } = useParams() as { countryCode: string }

  const handleLogout = async () => {
    await signout(countryCode)
  }

  return (
    <div>
      {/* Mobile account navigation */}
      <div className="small:hidden" data-testid="mobile-account-nav">
        {route !== `/${countryCode}/account` ? (
          <LocalizedClientLink
            href="/account"
            className="inline-flex items-center gap-x-2 rounded-full border border-[#e5dfd2] px-4 py-2 text-small-regular text-ui-fg-subtle transition-colors hover:border-[#800020] hover:text-[#800020]"
            data-testid="account-main-link"
          >
            <>
              <ChevronDown className="transform rotate-90" />
              <span>Account</span>
            </>
          </LocalizedClientLink>
        ) : (
          <>
            <div className="text-xl-semi mb-5">
              Hello {customer?.first_name}
            </div>

            <div className="text-base-regular">
              <ul className="overflow-hidden rounded-2xl border border-[#e5dfd2] bg-[#f6f3eb]">
                <li>
                  <LocalizedClientLink
                    href="/account/profile"
                    className="flex items-center justify-between border-b border-[#e5dfd2] px-5 py-4 transition-colors hover:bg-[#800020] hover:text-white"
                    data-testid="profile-link"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        <User size={20} />
                        <span>Profile</span>
                      </div>

                      <ChevronDown className="transform -rotate-90" />
                    </>
                  </LocalizedClientLink>
                </li>

                <li>
                  <LocalizedClientLink
                    href="/account/addresses"
                    className="flex items-center justify-between border-b border-[#e5dfd2] px-5 py-4 transition-colors hover:bg-[#800020] hover:text-white"
                    data-testid="addresses-link"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        <MapPin size={20} />
                        <span>Addresses</span>
                      </div>

                      <ChevronDown className="transform -rotate-90" />
                    </>
                  </LocalizedClientLink>
                </li>

                <li>
                  <LocalizedClientLink
                    href="/account/orders"
                    className="flex items-center justify-between border-b border-[#e5dfd2] px-5 py-4 transition-colors hover:bg-[#800020] hover:text-white"
                    data-testid="orders-link"
                  >
                    <div className="flex items-center gap-x-2">
                      <Package size={20} />
                      <span>Orders</span>
                    </div>

                    <ChevronDown className="transform -rotate-90" />
                  </LocalizedClientLink>
                </li>

                <li>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between border-b border-[#e5dfd2] px-5 py-4 transition-colors hover:bg-[#800020] hover:text-white"
                    onClick={handleLogout}
                    data-testid="logout-button"
                  >
                    <div className="flex items-center gap-x-2">
                      <ArrowRightOnRectangle />
                      <span>Log out</span>
                    </div>

                    <ChevronDown className="transform -rotate-90" />
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Desktop account navigation */}
      <div className="hidden small:block" data-testid="account-nav">
        <div>
          <div className="pb-4">
            <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[#800020]">
              Your space
            </p>

            <h3 className="text-base-semi">Account</h3>
          </div>

          <div className="text-base-regular">
            <ul className="mb-0 flex flex-col items-start justify-start gap-y-2">
              <li>
                <AccountNavLink
                  href="/account"
                  route={route!}
                  data-testid="overview-link"
                >
                  Overview
                </AccountNavLink>
              </li>

              <li>
                <AccountNavLink
                  href="/account/profile"
                  route={route!}
                  data-testid="profile-link"
                >
                  Profile
                </AccountNavLink>
              </li>

              <li>
                <AccountNavLink
                  href="/account/addresses"
                  route={route!}
                  data-testid="addresses-link"
                >
                  Addresses
                </AccountNavLink>
              </li>

              <li>
                <AccountNavLink
                  href="/account/orders"
                  route={route!}
                  data-testid="orders-link"
                >
                  Orders
                </AccountNavLink>
              </li>

              <li className="pt-2 text-grey-700">
                <button
                  type="button"
                  onClick={handleLogout}
                  data-testid="logout-button"
                  className="px-4 py-2 transition-colors hover:text-[#800020]"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  "data-testid"?: string
}

const AccountNavLink = ({
  href,
  route,
  children,
  "data-testid": dataTestId,
}: AccountNavLinkProps) => {
  const { countryCode }: { countryCode: string } = useParams()

  const active = route.split(countryCode)[1] === href

  return (
    <LocalizedClientLink
      href={href}
      className={clx(
        "block rounded-full px-4 py-2 text-ui-fg-subtle transition-colors hover:bg-[#f3f0e7] hover:text-[#800020]",
        {
          "!bg-[#800020] !text-white font-semibold hover:!bg-[#800020] hover:!text-white":
            active,
        }
      )}
      data-testid={dataTestId}
    >
      {children}
    </LocalizedClientLink>
  )
}

export default AccountNav