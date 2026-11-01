export type SkillCategory = {
  name: string;
  color: string;
  skills: string[];
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  type: string;
  highlight?: boolean;
};

export type Org = {
  id: string;
  name: string;
  domain: string;
  period: string;
  color: string;
  accent: string;
  projects: Project[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    color: "from-violet-500 to-purple-500",
    skills: ["FastAPI", "Node.js", "Python", "asyncmy", "REST API design"],
  },
  {
    name: "Mobile",
    color: "from-indigo-500 to-blue-600",
    skills: ["React Native", "Expo", "iOS UI", "Google OAuth (mobile)", "CodeBuild CI/CD"],
  },
  {
    name: "AI & Search",
    color: "from-orange-500 to-amber-500",
    skills: ["RAG", "Google Gemini", "Indexing pipelines", "Web search agents", "Translation (Gemini + Google Translate)"],
  },
  {
    name: "Databases & Caching",
    color: "from-rose-500 to-pink-500",
    skills: ["MySQL", "Redis", "asyncmy (async MySQL driver)", "AWS S3"],
  },
  {
    name: "Cloud & DevOps",
    color: "from-green-500 to-emerald-500",
    skills: ["AWS IAM / Assume Role", "AWS S3", "AWS CodeBuild", "Docker", "GitHub Actions"],
  },
  {
    name: "Geospatial",
    color: "from-teal-500 to-cyan-600",
    skills: ["Shapely", "pyproj", "Polygon buffer matching", "Geo-coding", "Coordinate systems"],
  },
  {
    name: "Tools & Practices",
    color: "from-slate-500 to-gray-600",
    skills: ["Grafana embedding", "Swagger / OpenAPI", "Pre-commit hooks", "Data scraping", "Rocketreach API"],
  },
];

