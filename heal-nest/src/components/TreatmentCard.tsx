import { ArrowRight } from 'lucide-react';
import type { Treatment } from '../data/site';

export default function TreatmentCard({ treatment, onLearnMore }: { treatment: Treatment; onLearnMore: (t: Treatment) => void }) {
  const Icon = treatment.icon;
  return (
    <article className="card group flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-terracotta/50 hover:shadow-lift">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand/70 text-earth transition-colors group-hover:bg-earth group-hover:text-ivory">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-2xl font-semibold leading-tight">{treatment.name}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cocoa/75">{treatment.short}</p>
      <button
        type="button"
        onClick={() => onLearnMore(treatment)}
        aria-label={`Learn more about ${treatment.name}`}
        className="mt-6 inline-flex items-center gap-1.5 self-start text-[15px] font-semibold text-earth underline-offset-4 hover:text-terracotta hover:underline"
      >
        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>
    </article>
  );
}
