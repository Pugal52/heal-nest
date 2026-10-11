import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import Button from './Button';
import { DIRECTIONS_URL, SITE } from '../data/site';

/** Illustrative street-style backdrop (not to scale) shown until the interactive map is loaded. */
function MapBackdrop() {
  return (
    <svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
      <rect width="800" height="480" fill="#EFE3D3" />
      <path d="M-20 360 C120 330 200 420 340 400 C470 382 520 470 640 450 L820 430 L820 500 L-20 500Z" fill="#DCE3D0" />
      <rect x="560" y="40" width="170" height="110" rx="26" fill="#DCE3D0" />
      <g stroke="#FFFDF8" strokeLinecap="round" fill="none">
        <path d="M-20 240 L820 200" strokeWidth="22" />
        <path d="M250 -20 L300 500" strokeWidth="16" />
        <path d="M560 -20 L520 500" strokeWidth="14" />
        <path d="M-20 110 L500 150" strokeWidth="9" />
        <path d="M-20 340 L800 310" strokeWidth="9" />
        <path d="M400 -20 L430 220" strokeWidth="8" />
        <path d="M640 200 L820 140" strokeWidth="8" />
      </g>
      <g stroke="#E2D1BC" strokeLinecap="round" fill="none" strokeWidth="2">
        <path d="M-20 240 L820 200" /><path d="M250 -20 L300 500" /><path d="M560 -20 L520 500" />
      </g>
      <text x="40" y="228" fontSize="15" fill="#60351F" opacity="0.65" fontFamily="Inter, sans-serif" transform="rotate(-2.7 40 228)">Nethaji Road</text>
    </svg>
  );
}

export default function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="bg-sand/30 pb-20 pt-4 sm:pb-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] border border-sand shadow-soft">
          <div className="grid lg:grid-cols-3">
            <div className="flex flex-col justify-center bg-ivory p-8 sm:p-10">
              <h2 id="location-title" className="text-3xl font-semibold">Find the Clinic</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-cocoa/80">
                {SITE.fullName}<br />{SITE.addressLines[0]},<br />{SITE.addressLines[1]}
              </p>
              <Button href={DIRECTIONS_URL} external className="mt-7 self-start">
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </Button>
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${SITE.fullName} in Google Maps (new tab)`}
              className="group relative block min-h-[360px] overflow-hidden bg-sand lg:col-span-2"
            >
              <MapBackdrop />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-ivory shadow-lift ring-8 ring-terracotta/20 transition-transform duration-300 group-hover:-translate-y-1">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="rounded-xl bg-ivory/95 px-4 py-2 text-sm font-medium text-earth shadow-soft">{SITE.fullName}<br /><span className="font-normal text-cocoa/70">Nethaji Road, NRT Nagar, Theni</span></p>
              </div>
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-ivory/95 px-3.5 py-1.5 text-xs font-medium text-earth shadow-soft">
                Open in Google Maps <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
