import { useEffect } from "react";

export function useResetBodyInlineStyles(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const body = document.body;
    (() => {
      body.style.setProperty("position", "relative", "important");
    })();

    return () => {
      body.style.removeProperty("position");
    };
  }, [active]);
}
