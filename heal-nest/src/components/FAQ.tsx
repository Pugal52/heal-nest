import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { FAQS } from '../data/site';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y bg-sand/30">
      <div className="container-page max-w-3xl">
        <SectionHeading id="faq-title" title="Frequently Asked Questions" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q} className="card overflow-hidden">
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-serif text-xl font-semibold text-earth"
                  >
                    {f.q}
                    <ChevronDown className={`h-5 w-5 flex-none text-terracotta transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-cocoa/80">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
