import SectionHeading from './SectionHeading';
import TreatmentCard from './TreatmentCard';
import Modal from './Modal';
import Button from './Button';
import Reveal from './Reveal';
import { Phone } from 'lucide-react';
import { SITE, TREATMENTS } from '../data/site';
import type { Treatment } from '../data/site';

interface Props {
  selected: Treatment | null;
  onSelect: (t: Treatment | null) => void;
}

export default function Treatments({ selected, onSelect }: Props) {
  const Icon = selected?.icon;
  return (
    <section id="treatments" aria-labelledby="treatments-title" className="section-y bg-sand/30">
      <div className="container-page">
        <SectionHeading
          id="treatments-title"
          title="Treatments and Services"
          intro="Traditional and complementary care, offered after a conversation about what you need. Select any service to read more."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {TREATMENTS.map((t, i) => (
            <li key={t.id}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <TreatmentCard treatment={t} onLearnMore={onSelect} />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Button href={`tel:${SITE.phone}`}><Phone className="h-4 w-4" aria-hidden="true" /> Call to Discuss Your Treatment</Button>
          <p className="mx-auto mt-4 max-w-xl text-sm text-cocoa/65">Treatment suitability is decided through professional assessment. Descriptions are general information, not medical advice.</p>
        </div>
      </div>

      <Modal open={!!selected} onClose={() => onSelect(null)} title={selected?.name ?? 'Treatment'}>
        {selected && Icon && (
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand/70 text-earth"><Icon className="h-6 w-6" aria-hidden="true" /></span>
            <h3 className="mt-4 text-3xl font-semibold">{selected.name}</h3>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-cocoa/85">
              {selected.detail.map((p) => <p key={p}>{p}</p>)}
            </div>
            <p className="mt-5 rounded-2xl bg-sand/50 p-4 text-sm leading-relaxed text-cocoa/80">
              Whether this suits you is decided after a professional assessment. It does not replace emergency care or necessary medical treatment.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={`tel:${SITE.phone}`}><Phone className="h-4 w-4" aria-hidden="true" /> Call to Discuss This Treatment</Button>
              <Button variant="secondary" onClick={() => onSelect(null)}>Close</Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
