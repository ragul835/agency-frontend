import { Link } from "wouter";
import { useRef, useState, useEffect } from "react";
import {
  Code2, ShoppingCart, Layers, Palette, Search, ShoppingBag,
  ArrowRight, CheckCircle, Shield, Cpu, Zap, Plus, Minus, Smartphone, Target, TrendingUp, Globe, Users
} from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiSpringboot, SiPython, SiFastapi, SiNestjs,
  SiPostgresql, SiMysql, SiMongodb,
  SiVercel, SiGit, SiGithub, SiFigma, SiGooglecloud, SiDocker,
  SiHtml5, SiJavascript, SiStripe
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimateOnScroll, AnimatedItem } from "@/components/shared/AnimateOnScroll";
import { GradientButton } from "@/components/shared/GradientButton";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites engineered for performance, responsiveness, SEO, and business growth.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "Scalable online stores designed to improve customer experience and increase conversions.",
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Modern frontend and backend systems built for scalability, maintainability, and security.",
  },
  {
    icon: Zap,
    title: "SaaS Development",
    description: "Subscription-based software platforms designed to support long-term growth and business operations.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-focused digital experiences that improve engagement, usability, and conversions.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Technical and on-page optimization strategies that improve visibility and search rankings.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description: "Custom Shopify stores, theme customization, integrations, and performance optimization.",
  },
  {
    icon: Cpu,
    title: "E-Commerce Optimization",
    description: "Performance improvements, Core Web Vitals optimization, conversion enhancements, and speed optimization.",
  },
];

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
      { name: "shadcn/ui", Icon: Code2 },
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
      { name: "REST APIs", Icon: Code2 },
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
    label: "Cloud",
    items: [
      { name: "Vercel", Icon: SiVercel },
      { name: "Render", Icon: SiGooglecloud },
      { name: "Railway", Icon: SiDocker },
      { name: "Neon", Icon: SiPostgresql },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Postman", Icon: Search },
      { name: "Prisma ORM", Icon: Code2 },
      { name: "VS Code", Icon: Code2 },
      { name: "Figma", Icon: SiFigma },
    ],
  },
];


function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-24 flex flex-col items-center text-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Massive glow */}
        <div
          className="absolute top-[10%] w-[800px] h-[800px] rounded-full opacity-[0.15] blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 w-[1000px] h-[400px] rounded-[100%] opacity-10 blur-3xl"
          style={{ background: "radial-gradient(ellipse at bottom, hsl(270 81% 60%) 0%, transparent 70%)" }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,hsl(var(--foreground)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.2)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_80%,transparent_100%)]" />

        {/* Floating Icons */}
        <div
          className="absolute top-[15%] left-[5%] md:left-[15%] text-primary/20 blur-[2px]"
        >
          <SiReact className="w-16 h-16 md:w-24 md:h-24" />
        </div>
        <div
          className="absolute bottom-[20%] right-[5%] md:right-[15%] text-blue-500/20 blur-[2px]"
        >
          <SiNextdotjs className="w-20 h-20 md:w-32 md:h-32" />
        </div>
        <div
          className="absolute top-[35%] right-[10%] md:right-[20%] text-indigo-500/20 blur-[1px]"
        >
          <SiTypescript className="w-12 h-12 md:w-20 md:h-20" />
        </div>
        <div
          className="absolute bottom-[25%] left-[10%] md:left-[25%] text-purple-500/20 blur-[1px]"
        >
          <SiTailwindcss className="w-14 h-14 md:w-20 md:h-20" />
        </div>
        <div
          className="absolute top-[10%] right-[35%] text-red-500/15 blur-[2px]"
        >
          <FaJava className="w-16 h-16 md:w-24 md:h-24" />
        </div>
        <div
          className="absolute bottom-[10%] right-[40%] text-green-500/15 blur-[2px]"
        >
          <SiSpringboot className="w-20 h-20 md:w-28 md:h-28" />
        </div>
        <div
          className="absolute top-[40%] left-[30%] text-blue-400/15 blur-[3px]"
        >
          <SiPostgresql className="w-16 h-16 md:w-24 md:h-24" />
        </div>
        
        {/* Additional Hero Icons */}
        <div
          className="absolute top-[25%] left-[45%] text-green-600/15 blur-[2px]"
        >
          <SiNodedotjs className="w-14 h-14 md:w-20 md:h-20" />
        </div>
        <div
          className="absolute bottom-[35%] right-[25%] text-blue-500/15 blur-[1px]"
        >
          <SiPython className="w-16 h-16 md:w-24 md:h-24" />
        </div>
        <div
          className="absolute top-[5%] left-[25%] text-blue-600/15 blur-[2px]"
        >
          <SiMysql className="w-12 h-12 md:w-20 md:h-20" />
        </div>
        <div
          className="absolute bottom-[5%] left-[40%] text-pink-500/15 blur-[3px]"
        >
          <SiFigma className="w-16 h-16 md:w-24 md:h-24" />
        </div>
      </div>

      <Container className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
          Digital Solutions Partner
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tighter leading-[1.05] mb-8 text-foreground text-center"
        >
          <span className="relative block">
            We Build SaaS & Web Apps
          </span>
          <span className="relative bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mt-2">
            That Scale Without the Agency Runaround
            <span className="absolute -inset-x-4 -inset-y-2 bg-primary/20 blur-3xl opacity-0 animate-[pulse_4s_ease-in-out_infinite] mix-blend-screen -z-10" />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Modern websites, e-commerce platforms, SaaS products, and custom software — designed for performance, scalability, and growth.
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
        >
          <GradientButton href="/contact#contact-form" className="px-10 py-4 text-base font-semibold shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all">
            Start Your Project <ArrowRight className="w-5 h-5 ml-2 inline-block" />
          </GradientButton>
          <Link href="/services">
            <span className="px-10 py-4 text-base font-semibold rounded-full border border-border/50 bg-card/40 hover:bg-card/80 transition-all cursor-pointer">
              View Services
            </span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500 max-w-4xl mx-auto mt-6">
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Modern Technology Stack</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> SEO & Performance Focused</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Mobile-First Development</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Scalable Architecture</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Long-Term Support</span>
        </div>

      </Container>
    </section>
  );
}

