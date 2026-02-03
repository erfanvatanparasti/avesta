import { useEffect, useState, useRef } from "react";

export type Orientation = "portrait" | "landscape";

function getOrientation(): Orientation {
  if (typeof window === "undefined") return "portrait";
  return window.matchMedia("(orientation: portrait)").matches
    ? "portrait"
    : "landscape";
}

function getDims() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0, orientation: "portrait" as Orientation };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: getOrientation(),
  };
}

export function useViewport(throttleMs = 100) {
  const [state, setState] = useState(getDims);
  const frame = useRef<number | null>(null);
  const lastExec = useRef<number>(0);

  useEffect(() => {
    function handle() {
      const now = performance.now();
      if (now - lastExec.current < throttleMs) {
        if (frame.current) cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(handle);
        return;
      }
      lastExec.current = now;
      const next = getDims();
      setState((prev) => {
        if (
          prev.width === next.width &&
          prev.height === next.height &&
          prev.orientation === next.orientation
        )
          return prev;
        return next;
      });
    }

    window.addEventListener("resize", handle);
    window.addEventListener("orientationchange", handle);
    const mq = window.matchMedia("(orientation: portrait)");
    mq.addEventListener?.("change", handle);

    return () => {
      window.removeEventListener("resize", handle);
      window.removeEventListener("orientationchange", handle);
      mq.removeEventListener?.("change", handle);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [throttleMs]);

  return state;
}
