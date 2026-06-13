const items = [
  { value: "<60s", label: "AI response" },
  { value: "5min", label: "Secure CI/CD pipelines with GHA" },
  { label: "Event-driven on AWS" },
  { label: "Zero-downtime deploys" },
  { label: "IaC with Terraform" },
  { label: "Autonomous AI handling live traffic" },
  { label: "Prometheus & Grafana observability" },
  { label: "Kubernetes with ArgoCD" },
  { label: "Zero trust by design" },
]

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2.5 whitespace-nowrap">
          {item.value && (
            <span className="font-mono text-lg font-semibold tracking-tight text-primary">{item.value}</span>
          )}
          <span className="text-sm text-muted-foreground">{item.label}</span>
          <span className="ml-7 size-1 rounded-full bg-border" aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <section className="group relative overflow-hidden border-b border-border/60 py-5" aria-label="Highlights">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Track />
        <Track />
      </div>
    </section>
  )
}