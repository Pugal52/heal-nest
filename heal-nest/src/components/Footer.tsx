import { Phone, MapPin } from 'lucide-react';
import { Brand } from './Navbar';
import Button from './Button';
import { Sprig } from './Botanical';
import { NAV_LINKS, SITE, TREATMENTS } from '../data/site';
import type { Treatment } from '../data/site';

interface Props {
  onTreatment: (t: Treatment) => void;
  onLegal: (k: 'privacy' | 'disclaimer') => void;
}

export default function Footer({ onTreatment, onLegal }: Props) {
  const linkCls = 'text-[15px] text-ivory/80 underline-offset-4 transition-colors hover:text-ivory hover:underline';
  return (
    <footer className="relative overflow-hidden bg-cocoa pb-28 pt-16 text-ivory md:pb-10">
      <Sprig className="pointer-events-none absolute -right-6 -top-4 h-56 w-28 rotate-[20deg] text-ivory/10" />
      <Sprig className="pointer-events-none absolute -bottom-10 left-1/3 hidden h-52 w-24 -rotate-[10deg] text-ivory/10 md:block" />
      <div className="container-page relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Brand light />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ivory/75">
              A holistic healthcare and wellness clinic in Theni offering Siddha, Ayurveda and Varma care, shaped around individual needs.
            </p>
            <Button href={`tel:${SITE.phone}`} variant="light" className="mt-6"><Phone className="h-4 w-4" aria-hidden="true" /> Call to Book</Button>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="font-serif text-xl font-semibold !text-sand">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => <li key={l.href}><a href={l.href} className={linkCls}>{l.label}</a></li>)}
            </ul>
          </nav>

          <nav aria-label="Footer treatments">
            <h3 className="font-serif text-xl font-semibold !text-sand">Treatments</h3>
            <ul className="mt-4 space-y-2.5">
              {TREATMENTS.map((t) => (
                <li key={t.id}>
                  <a href="#treatments" onClick={() => onTreatment(t)} className={linkCls}>{t.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-serif text-xl font-semibold !text-sand">Visit or call</h3>
            <address className="mt-4 space-y-4 not-italic">
              <p className="flex gap-3 text-[15px] leading-relaxed text-ivory/80">
                <MapPin className="mt-1 h-4 w-4 flex-none text-sand" aria-hidden="true" />
                <span>{SITE.addressLines[0]},<br />{SITE.addressLines[1]}</span>
              </p>
              <p className="flex items-center gap-3 text-ivory/90">
                <Phone className="h-4 w-4 flex-none text-sand" aria-hidden="true" />
                <a href={`tel:${SITE.phone}`} aria-label={`Call ${SITE.phone}`} className="text-[17px] font-medium tracking-wider [font-variant-numeric:lining-nums_tabular-nums] hover:underline">{SITE.phoneDisplay}</a>
              </p>
            </address>
          </div>
        </div>

        <p className="mt-14 max-w-3xl border-t border-ivory/15 pt-6 text-sm leading-relaxed text-ivory/65">
          The content of this website is for general information only and does not replace individual medical advice. Treatment suitability should be decided through professional assessment. In an emergency, call 112 or go to your nearest hospital.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-sm text-ivory/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><button type="button" onClick={() => onLegal('privacy')} className="underline-offset-4 hover:text-ivory hover:underline">Privacy Policy</button></li>
            <li><button type="button" onClick={() => onLegal('disclaimer')} className="underline-offset-4 hover:text-ivory hover:underline">Medical Disclaimer</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
