import { ArrowRight, Activity, Cpu, Layers, ShieldCheck } from "lucide-react"

const diffItems = [
  {
    icon: Activity,
    title: "Production AI infrastructure, live today",
    body: "Not a tutorial project. A Meta-approved SaaS platform handling real client traffic since April 2026.",
    tag: "Live in production",
  },
  {
    icon: Cpu,
    title: "Operator mindset, not just builder",
    body: "15 years running multi-location businesses before engineering. I understand what downtime actually costs.",
  },
  {
    icon: Layers,
    title: "End-to-end ownership",
    body: "Infrastructure, networking, application layer, DevOps pipeline, and security scanning. From the first line of Terraform to production traffic.",
  },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/5 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to new roles
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Cloud Infrastructure
            <span className="block text-primary">{"& DevOps Engineer"}</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Building and operating production AI systems on AWS, Kubernetes, and Terraform.
          </p>

          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I design, deploy, and operate production cloud infrastructure with a{" "}
            <strong className="font-medium text-foreground">
              security-first, least-privilege approach at every layer.
            </strong>{" "}
            I bring something most engineers do not have:{" "}
            <strong className="font-medium text-foreground">15 years operating real businesses</strong> before building
            the infrastructure behind them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work <ArrowRight className="size-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              About me
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-1 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="size-3 rounded-full bg-destructive/70" />
            <span className="size-3 rounded-full bg-primary/40" />
            <span className="size-3 rounded-full bg-primary" />
            <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5 text-primary" />
              what-differentiates-me
            </span>
          </div>
          <div className="space-y-1 p-2">
            {diffItems.map((item) => (
              <div key={item.title} className="rounded-lg p-3 transition-colors hover:bg-secondary/60">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                    <item.icon className="size-4" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                      {item.tag && (
                        <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
