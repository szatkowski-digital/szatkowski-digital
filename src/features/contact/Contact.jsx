"use client";

import { motion } from "framer-motion";

import { getContactData } from "@/data/contact";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { useContact, useLocalTime } from "./hooks/useContact";
import { useLocale, useTranslations } from "next-intl";
import { slideUpFast } from "@/animations/motionVariants";

/* CONTACT PAGE */
export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const { steps, info, formUi } = getContactData(t);
  const contact = useContact({ steps, locale });
  const { localTime } = useLocalTime();

  return (
    <section className="app-screen pt-20 pb-30 md:py-[clamp(5.5rem,15dvh,10rem)] flex items-center justify-center">
      <motion.div
        variants={slideUpFast}
        initial="initial"
        animate="enter"
        className="shell grid lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full"
      >
        <ContactInfo localTime={localTime} t={info} />

        <ContactForm contact={contact} steps={steps} formUi={formUi} />
      </motion.div>
    </section>
  );
}
