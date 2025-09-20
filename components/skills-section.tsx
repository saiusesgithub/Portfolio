const skillCategories = [
  {
    icon: "📱",
    title: "Mobile Development (Primary)",
    level: "Level: Strong",
    items: [
      "🦋 Flutter (Dart) — Material/Cupertino, theming, animations",
      "🧩 State Mgmt: Provider",
      "🔌 Networking: Dio (REST APIs)",
      "💾 Local Storage: Hive, SharedPreferences, Sqflite",
      "🔥 Firebase: Auth, Firestore/Storage, Remote Config (basics)",
      "📚 Integrations: Google Books API, Bluetooth APIs, Gemini API",
    ],
  },
  {
    icon: "🖥️",
    title: "Backend & APIs (Working)",
    level: "Level: Working knowledge",
    items: [
      "🌐 REST APIs (design/consumption)",
      "🐍 Flask (CS50x)",
      "▲ Serverless / Vercel",
      "🔐 Auth flows: Email/Google (Firebase)",
    ],
  },
  {
    icon: "🗄️",
    title: "Databases & Storage",
    level: "Level: Strong (SQLite/Hive/Firestore/MySQL); Basics (S3/R2)",
    items: [
      "🧱 SQLite (apps & CS50 SQL psets)",
      "💾 Hive (offline-first)",
      "🔥 Firestore/Storage, AWS S3, Cloudflare R2",
      "🐬 MySQL (basics)",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps (Learning)",
    level: "Level: Learning / In-Progress",
    items: [
      "🟧 OCI Foundations (VCN/Subnets, IAM, Load Balancer, Compute, OCIR, Monitoring)",
      "🔥 Firebase (hosting/services)",
      "🐳 Docker (basics)",
      "🧰 Nginx (serving Flutter web demo)",
    ],
  },
  {
    icon: "🔐",
    title: "Cybersecurity (CTF/Workshop)",
    items: [
      "📶 Wireshark (capture & filters)",
      "🕵️ Steganography (images/audio/text)",
      "🧮 Cryptography (hashing/enc-dec tools)",
      "🧪 Burp Suite (basics)",
    ],
    highlight: "Highlight: Cyberonix Hackathon — Top 3 (2th/≈50 teams)",
  },
  {
    icon: "🧠",
    title: "Languages",
    items: [
      "🦋 Dart (strong)",
      "🐍 Python (good; not OOP-heavy)",
      "🇨 C (data structures & algorithms via CS50x)",
      "🧮 SQL (queries, joins, views, indexes)",
      "🎮 Pygame",
      "🌐 HTML/CSS/JS (intro)",
      "🟣 Kotlin (syntax basics)",
    ],
  },
  {
    icon: "🎨",
    title: "Design & Tools",
    items: [
      "📝 VS Code · 🐙 Git/GitHub",
      "🗒️ Obsidian",
      "🔧 Platforms: Git, GitHub, Vercel, Render, Android Studio, MetaMask",
    ],
  },
]

const exploringNext = [
  "⛓️ Blockchain: Ethereum/Sepolia for hackathons (hash/signature concepts)",
  "☁️ Deeper Cloud/DevOps: OCI deployments, monitoring, CI/CD",
  "🧪 Testing: deeper Flutter (Provider, BLoC, Riverpod), Supabase, etc.",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient">Skills & Technologies</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A focused toolkit built through hands-on projects and coursework — Flutter first, cloud in progress.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map(({ icon, title, level, items, highlight }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {icon}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                </div>
                {level ? (
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {level}
                  </span>
                ) : null}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {highlight ? (
                <p className="mt-4 text-sm font-medium text-foreground">{highlight}</p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">
              🧭
            </span>
            <h3 className="text-xl font-semibold text-foreground">Exploring Next</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {exploringNext.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
