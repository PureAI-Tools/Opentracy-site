"use client";
import { useEffect, useRef, useState } from "react";
import type { LunarCopy } from "@/i18n/lunar";
import Icon from "./Icon";
import { navigateTabs } from "./LunarDemo";

const snippets = [
`import os
from openai import OpenAI

client = OpenAI(
    base_url=os.environ["LUNAR_BASE_URL"],
    api_key=os.environ["LUNAR_API_KEY"],
)

response = client.chat.completions.create(
    model="openai/gpt-4o-mini",
    messages=[{"role": "user", "content": "Hello, Lunar!"}],
)

print(response.choices[0].message.content)`,
`import OpenAI from "openai";

const client = new OpenAI({
  baseURL: process.env.LUNAR_BASE_URL,
  apiKey: process.env.LUNAR_API_KEY,
});

const response = await client.chat.completions.create({
  model: "openai/gpt-4o-mini",
  messages: [{ role: "user", content: "Hello, Lunar!" }],
});

console.log(response.choices[0].message.content);`,
`curl "$LUNAR_BASE_URL/chat/completions" \\
  -H "Authorization: Bearer $LUNAR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "openai/gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "Hello, Lunar!"}
    ]
  }'`,
];
// Tokenize the source once; never run replacements over generated markup.
export function HighlightedCode({ code }: { code: string }) {
  return <>{code.split(/("(?:[^"\\]|\\.)*"|'[^']*'|\b(?:import|from|const|await|new|print|return)\b|#[^\n]*)/g).map((token, i) => <span key={i} className={/^["']/.test(token) ? "syntax-green" : /^(import|from|const|await|new|return)$/.test(token) ? "syntax-purple" : token.startsWith("#") ? "syntax-comment" : token === "print" ? "syntax-yellow" : undefined}>{token}</span>)}</>;
}
export default function LunarCode({ copy: c }: { copy: Pick<LunarCopy, "copy" | "copied" | "copyError" | "codeNote"> }) {
  const [tab, setTab] = useState(0);
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current); }, []);
  async function copy() {
    try { await navigator.clipboard.writeText(snippets[tab]); setStatus("copied"); }
    catch { setStatus("error"); }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 3000);
  }
  const select = (i: number) => { setTab(i); setStatus("idle"); };
  return <div className="lunar-code-window"><div className="lunar-code-toolbar"><div role="tablist" aria-label="SDK">{["Python", "TypeScript", "cURL"].map((label, i) => <button type="button" key={label} role="tab" id={`code-tab-${i}`} aria-selected={i === tab} aria-controls={`code-panel-${i}`} tabIndex={i === tab ? 0 : -1} onClick={() => select(i)} onKeyDown={e => navigateTabs(e, i, 3, select)}>{label}</button>)}</div><button type="button" className="copy-code" onClick={copy} aria-label={c.copy}><Icon name={status === "copied" ? "check" : "copy"} size={15} /><span aria-live="polite">{status === "copied" ? c.copied : c.copy}</span></button></div>
    <div role="tabpanel" id={`code-panel-${tab}`} aria-labelledby={`code-tab-${tab}`} tabIndex={0}><pre><code>{snippets[tab].split("\n").map((line, i) => <span className="code-line" key={i}><span className="line-number" aria-hidden="true">{i + 1}</span><span><HighlightedCode code={line} />{"\n"}</span></span>)}</code></pre></div>
    <div className="lunar-code-note" role="status"><Icon name="terminal" size={14} />{status === "error" ? c.copyError : c.codeNote}</div>
  </div>;
}
