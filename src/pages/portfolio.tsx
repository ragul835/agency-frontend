import { Link } from "wouter";
import { useState, useEffect, useMemo, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Clock,
  Users,
  Cpu,
  ShoppingCart,
  Palette,
  Shield,
  Layers,
  Globe,
  BarChart3,
  TrendingUp,
  Search,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiSpringboot,
  SiPython,
  SiFastapi,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiVercel,
  SiGithub,
  SiDocker,
  SiJavascript,
  SiStripe,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/layout/Container";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { GradientButton } from "@/components/shared/GradientButton";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

/* ─── Types ─── */
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  result: string;
  resultLabel: string;
  metrics: { label: string; value: string }[];
  duration: string;
  teamSize: string;
  year: string;
  image: string;
  coverGradient: string;
  accentColor: string;
  bgAccent: string;
  icon: LucideIcon;
  featured: boolean;
}

/* ─── Case Studies Data ─── */
const caseStudies: CaseStudy[] = [
  {
    id: "nexus-crm-saas",
    title: "Nexus — B2B CRM for Real Estate",
    client: "Real Estate SaaS Startup",
    industry: "Real Estate",
    category: "SaaS Platform",
    tags: ["Next.js", "NestJS", "PostgreSQL", "AWS", "OpenAI", "Stripe", "Redis", "Docker"],
    description:
      "A CRM for real-estate teams with lead scoring, pipeline tracking, live updates, and subscription billing. Replaced six spreadsheets used by agents.",
    challenge:
      "Agents tracked deals across six different spreadsheets. Managers had no clear view of the pipeline, and deals were getting lost.",
    solution:
      "We built a shared CRM so every agent works in one place, with lead scores, live updates, and Stripe billing for the product plans.",
    result: "1 place",
    resultLabel: "For All Deals",
    metrics: [
      { label: "Spreadsheets Replaced", value: "6 → 1" },
      { label: "Agent Setup Time", value: "2 days → 4 hrs" },
      { label: "Live Updates", value: "Yes" },
    ],
    duration: "10 weeks",
    teamSize: "4 engineers",
    year: "2025",
    image: "/portfolio/nexus-crm.jpg?v=2",
    coverGradient: "from-blue-600/25 via-indigo-500/15 to-violet-500/5",
    accentColor: "text-blue-400",
    bgAccent: "bg-blue-500/10",
    icon: Cpu,
    featured: true,
  },
  {
    id: "nova-fashion-ecom",
    title: "Nova — Fashion Online Store",
    client: "Apparel Brand",
    industry: "Fashion",
    category: "E-Commerce",
    tags: ["Next.js 14", "TypeScript", "Stripe", "PostgreSQL", "Vercel", "Framer Motion", "Cloudinary"],
    description:
      "A custom online store for a clothing brand — product pages, checkout, wishlists, and live stock. Built and launched in 7 weeks.",
    challenge:
      "The brand’s Shopify setup felt limited. Mobile buyers were dropping out of checkout, and the site didn’t match the brand quality they wanted.",
    solution:
      "We built a custom Next.js store with Stripe checkout, live inventory, and fast product images so pages load quickly on mobile.",
    result: "Faster",
    resultLabel: "Mobile Checkout",
    metrics: [
      { label: "Cart Drop-off", value: "Lower after launch" },
      { label: "Page Load (LCP)", value: "Under 2s" },
      { label: "Build Time", value: "7 weeks" },
    ],
    duration: "7 weeks",
    teamSize: "3 engineers",
    year: "2025",
    image: "/portfolio/nova-fashion.jpg?v=2",
    coverGradient: "from-pink-600/25 via-rose-500/15 to-orange-500/5",
    accentColor: "text-pink-400",
    bgAccent: "bg-pink-500/10",
    icon: ShoppingCart,
    featured: true,
  },
  {
    id: "pulse-fintech-redesign",
    title: "Pulse — Payments App Redesign",
    client: "Payments Startup",
    industry: "FinTech",
    category: "UI/UX Design",
    tags: ["Figma", "React Native Web", "TypeScript", "Framer Motion", "Lottie"],
    description:
      "Full redesign of a UPI and wallet app — research, Figma screens, simple animations, and clean handoff for the product team.",
    challenge:
      "Many users left during KYC signup. Research showed the flow felt hard to trust and too long.",
    solution:
      "We tested with real users, cut onboarding to three clear steps, added live checks, and made success states easier to understand.",
    result: "3 steps",
    resultLabel: "KYC Signup Flow",
    metrics: [
      { label: "Screens Designed", value: "140+" },
      { label: "User Test Rounds", value: "3" },
      { label: "Delivery Time", value: "8 weeks" },
    ],
    duration: "8 weeks",
    teamSize: "2 designers + 2 engineers",
    year: "2024",
    image: "/portfolio/pulse-fintech.jpg?v=2",
    coverGradient: "from-emerald-600/25 via-teal-500/15 to-cyan-500/5",
    accentColor: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
    icon: Palette,
    featured: true,
  },
  {
    id: "medbook-healthcare",
    title: "MedBook — Doctor Booking Platform",
    client: "Hospital Chain",
    industry: "Healthcare",
    category: "Web Development",
    tags: ["Next.js", "NestJS", "PostgreSQL", "AWS SES", "Twilio", "Docker"],
    description:
      "A patient portal to book appointments, join video calls, and get digital prescriptions across multiple specialities.",
    challenge:
      "Booking only worked by phone. Many patients missed appointments, and wait times to reach staff were long.",
    solution:
      "We built a self-serve booking site with slot picking, SMS and email reminders, calendar sync, and a doctor admin panel.",
    result: "Self-serve",
    resultLabel: "Online Booking",
    metrics: [
      { label: "Specialities Covered", value: "12" },
      { label: "Reminders", value: "SMS + Email" },
      { label: "Delivery Time", value: "9 weeks" },
    ],
    duration: "9 weeks",
    teamSize: "3 engineers",
    year: "2025",
    image: "/portfolio/medbook-healthcare.jpg?v=2",
    coverGradient: "from-cyan-600/25 via-sky-500/15 to-blue-500/5",
    accentColor: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    icon: Shield,
    featured: false,
  },
  {
    id: "gaia-restaurant-saas",
    title: "Gaia POS — Restaurant Software",
    client: "QSR Chain (6 Outlets)",
    industry: "Food & Beverage",
    category: "SaaS Platform",
    tags: ["React", "FastAPI", "PostgreSQL", "Redis", "Docker", "Razorpay"],
    description:
      "POS, stock tracking, and staff tools for a 6-outlet restaurant chain — replacing paper tickets and manual stock counts.",
    challenge:
      "Stock was tracked by hand, food waste was high, and managers could not see all outlets in one place.",
    solution:
      "We shipped live stock tracking, kitchen display screens, payments, and a simple dashboard for each outlet.",
    result: "6 outlets",
    resultLabel: "On One System",
    metrics: [
      { label: "Paper KOTs", value: "Removed" },
      { label: "Stock Tracking", value: "Live" },
      { label: "Outlets Live", value: "6 / 6" },
    ],
    duration: "12 weeks",
    teamSize: "4 engineers",
    year: "2024",
    image: "/portfolio/gaia-pos.jpg?v=2",
    coverGradient: "from-orange-600/25 via-amber-500/15 to-yellow-500/5",
    accentColor: "text-orange-400",
    bgAccent: "bg-orange-500/10",
    icon: Layers,
    featured: false,
  },
  {
    id: "apex-corporate-site",
    title: "Apex — Law Firm Website",
    client: "Law Firm",
    industry: "Legal Services",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Framer Motion", "Vercel"],
    description:
      "A clean website for a large law firm — practice pages, lawyer profiles, blog, and support for English, Hindi, and Tamil.",
    challenge:
      "Their old WordPress site scored 38 on Lighthouse and made them look outdated next to competitors.",
    solution:
      "We rebuilt the site on Next.js with a CMS for content, better SEO structure, and a 99 Lighthouse score.",
    result: "38 → 99",
    resultLabel: "Lighthouse Score",
    metrics: [
      { label: "Languages", value: "EN / HI / TA" },
      { label: "CMS Powered", value: "Yes" },
      { label: "Delivery Time", value: "6 weeks" },
    ],
    duration: "6 weeks",
    teamSize: "2 engineers",
    year: "2025",
    image: "/portfolio/apex-law.jpg?v=2",
    coverGradient: "from-violet-600/25 via-purple-500/15 to-fuchsia-500/5",
    accentColor: "text-violet-400",
    bgAccent: "bg-violet-500/10",
    icon: Globe,
    featured: false,
  },
  {
    id: "orbit-saas-analytics",
    title: "Orbit — Analytics & Billing",
    client: "EdTech Platform",
    industry: "Education",
    category: "SaaS Platform",
    tags: ["React", "Node.js", "PostgreSQL", "ClickHouse", "Stripe", "AWS Lambda"],
    description:
      "Analytics and billing tools for an EdTech product — user trends, churn signals, and failed payment follow-ups via Stripe.",
    challenge:
      "The team had little insight into who left, why, or how to recover failed payments.",
    solution:
      "We added clear dashboards for usage and churn, plus automatic emails when payments fail.",
    result: "Live",
    resultLabel: "Usage Dashboards",
    metrics: [
      { label: "Billing", value: "Stripe" },
      { label: "Failed Payment Alerts", value: "Automatic" },
      { label: "Delivery Time", value: "11 weeks" },
    ],
    duration: "11 weeks",
    teamSize: "3 engineers",
    year: "2025",
    image: "/portfolio/orbit-analytics.jpg?v=2",
    coverGradient: "from-indigo-600/25 via-blue-500/15 to-sky-500/5",
    accentColor: "text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    icon: BarChart3,
    featured: false,
  },
  {
    id: "forge-b2b-marketplace",
    title: "Forge — B2B Marketplace",
    client: "Steel & Alloy Distributor",
    industry: "Manufacturing",
    category: "E-Commerce",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3", "Redis"],
    description:
      "A B2B marketplace for industrial goods — bulk orders, quotes, invoices, and vendor signup.",
    challenge:
      "Quotes took 3–5 days by hand. Buyers often switched to sellers who could reply the same day.",
    solution:
      "We built a quote tool that applies pricing rules, creates a PDF in seconds, and sends it by email and WhatsApp.",
    result: "3 days → 9 min",
    resultLabel: "Quote Time",
    metrics: [
      { label: "Quote PDF", value: "Auto-generated" },
      { label: "Sent Via", value: "Email + WhatsApp" },
      { label: "Delivery Time", value: "13 weeks" },
    ],
    duration: "13 weeks",
    teamSize: "4 engineers",
    year: "2024",
    image: "/portfolio/forge-marketplace.jpg?v=2",
    coverGradient: "from-slate-600/25 via-zinc-500/15 to-stone-500/5",
    accentColor: "text-slate-400",
    bgAccent: "bg-slate-500/10",
    icon: TrendingUp,
    featured: false,
  },
  {
    id: "beacon-seo-saas",
    title: "Beacon — SEO Growth Project",
    client: "Developer Tools Company",
    industry: "Dev Tools",
    category: "SEO",
    tags: ["Next.js", "Schema.org", "Google Search Console", "Ahrefs", "Core Web Vitals"],
    description:
      "SEO and content structure work for a developer tools product — better page setup, technical fixes, and long-tail pages.",
    challenge:
      "They published often for months, but organic traffic had stopped growing.",
    solution:
      "We fixed technical issues, reorganized content around clear topics, and improved page speed and search markup.",
    result: "Clearer",
    resultLabel: "Site Structure",
    metrics: [
      { label: "Pages Reviewed", value: "120+" },
      { label: "Core Web Vitals", value: "Improved" },
      { label: "Delivery Time", value: "8 weeks" },
    ],
    duration: "8 weeks",
    teamSize: "2 engineers + 1 SEO strategist",
    year: "2025",
    image: "/portfolio/beacon-seo.jpg?v=2",
    coverGradient: "from-yellow-600/25 via-lime-500/15 to-green-500/5",
    accentColor: "text-yellow-400",
    bgAccent: "bg-yellow-500/10",
    icon: Search,
    featured: false,
  },
  {
    id: "thread-learning-platform",
    title: "Thread — Learning Platform",
    client: "UPSC Coaching Institute",
    industry: "EdTech",
    category: "Web Development",
    tags: ["Next.js", "NestJS", "PostgreSQL", "FFmpeg", "AWS S3", "WebSockets"],
    description:
      "A learning platform with video classes, mock tests, live doubt chat, and study groups for coaching students.",
    challenge:
      "Zoom and spreadsheets needed too much staff time for attendance, tests, and doubts — with little personal help for students.",
    solution:
      "We built one platform for classes, tests, live chat, and a simple help assistant trained on their syllabus.",
    result: "One app",
    resultLabel: "For Classes + Tests",
    metrics: [
      { label: "Video Classes", value: "Supported" },
      { label: "Mock Tests", value: "Built-in" },
      { label: "Delivery Time", value: "14 weeks" },
    ],
    duration: "14 weeks",
    teamSize: "5 engineers",
    year: "2025",
    image: "/portfolio/thread-lms.jpg?v=2",
    coverGradient: "from-rose-600/25 via-pink-500/15 to-fuchsia-500/5",
    accentColor: "text-rose-400",
    bgAccent: "bg-rose-500/10",
    icon: Users,
    featured: false,
  },
  {
    id: "flux-logistics-dashboard",
    title: "Flux — Delivery Tracking Dashboard",
    client: "Last-Mile Delivery Startup",
    industry: "Logistics",
    category: "SaaS Platform",
    tags: ["React", "FastAPI", "PostgreSQL", "Redis Streams", "Google Maps API", "Docker", "AWS"],
    description:
      "Live tracking and dispatch tools for a delivery network — maps, auto assignment, and late-delivery alerts.",
    challenge:
      "Dispatchers called riders by phone. Many deliveries missed SLA, and follow-up was hard to manage.",
    solution:
      "We built live GPS updates, auto rider matching, SLA timers, and alerts when a delivery is at risk.",
    result: "Live map",
    resultLabel: "Fleet Tracking",
    metrics: [
      { label: "Rider Matching", value: "Automatic" },
      { label: "SLA Alerts", value: "Built-in" },
      { label: "Delivery Time", value: "10 weeks" },
    ],
    duration: "10 weeks",
    teamSize: "4 engineers",
    year: "2024",
    image: "/portfolio/flux-logistics.jpg?v=2",
    coverGradient: "from-green-600/25 via-emerald-500/15 to-teal-500/5",
    accentColor: "text-green-400",
    bgAccent: "bg-green-500/10",
    icon: Zap,
    featured: false,
  },
  {
    id: "prism-uiux-saas",
    title: "Prism — Dashboard Design System",
    client: "HR Analytics Startup",
    industry: "HR Tech",
    category: "UI/UX Design",
    tags: ["Figma", "React", "TypeScript", "Recharts", "Storybook", "Framer Motion"],
    description:
      "A shared UI kit and React build for an HR product — 14 dashboard screens, charts, and dark/light themes.",
    challenge:
      "Design and engineering rebuilt screens from scratch each time, so every new dashboard took about 6 weeks.",
    solution:
      "We made a shared Figma system and matching React components, so new screens reuse the same parts.",
    result: "Faster",
    resultLabel: "Screen Delivery",
    metrics: [
      { label: "Components Built", value: "60+" },
      { label: "Dashboard Screens", value: "14" },
      { label: "Themes", value: "Light + Dark" },
    ],
    duration: "9 weeks",
    teamSize: "2 designers + 2 engineers",
    year: "2025",
    image: "/portfolio/prism-design.jpg?v=2",
    coverGradient: "from-fuchsia-600/25 via-violet-500/15 to-purple-500/5",
    accentColor: "text-fuchsia-400",
    bgAccent: "bg-fuchsia-500/10",
    icon: Palette,
    featured: false,
  },
];

