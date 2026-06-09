import { ArrowUpRight, Play, FileDown } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

const stats = [
  { value: "15+", label: "Years operating real businesses" },
  { value: "<60s", label: "Production AI response time" },
  { value: "106", label: "Terraform-managed AWS resources" },
]

const tools = ["AWS", "K8s", "Terraform"]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1fr_1.05fr_auto] lg:gap-8">
        {/* Left: intro + CTAs */}
        <div className="order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to new roles
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl">
            Hi, I&apos;m
            <span className="block text-primary">Ian Altemus</span>
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <p className="font-mono text-sm text-muted-foreground">Cloud Infrastructure &amp; DevOps Engineer</p>
          </div>

          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Building and operating production AI systems on AWS, Kubernetes, and Terraform with a security-first,
            least-privilege approach at every layer.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Let&apos;s talk <ArrowUpRight className="size-4" />
            </a>
            <a
              href="/ian-altemus-resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Resume <FileDown className="size-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ian-altemus-cloud"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Loom video placeholder */}
        <div className="order-3 lg:order-2">
          <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
            {/* TODO: replace this placeholder with your Loom embed.
                <iframe src="https://www.loom.com/embed/YOUR_VIDEO_ID" className="absolute inset-0 h-full w-full" allowFullScreen /> */}
            <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5"
              aria-hidden="true"
            />
            <div className="absolute left-4 top-4 flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-primary/40" />
              <span className="size-2.5 rounded-full bg-primary" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="flex size-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-transform group-hover:scale-105">
                <Play className="ml-1 size-6 fill-current" />
              </span>
              <p className="font-mono text-sm text-foreground">Loom walkthrough</p>
              <p className="font-mono text-xs text-muted-foreground">Coming soon — video embed goes here</p>
            </div>
          </div>
        </div>

        {/* Right: stat column */}
        <div className="order-2 flex gap-6 lg:order-3 lg:flex-col lg:gap-8 lg:pl-2">
          {stats.map((s, i) => (
            <div key={s.label} className="lg:max-w-[10rem]">
              {i > 0 && <span className="mb-6 hidden h-px w-10 bg-border lg:block" aria-hidden="true" />}
              <div className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {s.value}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
