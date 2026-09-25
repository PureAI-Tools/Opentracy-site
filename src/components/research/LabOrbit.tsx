"use client";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { ResearchLabCopy } from "@/i18n/researchLab";
import Icon, { type IconName } from "../Icon";

const icons: IconName[] = ["trace", "terminal", "check", "spark"];
export default function LabOrbit({ copy: c }: { copy: ResearchLabCopy["orbit"] }) {
  const [phase, setPhase] = useState(0);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [visible, setVisible] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .2 });
    if (root.current) observer.observe(root.current);
    const onVisibility = () => { if (document.hidden) setRunning(false); };
    document.addEventListener("visibilitychange", onVisibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);
  useEffect(() => {
    if (!running || !visible) return;
    const timeout = window.setTimeout(() => {
      if (phase === 3) { setRunning(false); setFinished(true); }
      else setPhase(value => value + 1);
    }, 1400);
    return () => clearTimeout(timeout);
  }, [phase, running, visible]);
  function track(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    event.currentTarget.style.setProperty("--look-x", `${x * 8}px`);
    event.currentTarget.style.setProperty("--look-y", `${y * 8}px`);
    event.currentTarget.style.setProperty("--orbit-tilt", `${x * 7}deg`);
  }
  function resetPointer(event: PointerEvent<HTMLDivElement>) {
    for (const key of ["--look-x", "--look-y", "--orbit-tilt"]) event.currentTarget.style.removeProperty(key);
  }
  return <div ref={root} className="research-orbit" data-phase={phase} data-running={running && visible} onPointerMove={track} onPointerLeave={resetPointer}>
    <div className="orbit-canvas" role="group" aria-label={c.label}>
      <svg className="orbit-wires" viewBox="0 0 500 460" fill="none" aria-hidden="true"><ellipse cx="250" cy="222" rx="192" ry="167" stroke="#c6b5d6" strokeDasharray="4 7" /><ellipse cx="250" cy="222" rx="132" ry="197" stroke="#dfd5e8" transform="rotate(49 250 222)" /><path className="orbit-travel" d="M119 100C231-8 432 81 442 209S292 438 142 355 49 163 119 100Z" stroke="#ab8fc2" strokeWidth="3" pathLength="1" strokeDasharray=".07 .93" /></svg>
      <div className="orbit-creature" aria-label={c.agent} role="img"><span className="creature-antenna"><Icon name="asterisk" size="1em" /></span><div className="creature-face"><div className="creature-eyes"><span /><span /></div><span className="creature-smile" /><span className="creature-cheek cheek-left" /><span className="creature-cheek cheek-right" /></div><span className="creature-foot foot-left" /><span className="creature-foot foot-right" /></div>
      {c.phases.map((label, index) => <button key={label} type="button" className={`orbit-node orbit-node-${index}`} aria-pressed={phase === index} onClick={() => { setRunning(false); setFinished(false); setPhase(index); }}><span><Icon name={icons[index]} size={22} /></span>{label}<i aria-hidden="true" /></button>)}
      <span className="orbit-spark spark-one" aria-hidden="true"><Icon name="asterisk" size="1em" /></span><span className="orbit-spark spark-two" aria-hidden="true"><Icon name="star" size="1em" /></span><span className="orbit-hint">{c.hint}</span>
    </div>
    <div className="orbit-console"><div><span className="orbit-console-dot" /><span>{c.note}</span><code>loop_{String(phase + 1).padStart(2, "0")}</code></div><p aria-live="polite">{c.notes[phase]}</p><button type="button" onClick={() => { if (running) setRunning(false); else { if (finished || phase === 3) { setPhase(0); setFinished(false); } setRunning(true); } }}><Icon name={running ? "close" : "play"} size={14} />{running ? c.running : finished ? c.replay : c.run}</button></div>
  </div>;
}
