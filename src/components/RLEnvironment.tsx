"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import { environmentReducer, initialEnvironment, rewardFor, EPISODES, type Team } from "@/lib/rl-environment";
import type { RLEnvironmentCopy } from "@/i18n/rlEnvironment";
import Icon from "./Icon";
import LogoMark from "./LogoMark";

const PHASE_DURATION = [1900, 1400, 1800, 2400];
const paths = ["M0 94H16Q30 94 30 80V54Q30 44 42 44H60", "M0 94H16Q30 94 30 108V134Q30 144 42 144H60"];

export default function RLEnvironment({ copy: c }: { copy: RLEnvironmentCopy }) {
  const [state, dispatch] = useReducer(environmentReducer, undefined, () => initialEnvironment());
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const { phase, episode, blocked, action, values, playing, done } = state;
  const reward = rewardFor(state);
  const resultVisible = phase >= 2;
  const activeTeam = phase >= 1 ? action : null;
  const motionRunning = playing && inView && pageVisible;
  const message = done ? c.done : phase === 2 ? (reward > 0 ? c.positive : c.negative) : c.messages[phase];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreference = () => { if (preference.matches) dispatch({ type: "pause" }); };
    const onVisibility = () => setPageVisible(!document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        if (!preference.matches) dispatch({ type: "play" });
      }
    }, { threshold: 0.35 });
    if (root.current) observer.observe(root.current);
    onVisibility();
    preference.addEventListener("change", onPreference);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreference);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (!motionRunning || done) return;
    const timer = window.setTimeout(() => dispatch({ type: "tick" }), PHASE_DURATION[phase]);
    return () => window.clearTimeout(timer);
  }, [motionRunning, done, phase, episode]);

  return <div ref={root} className="rl-environment" role="group" aria-label={c.label} data-phase={phase} data-playing={motionRunning} data-done={done}>
    <div className="rl-meta"><span>{c.episode} <strong>{String(episode).padStart(2, "0")}</strong> / {String(EPISODES).padStart(2, "0")}</span><span className="rl-example">{c.example}</span></div>

    <ol className="rl-phases" aria-label={c.label}>{c.phases.map((label, index) => <li key={label} aria-current={phase === index ? "step" : undefined} data-complete={phase > index}><span aria-hidden="true">{index + 1}</span>{label}</li>)}</ol>

    <div className="rl-world">
      <div className="rl-world-toolbar"><span><Icon name="route" size={13} />RL environment</span><select aria-label={c.environment} value={blocked} onChange={event => dispatch({ type: "environment", blocked: Number(event.target.value) as Team })}>{c.scenarios.map((scenario, index) => <option key={scenario} value={index}>{scenario}</option>)}</select></div>
      <div className="rl-board">
        <div className="rl-agent-column"><span className="rl-request"><span aria-hidden="true" />{c.task} #{String(episode).padStart(2, "0")}</span><div className="rl-agent" data-active={phase === 0 || phase === 3}><LogoMark size={33} /><strong>{c.agent}</strong><span aria-hidden="true">π(a | s)</span></div></div>
        <svg className="rl-connections" viewBox="0 0 60 188" preserveAspectRatio="none" fill="none" aria-hidden="true">
          {paths.map((path, team) => <g key={path}>
            <path d={path} className="rl-wire" />
            {activeTeam === team && <path d={path} className="rl-wire-active" />}
            {phase === 1 && action === team && <path key={`action-${episode}`} d={path} pathLength="1" className="rl-signal" />}
            {phase === 2 && action === team && <path key={`reward-${episode}`} d={path} pathLength="1" className={`rl-signal rl-signal-return ${reward < 0 ? "rl-signal-negative" : ""}`} />}
          </g>)}
        </svg>
        <div className="rl-teams">{([0, 1] as const).map(team => {
          const full = blocked === team;
          const received = resultVisible && action === team && !full;
          const selected = activeTeam === team;
          const status = selected && resultVisible ? (full ? c.rejected : c.allocated) : (full ? c.full : c.available);
          return <div key={team} className="rl-team" data-selected={selected} data-full={full} data-received={received}>
            <div className="rl-team-heading"><strong>{c.team} {team === 0 ? "A" : "B"}</strong><span className="rl-team-status">{status}</span></div>
            <div className="rl-capacity" aria-hidden="true">{[0, 1, 2].map(slot => <span key={slot} data-filled={full || slot === 0} data-new={received && slot === 1}>{received && slot === 1 && <Icon name="check" size={13} />}</span>)}</div>
            <span className="rl-capacity-label">{c.capacity}<strong>{full ? 3 : received ? 2 : 1} / 3</strong></span>
          </div>;
        })}</div>
      </div>
    </div>

    <div className="rl-feedback" aria-live={playing ? "off" : "polite"} aria-atomic="true"><span className="rl-reward" data-tone={resultVisible ? (reward > 0 ? "positive" : "negative") : "neutral"}>{resultVisible ? (reward > 0 ? "+1" : "−1") : <Icon name="trace" size={17} />}</span><p>{message}</p></div>
    <div className="rl-policy"><span title={c.policyHelp}>{c.policy}</span><div aria-label={c.policyHelp}>{values.map((value, team) => <span key={team} data-value={value > 0 ? "positive" : value < 0 ? "negative" : "neutral"}><b>{team === 0 ? "A" : "B"}</b><output>{value > 0 ? "+" : ""}{value.toFixed(2)}</output></span>)}</div></div>

    <div className="rl-controls">
      <button type="button" className="rl-play" onClick={() => dispatch({ type: playing ? "pause" : "play" })}>{playing ? <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="4" y="3" width="3" height="10" rx="1" /><rect x="9" y="3" width="3" height="10" rx="1" /></svg> : <Icon name="play" size={14} />}{playing ? c.pause : done ? c.replay : c.play}</button>
      <button type="button" className="rl-step" onClick={() => dispatch({ type: "step" })} disabled={done}>{c.step}<Icon name="arrow" size={14} /></button>
      <button type="button" className="rl-reset" onClick={() => dispatch({ type: "reset" })} aria-label={c.reset} title={c.reset}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10a8 8 0 1 1 1 7M4 4v6h6" /></svg></button>
    </div>
    <p className="rl-note">{c.note}</p>
  </div>;
}
