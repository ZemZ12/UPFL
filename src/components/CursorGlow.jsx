import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

const colors = [
  { glow: 'rgba(234,179,8,0.45)',  dot: '#facc15' },  // yellow
  { glow: 'rgba(34,197,94,0.45)',  dot: '#4ade80' },  // green
  { glow: 'rgba(59,130,246,0.45)', dot: '#60a5fa' },  // blue
];

export default function CursorGlow() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 18, mass: 0.7 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 18, mass: 0.7 });
  const dotX   = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const dotY   = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const glowRef  = useRef(null);
  const dotRef   = useRef(null);
  const colorIdx = useRef(0);
  const timer    = useRef(null);

  const applyColor = (idx) => {
    const c = colors[idx];
    if (glowRef.current) glowRef.current.style.background = c.glow;
    if (dotRef.current)  dotRef.current.style.background  = c.dot;
  };

  useEffect(() => {
    applyColor(0);

    // cycle color every 2s
    timer.current = setInterval(() => {
      colorIdx.current = (colorIdx.current + 1) % colors.length;
      applyColor(colorIdx.current);
    }, 2000);

    const move = e => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const isInteractive = el =>
      el.matches('a,button,[role="button"],input,select,textarea,label,[class*="cursor-pointer"]') ||
      !!el.closest('a,button,[role="button"]');

    const onEnter = e => {
      if (!isInteractive(e.target)) return;
      glowRef.current?.classList.add('is-hovering');
      dotRef.current?.classList.add('dot-hidden');
    };
    const onLeave = e => {
      if (!isInteractive(e.target)) return;
      glowRef.current?.classList.remove('is-hovering');
      dotRef.current?.classList.remove('dot-hidden');
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    return () => {
      clearInterval(timer.current);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{`
        .cursor-glow {
          position: fixed;
          width: 52px;
          height: 52px;
          border-radius: 9999px;
          filter: blur(18px);
          opacity: 0.75;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.3s ease, opacity 0.3s ease, filter 0.3s ease, background 0.6s ease;
          transform: translate(-50%, -50%) scale(1);
        }
        .cursor-glow.is-hovering {
          transform: translate(-50%, -50%) scale(2.8);
          opacity: 0.95;
          filter: blur(22px);
        }
        .cursor-dot {
          position: fixed;
          width: 7px;
          height: 7px;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease, background 0.6s ease;
          transform: translate(-50%, -50%) scale(1);
        }
        .cursor-dot.dot-hidden {
          transform: translate(-50%, -50%) scale(0);
        }
      `}</style>

      <motion.div
        ref={glowRef}
        className="cursor-glow"
        style={{ left: springX, top: springY }}
      />
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        style={{ left: dotX, top: dotY }}
      />
    </>
  );
}