const CATEGORIES = [
  "All",
  "Web Development",
  "SaaS Platform",
  "E-Commerce",
  "UI/UX Design",
  "SEO",
] as const;

const techCategories = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React.js", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Framer Motion", Icon: SiFramer },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "NestJS", Icon: SiNestjs },
      { name: "Java", Icon: FaJava },
      { name: "Spring Boot", Icon: SiSpringboot },
      { name: "Python", Icon: SiPython },
      { name: "FastAPI", Icon: SiFastapi },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      { name: "MongoDB", Icon: SiMongodb },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", Icon: FaAws },
      { name: "Vercel", Icon: SiVercel },
      { name: "Docker", Icon: SiDocker },
      { name: "GitHub", Icon: SiGithub },
      { name: "Stripe", Icon: SiStripe },
    ],
  },
];

/* ─── Hero ─── */
function HeroSection() {
  const scrollToCaseStudies = () => {
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-5%,hsl(var(--primary)/0.18),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Orbs */}
      <div className="absolute top-1/4 -left-40 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-[140px] pointer-events-none -z-10 animate-orb-drift" />
      <div className="absolute bottom-1/4 -right-40 w-[28rem] h-[28rem] rounded-full bg-secondary/10 blur-[140px] pointer-events-none -z-10 animate-orb-drift delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-500/5 blur-[180px] pointer-events-none -z-10" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 bg-card/30 text-xs text-muted-foreground mb-8 backdrop-blur-sm">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" aria-hidden="true" />
          <span className="text-foreground font-medium">Portfolio</span>
        </div>

        {/* Badge */}
        <div className="mb-8 relative inline-flex group cursor-default animate-fade-in">
          <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-gradient-to-r from-primary via-blue-400 to-secondary rounded-full blur-lg group-hover:opacity-70" />
          <div className="relative inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold text-foreground bg-card border border-border/50 rounded-full uppercase tracking-widest backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" aria-hidden="true" />
            Portfolio · Selected Case Studies
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-heading font-extrabold tracking-tighter leading-[1.04] mb-6 max-w-4xl">
          <span className="text-foreground">From First Call</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent animate-gradient">
            to Live Product.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-4 mx-auto">
          We've built CRMs, stores, SaaS tools, and design systems for founders who needed more than a vendor —
          they needed a team that cares about the outcome as much as they do.
        </p>

        {/* Sub-note */}
        <p className="text-sm text-muted-foreground/60 mb-10 italic">
          Each project below shows the real problem, what we built, and what changed after launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <GradientButton href="/contact#contact-form" className="w-full sm:w-auto px-9 py-4 text-sm font-semibold rounded-xl">
            Let's Build Together <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </GradientButton>
          <button
            type="button"
            onClick={scrollToCaseStudies}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-sm font-semibold rounded-xl border border-border/60 bg-card/40 hover:bg-card/80 hover:border-primary/30 text-foreground transition-all cursor-pointer"
          >
            See the Work <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}

