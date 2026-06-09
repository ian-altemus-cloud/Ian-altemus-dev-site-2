import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Metrics } from "@/components/metrics"
import { Highlights } from "@/components/highlights"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Metrics />
        <Highlights />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  )
}
