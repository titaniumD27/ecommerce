// "use client"

// import { useState } from "react"

// import Register from "@modules/account/components/register"
// import Login from "@modules/account/components/login"

// export enum LOGIN_VIEW {
//   SIGN_IN = "sign-in",
//   REGISTER = "register",
// }

// const LoginTemplate = () => {
//   const [currentView, setCurrentView] = useState("sign-in")

//   return (
//     <div className="w-full flex justify-start px-8 py-8">
//       {currentView === "sign-in" ? (
//         <Login setCurrentView={setCurrentView} />
//       ) : (
//         <Register setCurrentView={setCurrentView} />
//       )}
//     </div>
//   )
// }

// export default LoginTemplate


"use client"

import { useState } from "react"

import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

const LoginTemplate = () => {
  const [currentView, setCurrentView] = useState("sign-in")

  return (
    <div className="w-full flex justify-center px-1 py-2 small:px-4 small:py-4">
      {currentView === "sign-in" ? (
        <Login setCurrentView={setCurrentView} />
      ) : (
        <Register setCurrentView={setCurrentView} />
      )}
    </div>
  )
}

export default LoginTemplate
