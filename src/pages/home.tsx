import { Link } from "wouter";
import { useRef, useState, useEffect } from "react";
import {
  Code2, ShoppingCart, Layers, Palette, Search, ShoppingBag,
  ArrowRight, CheckCircle, Shield, Cpu, Zap, Plus, Minus
} from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiSpringboot, SiPython, SiFastapi, SiNestjs,
  SiPostgresql, SiMysql, SiMongodb,
  SiVercel, SiGit, SiGithub, SiFigma, SiGooglecloud, SiDocker,
  SiHtml5, SiJavascript, SiStripe
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimateOnScroll, AnimatedItem } from "@/components/shared/AnimateOnScroll";
import { GradientButton } from "@/components/shared/GradientButton";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web applications built with modern frameworks and battle-tested architectures.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "High-converting online stores with seamless payment flows and mobile-first design.",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Multi-tenant platforms and subscription systems built to scale from day one.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces that are as beautiful as they are intuitive — designed to convert.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Technical and on-page SEO that drives qualified traffic and measurable growth.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description: "Custom Shopify themes and apps that turn browsers into buyers.",
  },
];

const techCategories = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML5", Icon: SiHtml5 },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
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
    label: "Cloud",
    items: [
      { name: "AWS", Icon: FaAws },
      { name: "GCP", Icon: SiGooglecloud },
      { name: "Vercel", Icon: SiVercel },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Figma", Icon: SiFigma },
      { name: "Docker", Icon: SiDocker },
    ],
  },
];


