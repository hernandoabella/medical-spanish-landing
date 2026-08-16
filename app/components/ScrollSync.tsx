"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global safety net for the landing page's scroll-reveal animations.
 *
 * gsap.from() + ScrollTrigger hides sections (opacity: 0) the moment the
 * animation is created, but trigger positions are measured before images
 * and fonts have loaded. When late-loading images shift the layout, some
 * triggers never fire and whole sections stay invisible (e.g. FAQ cards
 * or testimonials "not loading"). Recalculating after the layout settles
 * makes every trigger fire correctly.
 */
export default function ScrollSync() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    const t1 = window.setTimeout(refresh, 400);
    const t2 = window.setTimeout(refresh, 1500);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    // Images load lazily, so refresh again whenever any of them finishes.
    const onImageLoad = () => ScrollTrigger.refresh();
    document.querySelectorAll("img").forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", onImageLoad, { once: true });
      }
    });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}
