"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    voiceflow?: any;
  }
}

// Prevent double-loading in dev (React Strict Mode runs effects twice)
let vfLoaded = false;

export default function VoiceflowWidget() {
  useEffect(() => {
    if (vfLoaded) return;
    vfLoaded = true;

    // If the script already exists, don't add it again
    const existing = document.querySelector(
      'script[src="https://cdn.voiceflow.com/widget-next/bundle.mjs"]'
    ) as HTMLScriptElement | null;

    const loadWidget = () => {
  const target = document.getElementById("vf-embed");
  if (!target) return; // don't fall back to bubble mode

  window.voiceflow?.chat?.load({
    verify: { projectID: "695455ac9f870f6285dfa464" },
    url: "https://general-runtime.voiceflow.com",
    versionID: "production",
    voice: { url: "https://runtime-api.voiceflow.com" },
    render: {
      mode: "embedded",
      target,
    },
  });
};


    if (existing) {
      // Script already on the page
      loadWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.onload = loadWidget;

    document.body.appendChild(script);
  }, []);

  return null;
}
