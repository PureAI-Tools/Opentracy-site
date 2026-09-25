"use client";

import { useState, type KeyboardEvent } from "react";
import type { AILabCopy } from "@/i18n/aiLab";
import Icon from "./Icon";
import LogoMark from "./LogoMark";
import RLEnvironment from "./RLEnvironment";
import type { RLEnvironmentCopy } from "@/i18n/rlEnvironment";

export default function AILabProject({ copy: c, animationCopy }: { copy: AILabCopy["project"]; animationCopy: RLEnvironmentCopy }) {
  const [selected, setSelected] = useState(0);
  const project = c.cases[selected];

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % c.cases.length
      : event.key === "ArrowLeft" ? (index - 1 + c.cases.length) % c.cases.length
        : event.key === "Home" ? 0 : event.key === "End" ? c.cases.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    setSelected(next);
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return <div className="lab-project">
    <div className="lab-project-top"><span><LogoMark size={23} />{c.title}</span><span className="lab-project-example">{c.example}</span></div>
    <div className="lab-project-tabs" role="tablist" aria-label={c.example}>
      {c.cases.map((item, index) => <button key={item.tab} type="button" id={`project-tab-${index}`} role="tab" tabIndex={selected === index ? 0 : -1} aria-selected={selected === index} aria-controls={`project-panel-${index}`} onClick={() => setSelected(index)} onKeyDown={event => onKeyDown(event, index)}>{item.tab}</button>)}
    </div>
    <div className="lab-project-content" id={`project-panel-${selected}`} role="tabpanel" aria-labelledby={`project-tab-${selected}`} tabIndex={0}>
      <h2>{project.title}</h2>
      <p className="lab-project-goal"><span>{c.goal}</span>{project.goal}</p>
      {selected === 0 ? <RLEnvironment copy={animationCopy} /> : <><div className="lab-project-flow">
        <div><span className="lab-flow-icon"><Icon name="code" size={18} /></span><div><span>{c.source}</span><p>{project.source}</p></div></div>
        <div className="lab-flow-build"><span className="lab-flow-icon"><LogoMark size={24} /></span><div><span>{c.build}</span><p>{project.build}</p></div></div>
        <div><span className="lab-flow-icon"><Icon name="shield" size={18} /></span><div><span>{c.deliver}</span><p>{project.deliver}</p></div></div>
      </div>
      <div className="lab-project-criteria"><span>{c.criteria}</span><div>{project.criteria.map(item => <span key={item}><Icon name="check" size={12} />{item}</span>)}</div></div></>}
    </div>
    <div className="lab-project-foot"><Icon name="route" size={14} />{c.footer}</div>
  </div>;
}
