// // // "use client"

// // // import { Table, Text, clx } from "@modules/common/components/ui"
// // // import { updateLineItem } from "@lib/data/cart"
// // // import { HttpTypes } from "@medusajs/types"
// // // import CartItemSelect from "@modules/cart/components/cart-item-select"
// // // import ErrorMessage from "@modules/checkout/components/error-message"
// // // import DeleteButton from "@modules/common/components/delete-button"
// // // import LineItemOptions from "@modules/common/components/line-item-options"
// // // import LineItemPrice from "@modules/common/components/line-item-price"
// // // import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
// // // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // // import Spinner from "@modules/common/icons/spinner"
// // // import Thumbnail from "@modules/products/components/thumbnail"
// // // import { useState } from "react"

// // // type ItemProps = {
// // //   item: HttpTypes.StoreCartLineItem
// // //   type?: "full" | "preview"
// // //   currencyCode: string
// // // }

// // // const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
// // //   const [updating, setUpdating] = useState(false)
// // //   const [error, setError] = useState<string | null>(null)

// // //   const changeQuantity = async (quantity: number) => {
// // //     setError(null)
// // //     setUpdating(true)

// // //     await updateLineItem({
// // //       lineId: item.id,
// // //       quantity,
// // //     })
// // //       .catch((err) => {
// // //         setError(err.message)
// // //       })
// // //       .finally(() => {
// // //         setUpdating(false)
// // //       })
// // //   }

// // //   // TODO: Update this to grab the actual max inventory
// // //   const maxQtyFromInventory = 10
// // //   const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

// // //   return (
// // //     <Table.Row className="w-full" data-testid="product-row">
// // //       <Table.Cell className="!pl-0 p-4 w-24">
// // //         <LocalizedClientLink
// // //           href={`/products/${item.product_handle}`}
// // //           className={clx("flex", {
// // //             "w-16": type === "preview",
// // //             "small:w-24 w-12": type === "full",
// // //           })}
// // //         >
// // //           <Thumbnail
// // //             thumbnail={item.thumbnail}
// // //             images={item.variant?.product?.images}
// // //             size="square"
// // //           />
// // //         </LocalizedClientLink>
// // //       </Table.Cell>

// // //       <Table.Cell className="text-left">
// // //         <Text
// // //           className="txt-medium-plus text-ui-fg-base"
// // //           data-testid="product-title"
// // //         >
// // //           {item.product_title}
// // //         </Text>
// // //         <LineItemOptions variant={item.variant} data-testid="product-variant" />
// // //       </Table.Cell>

// // //       {type === "full" && (
// // //         <Table.Cell>
// // //           <div className="flex gap-2 items-center w-28">
// // //             <DeleteButton id={item.id} data-testid="product-delete-button" />
// // //             <CartItemSelect
// // //               value={item.quantity}
// // //               onChange={(value) => changeQuantity(parseInt(value.target.value))}
// // //               className="w-14 h-10 p-4"
// // //               data-testid="product-select-button"
// // //             >
// // //               {/* TODO: Update this with the v2 way of managing inventory */}
// // //               {Array.from(
// // //                 {
// // //                   length: Math.min(maxQuantity, 10),
// // //                 },
// // //                 (_, i) => (
// // //                   <option value={i + 1} key={i}>
// // //                     {i + 1}
// // //                   </option>
// // //                 )
// // //               )}

// // //               <option value={1} key={1}>
// // //                 1
// // //               </option>
// // //             </CartItemSelect>
// // //             {updating && <Spinner />}
// // //           </div>
// // //           <ErrorMessage error={error} data-testid="product-error-message" />
// // //         </Table.Cell>
// // //       )}

// // //       {type === "full" && (
// // //         <Table.Cell className="hidden small:table-cell">
// // //           <LineItemUnitPrice
// // //             item={item}
// // //             style="tight"
// // //             currencyCode={currencyCode}
// // //           />
// // //         </Table.Cell>
// // //       )}

