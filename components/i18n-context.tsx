"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface I18nContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: "Home",
    websites: "Websites",
    marketing: "Marketing",
    ai_automation: "AI Automation",
    contact: "Contact",
    hero_title: "The Future of Digital Services",
    hero_desc:
      "Scale your business with our cutting-edge website design, marketing strategies, and AI automation solutions.",
    get_started: "Get Started",
    domain_search: "Find your perfect domain",
    search: "Search",
    services: "Services",
    footer_desc: "Switching your business to the digital future.",
    templates: "Templates",
    plans: "Plans",
    submit: "Submit",
  },
  ar: {
    home: "الرئيسية",
    websites: "المواقع",
    marketing: "التسويق",
    ai_automation: "أتمتة الذكاء الاصطناعي",
    contact: "اتصل بنا",
    hero_title: "مستقبل الخدمات الرقمية",
    hero_desc: "قم بتوسيع نطاق عملك من خلال تصميم المواقع الحديثة واستراتيجيات التسويق وحلول أتمتة الذكاء الاصطناعي.",
    get_started: "ابدأ الآن",
    domain_search: "ابحث عن نطاقك المثالي",
    search: "بحث",
    services: "الخدمات",
    footer_desc: "تحويل عملك إلى المستقبل الرقمي.",
    templates: "القوالب",
    plans: "الخطط",
    submit: "إرسال",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en")

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }, [lang])

  const t = (key: string) => {
    return translations[lang][key as keyof (typeof translations)["en"]] || key
  }

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
