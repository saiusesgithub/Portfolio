"use client"

import { useMemo, useState } from "react"
import { Check, ChevronDown, ChevronUp, Copy, Filter, Search } from "lucide-react"

import { cn } from "@/lib/utils"

type JourneyCategory = "Learning" | "Projects" | "Achievements" | "In-Progress"

type FilterValue = "All" | JourneyCategory

interface PhaseData {
  phase: string
  title: string
  dateRange: string
  category: JourneyCategory[]
  bullets: string[]
  projects: string[]
  metrics: string[]
}

interface JourneyRoadmapProps {
  onPhaseClick?: (phaseId: string) => void
}

const PHASES: PhaseData[] = [
  {
    phase: "Phase 1",
    title: "Early Exploration (Pre-College)",
    dateRange: "Jun\u2013Jul 2024",
    category: ["Learning"],
    bullets: [
      "CodeWithHarry \u2014 100 Days of Python",
      "Harvard CS50 Technology",
      "CS50 Scratch \u2014 completed Jun 25, 2024",
      "CS50 Python \u2014 completed Jul 26, 2024",
      "CS50x started \u2014 progressed up to Week 8 (C, SQL, DSA, web basics)",
    ],
    projects: ["Chrome Dino Clone (Pygame) \u2014 CS50P final project"],
    metrics: [],
  },
  {
    phase: "Phase 2",
    title: "First Year of College",
    dateRange: "Aug 2024 \u2013 May 2025",
    category: ["Learning"],
    bullets: [
      "Explored HTML, CSS, JavaScript, Kotlin \u2014 basics only",
      "Got certificates in C, Python, Git/GitHub, Cybersecurity (theory-heavy)",
      "Lost consistency; regained momentum after discovering Flutter",
    ],
    projects: [],
    metrics: [],
  },
  {
    phase: "Phase 3",
    title: "Flutter Breakthrough",
    dateRange: "May 31, 2025 \u2013 Sep 8, 2025",
    category: ["Learning", "Projects"],
    bullets: [
      "Udemy: Dart & Flutter \u2014 The Ultimate Mobile App Development Course",
      "Udemy: Dart & Flutter \u2014 The Complete Flutter Development Course (10+ apps)",
      "Skills: Dart fundamentals, stateless/stateful widgets, navigation, animations, forms, validation, device storage, Dio API, Provider/ChangeNotifiers, Firebase Auth + file uploads, SharedPreferences, Cupertino widgets, debugging/testing",
    ],
    projects: [
      "GoMoon (layouts: Rows, Columns, Buttons)",
      "Taskly (stateful widgets, persistence, packages)",
      "Animdo (animations)",
      "CoinCap (Dio API, navigation, assets, futures)",
      "Frivia (Provider + ChangeNotifiers, fonts)",
      "Finstagram (routes, forms, device storage \u2192 extended with Firebase auth, uploads, streams, GridView)",
      "IBMI (Cupertino widgets, SharedPreferences)",
    ],
    metrics: ["Built 10+ apps during the course"],
  },
  {
    phase: "Phase 3 \u2014 Personal",
    title: "My Own Flutter Projects",
    dateRange: "2025",
    category: ["Projects"],
    bullets: ["Kept AI code generation minimal; focused on understanding & ownership"],
    projects: [
      "DailyDone \u2014 Todo + Habit Tracker (Flutter + Hive, custom UI/animations)",
      "Trackfolio \u2014 Book Tracker (Flutter + Firebase + Google Books API)",
      "ShadowMesh \u2014 Offline messaging (Flutter + Bluetooth APIs)",
      "WhoDat \u2014 Guessing game (Flutter + Gemini API)",
      "BackBench AI \u2014 AI revision notes (Flutter + Vercel backend + Gemini API)",
      "HackHunt \u2014 Hackathon aggregator (Flutter + scraping + Firebase)",
    ],
    metrics: [],
  },
  {
    phase: "Phase 4",
    title: "Cybersecurity Milestone",
    dateRange: "2025",
    category: ["Achievements", "Learning"],
    bullets: [
      "Cyberonix Level-1 Workshop & Hackathon \u2014 hands-on Wireshark, steganography (images/audio/text), cryptography, Burp Suite basics, password recovery",
      "We were the only 2nd-year team in Top 5; held 1st/2nd most of the event; finished 4th overall despite a server crash before final submission",
    ],
    projects: [],
    metrics: ["Top-5 Finish (4th of ~40 teams)"],
  },
  {
    phase: "Phase 5",
    title: "Databases & CS Foundations",
    dateRange: "Jul\u2013Aug 2025",
    category: ["Learning"],
    bullets: [
      "Completed Harvard CS50x: C, Python, algorithms & data structures (stacks, queues, hash tables, tries), web (HTML, CSS, JS, Flask), SQL, security basics \u2014 built a full-stack Flask app",
      "Completed Harvard CS50: Databases with SQL (Aug 1\u20138, 2025): SELECT, JOINs, CRUD, views, indexes; practiced with SQLite; also explored PostgreSQL/MySQL basics",
    ],
    projects: ["Full-stack Flask final project"],
    metrics: ["CS50 certificate + CS50 SQL certificate"],
  },
  {
    phase: "Phase 6",
    title: "Cloud Foundations (OCI)",
    dateRange: "Sep 2025 \u2013 Ongoing",
    category: ["Learning", "In-Progress"],
    bullets: [
      "Learning compartments, IAM, VCN/subnets, Load Balancer, Compute, Object/Block storage, OCIR, Monitoring/Alarms",
      "Hands-on labs: VM + SSH; private subnet + NAT + LB; Dockerize and push image to OCIR; deploy on Compute; set up monitoring/alarms",
    ],
    projects: ["'Hello Cloud' demo \u2014 Flutter web build via Nginx on OCI with domain + HTTPS"],
    metrics: ["Target: OCI Foundations + 1 guided project badge"],
  },
  {
    phase: "Phase 7",
    title: "Flagship Flutter App (Production-Grade)",
    dateRange: "Sep\u2013Nov 2025 (target)",
    category: ["Projects", "In-Progress"],
    bullets: [
      "Goal: Ship a polished, real-user app with analytics, auth, sync, and CI/CD",
      "Non-negotiables: clean architecture; Riverpod/Provider Notifiers; offline-first (Hive/Isar) + cloud sync; Auth (Email/Google); error reporting (Sentry/Crashlytics); Remote Config/feature flags; analytics (Firebase/GA4); CI/CD (GitHub Actions)",
    ],
    projects: ["Pick one: Trackfolio 2.0, DailyDone Pro, or BackBench AI"],
    metrics: ["Track: DAU, D1/D7 retention, crash-free %, TTI, sync success %"],
  },
]

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All", value: "All" },
  { label: "Learning", value: "Learning" },
  { label: "Projects", value: "Projects" },
  { label: "Achievements", value: "Achievements" },
  { label: "In-Progress", value: "In-Progress" },
]

