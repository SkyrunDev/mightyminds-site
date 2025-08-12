// src/components/CurvedDivider.tsx
'use client';
import { useEffect, useRef } from 'react';

export default function CurvedDivider({
  width = 1440,
  height = 160,
  top = '#2c5364',   // color que “sale” del banner
  bottom = '#f5f7fa' // color de la siguiente sección
}: { width?: number; height?: number; top?: string; bottom?: string }) {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const el = pathRef.current!;
    const defaultCurve = height + 70; // curva suave
    const rate = 3;
    let ticking = false;

    const update = (y: number) => {
      const curve = Math.max(height, defaultCurve - y / rate);
      const d = `M ${width} ${height} Q ${width/2} ${curve} 0 ${height} L 0 0 L ${width} 0 Z`;
      el.setAttribute('d', d);
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { update(window.scrollY || 0); ticking = false; });
        ticking = true;
      }
    };
    update(window.scrollY || 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [height, width]);

  return (
    <div aria-hidden style={{ position: 'relative', zIndex: 0, filter: 'drop-shadow(0 -6px 18px rgba(0,0,0,.25))' }}>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none">
        <defs>
          <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={top} />
            <stop offset="100%" stopColor={bottom} />
          </linearGradient>
        </defs>
        <path ref={pathRef} d={`M ${width} ${height} Q ${width/2} ${height+70} 0 ${height} L 0 0 L ${width} 0 Z`} fill="url(#curveGrad)" />
      </svg>
    </div>
  );
}
