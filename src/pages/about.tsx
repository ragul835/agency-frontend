import { Link } from "wouter";
import { CheckCircle, ChevronRight, Shield, Zap, Target, Cpu, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimateOnScroll, AnimatedItem } from "@/components/shared/AnimateOnScroll";
import { GradientButton } from "@/components/shared/GradientButton";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const coreValues = [
  "Performance and scalability in every solution.",
  "Transparency in communication and timelines.",
  "Modern technology and clean engineering practices.",
  "Reliability and long-term post-launch support.",
];

const valueCards = [
  {
    icon: Shield,
    title: "Quality",
    description: "Every solution is built with clean code, best practices, and a focus on long-term maintainability.",
    color: "from-blue-500/15 to-primary/15",
    iconColor: "text-blue-400",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "Clear timelines, regular updates, and complete project visibility throughout development.",
    color: "from-green-500/15 to-emerald-500/15",
    iconColor: "text-green-400",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We use modern frameworks and industry-standard tools to build solutions for performance and growth.",
    color: "from-orange-500/15 to-amber-500/15",
    iconColor: "text-orange-400",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "We deliver on time, provide ongoing support, and ensure your digital products run smoothly.",
    color: "from-purple-500/15 to-violet-500/15",
    iconColor: "text-purple-400",
  },
];

const approachSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We start by deeply understanding your business goals, target audience, and technical requirements to build a solid foundation.",
  },
  {
    step: "02",
    title: "Engineering & Development",
    description: "Using modern technologies and clean code practices, we build scalable, secure, and high-performing digital solutions.",
  },
  {
    step: "03",
    title: "Launch & Scale",
    description: "We ensure a smooth deployment, provide comprehensive training, and offer ongoing support to help your product grow.",
  },
];

