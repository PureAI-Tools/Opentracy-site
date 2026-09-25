"use client";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { LunarCopy } from "@/i18n/lunar";
import Icon from "./Icon";
import LogoMark from "./LogoMark";

export function navigateTabs(event: KeyboardEvent, index: number, count: number, setTab: (value: number) => void) {
  let next = index;
  if (event.key === "ArrowRight") next = (index + 1) % count;
  else if (event.key === "ArrowLeft") next = (index - 1 + count) % count;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = count - 1;
  else return;
  event.preventDefault();
  setTab(next);
  const buttons = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
  buttons?.[next]?.focus();
}

const requests = [
  { id: "req_8f2a", model: "gpt-4o-mini", provider: "OpenAI", latency: "342 ms", cost: "$0.00012", tokens: 48 },
  { id: "req_7e1b", model: "claude-haiku-4-5", provider: "Anthropic", latency: "518 ms", cost: "$0.00028", tokens: 56 },
  { id: "req_6d0c", model: "gemini-2.0-flash", provider: "Google", latency: "286 ms", cost: "$0.00008", tokens: 42 },
];

export default function LunarDemo({ copy: c }: { copy: LunarCopy["demo"] }) {
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState(0);
  const [state, setState] = useState<"ready" | "running" | "done">("ready");
  const [fallback, setFallback] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const run = () => {
    if (state === "running") return;
    setState("running");
    timer.current = setTimeout(() => { setState("done"); setSelected(fallback ? 1 : 0); }, 900);
  };
  const request = requests[selected];
  return <div className="lunar-demo-wrap">
    <div className="lunar-demo">
      <div className="demo-top"><span className="demo-project"><LogoMark size={20} />{c.project}<Icon name="chevron" size={12} /></span><span className="demo-sample"><span />{c.sample}</span></div>
      <div className="demo-tabs" role="tablist" aria-label={c.sample}>{c.tabs.map((label, i) => <button type="button" key={label} role="tab" id={`demo-tab-${i}`} aria-selected={tab === i} aria-controls={`demo-panel-${i}`} tabIndex={tab === i ? 0 : -1} onClick={() => setTab(i)} onKeyDown={e => navigateTabs(e, i, 3, setTab)}><Icon name={(["route", "trace", "cost"] as const)[i]} size={15} />{label}</button>)}</div>
      <div className="demo-body" role="tabpanel" id={`demo-panel-${tab}`} aria-labelledby={`demo-tab-${tab}`} tabIndex={0}>
      {tab === 0 && <>
        <div className="demo-heading"><h3>{c.route}</h3><span>{c.connected}</span></div>
        <div className={`route-diagram ${state === "running" ? "is-routing" : ""}`}>
          <div className="route-app"><Icon name="code" size={23} /><span>{c.app}</span></div><div className="route-line"><Icon name="arrow" size={15} /></div>
          <div className="route-lunar"><LogoMark size={33} /><span>Lunar</span></div><div className="route-branches" aria-hidden="true"><i /><i /><i /></div>
          <div className="route-providers"><span className={state === "done" && !fallback ? "provider-selected" : ""}><span className="provider-symbol"><Icon name="asterisk" size="1em" /></span>OpenAI<i className={fallback ? "status-warning" : ""} /></span><span className={state === "done" && fallback ? "provider-selected" : ""}><span className="provider-symbol anthropic-symbol">A</span>Anthropic<i /></span><span><span className="provider-symbol google-symbol"><Icon name="star" size="1em" /></span>Google<i /></span></div>
        </div>
        <div className="demo-code"><div><span className="syntax-purple">client</span>.chat.completions.<span className="syntax-yellow">create</span>({"\n"}</div><div>{"  "}model=<span className="syntax-green">&quot;openai/gpt-4o-mini&quot;</span>,</div><div>{"  "}messages=[{"{"}<span className="syntax-green">&quot;role&quot;</span>: <span className="syntax-green">&quot;user&quot;</span>, ...{"}"}]</div><div>)</div></div>
        <div className="demo-result" aria-live="polite" aria-atomic="true"><div className="demo-result-label"><span className={state === "done" ? "result-success" : ""}><span className="status-dot" />{state === "running" ? c.running : state === "done" ? fallback ? c.recovered : c.success : c.ready}</span><span>{state === "done" ? fallback ? "518 ms" : "342 ms" : "— ms"}</span></div><p>{state === "done" ? fallback ? c.recoveredNote : c.response : c.waiting}</p></div>
        <div className="demo-controls"><label><input type="checkbox" checked={fallback} disabled={state === "running"} onChange={e => { setFallback(e.target.checked); setState("ready"); }} />{c.fallback}</label><button type="button" onClick={run} disabled={state === "running"}><Icon name="play" size={12} />{state === "running" ? c.running : state === "done" ? c.rerun : c.request}</button></div>
      </>}
      {tab === 1 && <>
        <div className="demo-heading"><h3>{c.trace}</h3><span>{c.traceNote}</span></div>
        <div className="demo-traces">{requests.map((r, i) => <button key={r.id} aria-pressed={i === selected} onClick={() => setSelected(i)}><span className="trace-check"><Icon name="check" size={12} /></span><span><strong>{r.model}</strong><small>{r.id}</small></span><span>{r.latency}</span><Icon name="chevron" size={13} /></button>)}</div>
        <dl className="trace-metadata"><div><dt>{c.status}</dt><dd className="result-success">200 OK</dd></div><div><dt>{c.cost}</dt><dd>{request.cost}</dd></div><div><dt>Tokens</dt><dd>{request.tokens}</dd></div></dl>
        <div className="trace-message"><span>user</span><p>{c.prompt}</p><span>assistant · {request.model}</span><p>{c.response}</p></div>
      </>}
      {tab === 2 && <>
        <div className="demo-heading"><h3>{c.costTitle}</h3><span>{c.costNote}</span></div>
        <div className="cost-summary"><span>{c.total}</span><strong>$0.00048</strong><span>146 tokens / 3 {c.tabs[1].toLowerCase()}</span></div>
        <div className="cost-bars">{requests.map((r, i) => <div key={r.id}><div><span>{r.provider}</span><strong>{r.cost}</strong></div><div className="cost-bar-track"><span style={{ width: `${[25, 58.33, 16.67][i]}%`, background: ["#B6A4DF", "#F1CF68", "#93C6BA"][i] }} /></div><small>{r.model}</small></div>)}</div>
      </>}
      </div>
      <div className="demo-foot"><span><span className="status-dot" />{c.disclaimer}</span><span className="demo-version">lunar / playground</span></div>
    </div>
    <div className="demo-sticker"><Icon name="check" size={13} /><span>OpenAI-compatible</span></div>
  </div>;
}
