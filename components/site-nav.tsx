"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-foreground"
        >
          <span className="text-primary">~/</span>ian-altemus
          <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-primary" aria-hidden="true" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-md border border-primary/40 bg-primary/10 px-4 py-2 text-center font-mono text-sm text-primary"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