export const orgs: Org[] = [
  {
    id: "startech",
    name: "Star Tech Group",
    domain: "EdTech Platform",
    period: "15 months",
    color: "from-blue-600 to-indigo-700",
    accent: "#2563eb",
    projects: [
      {
        name: "Async Database Migration",
        description:
          "Migrated the entire Access API from synchronous to async MySQL using the asyncmy driver — refactored all DB queries, resolved connection pool issues, and handled edge cases like gather-to-sequential patterns for non-async-safe operations.",
        tech: ["Python", "FastAPI", "asyncmy", "MySQL", "async/await"],
        type: "Backend / Performance",
        highlight: true,
      },
      {
        name: "Redis Caching Layer",
        description:
          "Implemented Redis caching across all major API endpoints — reducing DB load and improving response times for careers, colleges, video listings, and user data.",
        tech: ["Python", "FastAPI", "Redis", "MySQL"],
        type: "Backend / Caching",
        highlight: true,
      },
      {
        name: "Core API Endpoints",
        description:
          "Built 20+ REST API endpoints from scratch: college listings, career/video content, PACE assignments/projects, parent dashboard, student checklists, OTP flows, digital locker (S3), sector-endorsement, professional/military careers, and social features (likes, testimonials).",
        tech: ["Python", "FastAPI", "MySQL", "AWS S3", "Redis"],
        type: "Backend API",
        highlight: true,
      },
      {
        name: "AWS IAM Assume-Role",
        description:
          "Implemented cross-account AWS resource access using IAM assume-role for shared S3 buckets and databases — allowing staging and production environments to securely access common resources.",
        tech: ["Python", "AWS IAM", "AWS S3", "boto3"],
        type: "Cloud / Security",
      },
      {
        name: "Google OAuth — Mobile App",
        description:
          "Integrated Google OAuth login flow into the React Native mobile app — built the Google auth interface, handled redirect-to-web auth, and wired up the SSO login for all districts.",
        tech: ["React Native", "TypeScript", "Google OAuth", "Expo"],
        type: "Mobile / Auth",
      },
      {
        name: "iOS UI Fixes & CI/CD Automation",
        description:
          "Fixed multiple iOS-specific UI regressions (borders, separators, aspect ratio for video player). Automated the app build pipeline using AWS CodeBuild, added GitHub Actions workflows, and managed build props for iOS/Android.",
        tech: ["React Native", "TypeScript", "AWS CodeBuild", "GitHub Actions", "Expo"],
        type: "Mobile / DevOps",
      },
    ],
  },
  {
    id: "dattam",
    name: "Dattam",
    domain: "Company Intelligence Tool",
    period: "Own startup",
    color: "from-violet-600 to-purple-700",
    accent: "#7c3aed",
    projects: [
      {
        name: "Geo-Matching Engine",
        description:
          "Built a high-performance location matching system using Shapely and pyproj — polygon buffer calculations to match companies to geographic areas, with geo-coding integration to validate and enrich address data before spatial matching.",
        tech: ["Python", "Shapely", "pyproj", "Geo-coding API", "FastAPI"],
        type: "Geospatial / Backend",
        highlight: true,
      },
      {
        name: "Key People Data Feature",
        description:
          "End-to-end feature: API to fetch and display key people (executives/contacts) for each company, integrated Rocketreach for enrichment, built a table UI with inline editing, and wired up the full data pipeline from scrape to display.",
        tech: ["TypeScript", "Python", "FastAPI", "Rocketreach API", "Next.js"],
        type: "Full-Stack Feature",
        highlight: true,
      },
      {
        name: "Import Tool with Batch Filters",
        description:
          "Built the data import pipeline — CSV/LinkedIn data ingestion, dynamic batch tagging, batch-based filters in the UI, parallel processing with a Task API, and a secondary progress bar for import status tracking.",
        tech: ["TypeScript", "Python", "FastAPI", "Next.js", "Task queue"],
        type: "Full-Stack / Data",
        highlight: true,
      },
      {
        name: "Manual Data Editing",
        description:
          "Added inline record editing across the company research UI — edit icons, edit state management, API endpoints for updating records, and confidence-score-based URL validation.",
        tech: ["TypeScript", "Python", "Next.js", "FastAPI"],
        type: "Full-Stack Feature",
      },
      {
        name: "Summarize-Index Lambda",
        description:
          "Built an AWS Lambda function for batch summarization and indexing of company data — used for processing imported LinkedIn data and enriching records at scale.",
        tech: ["Python", "AWS Lambda", "FastAPI"],
        type: "Cloud / Data",
      },
      {
        name: "Grafana Dashboard Embedding",
        description:
          "Built a React app that embeds authenticated Grafana dashboards via iframe — configured metadata API integration, hardcoded filters for internal analytics views.",
        tech: ["React", "JavaScript", "Grafana", "iframe auth"],
        type: "Data Visualization",
      },
      {
        name: "AP Government RAG",
        description:
          "Scraped Andhra Pradesh Government Order data and built an initial RAG (Retrieval Augmented Generation) pipeline for querying government documents.",
        tech: ["Python", "RAG", "Data scraping"],
        type: "AI / Data",
      },
    ],
  },
  {
    id: "ceew",
    name: "CEEW",
    domain: "Climate Tech",
    period: "Part of 15 months",
    color: "from-green-600 to-teal-700",
    accent: "#059669",
    projects: [
      {
        name: "Web Search Tool — CR Atlas AI",
        description:
          "Added a web search tool to the CR Atlas AI agent — built a root agent that coordinates web search results and summarizes them in context. Contributed the UI updates to surface web-search responses alongside climate data.",
        tech: ["Python", "Google Gemini", "AI Agent", "FastAPI", "TypeScript"],
        type: "AI / Feature",
        highlight: true,
      },
      {
        name: "Translation Pipeline — KMS",
        description:
          "Split the translation layer in the Knowledge Management System into separate Gemini-based and Google Translate-based paths — built indexing scripts for publications metadata, and updated the Translate UI with notifications.",
        tech: ["Python", "Google Gemini", "Google Translate API", "TypeScript", "Next.js"],
        type: "AI / Full-Stack",
        highlight: true,
      },
      {
        name: "Dynamic Binning — CR Atlas UI",
        description:
          "Implemented dynamic data binning in the CR Atlas frontend for rendering climate metric ranges on the map layer.",
        tech: ["TypeScript", "Next.js", "Data visualization"],
        type: "Frontend / Feature",
      },
    ],
  },
];

export const navItems = [
  { label: "Home", href: "/", icon: "Home" },
  { label: "About", href: "/about", icon: "User" },
  { label: "Skills", href: "/skills", icon: "Wrench" },
  { label: "Projects", href: "/projects", icon: "FolderOpen" },
  { label: "Contact", href: "/contact", icon: "Mail" },
];
