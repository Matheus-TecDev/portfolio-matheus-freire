import { useEffect, useState } from "react";
import type { Locale } from "../types";

const storageKey = "mf-locale";

function initialLocale(): Locale {
  const stored = window.localStorage.getItem(storageKey);
  if (stored === "pt-BR" || stored === "en") return stored;
  return window.navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return { locale, setLocale };
}
