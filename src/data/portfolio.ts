export const siteData = {
  name: "SAI SRUJAN",
  title: "Cloud Engineer & DevOps Practitioner",
  tagline: "Building Digital Infrastructure.",
  about: "Architecting cloud systems, automating CI/CD pipelines, and building the infrastructure that ships software at scale.",
  email: "saisrujanpunati@gmail.com",
  location: "Hyderabad, India",
  coordinates: "17.3850° N, 78.4867° E",
  status: "AVAILABLE FOR WORK"
};

export const journey = [
  {
    version: "0.1.0",
    codename: "FIRST_BOOT",
    date: "2022.09",
    status: "STABLE" as const,
    signal: "Opened a terminal for the first time in my engineering college. Typed 'ls'. Saw files appear. Felt like a hacker. Installed Ubuntu on a USB drive and broke my bootloader the same week. Fixed it. That's when I knew.",
    tech: ["Linux", "Terminal", "Ubuntu"],
  },
  {
    version: "0.3.0",
    codename: "LANGUAGE_ACQUISITION",
    date: "2023.01",
    status: "STABLE" as const,
    signal: "Wrote my first Python script — a calculator that only worked for positive numbers. Spent 3 hours debugging an indentation error. Learned C next because the syllabus said so. Wrote 200 lines to do what Python did in 10. Gained respect for abstraction.",
    tech: ["Python", "C", "VS Code"],
  },
  {
    version: "0.5.0",
    codename: "BACKEND_INIT",
    date: "2023.06",
    status: "STABLE" as const,
    signal: "Built my first Flask API. Connected it to MySQL. Deployed it on a free-tier Heroku instance. It crashed during the demo. Learned about environment variables the hard way. Also discovered Git after accidentally deleting a project folder.",
    tech: ["Flask", "MySQL", "Git", "Heroku"],
  },
  {
    version: "1.0.0",
    codename: "CLOUD_MIGRATION",
    date: "2024.03",
    status: "STABLE" as const,
    signal: "Discovered AWS. Spun up my first EC2 instance. Forgot to set billing alerts. Got a $47 bill for a t2.micro I left running for a month. Expensive lesson, but now I architect infrastructure for a living. Worth it.",
    tech: ["AWS", "EC2", "S3", "IAM"],
  },
  {
    version: "1.5.0",
    codename: "CONTAINERIZED",
    date: "2024.08",
    status: "STABLE" as const,
    signal: "3 AM. Hostel room. 'Why won't this container start?' — spent 4 hours staring at Docker logs. Missing ENV variable. One line. Four hours. I've never forgotten to check .env files since. Also discovered Docker Compose and never looked back.",
    tech: ["Docker", "Docker Compose", "Nginx"],
  },
  {
    version: "2.0.0",
    codename: "PIPELINE_ARCHITECT",
    date: "2025.01",
    status: "STABLE" as const,
    signal: "Wrote my first GitHub Actions workflow. Pushed to main. Watched the green checkmarks appear. Automated what used to take 20 minutes of manual deployment. Started terraforming infrastructure instead of clicking through consoles.",
    tech: ["GitHub Actions", "Terraform", "CI/CD"],
  },
  {
    version: "2.5.0",
    codename: "CURRENT_BUILD",
    date: "2025.NOW",
    status: "IN_DEV" as const,
    signal: "Learning Kubernetes. Breaking clusters daily. Studying for certifications. Building this portfolio at 2 AM. The grind doesn't stop — it just gets more interesting. Every error message is a lesson I haven't learned yet.",
    tech: ["Kubernetes", "Ansible", "Prometheus"],
  },
  {
    version: "3.0.0",
    codename: "UNRELEASED",
    date: "NEXT",
    status: "PLANNED" as const,
    signal: "CKA certified. Full-stack cloud architect. Contributing to infrastructure that serves millions. The blueprint is drawn — now it's about execution.",
    tech: ["CKA", "AWS SA", "System Design"],
  },
];