// // //       <Table.Cell className="!pr-0">
// // //         <span
// // //           className={clx("!pr-0", {
// // //             "flex flex-col items-end h-full justify-center": type === "preview",
// // //           })}
// // //         >
// // //           {type === "preview" && (
// // //             <span className="flex gap-x-1 ">
// // //               <Text className="text-ui-fg-muted">{item.quantity}x </Text>
// // //               <LineItemUnitPrice
// // //                 item={item}
// // //                 style="tight"
// // //                 currencyCode={currencyCode}
// // //               />
// // //             </span>
// // //           )}
// // //           <LineItemPrice
// // //             item={item}
// // //             style="tight"
// // //             currencyCode={currencyCode}
// // //           />
// // //         </span>
// // //       </Table.Cell>
// // //     </Table.Row>
// // //   )
// // // }

// // // export default Item


// // "use client"

// // import { Table, Text, clx } from "@modules/common/components/ui"
// // import { updateLineItem } from "@lib/data/cart"
// // import type { HttpTypes } from "@medusajs/types"
// // import CartItemSelect from "@modules/cart/components/cart-item-select"
// // import ErrorMessage from "@modules/checkout/components/error-message"
// // import DeleteButton from "@modules/common/components/delete-button"
// // import LineItemOptions from "@modules/common/components/line-item-options"
// // import LineItemPrice from "@modules/common/components/line-item-price"
// // import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
// // import LocalizedClientLink from "@modules/common/components/localized-client-link"
// // import Spinner from "@modules/common/icons/spinner"
// // import Thumbnail from "@modules/products/components/thumbnail"
// // import { useState } from "react"

// // type ItemProps = {
// //   item: HttpTypes.StoreCartLineItem
// //   type?: "full" | "preview"
// //   currencyCode: string
// // }

// // const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
// //   const [updating, setUpdating] = useState(false)
// //   const [error, setError] = useState<string | null>(null)

// //   const changeQuantity = async (quantity: number) => {
// //     setError(null)
// //     setUpdating(true)

// //     await updateLineItem({
// //       lineId: item.id,
// //       quantity,
// //     })
// //       .catch((err) => {
// //         setError(err.message)
// //       })
// //       .finally(() => {
// //         setUpdating(false)
// //       })
// //   }

// //   // TODO: Update this to grab the actual max inventory
// //   const maxQtyFromInventory = 10
// //   const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

// //   if (type === "preview") {
// //     return (
// //       <Table.Row className="w-full" data-testid="product-row">
// //         <Table.Cell className="!pl-0 p-4 w-24">
// //           <LocalizedClientLink
// //             href={`/products/${item.product_handle}`}
// //             className="flex w-16"
// //           >
// //             <Thumbnail
// //               thumbnail={item.thumbnail}
// //               images={item.variant?.product?.images}
// //               size="square"
// //             />
// //           </LocalizedClientLink>
// //         </Table.Cell>

// //         <Table.Cell className="text-left">
// //           <Text
// //             className="txt-medium-plus text-ui-fg-base"
// //             data-testid="product-title"
// //           >
// //             {item.product_title}
// //           </Text>
// //           <LineItemOptions variant={item.variant} data-testid="product-variant" />
// //         </Table.Cell>

// //         <Table.Cell className="!pr-0">
// //           <span className="flex h-full flex-col items-end justify-center !pr-0">
// //             <span className="flex gap-x-1">
// //               <Text className="text-ui-fg-muted">{item.quantity}x </Text>
// //               <LineItemUnitPrice
// //                 item={item}
// //                 style="tight"
// //                 currencyCode={currencyCode}
// //               />
// //             </span>
// //             <LineItemPrice
// //               item={item}
// //               style="tight"
// //               currencyCode={currencyCode}
// //             />
// //           </span>
// //         </Table.Cell>
// //       </Table.Row>
// //     )
// //   }

