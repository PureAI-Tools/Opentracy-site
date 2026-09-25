import type { SVGProps } from "react";
export type IconName = "arrow" | "arrow-down-right" | "arrow-wave" | "retry" | "asterisk" | "star" | "code" | "route" | "trace" | "cost" | "check" | "copy" | "github" | "book" | "globe" | "menu" | "close" | "play" | "shield" | "chevron" | "external" | "terminal" | "spark";
const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
  "arrow-down-right": <path d="m5 5 14 14M7 19h12V7" />,
  "arrow-wave": <path d="M2 12c3-6 6-6 9 0s6 6 11-3m-7 0h7v7" />,
  retry: <path d="M20 10a8 8 0 1 0-1 7M20 4v6h-6" />,
  asterisk: <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" />,
  star: <path d="M12 1C10 8 8 10 1 12c7 2 9 4 11 11 2-7 4-9 11-11C16 10 14 8 12 1Z" fill="currentColor" stroke="none" />,
  code: <path d="m7 7-5 5 5 5m10-10 5 5-5 5M14 4l-4 16" />,
  route: <><path d="M5 5v10a4 4 0 0 0 4 4h10M5 5h9a5 5 0 0 1 5 5v9m-4-4 4 4 4-4" /><circle cx="5" cy="5" r="2" /></>,
  trace: <path d="M2 12h4l3-8 5 16 3-8h5" />,
  cost: <><path d="M12 2v20m5-16H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
  github: <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-4c.2-1 .2-2.4-.2-3-1.2-.3-3.5 1-4 1.4a14 14 0 0 0-7 0C7.5 2 5.2.7 4 1c-.4.6-.4 2-.2 3a5.7 5.7 0 0 0-1.5 4c0 5.7 3.4 6.9 6.7 7.3A3.5 3.5 0 0 0 8 18v4" />,
  book: <path d="M12 5v16M12 5C9 2 5 3 2 3v16c4 0 7-1 10 2 3-3 6-2 10-2V3c-3 0-7-1-10 2Z" />,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  play: <path d="m8 4 12 8-12 8V4Z" />,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  chevron: <path d="m8 10 4 4 4-4" />,
  external: <path d="M14 3h7v7M21 3 10 14M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />,
  terminal: <><rect x="2" y="3" width="20" height="18" rx="3" /><path d="m6 8 4 4-4 4m8 0h4" /></>,
  spark: <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />,
};
export default function Icon({ name, size = 18, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number | string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{paths[name]}</svg>;
}
