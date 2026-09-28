"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Locale, Dictionary } from "@/i18n/config";
import { i18n } from "@/i18n/config";
import { site } from "@/lib/site";
import { aiLabCopy } from "@/i18n/aiLab";
import { LunarWordmark } from "./LogoMark";
import OptionalLink from "./OptionalLink";
import Icon from "./Icon";
export default function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const wasOpen = useRef(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const labels = { en: { product: "Product", start: "Get started", language: "Language", close: "Close menu", skip: "Skip to content" }, pt: { product: "Produto", start: "Começar", language: "Idioma", close: "Fechar menu", skip: "Pular para o conteúdo" }, es: { product: "Producto", start: "Empezar", language: "Idioma", close: "Cerrar menú", skip: "Ir al contenido" } }[locale];
  const c = aiLabCopy[locale];
  const links = [
    { name: c.nav.solutions, href: `/${locale}#what-we-build` },
    { name: c.nav.process, href: `/${locale}#how-we-work` },
    { name: c.nav.technology, href: `/${locale}#our-technology` },
    { name: "AI Lab", href: `/${locale}/enterprise` },
  ];
  useEffect(() => {
    if (open) { dialog.current?.showModal(); wasOpen.current = true; }
    else { dialog.current?.close(); if (wasOpen.current) { trigger.current?.focus(); wasOpen.current = false; } }
    const previous = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);
  const close = () => { setOpen(false); };
  const language = <label className="lunar-language"><Icon name="globe" size={15} /><span className="sr-only">{labels.language}</span><select value={locale} onChange={e => { close(); router.push(pathname.replace(/^\/(en|es|pt)(?=\/|$)/, `/${e.target.value}`)); }}>
    {i18n.locales.map(lang => <option key={lang} value={lang}>{lang.toUpperCase()}</option>)}
  </select></label>;
  return <>
    <a href="#main-content" className="skip-link">{labels.skip}</a>
    <header className="lunar-header"><nav className="lunar-container lunar-nav" aria-label={locale === "en" ? "Main navigation" : "Menu principal"}>
      <Link href={`/${locale}`} className="lunar-wordmark" aria-label="Lunar"><LunarWordmark /></Link>
      <div className="lunar-desktop-links">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.name}</Link>)}</div>
      <div className="lunar-nav-actions">{language}<OptionalLink locale={locale} className="lunar-button lunar-button-dark" href={site.demo}>{c.nav.contact}<Icon name="arrow" size={15} /></OptionalLink></div>
      <button ref={trigger} className="lunar-menu-button" onClick={() => setOpen(true)} aria-label={dict.nav.toggleMenu} aria-expanded={open} aria-controls="mobile-navigation"><Icon name="menu" size={22} /></button>
    </nav></header>
    <dialog ref={dialog} id="mobile-navigation" className="lunar-mobile-dialog" onCancel={event => { event.preventDefault(); close(); }} onClose={() => setOpen(false)} onClick={e => { if (e.target === e.currentTarget) close(); }} aria-label={dict.nav.toggleMenu}>
      <div className="lunar-mobile-content"><div className="lunar-mobile-top"><span className="lunar-wordmark" role="img" aria-label="Lunar"><LunarWordmark /></span><button onClick={close} aria-label={labels.close}><Icon name="close" size={22} /></button></div>
        <nav>{links.map(link => <Link key={link.href} href={link.href} onClick={close} aria-current={pathname === link.href ? "page" : undefined}>{link.name}<Icon name="arrow" /></Link>)}</nav>
        <div className="lunar-mobile-bottom">{language}<OptionalLink locale={locale} className="lunar-button lunar-button-dark" href={site.demo} onClick={close}>{c.nav.contact}<Icon name="arrow" /></OptionalLink></div>
      </div>
    </dialog>
  </>;
}
