"use client";

import { motion } from "framer-motion";

import { getContactData } from "@/data/contact";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { useContact, useLocalTime } from "./hooks/useContact";
import { useTranslations } from "next-intl";
import { slideUpFast } from "@/animations/motionVariants";

/* CONTACT PAGE */
export default function Contact() {
  const t = useTranslations("contact");
  const { steps, info, formUi } = getContactData(t);
  const {
    step,
    setStep,
    isSubmitted,
    setIsSubmitted,
    formData,
    setFormData,
    handleNext,
    handlePrev,
    updateField,
    isStepValid,
    isSending,
  } = useContact({ steps });
  const { localTime } = useLocalTime();

  return (
    <section className="app-screen pt-20 pb-30 md:py-[clamp(5.5rem,15dvh,10rem)] flex items-center justify-center">
      <motion.div
        variants={slideUpFast}
        initial="initial"
        animate="enter"
        className="shell grid lg:grid-cols-12 gap-20 lg:gap-12 items-start"
      >
        <ContactInfo localTime={localTime} t={info} />

        <ContactForm
          step={step}
          setStep={setStep}
          steps={steps}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          formData={formData}
          formUi={formUi}
          setFormData={setFormData}
          handleNext={handleNext}
          handlePrev={handlePrev}
          updateField={updateField}
          isStepValid={isStepValid}
          isSending={isSending}
        />
      </motion.div>
    </section>
  );
}
