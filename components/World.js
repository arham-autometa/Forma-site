"use client";

import { useEffect, useRef } from "react";
import { worldConfig } from "@/lib/world";

// Mounts the scroll-world scrub engine (public/world/scrub-engine.js) into a container.
export default function World() {
  const ref = useRef(null);

  useEffect(() => {
    let mounted = true;
    const boot = () => {
      if (mounted && ref.current && window.mountScrollWorld && !ref.current.dataset.mounted) {
        ref.current.dataset.mounted = "1";
        window.mountScrollWorld(ref.current, worldConfig);
      }
    };
    if (window.mountScrollWorld) boot();
    else {
      const s = document.createElement("script");
      s.src = "/world/scrub-engine.js";
      s.async = true;
      s.onload = boot;
      document.body.appendChild(s);
    }
    return () => { mounted = false; };
  }, []);

  return <div id="world" ref={ref} className="sw-root" />;
}
