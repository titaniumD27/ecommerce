// // // // import { HttpTypes } from "@medusajs/types"
// // // // import { Container } from "@modules/common/components/ui"
// // // // import Image from "next/image"

// // // // type ImageGalleryProps = {
// // // //   images: HttpTypes.StoreProductImage[]
// // // // }

// // // // const ImageGallery = ({ images }: ImageGalleryProps) => {
// // // //   return (
// // // //     <div className="flex items-start relative">
// // // //       <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
// // // //         {images.map((image, index) => {
// // // //           return (
// // // //             <Container
// // // //               key={image.id}
// // // //               className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
// // // //               id={image.id}
// // // //             >
// // // //               {!!image.url && (
// // // //                 <Image
// // // //                   src={image.url}
// // // //                   priority={index <= 2 ? true : false}
// // // //                   className="absolute inset-0 rounded-rounded"
// // // //                   alt={`Product image ${index + 1}`}
// // // //                   fill
// // // //                   sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
// // // //                   style={{
// // // //                     objectFit: "cover",
// // // //                   }}
// // // //                 />
// // // //               )}
// // // //             </Container>
// // // //           )
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default ImageGallery


// // // "use client"

// // // import { HttpTypes } from "@medusajs/types"
// // // import { Container } from "@modules/common/components/ui"
// // // import Image from "next/image"
// // // import { useState } from "react"

// // // type ImageGalleryProps = {
// // //   images: HttpTypes.StoreProductImage[]
// // // }

// // // const ImageGallery = ({ images }: ImageGalleryProps) => {
// // //   const [activeImageId, setActiveImageId] = useState<string>()
// // //   const activeImage = images.find((image) => image.id === activeImageId) ?? images[0]

// // //   if (!activeImage) {
// // //     return (
// // //       <Container className="relative aspect-[29/34] w-full overflow-hidden rounded-large bg-ui-bg-subtle" />
// // //     )
// // //   }

// // //   return (
// // //     <div className="flex flex-col small:flex-row small:items-start gap-3 small:gap-4">
// // //       <div className="order-2 flex w-full shrink-0 gap-2 overflow-x-auto pb-1 small:order-1 small:w-[76px] small:flex-col small:overflow-visible small:pb-0">
// // //         {images.map((image, index) => {
// // //           const isActive = image.id === activeImage.id

// // //           return (
// // //             <button
// // //               key={image.id}
// // //               type="button"
// // //               onClick={() => setActiveImageId(image.id)}
// // //               aria-label={`Show product image ${index + 1}`}
// // //               aria-current={isActive ? "true" : undefined}
// // //               className={`relative h-[76px] w-[64px] shrink-0 overflow-hidden rounded-large bg-ui-bg-subtle transition duration-200 ease-out small:h-[88px] small:w-[76px] ${
// // //                 isActive
// // //                   ? "border-2 border-ui-fg-base p-0.5"
// // //                   : "border border-ui-border-base hover:border-ui-fg-muted"
// // //               }`}
// // //             >
// // //               {image.url && (
// // //                 <Image
// // //                   src={image.url}
// // //                   alt={`Product image ${index + 1}`}
// // //                   fill
// // //                   sizes="(max-width: 1023px) 64px, 76px"
// // //                   className="rounded-[calc(theme(borderRadius.large)-2px)] object-cover"
// // //                 />
// // //               )}
// // //             </button>
// // //           )
// // //         })}
// // //       </div>

// // //       <Container
// // //         className="order-1 relative aspect-[29/34] min-w-0 flex-1 overflow-hidden rounded-large bg-ui-bg-subtle small:order-2"
// // //         id={activeImage.id}
// // //       >
// // //         {!!activeImage.url && (
// // //           <Image
// // //             src={activeImage.url}
// // //             priority
// // //             className="absolute inset-0 rounded-large object-cover"
// // //             alt="Product image"
// // //             fill
// // //             sizes="(max-width: 576px) 100vw, (max-width: 1023px) 70vw, 55vw"
// // //           />
// // //         )}
// // //       </Container>
// // //     </div>
// // //   )
// // // }

// // // export default ImageGallery

// // "use client"

// // import { HttpTypes } from "@medusajs/types"
// // import { Container } from "@modules/common/components/ui"
// // import Image from "next/image"
// // import { useState } from "react"

// // type ImageGalleryProps = {
// //   images: HttpTypes.StoreProductImage[]
// // }

// // const ImageGallery = ({ images }: ImageGalleryProps) => {
// //   const [activeImageId, setActiveImageId] = useState<string>()
// //   const activeImage = images.find((image) => image.id === activeImageId) ?? images[0]

// //   if (!activeImage) {
// //     return (
// //       <Container className="relative aspect-[29/34] w-full overflow-hidden rounded-large bg-ui-bg-subtle" />
// //     )
// //   }

// //   return (
// //     <div className="flex flex-col small:w-full small:max-w-[780px] small:flex-row small:items-start gap-3 small:gap-4">
// //       <div className="order-2 flex w-full shrink-0 gap-2 overflow-x-auto pb-1 small:order-1 small:w-[76px] small:flex-col small:overflow-visible small:pb-0">
// //         {images.map((image, index) => {
// //           const isActive = image.id === activeImage.id

// //           return (
// //             <button
// //               key={image.id}
// //               type="button"
// //               onClick={() => setActiveImageId(image.id)}
// //               aria-label={`Show product image ${index + 1}`}
// //               aria-current={isActive ? "true" : undefined}
// //               className={`relative h-[76px] w-[64px] shrink-0 overflow-hidden rounded-large bg-ui-bg-subtle transition duration-200 ease-out small:h-[88px] small:w-[76px] ${
// //                 isActive
// //                   ? "border-2 border-ui-fg-base p-0.5"
// //                   : "border border-ui-border-base hover:border-ui-fg-muted"
// //               }`}
// //             >
// //               {image.url && (
// //                 <Image
// //                   src={image.url}
// //                   alt={`Product image ${index + 1}`}
// //                   fill
// //                   sizes="(max-width: 1023px) 64px, 76px"
// //                   className="rounded-[calc(theme(borderRadius.large)-2px)] object-cover"
// //                 />
// //               )}
// //             </button>
// //           )
// //         })}
// //       </div>

