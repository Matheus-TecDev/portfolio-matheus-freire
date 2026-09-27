import { useEffect, useRef, useState } from "react";
import type { Translation } from "../../i18n/translations";
import type { Locale } from "../../types";
import { ChevronDownIcon, GlobeIcon } from "../shared/Icons";

type Props = {
  t: Translation;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function LanguageMenu({ t, locale, onLocaleChange }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentLabel = locale === "pt-BR" ? "PT" : "EN";

  useEffect(() => {
    const close = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent && event.key === "Escape") setOpen(false);
      if (event instanceof MouseEvent && menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
    };

    window.addEventListener("keydown", close);
    window.addEventListener("mousedown", close);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("mousedown", close);
    };
  }, []);

  const selectLocale = (nextLocale: Locale) => {
    onLocaleChange(nextLocale);
    setOpen(false);
  };

  return (
    <div className="language-menu" ref={menuRef}>
      <button type="button" className="language-menu__button" aria-haspopup="menu" aria-expanded={open} aria-label={t.controls.language} onClick={() => setOpen((value) => !value)}>
        <GlobeIcon />
        <span>{currentLabel}</span>
        <ChevronDownIcon />
      </button>
      <div className={`language-menu__list ${open ? "is-open" : ""}`} role="menu">
        <button type="button" role="menuitemradio" aria-checked={locale === "pt-BR"} onClick={() => selectLocale("pt-BR")}>{t.controls.portuguese}</button>
        <button type="button" role="menuitemradio" aria-checked={locale === "en"} onClick={() => selectLocale("en")}>{t.controls.english}</button>
      </div>
    </div>
  );
}
