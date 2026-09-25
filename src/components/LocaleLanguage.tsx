"use client";
import { useEffect } from "react";
import type { Locale } from "@/i18n/config";
export default function LocaleLanguage({ locale }: { locale: Locale }) {
  useEffect(() => { document.documentElement.lang = locale === "pt" ? "pt-BR" : locale; }, [locale]);
  return null;
}
