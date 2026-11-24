// // import React, { Suspense } from "react"

// // import VariantImageGallery from "@modules/products/components/image-gallery/variant-image-gallery"
// // import ProductActions from "@modules/products/components/product-actions"
// // import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
// // import ProductTabs from "@modules/products/components/product-tabs"
// // import RelatedProducts from "@modules/products/components/related-products"
// // import ProductInfo from "@modules/products/templates/product-info"
// // import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
// // import { notFound } from "next/navigation"
// // import { HttpTypes } from "@medusajs/types"

// // type ProductTemplateProps = {
// //   product: HttpTypes.StoreProduct
// //   region: HttpTypes.StoreRegion
// //   countryCode: string
// // }

// // const ProductTemplate: React.FC<ProductTemplateProps> = ({
// //   product,
// //   region,
// //   countryCode,
// // }) => {
// //   if (!product || !product.id) {
// //     return notFound()
// //   }

// //   return (
// //     <>
// //       <div
// //         className="content-container pt-20 flex flex-col small:flex-row small:items-start  relative"
// //         data-testid="product-container"
// //       >
// //         <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
// //           <ProductInfo product={product} />
// //           <div className="hidden md:block">

// //           <ProductTabs product={product} />
// //           </div>
// //         </div>
// //         <div className="block w-full relative">
// //           <VariantImageGallery product={product} />
// //           <div className="block md:hidden">

// //            <ProductTabs product={product} />
// //           </div>
// //         </div>
// //         <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
// //           <ProductOnboardingCta />
// //           <ProductActions product={product} region={region} />
// //         </div>
// //       </div>
// //       <div
// //         className="content-container my-16 small:my-32"
// //         data-testid="related-products-container"
// //       >
// //         <Suspense fallback={<SkeletonRelatedProducts />}>
// //           <RelatedProducts product={product} countryCode={countryCode} />
// //         </Suspense>
// //       </div>
// //     </>
// //   )
// // }

// // export default ProductTemplate


// import React, { Suspense } from "react"

// import VariantImageGallery from "@modules/products/components/image-gallery/variant-image-gallery"
// import ProductActions from "@modules/products/components/product-actions"
// import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
// import ProductTabs from "@modules/products/components/product-tabs"
// import RelatedProducts from "@modules/products/components/related-products"
// import ProductInfo from "@modules/products/templates/product-info"
// import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
// import { notFound } from "next/navigation"
// import { HttpTypes } from "@medusajs/types"

// type ProductTemplateProps = {
//   product: HttpTypes.StoreProduct
//   region: HttpTypes.StoreRegion
//   countryCode: string
// }

// const ProductTemplate: React.FC<ProductTemplateProps> = ({
//   product,
//   region,
//   countryCode,
// }) => {
//   if (!product || !product.id) {
//     return notFound()
//   }

//   return (
//     <>
//       <div
//         className="content-container pt-10 small:pt-20"
//         data-testid="product-container"
//       >
//         <div className="grid grid-cols-1 items-start gap-8 small:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)] small:gap-x-14 medium:gap-x-20">
//           <VariantImageGallery product={product} />
//           <div className="flex w-full flex-col gap-y-8 small:sticky small:top-32">
//             <ProductInfo product={product} />
//             <div className="flex flex-col gap-y-10">
//               <ProductOnboardingCta />
//               <ProductActions product={product} region={region} />
//             </div>
//             <ProductTabs product={product} />
//           </div>
//         </div>
//       </div>
//       <div
//         className="content-container my-16 small:my-32"
//         data-testid="related-products-container"
//       >
//         <Suspense fallback={<SkeletonRelatedProducts />}>
//           <RelatedProducts product={product} countryCode={countryCode} />
//         </Suspense>
//       </div>
//     </>
//   )
// }

// export default ProductTemplate

import React, { Suspense } from "react"

import VariantImageGallery from "@modules/products/components/image-gallery/variant-image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container pt-20 small:pt-28"
        data-testid="product-container"
      >
        <div className="grid grid-cols-1 items-start gap-8 small:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)] small:gap-x-14 medium:gap-x-20">
          <VariantImageGallery product={product} />
          <div className="flex w-full flex-col gap-y-8 small:sticky small:top-32">
            <ProductInfo product={product} />
            <div className="flex flex-col gap-y-10">
              <ProductOnboardingCta />
              <ProductActions product={product} region={region} />
            </div>
            <ProductTabs product={product} />
          </div>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate