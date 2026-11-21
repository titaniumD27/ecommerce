// // import { listCategories } from "@lib/data/categories";
// // import { listCollections } from "@lib/data/collections";
// // import { Text, clx } from "@modules/common/components/ui";

// // import LocalizedClientLink from "@modules/common/components/localized-client-link";
// // import MedusaCTA from "@modules/layout/components/medusa-cta";

// // export default async function Footer() {
// //   const [{ collections }, productCategories] = await Promise.all([
// //     listCollections({ fields: "id,handle,title" }),
// //     listCategories({
// //       fields:
// //         "id,name,handle,parent_category_id,category_children.id,category_children.name,category_children.handle",
// //     }),
// //   ]);

// //   return (
// //     <footer className="border-t border-ui-border-base w-full">
// //       <div className="content-container flex flex-col w-full">
// //         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
// //           <div>
// //             <LocalizedClientLink
// //               href="/"
// //               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
// //             >
// //               Medusa Store
// //             </LocalizedClientLink>
// //           </div>
// //           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
// //             {productCategories && productCategories?.length > 0 && (
// //               <div className="flex flex-col gap-y-2">
// //                 <span className="txt-small-plus txt-ui-fg-base">
// //                   Categories
// //                 </span>
// //                 <ul
// //                   className="grid grid-cols-1 gap-2"
// //                   data-testid="footer-categories"
// //                 >
// //                   {productCategories?.slice(0, 6).map((c) => {
// //                     if (c.parent_category_id) {
// //                       return;
// //                     }

// //                     const children =
// //                       c.category_children?.map((child) => ({
// //                         name: child.name,
// //                         handle: child.handle,
// //                         id: child.id,
// //                       })) || null;

// //                     return (
// //                       <li
// //                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
// //                         key={c.id}
// //                       >
// //                         <LocalizedClientLink
// //                           className={clx(
// //                             "hover:text-ui-fg-base",
// //                             children && "txt-small-plus"
// //                           )}
// //                           href={`/categories/${c.handle}`}
// //                           data-testid="category-link"
// //                         >
// //                           {c.name}
// //                         </LocalizedClientLink>
// //                         {children && (
// //                           <ul className="grid grid-cols-1 ml-3 gap-2">
// //                             {children &&
// //                               children.map((child) => (
// //                                 <li key={child.id}>
// //                                   <LocalizedClientLink
// //                                     className="hover:text-ui-fg-base"
// //                                     href={`/categories/${child.handle}`}
// //                                     data-testid="category-link"
// //                                   >
// //                                     {child.name}
// //                                   </LocalizedClientLink>
// //                                 </li>
// //                               ))}
// //                           </ul>
// //                         )}
// //                       </li>
// //                     );
// //                   })}
// //                 </ul>
// //               </div>
// //             )}
// //             {collections && collections.length > 0 && (
// //               <div className="flex flex-col gap-y-2">
// //                 <span className="txt-small-plus txt-ui-fg-base">
// //                   Collections
// //                 </span>
// //                 <ul
// //                   className={clx(
// //                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
// //                     {
// //                       "grid-cols-2": (collections?.length || 0) > 3,
// //                     }
// //                   )}
// //                 >
// //                   {collections?.slice(0, 6).map((c) => (
// //                     <li key={c.id}>
// //                       <LocalizedClientLink
// //                         className="hover:text-ui-fg-base"
// //                         href={`/collections/${c.handle}`}
// //                       >
// //                         {c.title}
// //                       </LocalizedClientLink>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}
// //             <div className="flex flex-col gap-y-2">
// //               <span className="txt-small-plus txt-ui-fg-base">
// //                 Customer service
// //               </span>
// //               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
// //                 <li>
// //                   <LocalizedClientLink
// //                     className="hover:text-ui-fg-base"
// //                     href="/shipping"
// //                   >
// //                     Shipping information
// //                   </LocalizedClientLink>
// //                 </li>
// //                 <li>
// //                   <LocalizedClientLink
// //                     className="hover:text-ui-fg-base"
// //                     href="/returns"
// //                   >
// //                     Return policy
// //                   </LocalizedClientLink>
// //                 </li>
// //                 <li>
// //                   <LocalizedClientLink
// //                     className="hover:text-ui-fg-base"
// //                     href="/terms"
// //                   >
// //                     Terms of service
// //                   </LocalizedClientLink>
// //                 </li>
// //                 <li>
// //                   <LocalizedClientLink
// //                     className="hover:text-ui-fg-base"
// //                     href="/privacy"
// //                   >
// //                     Privacy policy
// //                   </LocalizedClientLink>
// //                 </li>
// //                 <li>
// //                   <LocalizedClientLink
// //                     className="hover:text-ui-fg-base"
// //                     href="/contact"
// //                   >
// //                     Contact
// //                   </LocalizedClientLink>
// //                 </li>
// //                 <li>
// //                   <LocalizedClientLink
// //                     className="hover:text-ui-fg-base"
// //                     href="/search"
// //                   >
// //                     Search
// //                   </LocalizedClientLink>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="flex flex-col gap-y-2">
// //               <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
// //               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
// //                 <li>
// //                   <a
// //                     href="https://github.com/medusajs"
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="hover:text-ui-fg-base"
// //                   >
// //                     GitHub
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="https://docs.medusajs.com"
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="hover:text-ui-fg-base"
// //                   >
// //                     Documentation
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="https://github.com/medusajs/dtc-starter"
// //                     target="_blank"
// //                     rel="noreferrer"
// //                     className="hover:text-ui-fg-base"
// //                   >
// //                     Source code
// //                   </a>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
// //           <Text className="txt-compact-small">
// //             © {new Date().getFullYear()} Medusa Store. All rights reserved.
// //           </Text>
// //           <MedusaCTA />
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// import { Text } from "@modules/common/components/ui";
// import LocalizedClientLink from "@modules/common/components/localized-client-link";
// import Image from "next/image";