function TrustedTechnologiesSection() {
  return (
    <section className="py-12 border-y border-border/40 bg-card/10">
      <Container>
        <AnimateOnScroll>
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale transition-all duration-500">
            <SiReact className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#61DAFB] transition-colors cursor-pointer" title="React" />
            <SiNextdotjs className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-black dark:hover:text-white transition-colors cursor-pointer" title="Next.js" />
            <SiNodedotjs className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#339933] transition-colors cursor-pointer" title="Node.js" />
            <SiNestjs className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#E0234E] transition-colors cursor-pointer" title="NestJS" />
            <FaJava className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#007396] transition-colors cursor-pointer" title="Java" />
            <SiSpringboot className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#6DB33F] transition-colors cursor-pointer" title="Spring Boot" />
            <SiPython className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#3776AB] transition-colors cursor-pointer" title="Python" />
            <SiFastapi className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#009688] transition-colors cursor-pointer" title="FastAPI" />
            <SiPostgresql className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#4169E1] transition-colors cursor-pointer" title="PostgreSQL" />
            <SiMysql className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#4479A1] transition-colors cursor-pointer" title="MySQL" />
            <SiMongodb className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#47A248] transition-colors cursor-pointer" title="MongoDB" />
            <SiGithub className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-black dark:hover:text-white transition-colors cursor-pointer" title="GitHub" />
            <SiDocker className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#2496ED] transition-colors cursor-pointer" title="Docker" />
            <FaAws className="w-8 h-8 md:w-10 md:h-10 hover:grayscale-0 hover:text-[#FF9900] transition-colors cursor-pointer" title="AWS" />
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

const whyChooseUs = [
  {
    icon: Target,
    title: "Business-Focused Development",
    description: "Every solution is aligned with your business objectives and growth goals.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built using modern engineering principles for long-term scalability.",
  },
  {
    icon: Shield,
    title: "Transparent Communication",
    description: "Clear timelines, regular updates, and complete project visibility.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "Using proven frameworks and industry best practices.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Fast-loading, SEO-friendly, and optimized digital experiences.",
  },
  {
    icon: CheckCircle,
    title: "Long-Term Support",
    description: "Reliable support and continuous improvements after launch.",
  },
];

function WhyChooseSection() {
  return (
    <section className="py-24 relative">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            title="Why Businesses Choose Us"
            subtitle=""
          />
        </AnimateOnScroll>

        <AnimateOnScroll stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <AnimatedItem key={i}>
                  <div className="p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-2xl h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

const processSteps = [
  { step: "01", title: "Discovery", description: "Understanding your business goals, requirements, and project vision." },
  { step: "02", title: "Planning", description: "Defining architecture, timelines, features, and roadmap." },
  { step: "03", title: "Design", description: "Creating user-focused experiences and modern interfaces." },
  { step: "04", title: "Development", description: "Building secure, scalable, and maintainable solutions." },
  { step: "05", title: "Testing", description: "Ensuring reliability, performance, and quality." },
  { step: "06", title: "Deployment", description: "Launching using modern cloud infrastructure." },
  { step: "07", title: "Support", description: "Providing ongoing maintenance and improvements." },
];

function DevelopmentProcessSection() {
  return (
    <section className="py-24 bg-card/5">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            title="Our Development Process"
            subtitle=""
          />
        </AnimateOnScroll>

        <AnimateOnScroll stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((process, i) => (
              <AnimatedItem key={i}>
                <div className="p-6 rounded-2xl border border-border/40 bg-card/30 relative">
                  <div className="text-4xl font-extrabold text-primary/10 mb-4">{process.step}</div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {process.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            title="Solutions Built Around Your Business Goals"
            subtitle=""
          />
        </AnimateOnScroll>

        <AnimateOnScroll stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <AnimatedItem key={service.title}>
                  <div
                    data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-2xl relative overflow-hidden cursor-default h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div 
                      className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section className="py-24">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            title="Built With Industry Standard Technologies"
            subtitle=""
          />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList
              className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-12 p-0"
              data-testid="tabs-techstack"
            >
              {techCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  data-testid={`tab-tech-${cat.id}`}
                  className="px-6 py-2.5 rounded-full border border-border/50 bg-card/30 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary transition-all text-sm font-medium"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {techCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div
                  className="flex flex-wrap justify-center gap-4"
                >
                  {cat.items.map((tech) => {
                    const TechIcon = tech.Icon;
                    return (
                      <div
                        key={tech.name}
                        data-testid={`badge-tech-${tech.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-border/50 bg-card/40 backdrop-blur-md hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.3)] transition-colors group cursor-default relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <TechIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                        <span className="text-sm font-medium text-foreground relative z-10">{tech.name}</span>
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



function ContactCTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(0 0% 98%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 70%)" }}
      />

      {/* Floating Icons */}
      <div
        className="absolute top-20 left-[10%] text-primary/30 blur-[1px]"
      >
        <Code2 className="w-16 h-16" />
      </div>
      <div
        className="absolute bottom-20 right-[15%] text-secondary/30 blur-[1px]"
      >
        <Zap className="w-20 h-20" />
      </div>
      <div
        className="absolute top-40 right-[25%] text-primary/20 blur-[2px]"
      >
        <Cpu className="w-12 h-12" />
      </div>

      <div
        className="absolute top-32 left-[25%] text-orange-500/20 blur-[1px]"
      >
        <FaAws className="w-16 h-16" />
      </div>
      <div
        className="absolute bottom-32 left-[15%] text-blue-400/20 blur-[2px]"
      >
        <SiGooglecloud className="w-20 h-20" />
      </div>
      <div
        className="absolute top-20 right-[15%] text-blue-600/20 blur-[1px]"
      >
        <SiDocker className="w-16 h-16" />
      </div>

      {/* Additional CTA Icons */}
      <div
        className="absolute bottom-10 right-[35%] text-red-600/20 blur-[2px]"
      >
        <SiNestjs className="w-14 h-14" />
      </div>
      <div
        className="absolute top-10 left-[40%] text-teal-500/20 blur-[2px]"
      >
        <SiFastapi className="w-16 h-16" />
      </div>
      <div
        className="absolute bottom-40 left-[5%] text-slate-500/20 blur-[1px]"
      >
        <SiGithub className="w-20 h-20" />
      </div>
      <div
        className="absolute top-32 right-[5%] text-white/20 blur-[2px]"
      >
        <SiVercel className="w-16 h-16" />
      </div>

      <Container className="relative z-10 text-center">
        <AnimateOnScroll>
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Let's work together
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Next Digital Product?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Let’s build something that works, scales, and drives results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GradientButton href="/contact#contact-form" className="px-12 py-4 text-base">
              Start Your Project
            </GradientButton>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Or email us directly at{" "}
            <a href="mailto:ragulsiva@zohomail.in" className="text-primary hover:underline">
              ragulsiva@zohomail.in
            </a>
          </p>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

/* ─── FAQ Section ─── */

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Pricing",
    question: "How much does a website cost?",
    answer: "Project pricing depends on requirements, features, and complexity.",
  },
  {
    category: "Process",
    question: "How long does development take?",
    answer: "Most projects are completed within 2–8 weeks depending on scope.",
  },
  {
    category: "Support",
    question: "Do you provide support after launch?",
    answer: "Yes. We provide maintenance, updates, and technical support.",
  },
  {
    category: "Services",
    question: "Can you redesign an existing website?",
    answer: "Absolutely. We modernize websites, improve performance, and enhance user experience.",
  },
  {
    category: "Services",
    question: "Do you provide SEO services?",
    answer: "Yes. Technical SEO and performance optimization are included in our workflow.",
  },
  {
    category: "Process",
    question: "What technologies do you use?",
    answer: "We specialize in modern stacks like React, Next.js, Node.js, TypeScript, and scalable cloud deployments to ensure top-tier performance and security.",
  },
  {
    category: "Services",
    question: "Do you build mobile apps?",
    answer: "We focus heavily on responsive web applications and Progressive Web Apps (PWAs) that work seamlessly and feel like native apps across all mobile devices.",
  },
  {
    category: "Pricing",
    question: "How are payments structured?",
    answer: "We typically structure payments around project milestones, starting with an initial deposit to begin work, followed by payments tied to specific deliverables.",
  },
  {
    category: "Support",
    question: "Will I own the source code?",
    answer: "Absolutely. Once the project is completed and fully paid, you retain 100% ownership of the custom source code and all related intellectual property.",
  }
];

const faqCategories = ["All", ...Array.from(new Set(faqData.map((f) => f.category)))];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <AnimatedItem>
      <div
        className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? "border-primary/40 bg-primary/[0.03] shadow-[0_0_30px_hsl(var(--primary)/0.08)]"
            : "border-border/50 bg-card/30 hover:border-border/80 hover:bg-card/50"
        }`}
      >
        <button
          onClick={onToggle}
          data-testid={`faq-toggle-${index}`}
          className="w-full flex items-start gap-4 p-6 md:p-7 text-left cursor-pointer"
        >
          <span
            className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              isOpen
                ? "bg-primary text-primary-foreground shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
                : "bg-muted/80 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex-1 min-w-0">
            <h3
              className={`text-base md:text-lg font-heading font-semibold transition-colors ${
                isOpen ? "text-foreground" : "text-foreground/90"
              }`}
            >
              {item.question}
            </h3>
          </div>

          <span
            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-primary/15 text-primary rotate-0"
                : "bg-muted/60 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
            }`}
          >
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </span>
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 md:px-7 pb-6 md:pb-7 pl-[4.25rem] md:pl-[4.75rem]">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedItem>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? faqData
      : faqData.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle=""
          />
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          {/* Category filter pills */}
          <AnimateOnScroll>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  data-testid={`faq-filter-${cat.toLowerCase()}`}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                      : "border border-border/50 bg-card/30 text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1.5 opacity-60">
                      ({faqData.filter((f) => f.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* FAQ items */}
          <AnimateOnScroll stagger>
            <div className="space-y-4">
              {filtered.map((item, i) => {
                const originalIndex = faqData.indexOf(item);
                return (
                  <FAQAccordionItem
                    key={item.question}
                    item={item}
                    index={originalIndex}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-24 bg-card/5">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <SectionHeader
              title="Your Technology Partner for Modern Business"
              subtitle=""
            />
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-3xl mx-auto">
              We build websites, e-commerce platforms, SaaS products, and custom software designed for performance, scalability, and long-term success.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

const businessOutcomes = [
  {
    icon: Globe,
    title: "Increase Online Visibility",
    description: "SEO-friendly digital experiences that improve discoverability and search performance.",
  },
  {
    icon: Users,
    title: "Improve Customer Engagement",
    description: "Modern user experiences that turn visitors into customers.",
  },
  {
    icon: Zap,
    title: "Streamline Operations",
    description: "Custom systems that automate workflows and improve efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Support Future Growth",
    description: "Scalable architecture designed to evolve with your business.",
  },
];

function BusinessOutcomesSection() {
  return (
    <section className="py-24 border-y border-border/40 bg-card/10">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            title="Technology Built Around Business Results"
            subtitle=""
          />
        </AnimateOnScroll>
        <AnimateOnScroll stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {businessOutcomes.map((outcome, i) => {
              const Icon = outcome.icon;
              return (
                <AnimatedItem key={i}>
                  <div className="p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-2xl h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      {outcome.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

export default function HomePage() {
  useDocumentTitle(
    "NexCore | Web Development & Software Solutions Agency",
    "NexCore designs, develops, and scales modern websites, web applications, e-commerce platforms, SaaS products, and custom software solutions that help businesses grow."
  );

  return (
    <main
    >
      <HeroSection />
      <TrustedTechnologiesSection />
      <AboutSection />
      <ServicesSection />
      <BusinessOutcomesSection />
      <WhyChooseSection />
      <DevelopmentProcessSection />
      <TechStackSection />

      <FAQSection />
      <ContactCTASection />
    </main>
  );
}