export default function AboutPage() {
  useDocumentTitle(
    "About Us | Seichox",
    "Seichox is a technology partner for modern businesses. We help startups and growing organizations transform ideas into reliable digital products."
  );

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_0%,hsl(var(--primary)/0.1),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--foreground)) 1px,transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] -z-10 animate-orb-drift" />

        <Container>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 bg-card/30 text-xs text-muted-foreground mb-10 backdrop-blur-sm">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Our Story
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tighter leading-[1.05] mb-6 text-foreground">
                Building the{" "}
                <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent animate-gradient">
                  Digital Future
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Your technology partner for building reliable, scalable digital solutions — from startups to growing enterprises.
              </p>
              <ul className="space-y-3">
                {coreValues.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{v}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            {/* Visual card */}
            <AnimateOnScroll delay={0.2}>
              <div className="relative">
                {/* Main card */}
                <div className="relative rounded-3xl border border-border/40 bg-card/60 backdrop-blur-xl p-8 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full blur-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                      <div className="ml-auto text-xs text-muted-foreground/60 font-mono">seichox.tsx</div>
                    </div>
                    <div className="space-y-3 font-mono text-sm">
                      <div className="text-muted-foreground/60"><span className="text-blue-400">const</span> <span className="text-green-400">agency</span> = {'{'}</div>
                      <div className="pl-4 text-muted-foreground"><span className="text-orange-400">name</span>: <span className="text-green-300">"Seichox"</span>,</div>
                      <div className="pl-4 text-muted-foreground"><span className="text-orange-400">focus</span>: <span className="text-green-300">"Digital Products"</span>,</div>
                      <div className="pl-4 text-muted-foreground"><span className="text-orange-400">services</span>: [<span className="text-green-300">"Web"</span>, <span className="text-green-300">"SaaS"</span>, <span className="text-green-300">"E-Com"</span>],</div>
                      <div className="pl-4 text-muted-foreground"><span className="text-orange-400">support</span>: <span className="text-green-300">"24/7"</span>,</div>
                      <div className="text-muted-foreground/60">{'}'}</div>
                    </div>
                  </div>
                </div>

                {/* Floating availability card */}
                <div className="absolute -bottom-6 -left-6 w-40 bg-card/90 border border-border/60 rounded-2xl p-4 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">Available Now</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Taking new projects</div>
                </div>

                <div className="absolute -top-6 -right-6 w-36 bg-card/90 border border-primary/20 rounded-2xl p-4 backdrop-blur-xl shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-xs font-bold text-foreground">Fast Delivery</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">2–8 weeks avg.</div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── Mission ── */}
      <section className="py-16 md:py-24 border-y border-border/30 bg-card/5">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground mb-6">
                Helping Businesses Build Reliable Digital Products
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                We combine modern technology, clean engineering, and business-focused thinking to deliver digital products that perform, scale, and last for years to come.
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── Values ── */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Core Values</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground">
                The Principles We Live By
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {valueCards.map((card) => {
                const Icon = card.icon;
                return (
                  <AnimatedItem key={card.title}>
                    <div
                      data-testid={`card-value-${card.title.toLowerCase()}`}
                      className="premium-card group h-full p-6"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                      <div className="relative z-10">
                        <div className="w-11 h-11 rounded-xl bg-card/80 border border-border/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                          <Icon className={`w-5 h-5 ${card.iconColor}`} />
                        </div>
                        <h3 className="text-base font-heading font-bold text-foreground mb-2">{card.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </AnimatedItem>
                );
              })}
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── Global Impact / Identity ── */}
      <section className="py-20 relative overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <AnimateOnScroll>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Global Reach
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
                  Building digital solutions for a <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">borderless world.</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  We are a remote-first collective of engineers and designers, crafting scalable technology products for businesses worldwide. No matter where you are, we bring the same level of engineering excellence and transparency.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-heading font-black text-foreground mb-1">100%</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Remote Ready</div>
                  </div>
                  <div>
                    <div className="text-4xl font-heading font-black text-foreground mb-1">24/7</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Infrastructure</div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right Map Graphic */}
            <div className="lg:w-1/2 w-full relative">
              <AnimateOnScroll delay={0.2}>
                <div className="premium-card p-8 aspect-square sm:aspect-video lg:aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-dot-grid opacity-30" />
                  {/* Glowing core */}
                  <div className="absolute w-48 h-48 bg-primary/20 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-1000" />
                  
                  {/* Decorative map nodes */}
                  <div className="relative w-full h-full">
                    {/* Node 1 */}
                    <div className="absolute top-[30%] left-[20%]">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-6 h-6 rounded-full bg-blue-500/20 animate-ping" />
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      </div>
                    </div>
                    {/* Node 2 */}
                    <div className="absolute top-[40%] right-[30%]">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-ping delay-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>
                    </div>
                    {/* Node 3 */}
                    <div className="absolute bottom-[30%] left-[40%]">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-4 h-4 rounded-full bg-green-500/20 animate-ping delay-700" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </div>
                    </div>
                    {/* Connecting lines SVG */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                      <path d="M 20% 30% Q 30% 20% 40% 70% T 70% 40%" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" className="text-primary animate-pulse" />
                    </svg>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Vision ── */}
      <section className="py-16 md:py-20 bg-card/5 border-y border-border/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <AnimateOnScroll className="lg:col-span-1">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Our Vision</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-foreground">
                A Trusted Technology Partner for Modern Businesses
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15} className="lg:col-span-2">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                We help businesses access reliable software engineering without the overhead of large in-house teams. Scalable architectures, modern designs, and performance-first development.
              </p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── Approach ── */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">How We Work</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground">Our Approach</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approachSteps.map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i * 0.1}>
                <div className="premium-card p-7 group h-full overflow-hidden">
                  <div className="text-[5rem] font-heading font-black text-primary/5 absolute -top-4 -right-2 select-none leading-none group-hover:text-primary/10 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center mb-5">
                      <span className="text-xs font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 relative overflow-hidden border-t border-border/20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/8 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <Container className="relative z-10">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-6 text-foreground tracking-tight">
                Ready to build your next{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">digital product?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Let's discuss how we can help bring your vision to life.
              </p>
              <GradientButton href="/contact#contact-form" className="px-12 py-4 text-base font-semibold">
                Start Your Project <ArrowRight className="w-4 h-4 ml-2 inline" />
              </GradientButton>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </main>
  );
}
