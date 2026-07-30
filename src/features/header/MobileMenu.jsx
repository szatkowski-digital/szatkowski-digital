"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { TransitionLink } from "../../components/utils/TransitionLink";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, delay: 0.3, ease: "easeInOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export const MobileMenu = ({ open, handleClick }) => {
  const t = useTranslations("common");

  const links = [
    { href: "/about", label: t("navigation.about") },
    { href: "/portfolio", label: t("navigation.portfolio") },
    { href: "/contact", label: t("navigation.contact") },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-n-8/95 backdrop-blur-lg z-50 flex flex-col justify-between px-6 py-12 lg:hidden will-change-opacity"
        >
          {/* Menu Główne */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-center grow mt-16 gap-8"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                variants={itemVariants}
                className="overflow-hidden"
              >
                <TransitionLink
                  href={link.href}
                  onClick={handleClick}
                  className="group flex items-end gap-4 w-fit"
                >
                  <span className="text-sm font-mono text-primary-aqua mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                  <span className="text-5xl font-display font-bold uppercase tracking-tighter text-n-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-pink group-hover:to-primary-aqua transition-all duration-300">
                    {link.label}
                  </span>
                </TransitionLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Stopka z Twoim Switcherem */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-8 pb-8"
          >
            <motion.div variants={itemVariants}>
              <LanguageSwitcher />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full flex items-center justify-between border-t border-n-1/10 pt-6"
            >
              <p className="text-xs font-mono text-n-1/40 uppercase tracking-widest">
                © {new Date().getFullYear()} Szatkowski Digital
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
