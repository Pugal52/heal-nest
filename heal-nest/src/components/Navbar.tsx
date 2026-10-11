import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '../data/site';
import { useEscape, useLockBody } from '../lib/hooks';
import Button from './Button';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label={`${SITE.fullName}, home`}>
      <img src="/images/logo-emblem.webp" alt="" width={48} height={48} className={`h-12 w-12 object-contain ${light ? 'rounded-full bg-white p-0.5' : 'mix-blend-multiply'}`} />
      <span className="leading-none">
        <span className={`block font-serif text-sm italic ${light ? 'text-sand' : 'text-terracotta'}`}>Aadhan’s</span>
        <span className={`block font-serif text-[22px] font-semibold tracking-[0.18em] ${light ? 'text-ivory' : 'text-earth'}`}>HEAL NEST</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useLockBody(open);
  useEscape(open, () => setOpen(false));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-sand/80 bg-ivory/95 shadow-soft backdrop-blur' : 'bg-transparent'}`}>
      <nav aria-label="Main" className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <Brand />

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[15px] font-medium text-cocoa/85 transition-colors hover:text-terracotta">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href={`tel:${SITE.phone}`} className="hidden !px-5 !py-2.5 lg:inline-flex"><Phone className="h-4 w-4" aria-hidden="true" /> Call to Book</Button>
          <a href={`tel:${SITE.phone}`} aria-label={`Call ${SITE.phone}`} className="rounded-full p-2.5 text-earth hover:bg-sand/60 lg:hidden">
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="rounded-full p-2.5 text-earth hover:bg-sand/60 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="container-page max-h-[calc(100vh-4.5rem)] overflow-y-auto pb-8 pt-2 lg:hidden">
          <ul className="divide-y divide-sand/80">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-2xl text-earth">{l.label}</a>
              </li>
            ))}
          </ul>
          <Button href={`tel:${SITE.phone}`} className="mt-6 w-full"><Phone className="h-4 w-4" aria-hidden="true" /> Call to Book</Button>
        </div>
      )}
    </header>
  );
}