// //   return (
// //     <div
// //       className="grid grid-cols-[64px_minmax(0,1fr)] items-center gap-x-3 rounded-2xl border border-[#ece8df] bg-[#faf9f5] p-3 shadow-sm transition-shadow hover:shadow-md small:grid-cols-[80px_minmax(0,1fr)] small:gap-x-4 small:p-4"
// //       data-testid="product-row"
// //       aria-busy={updating}
// //     >
// //       <LocalizedClientLink
// //         href={`/products/${item.product_handle}`}
// //         className="row-span-2 block h-16 w-16 overflow-hidden rounded-2xl bg-[#efeee9] small:h-20 small:w-20"
// //       >
// //         <Thumbnail
// //           thumbnail={item.thumbnail}
// //           images={item.variant?.product?.images}
// //           size="square"
// //         />
// //       </LocalizedClientLink>

// //       <div className="flex min-w-0 items-start justify-between gap-2">
// //         <div className="min-w-0">
// //           <Text
// //             className="m-0 break-words text-sm font-bold leading-5 tracking-[-0.02em] text-[#171915] small:text-base"
// //             data-testid="product-title"
// //           >
// //             {item.product_title}
// //           </Text>
// //           <div className="mt-1 text-xs font-medium text-[#77796f] [&_*]:!text-[#77796f]">
// //             <LineItemOptions variant={item.variant} data-testid="product-variant" />
// //           </div>
// //         </div>

// //         <div className="shrink-0 [&_button]:grid [&_button]:h-8 [&_button]:w-8 [&_button]:place-items-center [&_button]:rounded-full [&_button]:!border-0 [&_button]:!bg-transparent [&_button]:!text-[#dc2626] [&_button]:transition-colors [&_button:hover]:!border-transparent [&_button:hover]:!bg-transparent [&_button:hover]:!text-[#b91c1c]">
// //           <DeleteButton id={item.id} data-testid="product-delete-button" />
// //         </div>
// //       </div>

// //       <div className="col-start-2 flex min-w-0 items-center justify-between gap-3">
// //         <div className="min-w-0 text-sm font-bold tracking-[-0.02em] text-[#171915] [&_*]:!text-[#171915]">
// //           <LineItemPrice
// //             item={item}
// //             style="tight"
// //             currencyCode={currencyCode}
// //           />
// //           {item.quantity > 1 && (
// //             <div className="mt-0.5 text-[10px] font-medium text-[#77796f] [&_*]:!text-[#77796f]">
// //               <LineItemUnitPrice
// //                 item={item}
// //                 style="tight"
// //                 currencyCode={currencyCode}
// //               />
// //               <span> each</span>
// //             </div>
// //           )}
// //         </div>

// //         <div className="flex shrink-0 items-center gap-2">
// //           <CartItemSelect
// //             value={item.quantity}
// //             onChange={(value) => changeQuantity(parseInt(value.target.value))}
// //             className="h-10 w-14 rounded-xl border border-[#e2ddd2] bg-white px-2 text-center text-sm font-semibold text-[#171915] outline-none transition-colors focus:border-[#89aa91] focus:ring-2 focus:ring-[#e5eee6]"
// //             data-testid="product-select-button"
// //           >
// //             {/* TODO: Update this with the v2 way of managing inventory */}
// //             {Array.from(
// //               {
// //                 length: Math.min(maxQuantity, 10),
// //               },
// //               (_, i) => (
// //                 <option value={i + 1} key={i}>
// //                   {i + 1}
// //                 </option>
// //               )
// //             )}
// //             <option value={1} key={1}>
// //               1
// //             </option>
// //           </CartItemSelect>
// //           {updating && <Spinner />}
// //         </div>
// //       </div>

// //       {error && (
// //         <div className="col-span-2 min-w-0 text-xs [&_*]:!text-[#b42318]">
// //           <ErrorMessage error={error} data-testid="product-error-message" />
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default Item


