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
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Thresholds: 0-0.25 (Step 1), 0.25-0.5 (Step 2), 0.5-0.75 (Step 3), 0.75-1 (Step 4)
    // This creates the "snap" behavior where it only changes at specific points
    if (latest < 0.25) {
      if (activeIndex !== 0) setActiveIndex(0);
    } else if (latest < 0.5) {
      if (activeIndex !== 1) setActiveIndex(1);
    } else if (latest < 0.75) {
      if (activeIndex !== 2) setActiveIndex(2);
    } else {
      if (activeIndex !== 3) setActiveIndex(3);
    }
  });

  const items = [
    {
      q: "Details define the experience.",
      s: "Precision is not an option, it's the foundation of everything we build. Every pixel serves a purpose.",
    },
    {
      q: "Performance is part of design.",
      s: "A slow interface is a broken interface. We optimize for speed to ensure a seamless interaction.",
    },
    {
      q: "Motion should feel natural.",
      s: "Animation must serve a purpose, guiding the user's eye intuitively through the digital flow.",
    },
    {
      q: "Less, but better.",
      s: "Stripping away the noise to reveal the core value and essence of the product. Simplicity is sophistication.",
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-16 lg:top-0 h-[calc(100vh-4rem)] lg:h-screen w-full flex flex-col overflow-hidden bg-bg-dark border-y border-white/5">
        {items.map((item, i) => (
          <PhilosophyItem
            key={i}
            item={item}
            index={i}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </section>
  );
};

const PhilosophyItem = ({ item, index, activeIndex }) => {
  const isActive = activeIndex === index;

  return (
    <motion.div
      animate={{
        flexGrow: isActive ? 4 : 1,
        backgroundColor: isActive
          ? "rgba(255, 255, 255, 0.02)"
          : "rgba(0, 0, 0, 0)",
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-full overflow-hidden flex flex-col justify-center items-center border-b border-white/5 group"
    >
      <div className="max-w-4xl px-6 w-full flex flex-col items-center justify-center">
        <div className="flex items-center gap-6 w-full justify-center">
          <motion.span
            animate={{
              opacity: isActive ? 1 : 0.2,
              scale: isActive ? 1 : 0.8,
              color: isActive ? "#DE3182" : "#ffffff",
            }}
            className="font-mono text-sm md:text-base tracking-widest shrink-0"
          >
            0{index + 1}
          </motion.span>

          <motion.h3
            animate={{
              scale: isActive ? 1 : 0.85,
              opacity: isActive ? 1 : 0.4,
              x: isActive ? 0 : -10,
            }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-5xl font-display font-bold uppercase tracking-tighter leading-none text-center"
          >
            {item.q}
          </motion.h3>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isActive ? "auto" : 0,
            opacity: isActive ? 1 : 0,
            marginTop: isActive ? 24 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden text-center"
        >
          <p className="text-sm md:text-xl text-white/40 font-light max-w-xl mx-auto leading-relaxed">
            {item.s}
          </p>
        </motion.div>
      </div>

      {/* Visual Indicator for active state */}
      <motion.div
        animate={{
          opacity: isActive ? 0.1 : 0,
          scaleY: isActive ? 1 : 0,
        }}
        className="absolute left-0 top-0 bottom-0 w-1 bg-primary-pink origin-top"
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
