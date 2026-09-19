import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], summary';
const TEXT_SELECTOR = 'input, textarea, select, [contenteditable="true"]';

export function CursorFX() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsFinePointer || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const inner = innerRef.current;
    if (!dot || !ring || !inner) return;

    document.documentElement.classList.add("cursor-fx-active");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = mouseX;
    let ringY = mouseY;
    let pressed = false;
    let raf = 0;

    const setDotTransform = () => {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${pressed ? 0.5 : 1})`;
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotTransform();
      dot.style.opacity = "1";
      ring.style.opacity = "1";

      const target = e.target as Element | null;
      if (target?.closest(TEXT_SELECTOR)) {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
      } else if (target?.closest(INTERACTIVE_SELECTOR)) {
        inner.dataset.state = "hover";
      } else {
        inner.dataset.state = "default";
      }
    };

    const onDown = () => {
      pressed = true;
      setDotTransform();
      inner.dataset.active = "true";
    };
    const onUp = () => {
      pressed = false;
      setDotTransform();
      inner.dataset.active = "false";
    };
    const onLeaveDoc = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeaveDoc);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("cursor-fx-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeaveDoc);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[999]">
      <div ref={dotRef} className="cursor-fx-dot fixed left-0 top-0 h-1 w-1 rounded-full bg-accent opacity-0" />
      <div ref={ringRef} className="fixed left-0 top-0 opacity-0">
        <div ref={innerRef} className="cursor-fx-ring" data-state="default" data-active="false">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M1 9V3a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M35 9V3a2 2 0 0 0-2-2h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M1 27v6a2 2 0 0 0 2 2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M35 27v6a2 2 0 0 1-2 2h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