// "use client"

// import { Table, Text, clx } from "@modules/common/components/ui"
// import { updateLineItem } from "@lib/data/cart"
// import type { HttpTypes } from "@medusajs/types"
// import CartItemSelect from "@modules/cart/components/cart-item-select"
// import ErrorMessage from "@modules/checkout/components/error-message"
// import DeleteButton from "@modules/common/components/delete-button"
// import LineItemOptions from "@modules/common/components/line-item-options"
// import LineItemPrice from "@modules/common/components/line-item-price"
// import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Spinner from "@modules/common/icons/spinner"
// import Thumbnail from "@modules/products/components/thumbnail"
// import { useState } from "react"

// type ItemProps = {
//   item: HttpTypes.StoreCartLineItem
//   type?: "full" | "preview"
//   currencyCode: string
// }

// const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
//   const [updating, setUpdating] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const changeQuantity = async (quantity: number) => {
//     setError(null)
//     setUpdating(true)

//     await updateLineItem({
//       lineId: item.id,
//       quantity,
//     })
//       .catch((err) => {
//         setError(err.message)
//       })
//       .finally(() => {
//         setUpdating(false)
//       })
//   }

//   // TODO: Update this to grab the actual max inventory
//   const maxQtyFromInventory = 10
//   const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

//   if (type === "preview") {
//     return (
//       <Table.Row className="w-full" data-testid="product-row">
//         <Table.Cell className="!pl-0 p-4 w-24">
//           <LocalizedClientLink
//             href={`/products/${item.product_handle}`}
//             className="flex w-16"
//           >
//             <Thumbnail
//               thumbnail={item.thumbnail}
//               images={item.variant?.product?.images}
//               size="square"
//             />
//           </LocalizedClientLink>
//         </Table.Cell>

//         <Table.Cell className="text-left">
//           <Text
//             className="txt-medium-plus text-ui-fg-base"
//             data-testid="product-title"
//           >
//             {item.product_title}
//           </Text>
//           <LineItemOptions variant={item.variant} data-testid="product-variant" />
//         </Table.Cell>

//         <Table.Cell className="!pr-0">
//           <span className="flex h-full flex-col items-end justify-center !pr-0">
//             <span className="flex gap-x-1">
//               <Text className="text-ui-fg-muted">{item.quantity}x </Text>
//               <LineItemUnitPrice
//                 item={item}
//                 style="tight"
//                 currencyCode={currencyCode}
//               />
//             </span>
//             <LineItemPrice
//               item={item}
//               style="tight"
//               currencyCode={currencyCode}
//             />
//           </span>
//         </Table.Cell>
//       </Table.Row>
//     )
//   }

//   return (
//     <div
//       className="grid grid-cols-[64px_minmax(0,1fr)] items-center gap-x-3 rounded-2xl border border-[#ece8df] bg-[#faf9f5] p-3 shadow-sm transition-shadow hover:shadow-md small:grid-cols-[80px_minmax(0,1fr)] small:gap-x-4 small:p-4"
//       data-testid="product-row"
//       aria-busy={updating}
//     >
//       <LocalizedClientLink
//         href={`/products/${item.product_handle}`}
//         className="row-span-2 block h-16 w-16 overflow-hidden rounded-2xl bg-[#efeee9] small:h-20 small:w-20"
//       >
//         <Thumbnail
//           thumbnail={item.thumbnail}
//           images={item.variant?.product?.images}
//           size="square"
//         />
//       </LocalizedClientLink>

//       <div className="flex min-w-0 items-start justify-between gap-2">
//         <div className="min-w-0">
//           <Text
//             className="m-0 break-words text-sm font-bold leading-5 tracking-[-0.02em] text-[#171915] small:text-base"
//             data-testid="product-title"
//           >
//             {item.product_title}
//           </Text>
//           <div className="mt-1 text-xs font-medium text-[#77796f] [&_*]:!text-[#77796f]">
//             <LineItemOptions variant={item.variant} data-testid="product-variant" />
//           </div>
//         </div>

