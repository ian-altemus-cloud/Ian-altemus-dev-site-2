import { Activity, Cpu, Layers, ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const services = [
  {
    icon: Activity,
    title: "Production AI Infrastructure",
    body: "A Meta-approved SaaS platform handling real client traffic since April 2026. Not a tutorial project — live in production.",
  },
  {
    icon: Layers,
    title: "End-to-End Ownership",
    body: "Infrastructure, networking, application layer, DevOps pipeline, and security scanning. From the first line of Terraform to production traffic.",
  },
  {
    icon: Cpu,
    title: "Operator Mindset",
    body: "15 years running multi-location businesses before engineering. I understand what downtime actually costs the bottom line.",
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="01">What I do</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What differentiates me
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            I design, deploy, and operate production cloud infrastructure with a security-first, least-privilege
            approach at every layer.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">{s.body}</p>
              <a
                href="#work"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary"
              >
                See it in production <ArrowRight className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
