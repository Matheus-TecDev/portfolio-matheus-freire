import type { Translation } from "../../i18n/translations";
import type { Theme } from "../../types";
import { MoonIcon, SunIcon } from "../shared/Icons";

type Props = {
  t: Translation;
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ t, theme, onToggle }: Props) {
  return (
    <button className="icon-button theme-toggle" type="button" onClick={onToggle} aria-label={theme === "dark" ? t.controls.light : t.controls.dark}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
