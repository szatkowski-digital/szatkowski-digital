"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValueEvent,
} from "framer-motion";
import {
  Code2,
  Layers,
  Zap,
  Layout,
  Cpu,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Activity,
} from "lucide-react";

/**
 * ------------------------------------------------------------------
 * ABOUT PAGE
 * ------------------------------------------------------------------
 * Main structure of the About page.
 * Contains:
 * - Hero introduction
 * - Modern web philosophy
 * - Skills overview
 * - Portfolio call to action
 */
export default function About() {
  return (
    <div className="pt-16 lg:pt-26 max-w-7xl mx-auto px-6 space-y-24 md:space-y-64">
      {/* About Hero */}
      <HeroSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Personal Edge Section */}
      <section className="text-center py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-xs font-mono text-brand-red uppercase tracking-widest mb-6 block">
            Beyond the UI
          </span>
          <p className="text-xl text-white/60 italic font-light">
            "I am perpetually curious about the systems that power our world.
            While my focus is the frontend, my interest extends to the
            architectural integrity of the entire stack."
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * HERO SECTION
 * ------------------------------------------------------------------
 * Hero section with a bold statement.
 */
function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <div className="relative max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            className="text-xs font-mono uppercase tracking-[0.4em] mb-8 text-brand-teal"
          >
            Frontend Architect & UI Engineer
          </motion.span>

          <h1 className="text-6xl md:text-[10vw] font-display font-bold leading-[0.9] tracking-tighter uppercase mb-12">
            Designing <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-pink via-n-1 to-primary-aqua">
              Interfaces
            </span>{" "}
            <br />
            that feel alive.
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-n-1/50 leading-relaxed font-light">
            Building modern, high-performance web experiences where technical
            precision meets aesthetic excellence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <div className="w-px h-24 bg-gradient-to-b from-brand-pink to-transparent mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * ABOUT SECTION
 * ------------------------------------------------------------------
 * Introductory section presenting the developer.
 */
function AboutSection() {
  return (
    <section>
      <SectionHeader number="01" title="Who I Am" />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-light leading-tight"
        >
          I am a frontend specialist dedicated to the craft of building digital
          products that are as fast as they are beautiful.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-white/60 leading-relaxed"
        >
          <p>
            My work exists at the intersection of design and engineering. I
            don't just write code; I architect systems that prioritize user
            experience, performance, and maintainability.
          </p>
          <p>
            With a background deeply rooted in React and the modern web
            ecosystem, I focus on creating fluid, interactive interfaces that
            feel natural. Every pixel and every millisecond of latency matters.
          </p>
          <div className="flex gap-4 pt-4">
            <Github className="w-5 h-5 hover:text-brand-pink cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 hover:text-brand-teal cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 hover:text-brand-red cursor-pointer transition-colors" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * SKILLS SECTION
 * ------------------------------------------------------------------
 * Displays technology stack and capabilities.
 */
function SkillsSection() {
  return (
    <section>
      <SectionHeader number="02" title="Capabilities" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillCard
          icon={Layout}
          title="Frontend Architecture"
          desc="Designing scalable, modular frontend systems using React and Next.js that stand the test of time."
          delay={0.1}
        />
        <SkillCard
          icon={Zap}
          title="UI Engineering"
          desc="Translating complex designs into pixel-perfect, accessible, and high-performance user interfaces."
          delay={0.2}
        />
        <SkillCard
          icon={Activity}
          title="Motion & Interaction"
          desc="Creating immersive experiences through purposeful animations and fluid state transitions."
          delay={0.3}
        />
        <SkillCard
          icon={Layers}
          title="Responsive Systems"
          desc="Building adaptive layouts that provide a premium experience across all devices and screen sizes."
          delay={0.4}
        />
        <SkillCard
          icon={Cpu}
          title="Performance Optimization"
          desc="Deep-diving into Core Web Vitals, bundle sizes, and rendering cycles to ensure lightning-fast loads."
          delay={0.5}
        />
        <SkillCard
          icon={Code2}
          title="Product Mindset"
          desc="Thinking beyond the code to understand user needs and business goals for a holistic build."
          delay={0.6}
        />
      </div>
    </section>
  );
}

const SkillCard = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 rounded-2xl group hover:border-primary-aqua/30 transition-colors duration-500"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary-aqua/10 transition-colors duration-500">
        <Icon className="w-6 h-6 text-primary-aqua" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
};

/**
 * ------------------------------------------------------------------
 * TECH STACK SECTION
 * ------------------------------------------------------------------
 * Displays the technology stack and tools.
 */
function TechStackSection() {
  return (
    <section>
      <SectionHeader number="03" title="The Stack" />
      <div className="flex flex-wrap gap-4 max-w-4xl">
        {[
          "React",
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "React Native",
          "Motion",
          "Python",
          "Node.js",
          "GraphQL",
          "Vite",
        ].map((tech, i) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </section>
  );
}

const TechBadge = ({ name }) => (
  <motion.div
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
    className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-mono tracking-wider"
  >
    {name}
  </motion.div>
);

/**
 * ------------------------------------------------------------------
 * PHILOSOOHY SECTION
 * ------------------------------------------------------------------
 *
 */
const PhilosophySection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress for a more "liquid" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  });

  const items = [
    {
      q: "Details define the experience.",
      s: "Precision is not an option, it's the foundation of everything we build. Every pixel serves a purpose.",
      label: "Excellence",
      icon: Layout,
    },
    {
      q: "Performance is part of design.",
      s: "A slow interface is a broken interface. We optimize for speed to ensure a seamless interaction.",
      label: "Speed",
      icon: Zap,
    },
    {
      q: "Motion should feel natural.",
      s: "Animation must serve a purpose, guiding the user's eye intuitively through the digital flow.",
      label: "Fluidity",
      icon: Activity,
    },
    {
      q: "Less, but better.",
      s: "Stripping away the noise to reveal the core value and essence of the product. Simplicity is sophistication.",
      label: "Minimalism",
      icon: Layers,
    },
  ];

  return (
    <section ref={containerRef} className="relative h-auto md:h-[400vh]">
      <div className="relative md:sticky top-0 h-auto md:h-screen w-full flex flex-col md:flex-row overflow-hidden bg-bg-dark">
        {/* Desktop Layout: Horizontal Compression */}
        <div className="hidden md:flex w-full h-full">
          {items.map((item, i) => (
            <PhilosophyPanel
              key={i}
              item={item}
              index={i}
              scrollYProgress={smoothProgress}
            />
          ))}
        </div>

        {/* Mobile Layout: Vertical Stack (Static) */}
        <div className="flex md:hidden flex-col w-full bg-bg-dark">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-8 p-10 border-b border-white/5 min-h-[40vh] justify-center"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-[0.4em] text-brand-teal uppercase">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-white/20">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-4xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
                {item.q}
              </h3>
              <p className="text-white/50 font-light leading-relaxed text-sm">
                {item.s}
              </p>
              <div className="flex items-center gap-3 text-brand-pink text-[10px] font-mono uppercase tracking-widest pt-4">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhilosophyPanel = ({ item, index, scrollYProgress }) => {
  // Interpolate width based on scroll progress
  // We start at 25% each, then transition to dominant states
  const width = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? ["25%", "70%", "10%", "10%", "10%"]
      : index === 1
        ? ["25%", "10%", "70%", "10%", "10%"]
        : index === 2
          ? ["25%", "10%", "10%", "70%", "10%"]
          : ["25%", "10%", "10%", "10%", "70%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? [1, 1, 0.3, 0.2, 0.2]
      : index === 1
        ? [0.8, 0.3, 1, 0.3, 0.2]
        : index === 2
          ? [0.6, 0.2, 0.3, 1, 0.3]
          : [0.4, 0.2, 0.2, 0.3, 1]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? [1, 1, 0, 0, 0]
      : index === 1
        ? [0, 0, 1, 0, 0]
        : index === 2
          ? [0, 0, 0, 1, 0]
          : [0, 0, 0, 0, 1]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? [0, 0, 40, 40, 40]
      : index === 1
        ? [40, 40, 0, 40, 40]
        : index === 2
          ? [40, 40, 40, 0, 40]
          : [40, 40, 40, 40, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 1],
    index === 0
      ? [1, 1, 0.85, 0.8, 0.8]
      : index === 1
        ? [0.9, 0.85, 1, 0.85, 0.8]
        : index === 2
          ? [0.85, 0.8, 0.85, 1, 0.85]
          : [0.8, 0.8, 0.8, 0.85, 1]
  );

  return (
    <motion.div
      style={{ width, opacity }}
      className="relative h-full flex flex-col border-r border-white/5 overflow-hidden bg-bg-dark group"
    >
      {/* Background Accent Glow */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 to-transparent pointer-events-none"
      />

      <div className="absolute top-0 left-0 h-full w-[100vw] md:w-[70vw] p-8 md:p-20 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start w-full md:w-auto">
          <motion.span
            style={{ opacity: useTransform(opacity, [0.2, 1], [0.2, 1]) }}
            className="font-mono text-[10px] tracking-[0.5em] text-white uppercase"
          >
            {item.label}
          </motion.span>
          <item.icon className="w-6 h-6 text-brand-teal/40 group-hover:text-brand-teal transition-colors duration-500" />
        </div>

        <motion.div style={{ scale, y: contentY }} className="origin-left">
          <h3 className="text-4xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.8] mb-10">
            {item.q.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>

          <motion.div style={{ opacity: contentOpacity }} className="space-y-6">
            <p className="text-sm md:text-xl text-white/50 font-light max-w-md leading-relaxed">
              {item.s}
            </p>
            <div className="flex items-center gap-4 text-brand-pink text-xs font-mono tracking-widest uppercase">
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </motion.div>

        <div className="flex items-center gap-6">
          <div className="h-px flex-grow bg-white/10" />
          <span className="font-mono text-xs text-white/30 tabular-nums">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Active Indicator Line */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-pink via-brand-teal to-brand-pink bg-[length:200%_100%] animate-gradient-x"
      />
    </motion.div>
  );
};

/**
 * ------------------------------------------------------------------
 * CTA SECTION
 * ------------------------------------------------------------------
 * Footer section.
 */
function CTASection() {
  return (
    <section className="pb-32">
      <div className="glass-card p-12 md:p-24 rounded-[40px] text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-pink to-primary-aqua" />

        <motion.h2 className="text-4xl md:text-7xl font-display font-bold uppercase mb-12 tracking-tighter">
          Let’s build something <br />
          <span className="text-primary-aqua">exceptional.</span>
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-6 bg-white text-n-8 font-bold rounded-full flex items-center gap-3 mx-auto hover:bg-primary-aqua hover:text-white transition-colors duration-300"
        >
          GET IN TOUCH <ArrowRight className="w-5 h-5" />
        </motion.button>

        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-mono uppercase tracking-widest opacity-40">
          <p>© 2026 SZATKOWSKI DIGITAL</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
          <p>DESIGNED FOR HIGH PERFORMANCE</p>
        </div>
      </div>
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * SECTION HEADER
 * ------------------------------------------------------------------
 * Header for eatch section.
 */
const SectionHeader = ({ number, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex flex-col mb-12 md:mb-20">
      <div className="flex items-baseline gap-4">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 0.4, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-2xl md:text-4xl text-white/40"
        >
          /{number}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-px bg-white/10 mt-6 origin-left"
      />
    </div>
  );
};
