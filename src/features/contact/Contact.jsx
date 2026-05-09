"use client";

import { getContactData } from "@/data/contact";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { useContact, useLocalTime } from "./hooks/useContact";
import { useTranslations } from "next-intl";

/* CONTACT PAGE */
export default function Contact() {
  const t = useTranslations("contact");
  const {
    step,
    setStep,
    steps,
    isSubmitted,
    setIsSubmitted,
    formData,
    setFormData,
    handleNext,
    handlePrev,
    updateField,
    isStepValid,
    isSending,
  } = useContact({ t });
  const { localTime } = useLocalTime();

  const contactData = getContactData(t);

  return (
    <section className="app-screen pt-20 pb-28 md:py-[clamp(6.5rem,20dvh,20rem)] flex items-center justify-center">
      <div className="shell grid lg:grid-cols-12 gap-12 items-start">
        <ContactInfo localTime={localTime} t={contactData} />

        <ContactForm
          step={step}
          setStep={setStep}
          steps={steps}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handlePrev={handlePrev}
          updateField={updateField}
          isStepValid={isStepValid}
          isSending={isSending}
        />
      </div>
    </section>
  );
}