function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 lg:pt-36 pb-16 lg:pb-24 flex flex-col items-center text-center px-4 sm:px-6">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Massive glow */}
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] w-[800px] h-[800px] rounded-full opacity-[0.15] blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 60%)" }}
        />
        <motion.div
          animate={{ x: [0, -60, 60, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 w-[1000px] h-[400px] rounded-[100%] opacity-10 blur-3xl"
          style={{ background: "radial-gradient(ellipse at bottom, hsl(270 81% 60%) 0%, transparent 70%)" }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,hsl(var(--foreground)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.2)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_80%,transparent_100%)]" />

        {/* Floating Icons with Motion */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] md:left-[15%] text-primary/20 blur-[2px]"
        >
          <SiReact className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[5%] md:right-[15%] text-blue-500/20 blur-[2px]"
        >
          <SiNextdotjs className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="hidden md:block absolute top-[35%] right-[10%] md:right-[20%] text-indigo-500/20 blur-[1px]"
        >
          <SiTypescript className="w-12 h-12 md:w-20 md:h-20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[25%] left-[10%] md:left-[25%] text-purple-500/20 blur-[1px]"
        >
          <SiTailwindcss className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="hidden lg:block absolute top-[10%] right-[35%] text-red-500/15 blur-[2px]"
        >
          <FaJava className="w-16 h-16 md:w-24 md:h-24" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="hidden sm:block absolute bottom-[10%] right-[40%] text-green-500/15 blur-[2px]"
        >
          <SiSpringboot className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="hidden lg:block absolute top-[40%] left-[30%] text-blue-400/15 blur-[3px]"
        >
          <SiPostgresql className="w-16 h-16 md:w-24 md:h-24" />
        </motion.div>
        
        {/* Additional Hero Icons */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
          className="hidden md:block absolute top-[25%] left-[45%] text-green-600/15 blur-[2px]"
        >
          <SiNodedotjs className="w-14 h-14 md:w-20 md:h-20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="hidden lg:block absolute bottom-[35%] right-[25%] text-blue-500/15 blur-[1px]"
        >
          <SiPython className="w-16 h-16 md:w-24 md:h-24" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
          className="hidden md:block absolute top-[5%] left-[25%] text-blue-600/15 blur-[2px]"
        >
          <SiMysql className="w-12 h-12 md:w-20 md:h-20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          className="hidden sm:block absolute bottom-[5%] left-[40%] text-pink-500/15 blur-[3px]"
        >
          <SiFigma className="w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24" />
        </motion.div>
      </div>

      <Container className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
          Elite Engineering
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tighter leading-[1.1] mb-6 md:mb-8 text-foreground text-center"
        >
          <span className="relative">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/90 to-secondary relative">
              SaaS <br className="hidden md:block" />& Web Apps
              <span className="absolute -inset-x-4 -inset-y-2 bg-primary/20 blur-3xl opacity-0 animate-[pulse_4s_ease-in-out_infinite] mix-blend-screen -z-10" />
            </span>
          </span>
          <span className="relative block mt-2 text-foreground/90">
             That Scale Without
          </span>
          <span className="relative bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent block mt-1">
            the Overhead
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-12"
        >
          NexCore is a dedicated senior dev team ready to act as your end-to-end Engineering Partner. We build bulletproof digital products with zero technical debt.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <GradientButton href="/contact#contact-form" className="px-10 py-4 text-base font-semibold shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all hover:-translate-y-1">
            Get a Free Project Estimate <ArrowRight className="w-5 h-5 ml-2 inline-block" />
          </GradientButton>
        </motion.div>


      </Container>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="py-12 border-y border-border/40 bg-card/10">
      <Container>
        <AnimateOnScroll>
          <p className="text-center text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Built On Industry-Leading Infrastructure
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-20 opacity-70 grayscale transition-all duration-500">
            <FaAws className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:grayscale-0 hover:text-[#FF9900] transition-colors cursor-pointer" title="AWS" />
            <SiVercel className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:grayscale-0 hover:text-black dark:hover:text-white transition-colors cursor-pointer" title="Vercel" />
            <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:grayscale-0 hover:text-black dark:hover:text-white transition-colors cursor-pointer" title="Next.js" />
            <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:grayscale-0 hover:text-[#4169E1] transition-colors cursor-pointer" title="PostgreSQL" />
            <SiStripe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:grayscale-0 hover:text-[#008CDD] transition-colors cursor-pointer" title="Stripe" />
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
            title="What We Do"
            subtitle="Full-service digital engineering — from strategy to shipping, we own the entire stack."
          />
        </AnimateOnScroll>

        <AnimateOnScroll stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <AnimatedItem key={service.title}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
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
                  </motion.div>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="py-24">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            title="Technologies We Use"
            subtitle="We pick the right tool for the job — no cargo culting, no unnecessary complexity."
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
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        key={tech.name}
                        data-testid={`badge-tech-${tech.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-border/50 bg-card/40 backdrop-blur-md hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.3)] transition-colors group cursor-default relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <TechIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                        <span className="text-sm font-medium text-foreground relative z-10">{tech.name}</span>
                      </motion.div>
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
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 70%)" }}
      />

      {/* Floating Icons with Motion */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] text-primary/30 blur-[1px]"
      >
        <Code2 className="w-16 h-16" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-[15%] text-secondary/30 blur-[1px]"
      >
        <Zap className="w-20 h-20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-40 right-[25%] text-primary/20 blur-[2px]"
      >
        <Cpu className="w-12 h-12" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-32 left-[25%] text-orange-500/20 blur-[1px]"
      >
        <FaAws className="w-16 h-16" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 left-[15%] text-blue-400/20 blur-[2px]"
      >
        <SiGooglecloud className="w-20 h-20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-20 right-[15%] text-blue-600/20 blur-[1px]"
      >
        <SiDocker className="w-16 h-16" />
      </motion.div>

      {/* Additional CTA Icons */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-10 right-[35%] text-red-600/20 blur-[2px]"
      >
        <SiNestjs className="w-14 h-14" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute top-10 left-[40%] text-teal-500/20 blur-[2px]"
      >
        <SiFastapi className="w-16 h-16" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-40 left-[5%] text-slate-500/20 blur-[1px]"
      >
        <SiGithub className="w-20 h-20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute top-32 right-[5%] text-white/20 blur-[2px]"
      >
        <SiVercel className="w-16 h-16" />
      </motion.div>

      <Container className="relative z-10 text-center">
        <AnimateOnScroll>
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            Let's work together
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight leading-[1.15]">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Great?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Tell us about your project. We'll respond within 24 hours with a clear plan and an honest assessment.
          </p>
          <GradientButton href="/contact#contact-form" className="px-12 py-4 text-base">
            Get In Touch
          </GradientButton>
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
    category: "General",
    question: "What does NexCore do?",
    answer:
      "NexCore is a senior engineering team that acts as your end-to-end technology partner. We design, build, and scale web applications, SaaS platforms, e-commerce stores, and custom software solutions — from concept to production and beyond.",
  },
  {
    category: "General",
    question: "Who is NexCore a good fit for?",
    answer:
      "We work best with startups, growing businesses, and enterprise teams that need high-quality engineering execution without the overhead of building an in-house team. If you have a product vision and need a reliable team to bring it to life, we're the right choice.",
  },
  {
    category: "General",
    question: "Where is your team located?",
    answer:
      "Our core team is based in India, and we work with clients globally. We overlap with US, European, and APAC time zones and adapt our communication schedule to your needs.",
  },
  {
    category: "Process",
    question: "What does your development process look like?",
    answer:
      "We follow an agile, sprint-based workflow. Every project begins with a discovery phase where we define scope, architecture, and milestones. From there, we work in 1–2 week sprints with regular demos, code reviews, and transparent progress updates. You'll always know where things stand.",
  },
  {
    category: "Process",
    question: "How long does a typical project take?",
    answer:
      "It depends on scope and complexity. A marketing website or landing page typically takes 2–4 weeks. A full SaaS MVP takes 8–14 weeks. Complex enterprise platforms can be 3–6+ months. We'll give you an honest timeline estimate during our initial consultation.",
  },
  {
    category: "Process",
    question: "Do you provide project management?",
    answer:
      "Yes. Every project gets a dedicated point of contact who handles communication, sprint planning, and progress reporting. We use modern project management tools so you have full visibility into tasks, timelines, and deliverables.",
  },
  {
    category: "Technical",
    question: "What technologies do you work with?",
    answer:
      "We use a modern, battle-tested stack: React, Next.js, and TypeScript on the frontend; Node.js, NestJS, Spring Boot, Python, and FastAPI on the backend; PostgreSQL, MySQL, and MongoDB for databases; and AWS, GCP, and Vercel for cloud deployment. We pick the right tool for each project — no cargo culting.",
  },
  {
    category: "Technical",
    question: "Can you work with our existing codebase?",
    answer:
      "Absolutely. We regularly take over, refactor, and extend existing projects. We'll start with a thorough code audit to understand the current state, identify technical debt, and create a roadmap for improvement — all before writing a single line of code.",
  },
  {
    category: "Technical",
    question: "Do you handle deployment and DevOps?",
    answer:
      "Yes. We set up CI/CD pipelines, containerized deployments with Docker, infrastructure as code, monitoring, and alerting. We ensure your application runs reliably at scale with 99.99% uptime targets.",
  },
  {
    category: "Pricing",
    question: "How much does a project cost?",
    answer:
      "Pricing varies based on scope, complexity, and timeline. We offer both fixed-price projects for well-defined scopes and time-and-materials engagements for evolving products. Reach out for a free, no-obligation project estimate — we'll give you a transparent breakdown.",
  },
  {
    category: "Pricing",
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes. After launch, we offer flexible maintenance and support plans that include bug fixes, performance monitoring, security patches, feature updates, and on-call support. We're partners, not just contractors.",
  },
  {
    category: "Pricing",
    question: "Is there a minimum project size?",
    answer:
      "We evaluate projects based on scope and technical requirements rather than a strict minimum budget. We focus on engagements where we can deliver meaningful value and maintain our high quality standards. For specialized, focused tasks, we can discuss flexible consulting arrangements.",
  },
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
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about working with NexCore."
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

export default function HomePage() {
  useDocumentTitle(
    "NexCore | Premium Software Engineering Agency",
    "NexCore is a senior engineering team that builds scalable SaaS platforms, e-commerce stores, and custom web applications. Get a free project estimate."
  );

  return (
    <main
    >
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <TechStackSection />

      <FAQSection />
      <ContactCTASection />
    </main>
  );
}
