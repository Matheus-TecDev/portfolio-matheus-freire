import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export function ArrowIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="M5 12h13M13 6l6 6-6 6" /></svg>; }
export function ExternalIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="M14 5h5v5M19 5l-8 8" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></svg>; }
export function SunIcon(props: IconProps) { return <svg {...defaults} {...props}><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>; }
export function MoonIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z"/></svg>; }
export function MenuIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>; }
export function CloseIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="m6 6 12 12M18 6 6 18"/></svg>; }
export function CheckIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="m5 12 4 4L19 6"/></svg>; }
export function ChevronDownIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="m7 10 5 5 5-5"/></svg>; }
export function GlobeIcon(props: IconProps) { return <svg {...defaults} {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>; }
export function MailIcon(props: IconProps) { return <svg {...defaults} {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>; }
export function GithubIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 19 3.7 5.1 5.1 0 0 0 18.9 0S17.7-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.3-.4 4.1 0 4.1 0A5.1 5.1 0 0 0 4 3.7a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></svg>; }
export function LinkedinIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a4 4 0 0 1 2-3z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>; }
export function ExpandIcon(props: IconProps) { return <svg {...defaults} {...props}><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /></svg>; }
