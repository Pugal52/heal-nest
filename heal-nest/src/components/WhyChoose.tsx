import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { Sprig } from './Botanical';
import { WHY_ITEMS } from '../data/site';

export default function WhyChoose() {
  return (
    <section id="why" aria-labelledby="why-title" className="section-y relative overflow-hidden bg-sand">
      <Sprig className="pointer-events-none absolute -left-6 top-10 h-64 w-32 rotate-[14deg] text-earth/15" />
      <Sprig className="pointer-events-none absolute -right-8 bottom-0 h-72 w-36 -rotate-[16deg] text-earth/15" />
      <div className="container-page relative">
        <SectionHeading id="why-title" title="Why Choose Heal Nest?" />
        <ul className="mx-auto mt-14 grid max-w-5xl gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 60} className="flex gap-4">
                <Icon className="mt-1 h-8 w-8 flex-none text-earth" strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-cocoa/80">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