//         <div className="shrink-0 [&_button]:grid [&_button]:h-8 [&_button]:w-8 [&_button]:place-items-center [&_button]:rounded-full [&_button]:!border-0 [&_button]:!bg-transparent [&_button]:!text-[#dc2626] [&_button]:transition-colors [&_button:hover]:!border-transparent [&_button:hover]:!bg-transparent [&_button:hover]:!text-[#b91c1c]">
//           <DeleteButton id={item.id} data-testid="product-delete-button" />
//         </div>
//       </div>

//       <div className="col-start-2 flex min-w-0 items-center justify-between gap-3">
//         <div className="min-w-0 text-sm font-bold tracking-[-0.02em] text-[#171915] [&_*]:!text-[#171915]">
//           <LineItemPrice
//             item={item}
//             style="tight"
//             currencyCode={currencyCode}
//           />
//           {item.quantity > 1 && (
//             <div className="mt-0.5 text-[10px] font-medium text-[#77796f] [&_*]:!text-[#77796f]">
//               <LineItemUnitPrice
//                 item={item}
//                 style="tight"
//                 currencyCode={currencyCode}
//               />
//               <span> each</span>
//             </div>
//           )}
//         </div>

//         <div className="flex shrink-0 items-center gap-2">
//           <CartItemSelect
//             value={item.quantity}
//             onChange={(value) => changeQuantity(parseInt(value.target.value))}
//             className="h-10 w-14 rounded-xl border border-[#e2ddd2] bg-white px-2 text-center text-sm font-semibold text-[#171915] outline-none transition-colors focus:border-[#89aa91] focus:ring-2 focus:ring-[#e5eee6]"
//             data-testid="product-select-button"
//           >
//             {/* TODO: Update this with the v2 way of managing inventory */}
//             {Array.from(
//               {
//                 length: Math.min(maxQuantity, 10),
//               },
//               (_, i) => (
//                 <option value={i + 1} key={i}>
//                   {i + 1}
//                 </option>
//               )
//             )}
//           </CartItemSelect>
//           {updating && <Spinner />}
//         </div>
//       </div>

//       {error && (
//         <div className="col-span-2 min-w-0 text-xs [&_*]:!text-[#b42318]">
//           <ErrorMessage error={error} data-testid="product-error-message" />
//         </div>
//       )}
//     </div>
//   )
// }

// export default Item


"use client"

import { Table, Text, clx } from "@modules/common/components/ui"
import { updateLineItem } from "@lib/data/cart"
import type { HttpTypes } from "@medusajs/types"
import CartItemSelect from "@modules/cart/components/cart-item-select"
import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Spinner from "@modules/common/icons/spinner"
import Thumbnail from "@modules/products/components/thumbnail"
import { useState } from "react"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
  type?: "full" | "preview"
  currencyCode: string
}

