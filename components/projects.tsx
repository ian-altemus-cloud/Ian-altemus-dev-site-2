import { ExternalLink, Github } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { FlowDiagram } from "@/components/flow-diagram"

const silverlinkStack = [
  "ECS Fargate",
  "API Gateway",
  "SQS",
  "DynamoDB",
  "Terraform",
  "GitHub Actions",
  "Claude API",
  "Playwright",
]

const silverlinkFlow = [
  { name: "Instagram", sub: "Meta Graph API" },
  { name: "API Gateway", sub: "HMAC verified" },
  { name: "SQS", sub: "Queue + DLQ" },
  { name: "ECS Fargate", sub: "Flask consumer" },
  { name: "Claude API", sub: "Per-tenant voice" },
  { name: "DynamoDB", sub: "Conversation memory" },
  { name: "Response", sub: "Under 60 seconds" },
]

const decisions = [
  {
    q: "Why SQS over direct processing?",
    points: [
      "Decouples webhook ingestion from AI processing",
      "Prevents Meta webhook timeouts on slow AI responses",
      "Enables retry logic and dead letter queue strategy",
    ],
  },
  {
    q: "Why ECS over EKS?",
    points: [
      "Smaller operational footprint for a single-product platform",
      "Faster delivery without cluster management overhead",
      "Lower infrastructure cost at current traffic volume",
    ],
  },
  {
    q: "Why DynamoDB over Postgres?",
    points: [
      "Conversation access pattern fits key-value model exactly",
      "Zero operational burden, no connection pooling",
      "Native AWS integration with Terraform and IAM",
    ],
  },
]

const trendlinkStack = ["Kubernetes", "ArgoCD", "Argo Rollouts", "Helm", "Vault", "Playwright", "AWS", "Azure"]

const trendlinkPipeline = [
  { name: "Git Push", sub: "main branch" },
  { name: "GitHub Actions", sub: "build + scan" },
  { name: "Helm Chart", sub: "packaged manifest" },
  { name: "ArgoCD", sub: "detects drift" },
  { name: "Argo Rollouts", sub: "canary split" },
  { name: "Health Check", sub: "readiness probe" },
  { name: "Promote", sub: "or auto-rollback" },
]

const trendlinkTopology = [
  { name: "AWS/Azure", sub: "primary cloud" },
  { name: "K8s Cluster", sub: "workload plane" },
  { name: "Vault", sub: "sidecar injection" },
  { name: "Playwright Agent", sub: "scrape + enrich" },
  { name: "Google Places API", sub: "business data" },
  { name: "Dashboard", sub: "scored results" },
]

const trendlinkPillars = [
  {
    label: "Observability",
    head: "Prometheus + Grafana",
    body: "Pod and instance level metrics. Custom dashboards per workload.",
  },
  {
    label: "Multi-cloud",
    head: "AWS + Azure hub-and-spoke",
    body: "Platform agnostic by design. Azure ACA planned for next phase.",
  },
  {
    label: "Secrets",
    head: "Vault sidecar injection",
    body: "Secrets never in manifests or Git. Rotated independently of deployments.",
  },
]

function StackChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span
          key={s}
          className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
        >
          {s}
        </span>
      ))}
    </div>
  )
}

function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary">
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  )
}

export function Projects() {
  return (
    <section id="work" className="border-b border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel index="03">Projects</SectionLabel>

        {/* SilverLink AI */}
        <article className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
          <div className="border-b border-border p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Featured production project
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">SilverLink AI</h3>
              <StatusBadge>Live in production</StatusBadge>
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Meta-approved multi-tenant AI SaaS platform automating Instagram DM responses for beauty and wellness
              businesses. Built the complete stack from scratch including infrastructure, networking, application layer,
              and DevOps pipeline. The AI receptionist responds to real DMs in under 60 seconds, handles booking intent,
              and hands off to an agentic Playwright booking agent on a separate managed compute cluster for live
              availability lookups. First client: Secretive Nail Bar, three Southern California locations.
            </p>
            <div className="mt-6">
              <StackChips items={silverlinkStack} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Live product <ExternalLink className="size-3.5" />
              </a>
              <a
                href="https://github.com/ian-altemus-cloud"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github className="size-3.5" /> GitHub
              </a>
            </div>
          </div>

          <div className="space-y-5 p-6 md:p-8">
            <FlowDiagram title="AWS architecture" steps={silverlinkFlow} />
            <div className="rounded-lg border border-border bg-background/50 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="font-medium text-foreground">Key decisions: </strong>
                Provider abstraction layer bridges Claude API and AWS Bedrock for runtime switching without code changes.
                Agentic Playwright agent runs on a separate ECS task triggered by booking intent. Split CI/CD pipelines
                with path-based triggers so app changes never touch infrastructure pipelines.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
              {decisions.map((d) => (
                <div key={d.q} className="bg-card p-5">
                  <h4 className="font-mono text-sm text-primary">{d.q}</h4>
                  <ul className="mt-3 space-y-2">
                    {d.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Trendlink */}
        <article className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
          <div className="border-b border-border p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Platform engineering project
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">Trendlink</h3>
              <StatusBadge>Active build</StatusBadge>
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Kubernetes-based prospect enrichment and intelligence platform spanning AWS and Azure. A Playwright agent
              aggregates and enriches real business data via Google Places API, scored and surfaced through a dashboard.
              Built on a hub-and-spoke multi-cloud topology with GitOps managed via ArgoCD, canary deployments via Argo
              Rollouts, and Vault sidecar secret injection.
            </p>
            <div className="mt-6">
              <StackChips items={trendlinkStack} />
            </div>
            <div className="mt-6">
              <a
                href="https://github.com/ian-altemus-cloud"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github className="size-3.5" /> GitHub
              </a>
            </div>
          </div>

          <div className="space-y-5 p-6 md:p-8">
            <FlowDiagram title="CI/CD pipeline" steps={trendlinkPipeline} />
            <div className="rounded-lg border border-border bg-background/50 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="font-medium text-foreground">Pipeline logic: </strong>
                Every git push triggers GitHub Actions for build and security scanning. Helm packages the manifests.
                ArgoCD detects the new image tag and syncs. Argo Rollouts splits traffic at 20% canary. Health checks
                gate promotion. Failed probes trigger automatic rollback with no manual intervention.
              </p>
            </div>
            <FlowDiagram title="Infrastructure topology" steps={trendlinkTopology} />
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
              {trendlinkPillars.map((p) => (
                <div key={p.label} className="bg-card p-5">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.label}</div>
                  <h4 className="mt-2 text-sm font-medium text-foreground">{p.head}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-border bg-background/50 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="font-medium text-foreground">Design principle: </strong>
                Infrastructure and application layers are fully decoupled. Terraform manages the platform. ArgoCD manages
                the workloads. Vault manages secrets. Each layer is independently replaceable without touching the
                others.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
