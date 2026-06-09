import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Metrics } from "@/components/metrics"
import { Projects } from "@/components/projects"
import { Highlights } from "@/components/highlights"
import { TechStack } from "@/components/tech-stack"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Metrics />
        <Projects />
        <Highlights />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  )
}
