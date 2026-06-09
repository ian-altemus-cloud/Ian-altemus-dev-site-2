import { ArrowRight } from "lucide-react"

export function FlowDiagram({
  title,
  steps,
}: {
  title: string
  steps: { name: string; sub: string }[]
}) {
  return (
    <div className="rounded-lg border border-border bg-background/50 p-5">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{title}</div>
      <div className="mt-4 flex flex-wrap items-stretch gap-2">
        {steps.map((step, i) => (
          <div key={step.name} className="flex items-center gap-2">
            <div className="rounded-md border border-border bg-card px-3 py-2">
              <div className="font-mono text-xs font-medium text-foreground">{step.name}</div>
              <div className="mt-0.5 font-mono text-[10px] text-muted-foreground">{step.sub}</div>
            </div>
            {i < steps.length - 1 && <ArrowRight className="size-3.5 shrink-0 text-primary/60" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  )
}
