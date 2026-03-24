"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

/**
 * ------------------------------------------------------------------
 * CONTACT PAGE
 * ------------------------------------------------------------------
 * Main structure of the Contact page.
 * Contains:
 * - TBD
 */
export default function Contact() {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  /**
   * ------------------------------------------------------------------
   * CONTACT CONFIGURATION
   * ------------------------------------------------------------------
   * List of contact steps displayed in the slider.
   */
  const steps = [
    {
      id: "name",
      question: "I am...",
      placeholder: "Your name or company",
      type: "text",
      field: "name",
    },
    {
      id: "email",
      question: "Reach me at...",
      placeholder: "email@example.com",
      type: "email",
      field: "email",
    },
    {
      id: "service",
      question: "I'm looking for...",
      options: [
        "Frontend Architecture",
        "UI Engineering",
        "Motion Design",
        "Full Stack",
      ],
      field: "service",
    },
    {
      id: "message",
      question: "The vision is...",
      placeholder: "Tell me about your project...",
      type: "textarea",
      field: "message",
    },
  ];

  /**
   * ------------------------------------------------------------------
   * CONTACT HANDLERS
   * ------------------------------------------------------------------
   * Handles contact switching through buttons.
   */
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const updateField = (val) => {
    setFormData({ ...formData, [steps[step].field]: val });
  };

  const isStepValid = () => {
    const currentVal = formData[steps[step].field];
    if (steps[step].id === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentVal);
    }
    return currentVal.length > 2;
  };

  return (
    <section className="py-32 px-6 relative min-h-[800px] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full glass-card rounded-[60px] p-12 md:p-24 relative overflow-hidden">
        {/* PROGRESS BAR */}
        <div className="absolute top-0 left-0 h-1 bg-white/5 w-full">
          <motion.div
            className="h-full bg-primary-pink"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* FORM SECTION */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-12"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] tracking-[0.5em] text-brand-teal uppercase opacity-60">
                  Step 0{step + 1} / 04
                </span>
                <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-tight">
                  {steps[step].question}
                </h2>
              </div>

              <div className="relative">
                {steps[step].options ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {steps[step].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          updateField(opt);
                          setTimeout(handleNext, 300);
                        }}
                        className={`p-6 rounded-2xl border transition-all duration-500 text-left group relative overflow-hidden ${
                          formData.service === opt
                            ? "border-primary-pink bg-primary-pink/10"
                            : "border-n-1/10 bg-n-1/5 hover:border-n-1/30"
                        }`}
                      >
                        <span className="relative z-10 font-display text-sm uppercase tracking-wider">
                          {opt}
                        </span>
                        {formData.service === opt && (
                          <motion.div
                            layoutId="active-opt"
                            className="absolute inset-0 bg-primary-pink/10"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                ) : steps[step].type === "textarea" ? (
                  <textarea
                    autoFocus
                    value={formData[steps[step].field]}
                    onChange={(e) => updateField(e.target.value)}
                    placeholder={steps[step].placeholder}
                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-2xl md:text-4xl font-light focus:outline-none focus:border-primary-pink transition-colors resize-none h-32"
                  />
                ) : (
                  <input
                    autoFocus
                    type={steps[step].type}
                    value={formData[steps[step].field]}
                    onChange={(e) => updateField(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && isStepValid() && handleNext()
                    }
                    placeholder={steps[step].placeholder}
                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-2xl md:text-4xl font-light focus:outline-none focus:border-primary-pink transition-colors"
                  />
                )}
              </div>

              <div className="flex items-center justify-between pt-12">
                <button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className={`font-mono text-[10px] tracking-widest uppercase transition-opacity ${
                    step === 0
                      ? "opacity-0 pointer-events-none"
                      : "opacity-40 hover:opacity-100"
                  }`}
                >
                  Back
                </button>

                <button
                  onClick={handleNext}
                  disabled={!isStepValid() && !steps[step].options}
                  className={`flex items-center gap-4 px-10 py-5 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-500 ${
                    isStepValid() || steps[step].options
                      ? "bg-n-1 text-black hover:bg-primary-aqua hover:text-white"
                      : "bg-n-1/5 text-n-1/20 cursor-not-allowed"
                  }`}
                >
                  <span>
                    {step === steps.length - 1 ? "Dispatch" : "Continue"}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-12 py-12"
            >
              <div className="w-24 h-24 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-primary-aqua" />
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter">
                Message <br />{" "}
                <span className="text-brand-teal">Received.</span>
              </h2>
              <p className="text-white/50 text-xl font-light max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name.split(" ")[0]}. I'll review your
                vision for {formData.service} and get back to you within 24
                hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(0);
                  setFormData({
                    name: "",
                    email: "",
                    service: "",
                    message: "",
                  });
                }}
                className="font-mono text-[10px] tracking-widest uppercase text-primary-pink hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-12 left-0 w-full px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono uppercase tracking-[0.3em] opacity-30">
        <p>© 2026 SZATKOWSKI DIGITAL</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-n-1 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-n-1 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-n-1 transition-colors">
            Twitter
          </a>
        </div>
        <p>Built for the next web</p>
      </div>
    </section>
  );
}
