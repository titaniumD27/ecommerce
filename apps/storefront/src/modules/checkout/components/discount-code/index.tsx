// "use client"

// import { Badge, Heading, Input, Label, Text } from "@modules/common/components/ui"
// import React from "react"

// import { applyPromotions } from "@lib/data/cart"
// import { convertToLocale } from "@lib/util/money"
// import { HttpTypes } from "@medusajs/types"
// import Trash from "@modules/common/icons/trash"
// import ErrorMessage from "../error-message"
// import { SubmitButton } from "../submit-button"

// type DiscountCodeProps = {
//   cart: HttpTypes.StoreCart
// }

// const DiscountCode: React.FC<DiscountCodeProps> = ({ cart }) => {
//   const [isOpen, setIsOpen] = React.useState(false)
//   const [errorMessage, setErrorMessage] = React.useState("")

//   const { promotions = [] } = cart
//   const removePromotionCode = async (code: string) => {
//     const validPromotions = promotions.filter(
//       (promotion) => promotion.code !== code
//     )

//     await applyPromotions(
//       validPromotions.filter((p) => p.code !== undefined).map((p) => p.code!)
//     )
//   }

//   const addPromotionCode = async (formData: FormData) => {
//     setErrorMessage("")

//     const code = formData.get("code")
//     if (!code) {
//       return
//     }
//     const input = document.getElementById("promotion-input") as HTMLInputElement
//     const codes = promotions
//       .filter((p) => p.code !== undefined)
//       .map((p) => p.code!)
//     codes.push(code.toString())

//     try {
//       await applyPromotions(codes)
//     } catch (e) {
//       setErrorMessage(e instanceof Error ? e.message : String(e))
//     }

//     if (input) {
//       input.value = ""
//     }
//   }

//   return (
//     <div className="w-full bg-white flex flex-col">
//       <div className="txt-medium">
//         <form action={(a) => addPromotionCode(a)} className="w-full mb-5">
//           <Label className="flex gap-x-1 my-2 items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="txt-medium text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
//               data-testid="add-discount-button"
//             >
//               Add Promotion Code(s)
//             </button>

//             {/* <Tooltip content="You can add multiple promotion codes">
//               <InformationCircleSolid color="var(--fg-muted)" />
//             </Tooltip> */}
//           </Label>

//           {isOpen && (
//             <>
//               <div className="flex w-full gap-x-2">
//                 <Input
//                   className="size-full"
//                   id="promotion-input"
//                   name="code"
//                   type="text"
//                   autoFocus={false}
//                   data-testid="discount-input"
//                 />
//                 <SubmitButton
//                   variant="secondary"
//                   data-testid="discount-apply-button"
//                 >
//                   Apply
//                 </SubmitButton>
//               </div>

//               <ErrorMessage
//                 error={errorMessage}
//                 data-testid="discount-error-message"
//               />
//             </>
//           )}
//         </form>

//         {promotions.length > 0 && (
//           <div className="w-full flex items-center">
//             <div className="flex flex-col w-full">
//               <Heading className="txt-medium mb-2">
//                 Promotion(s) applied:
//               </Heading>

//               {promotions.map((promotion) => {
//                 return (
//                   <div
//                     key={promotion.id}
//                     className="flex items-center justify-between w-full max-w-full mb-2"
//                     data-testid="discount-row"
//                   >
//                     <Text className="flex gap-x-1 items-baseline txt-small-plus w-4/5 pr-1">
//                       <span className="truncate" data-testid="discount-code">
//                         <Badge
//                           color={promotion.is_automatic ? "green" : "grey"}
//                         >
//                           {promotion.code}
//                         </Badge>{" "}
//                         (
//                         {promotion.application_method?.value !== undefined &&
//                           promotion.application_method.currency_code !==
//                             undefined && (
//                             <>
//                               {promotion.application_method.type ===
//                               "percentage"
//                                 ? `${promotion.application_method.value}%`
//                                 : convertToLocale({
//                                     amount: +promotion.application_method.value,
//                                     currency_code:
//                                       promotion.application_method
//                                         .currency_code,
//                                   })}
//                             </>
//                           )}
//                         )
//                         {/* {promotion.is_automatic && (
//                           <Tooltip content="This promotion is automatically applied">
//                             <InformationCircleSolid className="inline text-zinc-400" />
//                           </Tooltip>
//                         )} */}
//                       </span>
//                     </Text>
//                     {!promotion.is_automatic && (
//                       <button
//                         className="flex items-center"
//                         onClick={() => {
//                           if (!promotion.code) {
//                             return
//                           }

//                           removePromotionCode(promotion.code)
//                         }}
//                         data-testid="remove-discount-button"
//                       >
//                         <Trash size={14} />
//                         <span className="sr-only">
//                           Remove discount code from order
//                         </span>
//                       </button>
//                     )}
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default DiscountCode


"use client"

import { Input } from "@modules/common/components/ui"
import React from "react"

import { applyPromotions } from "@lib/data/cart"
import { convertToLocale } from "@lib/util/money"
import type { HttpTypes } from "@medusajs/types"
import Trash from "@modules/common/icons/trash"
import ErrorMessage from "../error-message"
import { SubmitButton } from "../submit-button"