// export default async function Footer() {
//   return (
//     <footer className="w-full bg-[#111111] text-[#F7E7CE] py-12 px-6 border-t border-[#222222]">
//       <div className="content-container flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8">
        
//         {/* 1. Social Media Links Row */}
//         <div className="flex items-center justify-center space-x-6">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
//             aria-label="Facebook"
//           >
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//               <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
//             </svg>
//           </a>
          
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
//             aria-label="Twitter / X"
//           >
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//             </svg>
//           </a>

//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
//             aria-label="Instagram"
//           >
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//             </svg>
//           </a>

//           <a
//             href="https://youtube.com"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
//             aria-label="YouTube"
//           >
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//             </svg>
//           </a>

//           <a
//             href="https://pinterest.com"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
//             aria-label="Pinterest"
//           >
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//               <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.331 1.363-.053.225-.172.271-.399.165-1.493-.695-2.425-2.875-2.425-4.625 0-3.769 2.738-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.903 0 4.118-2.595 7.431-6.198 7.431-1.208 0-2.345-.628-2.734-1.366l-.746 2.844c-.27 1.04-1.002 2.333-1.492 3.129 1.12.348 2.315.539 3.551.539 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
//             </svg>
//           </a>
//         </div>

//         {/* 2. Brand Concept / Description Statement */}
//         <p className="text-xs md:text-sm text-[#C9B69F] font-light leading-relaxed max-w-xl px-4">
//           KHOJ&apos;s business concept is to offer fashion and quality at the best price in a sustainable way. KHOJ has since it was founded grown into one of the world&apos;s leading contemporary fashion destinations.
//         </p>

//         {/* 3. Central Brand Logo (Enlarged with emphasized letter spacing) */}
//         <div className="py-1">
//           <LocalizedClientLink href="/" className="inline-block transition-transform hover:scale-105 duration-300">
//             {/* If using an image logo, uncomment below and adjust dimensions: */}
//             {/* <Image src="/images/logo.png" alt="KHOJ" width={150} height={50} className="object-contain" /> */}
            
//             <span className="font-serif italic text-5xl md:text-6xl font-black tracking-[0.18em] text-[#F7E7CE] block pl-[0.18em]">
//               KHOJ
//             </span>
//           </LocalizedClientLink>
//         </div>

//         {/* 4. Region & Currency Selector and Copyright */}
//         <div className="flex flex-col items-center space-y-2 pt-1 text-xs text-[#C9B69F]">
//           <span className="tracking-wider">United Kingdom | £</span>
//           <span className="tracking-wide text-[#C9B69F]/80">© 2026 KHOJ, Inc. All rights reserved.</span>
//         </div>

//       </div>
//     </footer>
//   );
// }

import { Text } from "@modules/common/components/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Image from "next/image";

export default async function Footer() {
  return (
    <footer className="w-full  bg-[#111111] text-[#F7E7CE] py-12 px-6 border-t border-[#222222]">
      <div className="content-container flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8">
        
        {/* 1. Social Media Links Row */}
        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
            aria-label="Twitter / X"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#F7E7CE] hover:opacity-75 transition-opacity p-2"
            aria-label="Pinterest"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.331 1.363-.053.225-.172.271-.399.165-1.493-.695-2.425-2.875-2.425-4.625 0-3.769 2.738-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.903 0 4.118-2.595 7.431-6.198 7.431-1.208 0-2.345-.628-2.734-1.366l-.746 2.844c-.27 1.04-1.002 2.333-1.492 3.129 1.12.348 2.315.539 3.551.539 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* 2. Brand Concept / Description Statement */}
        <p className="text-xs md:text-sm text-[#C9B69F] font-light leading-relaxed max-w-xl px-4">
          KHOJ&apos;s business concept is to offer fashion and quality at the best price in a sustainable way. KHOJ has since it was founded grown into one of the world&apos;s leading contemporary fashion destinations.
        </p>

        {/* 3. Central Brand Logo (py-0 and leading-none remove vertical spacing) */}
        <div className="py-0 my-0">
          <LocalizedClientLink href="/" className="inline-block transition-transform hover:scale-105 duration-300">
            <span className="font-serif italic text-5xl md:text-6xl font-black tracking-[0.18em] text-[#F7E7CE] block leading-none pl-[0.18em]">
              KHOJ
            </span>
          </LocalizedClientLink>
        </div>

        {/* 4. Region & Currency Selector and Copyright */}
        <div className="flex flex-col items-center space-y-2 pt-1 text-xs text-[#C9B69F]">
          {/* <span className="tracking-wider">United Kingdom | £</span> */}
          <span className="tracking-wide text-[#C9B69F]/80">© 2026 KHOJ, Inc. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}