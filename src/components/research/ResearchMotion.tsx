"use client";
import { useEffect, useRef, type ReactNode } from "react";

export default function ResearchMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = element.querySelectorAll<HTMLElement>(".research-reveal");
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { (entry.target as HTMLElement).dataset.visible = "true"; observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    const configure = () => {
      element.dataset.motion = preference.matches ? "reduced" : "ready";
      reveals.forEach(target => {
        if (preference.matches || target.getBoundingClientRect().top < innerHeight) target.dataset.visible = "true";
        else observer.observe(target);
      });
    };
    const update = () => {
      frame = 0;
      const length = document.documentElement.scrollHeight - innerHeight;
      element.style.setProperty("--research-progress", String(length > 0 ? scrollY / length : 0));
      if (!preference.matches) element.style.setProperty("--research-scroll", `${Math.min(scrollY * .04, 35)}deg`);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    configure(); update();
    window.addEventListener("scroll", onScroll, { passive: true });
    preference.addEventListener("change", configure);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); preference.removeEventListener("change", configure); };
  }, []);
  return <div className="research-page" ref={root}><div className="research-progress" aria-hidden="true" />{children}</div>;
}
