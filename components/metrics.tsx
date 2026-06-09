import { SectionLabel } from "@/components/section-label"

const metrics = [
  {
    value: "<60",
    unit: "s",
    label: "Average DM response time. Down from 6 hours on the same workload.",
  },
  {
    value: "27",
    unit: "%",
    label: "DM-to-booking conversion rate on live production traffic.",
  },
  {
    value: "5",
    unit: "min",
    label: "CI/CD build time. Reduced from 20 minutes with caching and pipeline optimization.",
  },
  {
    value: "106",
    unit: "",
    label: "Terraform-managed AWS resources deployed during a live migration with zero downtime.",
  },
]

export function Metrics() {
  return (
    <section className="border-b border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel index="02">Impact in production</SectionLabel>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-card p-6 transition-colors hover:bg-secondary/40">
              <div className="font-mono text-5xl font-semibold tracking-tight text-foreground">
                {m.value}
                <span className="text-2xl text-primary">{m.unit}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
