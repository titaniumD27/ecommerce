"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

type ActiveNavLinkProps = {
  href: string
  children: ReactNode
  className?: string
  activeClassName?: string
  "data-testid"?: string
}

const isCurrentRoute = (pathname: string, href: string) => {
  const current = pathname.replace(/\/$/, "") || "/"
  const target = href.replace(/\/$/, "") || "/"

  if (target === "/") {
    return current.split("/").filter(Boolean).length <= 1
  }

  return current === target || current.endsWith(target) || current.includes(`${target}/`)
}

export default function ActiveNavLink({
  href,
  children,
  className = "",
  activeClassName = "",
  "data-testid": dataTestid,
}: ActiveNavLinkProps) {
  const pathname = usePathname()
  const isActive = isCurrentRoute(pathname, href)

  return (
    <LocalizedClientLink
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`.trim()}
      aria-current={isActive ? "page" : undefined}
      data-testid={dataTestid}
    >
      {children}
    </LocalizedClientLink>
  )
}
