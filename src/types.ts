export type Locale = "pt-BR" | "en";
export type Theme = "dark" | "light";

export type Evidence = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ProjectContent = {
  eyebrow: string;
  title: string;
  lead: string;
  context: string;
  decisions: string[];
  validation: string[];
  limitations: string[];
  stack: string[];
  links: { label: string; href: string }[];
  evidence: Evidence[];
};
