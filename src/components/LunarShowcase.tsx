"use client";
import { useState } from "react";
import type { LunarCopy } from "@/i18n/lunar";
import { navigateTabs } from "./LunarDemo";
import FullscreenImage from "./FullscreenImage";
import Icon from "./Icon";

const screenshots = ["intelligence-overview.png", "cost-details.png", "eval-overview.png"];
export default function LunarShowcase({ copy: c }: { copy: Pick<LunarCopy, "productTabs" | "productCaption"> }) {
  const [tab, setTab] = useState(0);
  return <div className="lunar-showcase"><div className="showcase-tabs" role="tablist" aria-label={c.productCaption}>{c.productTabs.map((label, i) => <button key={label} role="tab" id={`showcase-tab-${i}`} aria-selected={tab === i} aria-controls={`showcase-panel-${i}`} tabIndex={tab === i ? 0 : -1} onClick={() => setTab(i)} onKeyDown={e => navigateTabs(e, i, 3, setTab)}><Icon name={(["trace", "cost", "spark"] as const)[i]} />{label}</button>)}</div>
    <div className="showcase-frame" role="tabpanel" id={`showcase-panel-${tab}`} aria-labelledby={`showcase-tab-${tab}`} tabIndex={0}><div className="showcase-chrome"><span><i /><i /><i /></span><span>Lunar / {c.productTabs[tab]}</span><Icon name="shield" size={13} /></div><FullscreenImage src={`/screenshots/${screenshots[tab]}`} alt={`Lunar — ${c.productTabs[tab]}`} className="lunar-product-image" /></div><p className="showcase-caption">{c.productCaption}</p>
  </div>;
}
