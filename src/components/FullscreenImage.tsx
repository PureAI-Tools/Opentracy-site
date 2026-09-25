"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Icon from "./Icon";
export default function FullscreenImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const wasOpen = useRef(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const { locale } = useParams();
  const labels = locale === "pt" ? { expand: "Ampliar imagem", close: "Fechar imagem" } : locale === "es" ? { expand: "Ampliar imagen", close: "Cerrar imagen" } : { expand: "Expand image", close: "Close image" };
  useEffect(() => {
    const previous = document.body.style.overflow;
    if (open) { dialog.current?.showModal(); wasOpen.current = true; document.body.style.overflow = "hidden"; }
    else { dialog.current?.close(); if (wasOpen.current) { trigger.current?.focus(); wasOpen.current = false; } }
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  const close = () => { setOpen(false); };
  return <>
    <button ref={trigger} type="button" className="lunar-image-trigger" onClick={() => setOpen(true)} aria-label={`${labels.expand}: ${alt}`}><Image src={src} alt={alt} width={1560} height={878} sizes="(max-width: 720px) 90vw, 1100px" className={className} /><span className="image-expand-hint"><Icon name="external" size={14} />{labels.expand}</span></button>
    <dialog ref={dialog} className="lunar-image-dialog" onCancel={event => { event.preventDefault(); close(); }} onClose={() => setOpen(false)} onClick={e => { if (e.target === e.currentTarget) close(); }} aria-label={alt}>
      <button type="button" onClick={close} className="lunar-image-close" aria-label={labels.close}><Icon name="close" size={20} />{labels.close}</button>
      {open && <Image src={src} alt={alt} width={1800} height={1100} sizes="95vw" className="lunar-image-expanded" />}
    </dialog>
  </>;
}