/* ─── Shared metric + footer blocks ─── */
function MetricRow({
  metrics,
  accentColor,
  compact = false,
}: {
  metrics: { label: string; value: string }[];
  accentColor: string;
  compact?: boolean;
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {metrics.map((m) => (
        <div
          key={m.label}
          className={`rounded-xl bg-muted/40 border border-border/40 text-center flex flex-col items-center justify-center ${
            compact ? "p-2.5 min-h-[4.25rem]" : "p-3 min-h-[4.75rem]"
          }`}
        >
          <div
            className={`font-heading font-black ${accentColor} mb-0.5 leading-tight break-words ${
              compact ? "text-xs" : "text-sm"
            }`}
          >
            {m.value}
          </div>
          <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground leading-tight line-clamp-2">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function CardFooter({ cs }: { cs: CaseStudy }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mt-auto pt-4 border-t border-border/30 text-[10px] text-muted-foreground">
      <span className="inline-flex items-center gap-1 shrink-0">
        <Clock className="w-3 h-3 shrink-0" aria-hidden="true" />
        <span>{cs.duration}</span>
      </span>
      <span className="inline-flex items-center gap-1 min-w-0">
        <Users className="w-3 h-3 shrink-0" aria-hidden="true" />
        <span className="truncate">{cs.teamSize}</span>
      </span>
      <span className="ml-auto font-semibold text-foreground/40 shrink-0 tabular-nums">{cs.year}</span>
    </div>
  );
}

function FeaturedCard({ cs }: { cs: CaseStudy }) {
  const Icon = cs.icon;
  return (
    <div
      data-testid={`card-cs-${cs.id}`}
      className="premium-card overflow-hidden group flex flex-col md:flex-row h-full min-h-0"
    >
      {/* Image panel */}
      <div className="relative w-full md:w-[42%] md:min-w-[280px] h-52 sm:h-60 md:h-auto md:min-h-[320px] shrink-0 overflow-hidden">
        <img
          src={cs.image}
          alt={`${cs.title} project preview`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
        <div className="absolute top-3 left-3 right-3 z-10 flex items-start justify-between gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/50 text-white border border-white/20">
            {cs.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/50 text-white/90 border border-white/20">
            {cs.industry}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
          <div className="text-4xl sm:text-5xl font-heading font-black text-white drop-shadow-md leading-none mb-1">
            {cs.result}
          </div>
          <div className="text-xs sm:text-sm font-semibold text-white/85 uppercase tracking-widest">
            {cs.resultLabel}
          </div>
        </div>
      </div>

      {/* Content panel */}
      <div className="flex-1 min-w-0 p-5 sm:p-6 md:p-7 flex flex-col">
        <div className="flex items-center gap-2 mb-1.5 min-w-0">
          <Icon className={`w-4 h-4 shrink-0 ${cs.accentColor}`} aria-hidden="true" />
          <span className="text-xs text-muted-foreground font-medium truncate">{cs.client}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2 leading-snug">
          {cs.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {cs.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          <div className="rounded-xl bg-muted/40 border border-border/40 p-3 h-full">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
              Challenge
            </div>
            <p className="text-xs text-foreground leading-relaxed line-clamp-4">{cs.challenge}</p>
          </div>
          <div className="rounded-xl bg-muted/40 border border-border/40 p-3 h-full">
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
              Solution
            </div>
            <p className="text-xs text-foreground leading-relaxed line-clamp-4">{cs.solution}</p>
          </div>
        </div>

        <div className="mb-4">
          <MetricRow metrics={cs.metrics} accentColor={cs.accentColor} />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {cs.tags.slice(0, 8).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-card border border-border/60 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <CardFooter cs={cs} />
      </div>
    </div>
  );
}

function RegularCard({ cs }: { cs: CaseStudy }) {
  const Icon = cs.icon;
  return (
    <div
      data-testid={`card-cs-${cs.id}`}
      className="premium-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-44 sm:h-48 shrink-0 overflow-hidden">
        <img
          src={cs.image}
          alt={`${cs.title} project preview`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
        <div className="absolute top-3 left-3 right-3 z-10 flex items-start justify-between gap-2">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/50 text-white border border-white/20">
            {cs.category}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md bg-black/50 text-white/90 border border-white/20 max-w-[45%] truncate">
            {cs.industry}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
          <div className="text-2xl sm:text-3xl font-heading font-black text-white drop-shadow-md leading-none">
            {cs.result}
          </div>
          <div className="text-[10px] font-semibold text-white/85 uppercase tracking-widest mt-1">
            {cs.resultLabel}
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1 min-h-0">
        <div className="flex items-center gap-2 mb-1.5 min-w-0">
          <Icon className={`w-4 h-4 shrink-0 ${cs.accentColor}`} aria-hidden="true" />
          <span className="text-xs text-muted-foreground truncate">{cs.client}</span>
        </div>
        <h3 className="text-base font-heading font-bold text-foreground mb-2 leading-snug line-clamp-2 min-h-[2.5rem]">
          {cs.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
          {cs.description}
        </p>

        <div className="mb-4">
          <MetricRow metrics={cs.metrics} accentColor={cs.accentColor} compact />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4 max-h-[3.25rem] overflow-hidden">
          {cs.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-card border border-border/60 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <CardFooter cs={cs} />
      </div>
    </div>
  );
}

/* ─── Case Studies Filter + Grid ─── */
function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? caseStudies
        : caseStudies.filter((cs) => cs.category === activeCategory),
    [activeCategory]
  );

  const featured = useMemo(
    () => filtered.filter((cs) => cs.featured && activeCategory === "All"),
    [filtered, activeCategory]
  );
  const regular = useMemo(
    () =>
      activeCategory === "All"
        ? filtered.filter((cs) => !cs.featured)
        : filtered,
    [filtered, activeCategory]
  );

  return (
    <section id="case-studies" className="py-20 md:py-28 relative scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground mb-3">
              Selected Client Work
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A look at what we built, the problem we solved, and the results after launch.
            </p>
          </div>
        </AnimateOnScroll>

        <div
          className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-pressed={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full border text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                    : "border-border/50 bg-card/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured — full width, stacked cleanly */}
        {featured.length > 0 && (
          <div className="flex flex-col gap-5 mb-5">
            <AnimatePresence mode="popLayout">
              {featured.map((cs) => (
                <motion.div
                  key={cs.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <FeaturedCard cs={cs} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Regular grid — equal columns */}
        {regular.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
            <AnimatePresence mode="popLayout">
              {regular.map((cs) => (
                <motion.div
                  key={cs.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="h-full min-h-0"
                >
                  <RegularCard cs={cs} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">
            No projects in this category yet.
          </p>
        )}
      </Container>
    </section>
  );
}

/* ─── Technologies ─── */
function TechnologiesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              Tools We Use
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground mb-3">
              Tech We Build With
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Proven tools we use for speed, reliability, and easy maintenance.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8 md:mb-10 p-0">
              {techCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="px-4 sm:px-5 py-2 rounded-full border border-border/50 bg-card/30 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary transition-all text-sm font-medium"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {techCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
                  {cat.items.map((tech) => {
                    const TechIcon = tech.Icon as ComponentType<{ className?: string }>;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-border/50 bg-card/40 backdrop-blur-md hover:border-primary/40 hover:bg-primary/5 transition-all group cursor-default"
                      >
                        <TechIcon
                          className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm font-medium text-foreground whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <AnimateOnScroll>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-7">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground mb-5 max-w-3xl mx-auto leading-[1.1]">
            Have a Project{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              In Mind?
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-9 max-w-xl mx-auto leading-relaxed">
            Tell us what you need. We usually reply within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <GradientButton href="/contact#contact-form" className="w-full sm:w-auto px-10 py-4 text-base font-semibold">
              Start Your Project <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </GradientButton>
            <a
              href="mailto:ragulsiva@zohomail.in"
              className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
            >
              or email ragulsiva@zohomail.in →
            </a>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

/* ─── Page ─── */
export default function PortfolioPage() {
  useDocumentTitle(
    "Portfolio | Seichox — Client Projects",
    "See websites, apps, and software Seichox built for clients — web, SaaS, and e-commerce."
  );

  return (
    <div className="w-full flex flex-col">
      <HeroSection />

      <CaseStudiesSection />
      <TechnologiesSection />
      <CTASection />
    </div>
  );
}
