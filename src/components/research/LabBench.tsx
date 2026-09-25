"use client";
import { useEffect, useState, type KeyboardEvent } from "react";
import type { ResearchLabCopy } from "@/i18n/researchLab";
import type { RLEnvironmentCopy } from "@/i18n/rlEnvironment";
import RLEnvironment from "../RLEnvironment";
import Icon from "../Icon";

function EvaluationExperiment({ copy: c }: { copy: ResearchLabCopy["evaluation"] }) {
  const [candidate, setCandidate] = useState(0);
  const [checked, setChecked] = useState(0);
  const [running, setRunning] = useState(false);
  const fixture = candidate === 0 ? '{"category":"other"}' : '{"request_id":"T-042","category":"billing"}';
  const parsed = JSON.parse(fixture);
  const results = [typeof parsed === "object", typeof parsed.request_id === "string" && typeof parsed.category === "string", parsed.category === "billing"];
  const passed = results.slice(0, checked).filter(Boolean).length;
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      setChecked(value => value + 1);
      if (checked === 2) setRunning(false);
    }, 650);
    return () => clearTimeout(timer);
  }, [running, checked]);
  return <div className="research-eval" role="group" aria-label={c.label}>
    <div className="experiment-toolbar"><span><Icon name="trace" size={16} />eval_suite</span><label>{c.candidate}<select value={candidate} disabled={running} onChange={event => { setCandidate(Number(event.target.value)); setChecked(0); }}>{c.versions.map((label, index) => <option key={label} value={index}>{label}</option>)}</select></label></div>
    <p className="eval-input">{c.input}</p>
    <div className="eval-output"><span>{c.output}<code>v0.{candidate + 1}</code></span><pre>{JSON.stringify(parsed, null, 2)}</pre></div>
    <div className="eval-checks">{c.tests.map((label, index) => <div key={label} data-result={checked > index ? (results[index] ? "pass" : "fail") : "pending"}><span className="eval-check-icon"><Icon name={checked > index ? (results[index] ? "check" : "close") : "code"} size={15} /></span><strong>{label}</strong><span>{checked > index ? (results[index] ? c.pass : c.fail) : c.pending}</span></div>)}</div>
    <div className="eval-result" aria-live="polite">{checked === 3 ? <><strong>{passed}/3</strong><span>{c.result}</span><span aria-hidden="true"><Icon name={passed === 3 ? "asterisk" : "retry"} size="1em" /></span></> : <p>{c.ready}</p>}</div>
    <button className="research-experiment-button" type="button" disabled={running} onClick={() => { setChecked(0); setRunning(true); }}><Icon name="play" size={15} />{running ? c.running : checked ? c.reset : c.run}</button><p className="experiment-note">{c.note}</p>
  </div>;
}

function SmallModelExperiment({ copy: c }: { copy: ResearchLabCopy["smallModel"] }) {
  const [stage, setStage] = useState(0);
  const [task, setTask] = useState(0);
  const output = task === 0 ? { invoice_id: "LNR-042", total: 128.5 } : { request_id: "T-042", category: "billing" };
  return <div className="research-small-model" role="group" aria-label={c.label} data-stage={stage}>
    <div className="experiment-toolbar"><span><Icon name="spark" size={16} />small_by_design</span></div>
    <label className="slm-task-select">{c.taskLabel}<select value={task} onChange={event => { setTask(Number(event.target.value)); setStage(0); }}>{c.tasks.map((label, index) => <option key={label} value={index}>{label}</option>)}</select></label>
    <div className="slm-steps" role="group" aria-label={c.label}>{c.steps.map((label, index) => <button key={label} type="button" aria-pressed={stage === index} onClick={() => setStage(index)}><span>{index + 1}</span>{label}</button>)}</div>
    <div className="slm-diagram" aria-hidden="true"><div className="slm-reference"><div>{Array.from({ length: 25 }, (_, index) => <i key={index} />)}</div><span>{c.teacher}</span></div><div className="slm-transfer"><span /><Icon name="arrow" size={24} /></div><div className="slm-student"><div>{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</div><span>{c.student}</span><b>smol <Icon name="star" size="1em" /></b></div></div>
    <div className="slm-stage-detail" aria-live="polite"><span><Icon name={stage === 2 ? "check" : stage === 1 ? "spark" : "book"} size={17} />{[c.dataset, c.distill, c.test][stage]}</span><p>{c.descriptions[stage]}</p></div>
    <div className="slm-example"><span>{stage === 2 ? c.output : c.task}</span>{stage === 2 ? <pre>{JSON.stringify(output, null, 2)}</pre> : <p>{c.tasks[task]}<Icon name="code" size={21} /></p>}</div>
    <p className="experiment-note">{c.note}</p>
  </div>;
}

export default function LabBench({ copy: c, rlCopy }: { copy: ResearchLabCopy; rlCopy: RLEnvironmentCopy }) {
  const [selected, setSelected] = useState(0);
  function keyboard(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % 3 : event.key === "ArrowLeft" ? (index + 2) % 3 : event.key === "Home" ? 0 : event.key === "End" ? 2 : null;
    if (next === null) return;
    event.preventDefault(); setSelected(next);
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }
  return <div className="research-bench">
    <div className="research-bench-tabs" role="tablist" aria-label={c.bench.label}>{c.bench.tabs.map((tab, index) => <button id={`bench-tab-${index}`} key={tab} type="button" role="tab" aria-selected={selected === index} aria-controls={`bench-panel-${index}`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => keyboard(event, index)}><Icon name={(["route", "check", "code"] as const)[index]} size={18} />{tab}</button>)}</div>
    <div className="research-bench-panel" id={`bench-panel-${selected}`} role="tabpanel" aria-labelledby={`bench-tab-${selected}`} tabIndex={0}>
      <div className="research-bench-copy"><span className="bench-doodle" aria-hidden="true"><Icon name={(["arrow-wave", "asterisk", "star"] as const)[selected]} size="1em" /></span><h3>{c.bench.titles[selected][0]}<br />{c.bench.titles[selected][1]}</h3><p>{c.bench.descriptions[selected]}</p><div className="bench-tags">{c.bench.tags[selected].map(tag => <span key={tag}>{tag}</span>)}</div><span className="bench-sketch" aria-hidden="true"><svg viewBox="0 0 120 65" fill="none"><path d="M5 10c40-15 55 53 100 30m-22-10 22 10-11 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span></div>
      <div className={`research-experiment experiment-${selected}`}>
        {selected === 0 ? <RLEnvironment copy={rlCopy} /> : selected === 1 ? <EvaluationExperiment copy={c.evaluation} /> : <SmallModelExperiment copy={c.smallModel} />}
      </div>
    </div>
    <p className="research-bench-note">{c.bench.note}</p>
  </div>;
}
