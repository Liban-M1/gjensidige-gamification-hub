"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Hjem" },
    { href: "/quiz", label: "Quiz" },
    { href: "/learn", label: "Lær" },
    { href: "/rewards", label: "Belønninger" },
    { href: "/profile", label: "Profil" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-8 max-w-[1280px]">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-xl text-primary-foreground hover:text-secondary transition-colors"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="hidden sm:inline">Gjensidige Hub</span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-secondary underline decoration-2 underline-offset-4"
                  : "text-primary-foreground hover:text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