const CATEGORY_STYLES: Record<JourneyCategory, string> = {
  Learning: "bg-sky-500/15 text-sky-300 border border-sky-500/30",
  Projects: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  Achievements: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
  "In-Progress": "bg-purple-500/15 text-purple-300 border border-purple-500/30",
}

const PHASE_ACCENTS = [
  { badge: "bg-indigo-500/15 text-indigo-200 border border-indigo-500/40", dot: "bg-indigo-400 border-indigo-100" },
  { badge: "bg-emerald-500/15 text-emerald-200 border border-emerald-500/40", dot: "bg-emerald-400 border-emerald-100" },
  { badge: "bg-rose-500/15 text-rose-200 border border-rose-500/40", dot: "bg-rose-400 border-rose-100" },
  { badge: "bg-sky-500/15 text-sky-200 border border-sky-500/40", dot: "bg-sky-400 border-sky-100" },
  { badge: "bg-amber-500/15 text-amber-200 border border-amber-500/40", dot: "bg-amber-400 border-amber-100" },
  { badge: "bg-cyan-500/15 text-cyan-200 border border-cyan-500/40", dot: "bg-cyan-400 border-cyan-100" },
  { badge: "bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-500/40", dot: "bg-fuchsia-400 border-fuchsia-100" },
]

