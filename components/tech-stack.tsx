import { SectionLabel } from "@/components/section-label"

const stack = [
  { cat: "Cloud", name: "AWS" },
  { cat: "Cloud", name: "Azure" },
  { cat: "Compute", name: "ECS Fargate" },
  { cat: "Orchestration", name: "Kubernetes" },
  { cat: "IaC", name: "Terraform" },
  { cat: "GitOps", name: "ArgoCD" },
  { cat: "CI/CD", name: "GitHub Actions" },
  { cat: "Packaging", name: "Helm" },
  { cat: "Secrets", name: "Vault" },
  { cat: "Secrets", name: "Secrets Manager" },
  { cat: "Messaging", name: "SQS" },
  { cat: "Database", name: "DynamoDB" },
  { cat: "Gateway", name: "API Gateway" },
  { cat: "Observability", name: "Prometheus" },
  { cat: "Dashboards", name: "Grafana" },
  { cat: "AI", name: "Claude API" },
  { cat: "Language", name: "Python" },
  { cat: "Security", name: "Trivy" },
  { cat: "Security", name: "Bandit" },
  { cat: "Security", name: "Gitleaks" },
  { cat: "Containers", name: "Docker" },
  { cat: "Rollouts", name: "Argo Rollouts" },
  { cat: "Automation", name: "Playwright" },
  { cat: "Registry", name: "ECR" },
]

export function TechStack() {
  return (
    <section id="stack" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel index="04">Technical stack</SectionLabel>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {stack.map((s) => (
            <div key={`${s.cat}-${s.name}`} className="bg-card p-4 transition-colors hover:bg-secondary/40">
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary/70">{s.cat}</div>
              <div className="mt-1.5 font-medium text-foreground">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
