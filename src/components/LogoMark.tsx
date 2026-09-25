import brand from "@/lib/brand.json";

function SymbolPaths() {
  return <><path d={brand.moon} fill="currentColor" /><circle className="lunar-logo-satellite" cx="44" cy="19" r="10" fill={brand.yellow} stroke="currentColor" strokeWidth="2.5" /></>;
}

export default function LogoMark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true"><SymbolPaths /></svg>;
}

export function LunarWordmark() {
  return <svg className="lunar-logo-lockup" width="152" height="36" viewBox="0 0 270 64" fill="none" aria-hidden="true">
    <SymbolPaths />
    <g transform="translate(79 4)" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">{brand.letters.map(path => <path key={path} d={path} />)}</g>
  </svg>;
}
export function LunarMoon({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 160 160" className={className} fill="none" aria-hidden="true">
    <path d="M122 119A64 64 0 0 1 51 25C13 40 11 95 39 121c24 23 61 26 83-2Z" fill="#FFDC70" stroke="#282832" strokeWidth="2.5" />
    <ellipse cx="52" cy="87" rx="3.3" ry="5" fill="#282832" /><ellipse cx="77" cy="95" rx="3.3" ry="5" fill="#282832" />
    <path d="M56 105q6 9 13 2" stroke="#282832" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="43" cy="100" rx="7" ry="4" fill="#F2A782" /><ellipse cx="83" cy="107" rx="7" ry="4" fill="#F2A782" />
    <path d="m110 33 3 10 10 3-10 3-3 10-3-10-10-3 10-3 3-10Z" fill="#B1A3DE" /><path d="m137 75 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" fill="#282832" />
  </svg>;
}
