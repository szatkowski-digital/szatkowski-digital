import { motion } from "framer-motion";

export const ContactInfo = ({ localTime, t }) => {
  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="space-y-4">
        <span className="font-michroma text-[10px] tracking-[0.3em] text-primary-aqua uppercase mb-4 block">
          {t.badge}
        </span>

        <h1 className="text-[10vh] font-extrabold md:text-[6vw] uppercase tracking-tighter leading-[0.8]">
          {t.title1} <br /> <span>{t.title2}</span>
        </h1>

        <p className="text-n-1/50 text-lg max-w-sm">{t.description}</p>
      </div>

      <ContactLink
        label={t.labels.email}
        href="mailto:contact@szatkowski-digital.com"
        content={"contact@szatkowski-digital.com"}
      />

      <ContactLink
        label={t.labels.phone}
        href="tel:+48730562479"
        content={"+48730562479"}
      />

      <LocationInfo labels={t.labels} city={t.city} localTime={localTime} />
    </div>
  );
};

const ContactLink = ({ label, href, content }) => {
  return (
    <motion.div
      whileHover={{ x: 20 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group cursor-pointer"
    >
      <span className="font-michroma text-[10px] tracking-widest uppercase text-n-1/50 block mb-2">
        {label}
      </span>

      <a href={href} className="text-2xl font-bold block">
        {content}
      </a>
    </motion.div>
  );
};

const LocationInfo = ({ labels, city, localTime }) => {
  return (
    <div className="flex justify-between items-end pt-8 border-t border-n-1/5">
      <div className="space-y-2">
        <span className="font-michroma text-[10px] tracking-widest uppercase text-n-1/50 block">
          {labels.location}
        </span>

        <span className="text-sm font-michroma uppercase tracking-wider">
          {city}
        </span>
      </div>

      <div className="text-right space-y-2">
        <div className="flex items-center justify-end gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>

            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-aqua"></span>
          </span>

          <span className="font-michroma text-[10px] tracking-widest uppercase text-n-1/50 block">
            {labels.status}
          </span>
        </div>

        <span className="text-sm font-michroma tabular-nums">
          {localTime} (CET)
        </span>
      </div>
    </div>
  );
};
