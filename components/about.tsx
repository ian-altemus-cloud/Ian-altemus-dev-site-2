import { Award, Quote } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const certs = [
  { name: "AWS Solutions Architect Associate", org: "Amazon Web Services", status: null },
  { name: "HashiCorp Terraform Associate", org: "HashiCorp", status: null },
  { name: "B.S. Cloud Computing", org: "WGU", status: "in progress" },
  { name: "CKA — Certified Kubernetes Administrator", org: "CNCF", status: "in progress" },
]

const openTo = ["Cloud Engineer", "DevOps Engineer", "Platform Engineer", "SRE"]
const arrangements = ["Remote", "Hybrid", "On-site", "Contract or FT"]

export function About() {
  return (
    <section id="about" className="border-b border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel index="05">About</SectionLabel>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              I am a{" "}
              <strong className="font-medium text-foreground">Cloud Infrastructure and DevOps Engineer</strong> focused
              on AWS, Kubernetes, Terraform, and production AI systems. I design and operate infrastructure end-to-end
              with a security-first approach at every layer.
            </p>
            <p>
              Before engineering, I spent{" "}
              <strong className="font-medium text-foreground">15 years running multi-location businesses.</strong> That
              background changed how I think about infrastructure. I know what it feels like from the stakeholder side
              when systems fail to meet objectives. I am not task-oriented. I am outcome-oriented at my core.
            </p>
            <p>
              I am comfortable under pressure, meticulous about security, and genuinely enjoy debugging complex flows
              when things break. I combine{" "}
              <strong className="font-medium text-foreground">operational discipline with clear, direct communication</strong>{" "}
              across technical and non-technical teams.
            </p>

            <blockquote className="relative rounded-lg border border-border bg-card p-6">
              <Quote className="absolute right-5 top-5 size-6 text-primary/30" aria-hidden="true" />
              <p className="text-pretty text-lg italic leading-relaxed text-foreground">
                I have always been drawn to solving complex problems. Cloud and DevOps gave me the perfect outlet to
                realize that characteristic.
              </p>
            </blockquote>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Certifications</h3>
              <ul className="mt-4 space-y-3">
                {certs.map((c) => (
                  <li key={c.name} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                    <Award className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{c.name}</span>
                        {c.status && (
                          <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary">
                            {c.status}
                          </span>
                        )}
                      </div>
                      <div className="mt-0.5 font-mono text-xs text-muted-foreground">{c.org}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Currently open to</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {openTo.map((r) => (
                  <span
                    key={r}
                    className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {arrangements.map((a) => (
                  <span
                    key={a}
                    className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