// //       <Container
// //         className="order-1 relative aspect-[29/34] min-w-0 flex-1 overflow-hidden rounded-large bg-ui-bg-subtle small:order-2"
// //         id={activeImage.id}
// //       >
// //         {!!activeImage.url && (
// //           <Image
// //             src={activeImage.url}
// //             priority
// //             className="absolute inset-0 rounded-large object-cover"
// //             alt="Product image"
// //             fill
// //             sizes="(max-width: 576px) 100vw, (max-width: 1023px) 70vw, 55vw"
// //           />
// //         )}
// //       </Container>
// //     </div>
// //   )
// // }

// // export default ImageGallery


// "use client"

// import { HttpTypes } from "@medusajs/types"
// import { Container } from "@modules/common/components/ui"
// import Image from "next/image"
// import { useState } from "react"

// type ImageGalleryProps = {
//   images: HttpTypes.StoreProductImage[]
// }

// const ImageGallery = ({ images }: ImageGalleryProps) => {
//   const [activeImageId, setActiveImageId] = useState<string>()
//   const activeImage = images.find((image) => image.id === activeImageId) ?? images[0]

//   if (!activeImage) {
//     return (
//       <Container className="relative aspect-[29/34] w-full overflow-hidden rounded-large bg-ui-bg-subtle" />
//     )
//   }

//   return (
//     <div className="flex flex-col small:w-full small:max-w-[780px] small:flex-row small:items-start gap-3 small:gap-4">
//       <div className="order-2 flex w-full shrink-0 gap-2 overflow-x-auto pb-1 small:order-1 small:w-[76px] small:flex-col small:overflow-visible small:pb-0">
//         {images.map((image, index) => {
//           const isActive = image.id === activeImage.id

//           return (
//             <button
//               key={image.id}
//               type="button"
//               onClick={() => setActiveImageId(image.id)}
//               aria-label={`Show product image ${index + 1}`}
//               aria-current={isActive ? "true" : undefined}
//               className={`relative h-[76px] w-[64px] shrink-0 overflow-hidden rounded-large bg-ui-bg-subtle transition duration-200 ease-out small:h-[88px] small:w-[76px] ${
//                 isActive
//                   ? "border-2 border-ui-fg-base p-0.5"
//                   : "border border-ui-border-base hover:border-ui-fg-muted"
//               }`}
//             >
//               {image.url && (
//                 <Image
//                   src={image.url}
//                   alt={`Product image ${index + 1}`}
//                   fill
//                   sizes="(max-width: 1023px) 64px, 76px"
//                   className="rounded-[calc(theme(borderRadius.large)-2px)] object-cover"
//                 />
//               )}
//             </button>
//           )
//         })}
//       </div>

//       <Container
//         className="order-1 relative aspect-[29/34] min-w-0 flex-1 overflow-hidden rounded-large bg-ui-bg-subtle small:order-2"
//         id={activeImage.id}
//       >
//         {!!activeImage.url && (
//           <Image
//             src={activeImage.url}
//             priority
//             className="absolute inset-0 rounded-large object-cover"
//             alt="Product image"
//             fill
//             sizes="(max-width: 576px) 100vw, (max-width: 1023px) 70vw, 55vw"
//           />
//         )}
//       </Container>
//     </div>
//   )
// }

// export default ImageGallery


// top one is the perfect one 
"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@modules/common/components/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [activeImageId, setActiveImageId] = useState<string>()
  const activeImage = images.find((image) => image.id === activeImageId) ?? images[0]

  if (!activeImage) {
    return (
      <Container className="relative aspect-[29/34] w-full overflow-hidden rounded-large bg-ui-bg-subtle" />
    )
  }

  return (
    <div className="flex flex-col small:w-full small:max-w-[780px] small:flex-row small:items-start gap-3 small:gap-4">
      <div className="order-2 flex w-full shrink-0 gap-2 overflow-x-auto pb-1 small:order-1 small:w-[76px] small:flex-col small:overflow-visible small:pb-0">
        {images.map((image, index) => {
          const isActive = image.id === activeImage.id

          return (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveImageId(image.id)}
              aria-label={`Show product image ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`relative h-[76px] w-[64px] shrink-0 overflow-hidden rounded-large bg-ui-bg-subtle transition duration-200 ease-out small:h-[88px] small:w-[76px] ${
                isActive
                  ? "border-2 border-ui-fg-base p-0.5"
                  : "border border-ui-border-base hover:border-ui-fg-muted"
              }`}
            >
              {image.url && (
                <Image
                  src={image.url}
                  alt={`Product image ${index + 1}`}
                  fill
                  sizes="(max-width: 1023px) 64px, 76px"
                  className="rounded-[calc(theme(borderRadius.large)-2px)] object-cover"
                />
              )}
            </button>
          )
        })}
      </div>

      <Container
        className="order-1 relative aspect-[29/34] min-w-0 flex-1 overflow-hidden rounded-large bg-ui-bg-subtle small:order-2"
        id={activeImage.id}
      >
        {!!activeImage.url && (
          <Image
            src={activeImage.url}
            priority
            className="absolute inset-0 rounded-large object-cover"
            alt="Product image"
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 1023px) 70vw, 55vw"
          />
        )}
      </Container>
    </div>
  )
}

export default ImageGallery
