import { useEffect, useRef, useState } from "react";
import type { Locale, Theme } from "../../types";
import type { Translation } from "../../i18n/translations";
import { CloseIcon, MenuIcon } from "../shared/Icons";
import { LanguageMenu } from "../navigation/LanguageMenu";
import { ThemeToggle } from "../navigation/ThemeToggle";

type Props = {
  t: Translation;
  locale: Locale;
  theme: Theme;
  onLocaleChange: (locale: Locale) => void;
  onThemeToggle: () => void;
};

export function Header({ t, locale, theme, onLocaleChange, onThemeToggle }: Props) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !open) return;
      setOpen(false);
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  const navItems = [["#projetos", t.nav.work], ["#experiencia", t.nav.experience], ["#sobre", t.nav.about], ["#contato", t.nav.contact]];

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label={t.nav.label}>
        <a className="brand" href="#top" aria-label={t.nav.home}>Matheus Freire</a>
        <div className={`nav__panel ${open ? "is-open" : ""}`} id="mobile-nav">
          {navItems.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <div className="nav__actions">
          <LanguageMenu t={t} locale={locale} onLocaleChange={onLocaleChange} />
          <ThemeToggle t={t} theme={theme} onToggle={onThemeToggle} />
          <button ref={menuButtonRef} className="icon-button menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? t.nav.close : t.nav.open} aria-expanded={open} aria-controls="mobile-nav">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
