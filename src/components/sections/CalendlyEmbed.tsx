"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
      }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/kountchouryan/30min";

type Prefill = {
  name?: string;
  email?: string;
  customAnswers?: Record<string, string>;
};

export default function CalendlyEmbed({ prefill }: { prefill?: Prefill }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefillRef = useRef(prefill);
  prefillRef.current = prefill;

  // Initialize once on mount; reads the latest prefill via ref.
  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return;
    const prefill = prefillRef.current;

    // Build the styled embed URL (brand colors + clean UI)
    const params = new URLSearchParams({
      hide_gdpr_banner: "1",
      primary_color: "0d9488", // brand teal
      background_color: "ffffff",
      text_color: "1e293b",
    });
    const url = `${CALENDLY_URL}?${params.toString()}`;

    const initWidget = () => {
      if (!window.Calendly || !containerRef.current) return;
      containerRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
        prefill: {
          name: prefill?.name,
          email: prefill?.email,
          customAnswers: prefill?.customAnswers,
        },
      });
    };

    // Load the Calendly widget script once, then initialize
    const existing = document.getElementById("calendly-widget-script");
    if (window.Calendly) {
      initWidget();
    } else if (existing) {
      existing.addEventListener("load", initWidget, { once: true });
    } else {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.id = "calendly-widget-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.addEventListener("load", initWidget, { once: true });
      document.body.appendChild(script);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget rounded-2xl"
      style={{ minWidth: "320px", width: "100%", height: "1050px" }}
    />
  );
}
