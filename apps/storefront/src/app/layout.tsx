// import { getBaseURL } from "@lib/util/env"
// import { Metadata } from "next"
// // import "styles/globals.css"
// import "../styles/globals.css"
// import KhojLoader from "@modules/common/components/khoj-loader/loader"

// export const metadata: Metadata = {
//   metadataBase: new URL(getBaseURL()),
// }

// export default function RootLayout(props: { children: React.ReactNode }) {
//   return (
//     <html lang="en" data-mode="light">
//       <head>
//         <link rel="ucp" href="/.well-known/ucp" />
//       </head>
//       <body>
//         {/* <KhojLoader/> */}
//         <main className="relative">{props.children}</main>
//       </body>
//     </html>
//   )
// }



import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "../styles/globals.css"
import StorefrontEntry from "@modules/common/components/khoj-loader/entry-screen"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <link rel="ucp" href="/.well-known/ucp" />
      </head>
      <body>
        {/* <StorefrontEntry> */}
          <main className="relative">{props.children}</main>
        {/* </StorefrontEntry> */}
      </body>
    </html>
  )
}
