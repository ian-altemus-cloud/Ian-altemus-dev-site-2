"use client"

import { useEffect, useState } from "react"

type Step = { name: string; sub: string }

export function AnimatedFlow({
  title,
  steps,
  stepDuration = 600,
  pauseDuration = 1800,
}: {
  title: string
  steps: Step[]
  stepDuration?: number
  pauseDuration?: number
}) {
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [completed, setCompleted] = useState<boolean[]>(Array(steps.length).fill(false))

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let current = 0

    function runStep() {
      if (current < steps.length) {
        setActiveIndex(current)
        setCompleted((prev) => {
          const next = [...prev]
          next[current] = true
          return next
        })
        current++
        timeout = setTimeout(runStep, stepDuration)
      } else {
        timeout = setTimeout(() => {
          setActiveIndex(-1)
          setCompleted(Array(steps.length).fill(false))
          current = 0
          timeout = setTimeout(runStep, 300)
        }, pauseDuration)
      }
    }

    timeout = setTimeout(runStep, 600)
    return () => clearTimeout(timeout)
  }, [steps.length, stepDuration, pauseDuration])

  return (
    <div className="rounded-lg border border-border bg-background/50 p-5">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{title}</div>
      <div className="mt-4 flex flex-wrap items-stretch gap-2">
        {steps.map((step, i) => {
          const isActive = activeIndex === i
          const isDone = completed[i] && activeIndex !== i

          return (
            <div key={step.name} className="flex items-center gap-2">
              <div
                className={[
                  "rounded-md border px-3 py-2 transition-all duration-300",
                  isActive
                    ? "border-primary bg-primary/15 shadow-[0_0_12px_rgba(var(--primary),0.25)]"
                    : isDone
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card",
                ].join(" ")}
              >
                <div className="flex items-center gap-1.5">
                  {isDone && (
                    <span className="font-mono text-[10px] text-primary">✓</span>
                  )}
                  <div
                    className={[
                      "font-mono text-xs font-medium transition-colors duration-300",
                      isActive ? "text-primary" : isDone ? "text-primary/70" : "text-foreground",
                    ].join(" ")}
                  >
                    {step.name}
                  </div>
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-muted-foreground">{step.sub}</div>
              </div>

              {i < steps.length - 1 && (
                <div className="relative flex items-center">
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="shrink-0">
                    <path
                      d="M0 6 H14 M10 1 L18 6 L10 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={[
                        "transition-colors duration-300",
                        completed[i] ? "text-primary" : "text-primary/20",
                      ].join(" ")}
                    />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