export default function JourneyRoadmap({ onPhaseClick }: JourneyRoadmapProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All")
  const [query, setQuery] = useState("")
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({})
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle")

  const trimmedQuery = query.trim().toLowerCase()

  const filteredPhases = useMemo(() => {
    return PHASES.filter((phase) => {
      if (activeFilter !== "All" && !phase.category.includes(activeFilter)) {
        return false
      }

      if (!trimmedQuery) {
        return true
      }

      const haystack = [
        phase.phase,
        phase.title,
        phase.dateRange,
        ...phase.bullets,
        ...phase.projects,
        ...phase.metrics,
        ...phase.category,
      ]
        .join(" | ")
        .toLowerCase()

      return haystack.includes(trimmedQuery)
    })
  }, [activeFilter, trimmedQuery])

  const handleTogglePhase = (phaseId: string) => {
    setExpandedPhases((previous) => ({ ...previous, [phaseId]: !previous[phaseId] }))
  }

  const handleCopy = async () => {
    const summary = filteredPhases
      .map((phase) => {
        const lines = [
          `${phase.phase} \u2014 ${phase.title} (${phase.dateRange})`,
          `Categories: ${phase.category.join(", ")}`,
          ...phase.bullets.map((item) => `- ${item}`),
        ]

        if (phase.projects.length) {
          lines.push(`Projects: ${phase.projects.join(" | ")}`)
        }

        if (phase.metrics.length) {
          lines.push(`Metrics: ${phase.metrics.join(" | ")}`)
        }

        return lines.join("\n")
      })
      .join("\n\n")

    try {
      await navigator.clipboard.writeText(summary)
      setCopyState("copied")
      window.setTimeout(() => setCopyState("idle"), 2000)
    } catch (error) {
      console.error("Copy failed", error)
      setCopyState("error")
      window.setTimeout(() => setCopyState("idle"), 2000)
    }
  }

  return (
    <section id="journey-roadmap" className="relative py-16 sm:py-20">
      <a
        href="#journey-roadmap-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to Coding Journey content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Coding Journey</h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              A phase-by-phase look at how my skills evolved across courses, hands-on projects, and cloud goals. Filter or search to dive into milestones that matter most.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <label htmlFor="journey-search" className="sr-only">
              Search journey milestones
            </label>
            <div className="relative w-full sm:w-64">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                id="journey-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search milestones"
                className="w-full rounded-full border border-border/70 bg-background/70 py-2 pl-9 pr-3 text-sm shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <div
              role="radiogroup"
              aria-label="Filter journey phases"
              className="flex w-full flex-wrap gap-2 sm:w-auto"
            >
              {FILTERS.map(({ label, value }) => {
                const isActive = activeFilter === value
                return (
                  <button
                    key={value}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => setActiveFilter(value)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                      isActive
                        ? "border-primary/50 bg-primary/10 text-primary"
                        : "border-border/60 bg-background/60 text-muted-foreground hover:bg-muted/40"
                    )}
                  >
                    <Filter className="h-3.5 w-3.5" aria-hidden="true" />
                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        </header>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4" id="journey-roadmap-content">
          <p className="text-sm text-muted-foreground">
            Showing {filteredPhases.length} phase{filteredPhases.length === 1 ? "" : "s"} sorted chronologically.
          </p>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition hover:bg-muted/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Copy Coding Journey summary to clipboard"
          >
            {copyState === "copied" ? (
              <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
            {copyState === "copied" ? "Copied" : copyState === "error" ? "Copy failed" : "Copy summary"}
          </button>
        </div>

        <div className="relative">
          {filteredPhases.length === 0 ? (
            <div className="rounded-2xl border border-border/60 bg-card/70 p-8 text-center text-sm text-muted-foreground">
              No phases match your filters just yet. Clear the search or try a different category.
            </div>
          ) : (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1.5 top-4 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:block"
              />
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:pl-8">
                {filteredPhases.map((phase, index) => {
                  const accent = PHASE_ACCENTS[index % PHASE_ACCENTS.length]
                  const isExpanded = Boolean(expandedPhases[phase.phase])
                  const bulletLimit = 3
                  const hasExtraBullets = phase.bullets.length > bulletLimit
                  const visibleBullets = hasExtraBullets && !isExpanded ? phase.bullets.slice(0, bulletLimit) : phase.bullets
                  const safeId = phase.phase.replace(/[^a-z0-9]+/gi, "-").toLowerCase() || `phase-${index}`

                  return (
                    <div key={phase.phase} className="relative">
                      <span
                        aria-hidden="true"
                        className={cn("hidden lg:absolute lg:-left-6 lg:top-6 lg:h-3 lg:w-3 lg:rounded-full lg:border-2", accent.dot)}
                      />
                      <article
                        className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        tabIndex={onPhaseClick ? 0 : undefined}
                        role={onPhaseClick ? "button" : undefined}
                        aria-label={onPhaseClick ? `${phase.phase}: ${phase.title}` : undefined}
                        onClick={() => onPhaseClick?.(phase.phase)}
                        onKeyDown={(event) => {
                          if (!onPhaseClick) return
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault()
                            onPhaseClick(phase.phase)
                          }
                        }}
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide", accent.badge)}>
                            {phase.phase}
                          </span>
                          <span className="text-xs font-medium text-muted-foreground">{phase.dateRange}</span>
                          <div className="flex flex-wrap gap-2">
                            {phase.category.map((cat) => (
                              <span
                                key={`${phase.phase}-${cat}`}
                                className={cn(
                                  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
                                  CATEGORY_STYLES[cat]
                                )}
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h3 className="mt-4 text-xl font-semibold text-foreground sm:text-2xl">{phase.title}</h3>

                        <ul id={`${safeId}-list`} className="mt-4 space-y-2 text-sm text-muted-foreground">
                          {visibleBullets.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {hasExtraBullets && (
                          <button
                            type="button"
                            onClick={() => handleTogglePhase(phase.phase)}
                            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition hover:text-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            aria-expanded={isExpanded}
                            aria-controls={`${safeId}-list`}
                          >
                            {isExpanded ? "Collapse" : "Expand"}
                            {isExpanded ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                          </button>
                        )}

                        {phase.projects.length > 0 && (
                          <div className="mt-4">
                            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Projects</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {phase.projects.map((project) => (
                                <span
                                  key={project}
                                  className="inline-flex items-center rounded-full border border-border/50 bg-background/70 px-2.5 py-1 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                                >
                                  {project}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {phase.metrics.length > 0 && (
                          <div className="mt-4">
                            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Metrics</span>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {phase.metrics.map((metric) => (
                                <span
                                  key={metric}
                                  className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                                >
                                  {metric}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {onPhaseClick && (
                          <span className="mt-6 inline-flex items-center text-xs text-muted-foreground">
                            Press Enter or Space to open this phase
                          </span>
                        )}
                      </article>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>

        <div aria-live="polite" className="sr-only">
          {copyState === "copied" ? "Coding Journey summary copied" : copyState === "error" ? "Copy failed" : undefined}
        </div>
      </div>
    </section>
  )
}

