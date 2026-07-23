import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function useLanguageChange() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (code) => {
    if (code === locale) return;
    router.replace(pathname, { locale: code });
  };

  return { locale, changeLanguage };
}
