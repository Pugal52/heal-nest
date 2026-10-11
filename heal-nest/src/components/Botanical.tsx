const leaf = (y: number, d: 1 | -1) =>
  `M60 ${y} C ${60 + d * 30} ${y - 6} ${60 + d * 42} ${y - 26} ${60 + d * 40} ${y - 36} C ${60 + d * 16} ${y - 34} ${60 + d * 2} ${y - 18} 60 ${y}`;

/** Line-drawn leaf sprig, inherits colour via currentColor. */
export function Sprig({ className = '' }: { className?: string }) {
  const ys = [172, 140, 108, 76, 46];
  return (
    <svg viewBox="0 0 120 200" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="M60 198 C57 150 63 100 60 14" />
      {ys.map((y, i) => (
        <g key={y}>
          <path d={leaf(y, i % 2 ? 1 : -1)} />
          <path d={leaf(y - 14, i % 2 ? -1 : 1)} />
        </g>
      ))}
      <path d="M60 14 C54 6 60 2 66 8 C66 12 63 14 60 14Z" />
    </svg>
  );
}

/** Small ornament divider: lines with a lotus-like diamond, a quiet nod to traditional kolam motifs. */
export function Ornament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className={className} aria-hidden="true" focusable="false">
      <path d="M0 8H62M98 8H160" />
      <path d="M80 1 L87 8 L80 15 L73 8Z" />
      <circle cx="66" cy="8" r="1.3" fill="currentColor" />
      <circle cx="94" cy="8" r="1.3" fill="currentColor" />
    </svg>
  );
}
