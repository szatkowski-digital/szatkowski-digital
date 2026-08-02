"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AppUXSection() {
  return (
    <section className="container py-12 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-16 gap-y-24">
        <Image
          src="/images/smokins_app_UX.webp"
          width={892}
          height={612}
          alt="Smokins app"
          priority
          className="w-full h-full object-contain object-center col-span-3"
        />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <h3 className="h3 mb-6">Strefa Klienta</h3>
          <p className="body-sm text-white/70">
            Synchronizacja danych w czasie rzeczywistym, szybki dostęp do stanu
            konta i nagród. Jeden kod QR stanowi identyfikator użytkownika w
            całym ekosystemie.
          </p>
        </motion.div>

        <h5 className="h5 text-n-1 col-span-3 text-start">
          Kluczem do sukcesu aplikacji lojalnościowej jest prostota.
          Zaprojektowałem interfejs tak, aby klient miał łatwy dostęp do swojego
          salda i kodu identyfikacyjnego. Aplikacja stawia na wydajność –
          pobieranie danych jest zoptymalizowane, aby użytkownik nie czekał przy
          kasie.
        </h5>
      </div>
    </section>
  );
}
