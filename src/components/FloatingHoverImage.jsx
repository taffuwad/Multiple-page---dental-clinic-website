import React, { useEffect, useRef, useState } from 'react';

export default function FloatingHoverImage({ activeImg, mousePos }) {
  const wrapRef = useRef(null);
  const [renderedPos, setRenderedPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    if (!activeImg) return;

    const W = 300;
    const H = 380;
    const PAD = 16;
    const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

    const x = clamp(mousePos.x + 28, PAD, window.innerWidth - W - PAD);
    const y = clamp(mousePos.y - H / 2, PAD, window.innerHeight - H - PAD);

    setRenderedPos({ x, y });
  }, [mousePos, activeImg]);

  if (!activeImg) return null;

  return (
    <div
      ref={wrapRef}
      id="hoverImg"
      className={`hover-img ${activeImg ? 'is-visible' : ''}`}
      style={{
        transform: activeImg
          ? `translate3d(${renderedPos.x}px, ${renderedPos.y}px, 0)`
          : 'translate3d(-9999px, -9999px, 0)',
        transition: 'opacity 0.35s ease, transform 0.12s ease-out',
      }}
      aria-hidden="true"
    >
      <div className="hover-img__inner">
        {activeImg && (
          <img
            id="hoverImgEl"
            src={activeImg}
            alt="Treatment preview"
            decoding="async"
          />
        )}
      </div>
    </div>
  );
}
