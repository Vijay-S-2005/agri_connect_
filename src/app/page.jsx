// src/app/page.js

"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function RedirectToLocale() {
  const router = useRouter();
  const localeActive = useLocale();

  useEffect(() => {
    router.push(`/${localeActive}`);
  }, [router]);

  return null;
}
