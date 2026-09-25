"use client";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { HighlightedCode } from "./LunarCode";
export default function CodeBlock({ code, language = "bash", className = "", showLanguage = true, showCopy = true }: { code: string; language?: string; className?: string; showLanguage?: boolean; showCopy?: boolean }) {
  const [status, setStatus] = useState("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { locale } = useParams();
  const labels = locale === "pt" ? ["Copiar", "Copiado", "Selecione o código para copiar"] : locale === "es" ? ["Copiar", "Copiado", "Selecciona el código para copiar"] : ["Copy", "Copied", "Select the code to copy"];
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  async function copy() {
    try { await navigator.clipboard.writeText(code); setStatus("copied"); } catch { setStatus("error"); }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  }
  return <div className={`code-block relative ${className}`}><div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5"><span className="text-xs text-muted">{showLanguage ? language : ""}</span>{showCopy && <button onClick={copy} className="text-xs text-muted" aria-label={labels[0]}><span aria-live="polite">{labels[status === "copied" ? 1 : status === "error" ? 2 : 0]}</span></button>}</div><pre className="overflow-x-auto p-4"><code className="text-sm leading-relaxed">{language === "python" ? <HighlightedCode code={code} /> : code}</code></pre></div>;
}
