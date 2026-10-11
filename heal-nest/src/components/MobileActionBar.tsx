import { Phone } from 'lucide-react';
import { SITE } from '../data/site';

/** Persistent, compact call-to-book bar, mobile only. */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-ivory/95 px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(66,43,32,0.25)] backdrop-blur md:hidden">
      <a href={`tel:${SITE.phone}`} className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-full bg-earth py-3 text-[15px] font-medium text-ivory">
        <Phone className="h-4 w-4" aria-hidden="true" /> Call to Book: {SITE.phoneDisplay}
      </a>
    </div>
  );
}
