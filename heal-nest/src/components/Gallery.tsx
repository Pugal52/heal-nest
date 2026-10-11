import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SmartImage from './SmartImage';
import { Sprig } from './Botanical';
import { GALLERY } from '../data/site';
import { useEscape, useLockBody } from '../lib/hooks';

const REAL = GALLERY.filter((g) => !g.placeholder);

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  const close = useCallback(() => {
    setIndex(null);
    opener.current?.focus();
  }, []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + REAL.length) % REAL.length)), []);

  useLockBody(open);
  useEscape(open, close);

  useEffect(() => {
    if (!open) return;
    closeBtn.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [open, step]);

  const current = index !== null ? REAL[index] : null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="section-y">
      <div className="container-page">
        <SectionHeading id="gallery-title" title="A Look Around the Clinic" intro="Photographs of the Heal Nest clinic space. Select an image to view it larger." />
        <ul className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
          {GALLERY.map((item) => {
            const realIdx = REAL.indexOf(item);
            return (
              <li key={item.caption} className="break-inside-avoid">
                {item.placeholder ? (
                  <figure className={`relative flex ${item.ratio} flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-dashed border-sage/60 bg-sand/40 p-6 text-center`}>
                    <Sprig className="h-24 w-12 text-sage" />
                    <figcaption className="text-sm text-earth">
                      <span className="block font-semibold">{item.caption}</span>
                      <span className="mt-1 block text-cocoa/60">Placeholder. Replace with a clinic photograph.</span>
                    </figcaption>
                  </figure>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      opener.current = e.currentTarget;
                      setIndex(realIdx);
                    }}
                    aria-label={`View larger: ${item.caption}`}
                    className="group relative block w-full overflow-hidden rounded-3xl shadow-soft"
                  >
                    <SmartImage src={item.src!} alt={item.alt} className={`${item.ratio} w-full transition-transform duration-500 group-hover:scale-[1.03]`} />
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-cocoa/75 to-transparent px-4 pb-3 pt-10 text-sm text-ivory">
                      {item.caption}
                      <ZoomIn className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={`Image viewer: ${current.caption}`} className="fixed inset-0 z-[80] flex items-center justify-center bg-cocoa/95 p-4">
          <button ref={closeBtn} onClick={close} aria-label="Close image viewer" className="absolute right-4 top-4 rounded-full bg-ivory/10 p-3 text-ivory hover:bg-ivory/20">
            <X className="h-6 w-6" />
          </button>
          <button onClick={() => step(-1)} aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory hover:bg-ivory/20 sm:left-6">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={() => step(1)} aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory hover:bg-ivory/20 sm:right-6">
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure className="flex max-h-full max-w-4xl flex-col items-center">
            <img src={current.src} alt={current.alt} className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain" />
            <figcaption className="mt-4 text-center text-sm text-sand" aria-live="polite">
              {current.caption} ({(index ?? 0) + 1} of {REAL.length})
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
