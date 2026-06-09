import { Mail, ArrowUpRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

const channels = [
  {
    label: "Email",
    icon: Mail,
    value: "ianaltemustech@gmail.com",
    note: "Best way to reach me",
    href: "mailto:ianaltemustech@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    value: "ian-altemus-cloud",
    note: "linkedin.com/in/ian-altemus-cloud",
    href: "https://linkedin.com/in/ian-altemus-cloud",
  },
  {
    label: "GitHub",
    icon: GithubIcon,
    value: "ian-altemus-cloud",
    note: "github.com/ian-altemus-cloud",
    href: "https://github.com/ian-altemus-cloud",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionLabel index="06">Contact</SectionLabel>

        <h2 className="mt-8 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {"Let's build reliable infrastructure together."}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Open to Cloud Engineer, DevOps Engineer, Platform Engineer, and SRE roles.{" "}
          <strong className="font-medium text-foreground">Remote, hybrid, or on-site. Costa Mesa, CA.</strong> Contract,
          contract-to-hire, or full time.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="group bg-card p-6 transition-colors hover:bg-secondary/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <c.icon className="size-4" />
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <div className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</div>
              <div className="mt-1 font-medium text-foreground">{c.value}</div>
              <div className="mt-0.5 font-mono text-xs text-muted-foreground">{c.note}</div>
            </a>
          ))}
        </div>
      </div>

      <footer className="relative border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-8 font-mono text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span className="text-foreground">ianaltemus.dev</span>
          <span>Costa Mesa, CA</span>
        </div>
      </footer>
    </section>
  )
}
