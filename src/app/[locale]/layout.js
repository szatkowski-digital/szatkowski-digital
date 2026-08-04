import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { inter, michroma } from "../fonts";
import ClientWrapper from "./ClientWrapper";

/**
 * Dynamiczne SEO z obsługą i18n
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "common.seo.home" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://szatkowski-digital.com"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: "Szatkowski Digital",
      locale: locale,
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${michroma.variable} antialiased`}
    >
      <body>
        <NextIntlClientProvider locale={locale}>
          <ClientWrapper>{children}</ClientWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
