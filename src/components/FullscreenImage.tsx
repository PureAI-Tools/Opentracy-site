"use client";

import { useEffect, useState } from "react";

type FullscreenImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function FullscreenImage({
  src,
  alt,
  className,
}: FullscreenImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex max-w-full items-center justify-center cursor-zoom-in bg-transparent p-0 text-left outline-none focus:outline-none focus-visible:outline-none"
        style={{
          appearance: "none",
          margin: 0,
          padding: 0,
          border: 0,
          borderRadius: 0,
          width: "auto",
          height: "auto",
          WebkitTapHighlightColor: "transparent",
        }}
        aria-label={`Expand image: ${alt}`}
      >
        <img src={src} alt={alt} className={className} />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-black/5 p-4 sm:p-8 flex items-center justify-center"
          style={{
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-2 rounded-lg border border-foreground/30 text-foreground text-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            aria-label="Close fullscreen image"
          >
            Close
          </button>

          <div className="h-full w-full flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="max-h-[75vh] w-auto max-w-[80vw] rounded-lg border-[5px] border-[#0c0b0b] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