type DiscountCodeProps = {
  cart: HttpTypes.StoreCart
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ cart }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")

  const { promotions = [] } = cart

  const removePromotionCode = async (code: string) => {
    const validPromotions = promotions.filter(
      (promotion) => promotion.code !== code
    )

    await applyPromotions(
      validPromotions.filter((promotion) => promotion.code !== undefined).map(
        (promotion) => promotion.code!
      )
    )
  }

  const addPromotionCode = async (formData: FormData) => {
    setErrorMessage("")

    const code = formData.get("code")
    if (!code) {
      return
    }

    const input = document.getElementById("promotion-input") as HTMLInputElement
    const codes = promotions
      .filter((promotion) => promotion.code !== undefined)
      .map((promotion) => promotion.code!)
    codes.push(code.toString())

    try {
      await applyPromotions(codes)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : String(error))
    }

    if (input) {
      input.value = ""
    }
  }

  return (
    <div className="w-full rounded-2xl bg-[#11120f] p-4 text-white shadow-sm small:p-5">
      <form action={(formData) => addPromotionCode(formData)} className="w-full">
        <div className="mb-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-expanded={isOpen}
            aria-controls="promotion-input-panel"
            className="!bg-transparent !text-white flex w-full items-center justify-between gap-4 rounded-xl text-left text-sm font-bold transition-colors hover:!text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            data-testid="add-discount-button"
          >
            <span>Add promotion code</span>
            <span
              aria-hidden="true"
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-lg font-medium text-white transition-transform duration-300 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>
        </div>

        <div
          id="promotion-input-panel"
          aria-hidden={!isOpen}
          className={`grid transition-all duration-300 ease-out ${
            isOpen
              ? "grid-rows-[1fr] translate-y-0 pt-3 opacity-100"
              : "pointer-events-none grid-rows-[0fr] -translate-y-1 pt-0 opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="flex w-full items-center gap-2">
              <Input
                className="h-12 min-w-0 flex-1 rounded-xl border border-white/20 bg-[#11120f] px-4 py-3 text-sm font-semibold text-white outline-none transition-colors placeholder:text-white/45 focus:border-white/70 focus:ring-2 focus:ring-white/15 disabled:opacity-50"
                id="promotion-input"
                name="code"
                type="text"
                placeholder="Enter promotion code"
                autoFocus={false}
                disabled={!isOpen}
                data-testid="discount-input"
              />
              {isOpen && (
                <div className="grid h-10 w-10 shrink-0 place-items-center [&_button]:!h-10 [&_button]:!w-10 [&_button]:!min-h-10 [&_button]:!rounded-full [&_button]:!border-0 [&_button]:!bg-white [&_button]:!p-0 [&_button]:!font-bold [&_button]:!text-[#11120f] [&_button:hover]:!bg-[#e8e6df]">
                  <SubmitButton
                    variant="secondary"
                    data-testid="discount-apply-button"
                  >
                    <span aria-hidden="true" className="text-xl leading-none">✓</span>
                    <span className="sr-only">Apply promotion code</span>
                  </SubmitButton>
                </div>
              )}
            </div>

            {errorMessage && (
              <div className="mt-3 text-sm font-semibold text-[#ffb4ab] [&_*]:!text-[#ffb4ab]">
                <ErrorMessage
                  error={errorMessage}
                  data-testid="discount-error-message"
                />
              </div>
            )}
          </div>
        </div>
      </form>

      {promotions.length > 0 && (
        <div className="mt-4 w-full border-t border-white/15 pt-4">
          <p className="mb-3 text-sm font-bold text-white">
            Promotion{promotions.length === 1 ? "" : "s"} applied
          </p>

          <div className="flex w-full flex-col gap-2">
            {promotions.map((promotion) => (
              <div
                key={promotion.id}
                className="flex w-full min-w-0 items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                data-testid="discount-row"
              >
                <span className="min-w-0 truncate text-xs font-semibold text-white/90">
                  <span
                    className="mr-2 inline-flex max-w-full items-center truncate rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white"
                    data-testid="discount-code"
                  >
                    {promotion.code}
                  </span>
                  {promotion.application_method?.value !== undefined &&
                    promotion.application_method.currency_code !== undefined &&
                    (promotion.application_method.type === "percentage"
                      ? `${promotion.application_method.value}% off`
                      : `${convertToLocale({
                          amount: +promotion.application_method.value,
                          currency_code:
                            promotion.application_method.currency_code,
                        })} off`)}
                </span>

                {!promotion.is_automatic && (
                  <button
                    type="button"
                    onClick={() => {
                      if (!promotion.code) {
                        return
                      }

                      removePromotionCode(promotion.code)
                    }}
                    aria-label="Remove discount code from order"
                    className="!rounded-full !bg-white/10 !text-white/80 grid h-9 w-9 shrink-0 place-items-center border border-white/15 transition-colors hover:!bg-white/20 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    data-testid="remove-discount-button"
                  >
                    <Trash size={14} />
                    <span className="sr-only">
                      Remove discount code from order
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DiscountCode