export const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    year: "2025",
    description: "Real-time financial analytics platform handling 100K+ daily transactions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
    links: {
      live: "#",
      github: "#",
      case: "#"
    }
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    year: "2024",
    description: "Headless commerce solution with custom CMS and payment integration",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "Sanity CMS"],
    links: {
      live: "#",
      github: "#",
      case: "#"
    }
  },
  {
    id: 3,
    title: "SaaS Analytics Tool",
    year: "2024",
    description: "Multi-tenant analytics dashboard with real-time data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["Vue.js", "Python", "AWS"],
    links: {
      live: "#",
      github: "#",
      case: "#"
    }
  }
];

export const techStack = [
  { name: "JavaScript", icon: "code" },
  { name: "TypeScript", icon: "file-code" },
  { name: "React", icon: "component" },
  { name: "Node.js", icon: "server" },
  { name: "PostgreSQL", icon: "database" },
  { name: "AWS", icon: "cloud" },
  { name: "Docker", icon: "container" },
  { name: "Git", icon: "git-branch" }
];

export const skills = [
  {
    title: "Frontend Development",
    icon: "layout",
    description: "Expert in React, Vue, Next.js, and modern CSS frameworks. Building responsive, accessible interfaces with attention to detail."
  },
  {
    title: "Backend Architecture",
    icon: "server",
    description: "Designing scalable APIs with Node.js, Python, and PostgreSQL. RESTful and GraphQL expertise with cloud deployment."
  },
  {
    title: "UI/UX Design",
    icon: "palette",
    description: "Creating intuitive user experiences with Figma. From wireframes to high-fidelity prototypes and design systems."
  }
];

export const capabilities = [
  { spec: "01", title: "Languages", value: "JavaScript, TypeScript, Python, SQL" },
  { spec: "02", title: "Frameworks", value: "React, Next.js, Vue, Node.js, Express" },
  { spec: "03", title: "Databases", value: "PostgreSQL, MongoDB, Redis, Firebase" },
  { spec: "04", title: "DevOps", value: "AWS, Docker, CI/CD, Linux, Nginx" }
];

export const experience = [
  {
    hash: "f7a2b3c",
    deploymentId: "01",
    title: "Cloud Engineering Intern",
    company: "NexaByte Solutions",
    period: "Jun 2025 – Present",
    location: "Hyderabad, India",
    status: "ACTIVE" as const,
    description: [
      "Provisioned and managed AWS EC2, S3, and VPC infrastructure for staging environments",
      "Automated CI/CD pipelines with GitHub Actions, reducing deployment time by 40%",
      "Containerized microservices with Docker and Docker Compose for development workflows",
      "Monitored system health using CloudWatch dashboards and custom alarms",
    ],
    tech: ["AWS", "Docker", "GitHub Actions", "Terraform", "Linux"],
  },
  {
    hash: "b4e9d1a",
    deploymentId: "02",
    title: "Open Source Contributor",
    company: "Various Projects",
    period: "Jan 2025 – May 2025",
    location: "Remote",
    status: "COMPLETED" as const,
    description: [
      "Contributed Docker support and CI/CD workflows to community repositories",
      "Authored pull requests with detailed documentation and testing strategies",
      "Collaborated asynchronously with maintainers across multiple time zones",
    ],
    tech: ["Git", "Docker", "Python", "Bash", "GitHub"],
  },
  {
    hash: "c8f3e2b",
    deploymentId: "03",
    title: "Freelance DevOps Consultant",
    company: "Self-Employed",
    period: "Aug 2024 – Dec 2024",
    location: "Remote",
    status: "COMPLETED" as const,
    description: [
      "Set up cloud infrastructure on AWS for small SaaS startups",
      "Configured Nginx reverse proxies, SSL certificates, and firewall rules",
      "Implemented automated backup systems and monitoring dashboards",
    ],
    tech: ["AWS", "Nginx", "Linux", "Bash", "Cloudflare"],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/saiusesgithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/saisrujanpunati" },
];
