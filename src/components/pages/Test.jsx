"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
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

export default function Test() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-brand-pink/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-pink origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30" />

        <div className="relative z-10 max-w-7xl w-full">
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
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-pink via-white to-primary-aqua">
                Interfaces
              </span>{" "}
              <br />
              that feel alive.
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-white/50 leading-relaxed font-light">
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

      <main className="max-w-7xl mx-auto px-6 py-32 space-y-48 md:space-y-64">
        {/* About Me Section */}
        <section id="about">
          <SectionHeader number="01" title="Who I Am" />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-light leading-tight"
            >
              I am a frontend specialist dedicated to the craft of building
              digital products that are as fast as they are beautiful.
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
                ecosystem, I focus on creating fluid, interactive interfaces
                that feel natural. Every pixel and every millisecond of latency
                matters.
              </p>
              <div className="flex gap-4 pt-4">
                <Github className="w-5 h-5 hover:text-brand-pink cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-brand-teal cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-brand-red cursor-pointer transition-colors" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
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

        {/* Tech Stack Section */}
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
        <section className="pb-32">
          <div className="glass-card p-12 md:p-24 rounded-[40px] text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink to-brand-teal" />

            <motion.h2 className="text-4xl md:text-7xl font-display font-bold uppercase mb-12 tracking-tighter">
              Let’s build something <br />
              <span className="text-brand-teal">exceptional.</span>
            </motion.h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-black font-bold rounded-full flex items-center gap-3 mx-auto hover:bg-brand-teal hover:text-white transition-colors duration-300"
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
      </main>

      {/* Custom Cursor / Background Glow */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-teal/10 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}

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

const SkillCard = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 rounded-2xl group hover:border-brand-teal/30 transition-colors duration-500"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 transition-colors duration-500">
        <Icon className="w-6 h-6 text-brand-teal" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
};

const TechBadge = ({ name }) => (
  <motion.div
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
    className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-mono tracking-wider"
  >
    {name}
  </motion.div>
);

const PhilosophyItem = ({ item, index, scrollYProgress }) => {
  const totalItems = 4;
  const step = 1 / totalItems;
  const start = index * step;
  const end = (index + 1) * step;

  // Define ranges based on index to create the accordion effect
  let input;
  let outputHeight;
  let outputOpacity;
  let outputScale;

  if (index === 0) {
    input = [0, step];
    outputHeight = ["100%", "0%"];
    outputOpacity = [1, 0];
    outputScale = [1, 0.8];
  } else if (index === totalItems - 1) {
    input = [start - step, start, 1];
    outputHeight = ["0%", "100%", "100%"];
    outputOpacity = [0, 1, 1];
    outputScale = [0.8, 1, 1];
  } else {
    input = [start - step, start, end];
    outputHeight = ["0%", "100%", "0%"];
    outputOpacity = [0, 1, 0];
    outputScale = [0.8, 1, 0.8];
  }

  const height = useTransform(scrollYProgress, input, outputHeight);
  const opacity = useTransform(scrollYProgress, input, outputOpacity);
  const scale = useTransform(scrollYProgress, input, outputScale);

  return (
    <motion.div
      style={{ height, opacity }}
      className="relative w-full overflow-hidden flex flex-col justify-center items-center border-b border-white/5 bg-bg-dark"
    >
      <motion.div style={{ scale }} className="max-w-4xl px-6 text-center">
        <span className="text-brand-pink font-mono text-sm mb-4 block tracking-[0.3em]">
          0{index + 1}
        </span>
        <h3 className="text-3xl md:text-6xl font-display font-bold mb-8 uppercase tracking-tighter leading-tight">
          {item.q}
        </h3>
        <p className="text-xl md:text-2xl text-white/40 font-light max-w-2xl mx-auto">
          {item.s}
        </p>
      </motion.div>
    </motion.div>
  );
};

const PhilosophySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const items = [
    {
      q: "Details define the experience.",
      s: "Precision is not an option, it's the foundation of everything we build.",
    },
    {
      q: "Performance is part of design.",
      s: "A slow interface is a broken interface, regardless of how good it looks.",
    },
    {
      q: "Motion should feel natural.",
      s: "Animation must serve a purpose, guiding the user's eye intuitively through the flow.",
    },
    {
      q: "Less, but better.",
      s: "Stripping away the noise to reveal the core value and essence of the product.",
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        {items.map((item, i) => (
          <PhilosophyItem
            key={i}
            item={item}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