const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const changeQuantity = async (quantity: number) => {
    setError(null)
    setUpdating(true)

    await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setUpdating(false)
      })
  }

  // TODO: Update this to grab the actual max inventory
  const maxQtyFromInventory = 10
  const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

  if (type === "preview") {
    return (
      <Table.Row className="w-full" data-testid="product-row">
        <Table.Cell className="!pl-0 p-4 w-24">
          <LocalizedClientLink
            href={`/products/${item.product_handle}`}
            className="flex w-16"
          >
            <Thumbnail
              thumbnail={item.thumbnail}
              images={item.variant?.product?.images}
              size="square"
            />
          </LocalizedClientLink>
        </Table.Cell>

        <Table.Cell className="text-left">
          <Text
            className="txt-medium-plus text-ui-fg-base"
            data-testid="product-title"
          >
            {item.product_title}
          </Text>
          <LineItemOptions variant={item.variant} data-testid="product-variant" />
        </Table.Cell>

        <Table.Cell className="!pr-0">
          <span className="flex h-full flex-col items-end justify-center !pr-0">
            <span className="flex gap-x-1">
              <Text className="text-ui-fg-muted">{item.quantity}x </Text>
              <LineItemUnitPrice
                item={item}
                style="tight"
                currencyCode={currencyCode}
              />
            </span>
            <LineItemPrice
              item={item}
              style="tight"
              currencyCode={currencyCode}
            />
          </span>
        </Table.Cell>
      </Table.Row>
    )
  }

  return (
    <div
      className="grid grid-cols-[64px_minmax(0,1fr)] items-center gap-x-3 rounded-2xl border border-[#ece8df] bg-[#faf9f5] p-3 shadow-sm transition-shadow hover:shadow-md small:grid-cols-[80px_minmax(0,1fr)] small:gap-x-4 small:p-4"
      data-testid="product-row"
      aria-busy={updating}
    >
      <LocalizedClientLink
        href={`/products/${item.product_handle}`}
        className="row-span-2 block h-16 w-16 overflow-hidden rounded-2xl bg-[#efeee9] small:h-20 small:w-20"
      >
        <Thumbnail
          thumbnail={item.thumbnail}
          images={item.variant?.product?.images}
          size="square"
        />
      </LocalizedClientLink>

      <div className="flex min-w-0 items-start justify-between gap-2">
        <div className="min-w-0">
          <Text
            className="m-0 break-words text-sm font-bold leading-5 tracking-[-0.02em] text-[#171915] small:text-base"
            data-testid="product-title"
          >
            {item.product_title}
          </Text>
          <div className="mt-1 text-xs font-medium text-[#77796f] [&_*]:!text-[#77796f]">
            <LineItemOptions variant={item.variant} data-testid="product-variant" />
          </div>
        </div>

        <div className="shrink-0 [&_button]:grid [&_button]:h-8 [&_button]:w-8 [&_button]:place-items-center [&_button]:rounded-full [&_button]:!border-0 [&_button]:!bg-transparent [&_button]:!text-[#dc2626] [&_button]:transition-colors [&_button:hover]:!border-transparent [&_button:hover]:!bg-transparent [&_button:hover]:!text-[#b91c1c]">
          <DeleteButton id={item.id} data-testid="product-delete-button" />
        </div>
      </div>

      <div className="col-start-2 flex min-w-0 items-center justify-between gap-3">
        <div className="min-w-0 text-sm font-bold tracking-[-0.02em] text-[#171915] [&_*]:!text-[#171915]">
          <LineItemPrice
            item={item}
            style="tight"
            currencyCode={currencyCode}
          />
          {item.quantity > 1 && (
            <div className="mt-0.5 text-[10px] font-medium text-[#77796f] [&_*]:!text-[#77796f]">
              <LineItemUnitPrice
                item={item}
                style="tight"
                currencyCode={currencyCode}
              />
              <span> each</span>
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <CartItemSelect
            value={item.quantity}
            onChange={(value) => changeQuantity(parseInt(value.target.value))}
            className="h-10 w-14 rounded-xl border border-[#e2ddd2] bg-white px-2 text-center text-sm font-semibold text-[#171915] outline-none transition-colors focus:border-[#89aa91] focus:ring-2 focus:ring-[#e5eee6]"
            data-testid="product-select-button"
          >
            {/* TODO: Update this with the v2 way of managing inventory */}
            {Array.from(
              {
                length: Math.min(maxQuantity, 10),
              },
              (_, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              )
            )}
          </CartItemSelect>
          {updating && <Spinner />}
        </div>
      </div>

      {error && (
        <div className="col-span-2 min-w-0 text-xs [&_*]:!text-[#b42318]">
          <ErrorMessage error={error} data-testid="product-error-message" />
        </div>
      )}
    </div>
  )
}

export default Item
