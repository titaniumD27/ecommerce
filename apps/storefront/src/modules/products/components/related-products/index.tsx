// // import { listProducts } from "@lib/data/products"
// // import { getRegion } from "@lib/data/regions"
// // import { HttpTypes } from "@medusajs/types"
// // import Product from "../product-preview"

// // type RelatedProductsProps = {
// //   product: HttpTypes.StoreProduct
// //   countryCode: string
// // }

// // export default async function RelatedProducts({
// //   product,
// //   countryCode,
// // }: RelatedProductsProps) {
// //   const region = await getRegion(countryCode)

// //   if (!region) {
// //     return null
// //   }

// //   // edit this function to define your related products logic
// //   const queryParams: HttpTypes.StoreProductListParams = {}
// //   if (region?.id) {
// //     queryParams.region_id = region.id
// //   }
// //   if (product.collection_id) {
// //     queryParams.collection_id = [product.collection_id]
// //   }
// //   if (product.tags) {
// //     queryParams.tag_id = product.tags
// //       .map((t) => t.id)
// //       .filter(Boolean) as string[]
// //   }
// //   queryParams.is_giftcard = false

// //   const products = await listProducts({
// //     queryParams,
// //     countryCode,
// //   }).then(({ response }) => {
// //     return response.products.filter(
// //       (responseProduct) => responseProduct.id !== product.id
// //     )
// //   })

// //   if (!products.length) {
// //     return null
// //   }

// //   return (
// //     <div className="product-page-constraint">
// //       <div className="flex flex-col items-center text-center mb-16">
// //         <span className="text-base-regular text-gray-600 mb-6">
// //           Related products
// //         </span>
// //         <p className="text-2xl-regular text-ui-fg-base max-w-lg">
// //           You might also want to check out these products.
// //         </p>
// //       </div>

// //       <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
// //         {products.map((product) => (
// //           <li key={product.id}>
// //             <Product region={region} product={product} />
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   )
// // }


// import { listProducts } from "@lib/data/products"
// import { getRegion } from "@lib/data/regions"
// import { HttpTypes } from "@medusajs/types"
// import Product from "../product-preview"

// type RelatedProductsProps = {
//   product: HttpTypes.StoreProduct
//   countryCode: string
// }

// export default async function RelatedProducts({
//   product,
//   countryCode,
// }: RelatedProductsProps) {
//   const region = await getRegion(countryCode)

//   if (!region) {
//     return null
//   }

//   // edit this function to define your related products logic
//   const queryParams: HttpTypes.StoreProductListParams = {}
//   if (region?.id) {
//     queryParams.region_id = region.id
//   }
//   if (product.collection_id) {
//     queryParams.collection_id = [product.collection_id]
//   }
//   if (product.tags) {
//     queryParams.tag_id = product.tags
//       .map((t) => t.id)
//       .filter(Boolean) as string[]
//   }
//   queryParams.is_giftcard = false

//   const products = await listProducts({
//     queryParams,
//     countryCode,
//   }).then(({ response }) => {
//     return response.products.filter(
//       (responseProduct) => responseProduct.id !== product.id
//     )
//   })

//   if (!products.length) {
//     return null
//   }

//   return (
//     <section
//       className="product-page-constraint border-t border-[#e2ddd2] pt-16 small:pt-24"
//       aria-labelledby="related-products-heading"
//     >
//       <div className="mb-12 flex flex-col items-center text-center small:mb-20">
//         <span className="mb-5 text-xs font-extrabold uppercase tracking-[0.3em] text-[#7f1d2d] small:mb-7 small:text-sm">
//           Related products
//         </span>
//         <h2
//           id="related-products-heading"
//           className="max-w-[22rem] text-[2.35rem] font-black uppercase leading-[0.9] tracking-[-0.065em] text-[#171915] small:max-w-[30rem] small:text-5xl medium:max-w-4xl medium:text-6xl"
//         >
//           <span className="medium:hidden">
//             You might also want
//             <br />
//             to check out these
//             <br />
//             products.
//           </span>
//           <span className="hidden medium:block">
//             You might also want to check out
//             <br />
//             these products.
//           </span>
//         </h2>
//       </div>

//       <ul className="grid grid-cols-2 gap-x-4 gap-y-10 small:grid-cols-3 small:gap-x-6 small:gap-y-12 medium:grid-cols-4">
//         {products.map((product) => (
//           <li key={product.id}>
//             <Product region={region} product={product} />
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }


import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const queryParams: HttpTypes.StoreProductListParams = {}
  if (region?.id) {
    queryParams.region_id = region.id
  }
  if (product.collection_id) {
    queryParams.collection_id = [product.collection_id]
  }
  if (product.tags) {
    queryParams.tag_id = product.tags
      .map((t) => t.id)
      .filter(Boolean) as string[]
  }
  queryParams.is_giftcard = false

  const products = await listProducts({
    queryParams,
    countryCode,
  }).then(({ response }) => {
    return response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
  })

  if (!products.length) {
    return null
  }

  return (
    <section
      className="product-page-constraint border-t border-[#e2ddd2] pt-16 small:pt-24"
      aria-labelledby="related-products-heading"
    >
      <div className="mb-12 flex flex-col items-center text-center small:mb-20">
        <span className="mb-5 text-xs font-extrabold uppercase tracking-[0.3em] text-[#7f1d2d] small:mb-7 small:text-sm">
          Related products
        </span>
        <h2
          id="related-products-heading"
          className="max-w-[21rem] text-[26px] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#171915] small:max-w-[30rem] small:text-5xl medium:max-w-4xl medium:text-6xl"
        >
          You might also want
          <br />
          to check out these
          <br />
          products.
        </h2>
      </div>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 small:grid-cols-3 small:gap-x-6 small:gap-y-12 medium:grid-cols-4">
        {products.map((product) => (
          <li key={product.id}>
            <Product region={region} product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}
