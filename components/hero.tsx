import { ArrowUpRight, FileDown } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

const tools = ["AWS", "K8s", "Terraform"]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-12">
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
        </div>

        <div className="order-2 flex flex-col gap-6">
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-border bg-black shadow-2xl shadow-black/40"
            style={{ paddingTop: "56.25%" }}
          >
            <video
              src="/walkthrough.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:ianaltemustech@gmail.com?
              subject=Cloud%20Engineering%20Opportunity"

              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Let&apos;s talk <ArrowUpRight className="size-4" />
            </a>
            <a
              href="/Ian_Altemus_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Resume <FileDown className="size-4" />
            </a>
          </div>

          <div className="flex items-center gap-4">
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
                href="https://linkedin.com/in/ian-altemus-cloud"
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
      </div>
    </section>
  )
}