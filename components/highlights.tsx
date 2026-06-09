import { SectionLabel } from "@/components/section-label"

const highlights = [
  {
    lead: "Built and operate a Meta-approved production AI SaaS platform on AWS,",
    rest: " live client traffic, real business outcomes, zero production outages since launch.",
  },
  {
    lead: "Reduced average DM response time from 6 hours to under 60 seconds",
    rest: " via event-driven architecture: API Gateway, SQS decoupling, ECS Fargate consumer.",
  },
  {
    lead: "Cut CI/CD pipeline build time from 20 minutes to 5 minutes",
    rest: " using Docker layer caching, path-based triggers, and split app and infra pipelines.",
  },
  {
    lead: "Implemented GitOps with ArgoCD and Argo Rollouts,",
    rest: " canary deployments, automated rollback on health check failure, Git as the single source of truth.",
  },
  {
    lead: "Hardened CI/CD security pipeline",
    rest: " with Gitleaks secrets scanning, Bandit SAST, Trivy image scanning, and pip-audit required before every merge.",
  },
  {
    lead: "Designed and deployed an agentic AI booking integration",
    rest: " using Playwright on managed ECS compute, triggered by booking intent detection in live conversation flow.",
  },
  {
    lead: "Systematic production debugging approach:",
    rest: " establish blast radius first, isolate to network, application, or infrastructure layer, trace through logs and exit codes, remediate, then document root cause and update runbooks to prevent recurrence.",
  },
  {
    lead: "Designed and deployed a full observability stack",
    rest: " using Prometheus sidecar injection and Grafana dashboards with custom pod and instance level metrics, moving beyond default cluster metrics to measure what actually matters for the application workload.",
  },
]

export function Highlights() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel index="02">Highlights</SectionLabel>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {highlights.map((h, i) => (
            <div key={h.lead} className="group flex gap-4 bg-card p-6 transition-colors hover:bg-secondary/40">
              <span className="font-mono text-sm text-primary/70 transition-colors group-hover:text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                <strong className="font-medium text-foreground">{h.lead}</strong>
                {h.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
