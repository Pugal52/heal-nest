import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { APPROACH_STEPS } from '../data/site';

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="section-y">
      <div className="container-page">
        <SectionHeading
          id="approach-title"
          title="Care That Begins With Understanding"
          intro="Not every treatment is right for every person, so each step is about finding what fits you."
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* horizontal connector on desktop */}
          <span className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-sand via-terracotta/60 to-sand md:block" aria-hidden="true" />
          {/* vertical connector on mobile */}
          <span className="absolute bottom-8 left-8 top-8 w-px bg-sand md:hidden" aria-hidden="true" />
          {APPROACH_STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
              <Reveal delay={i * 90} className="flex gap-5 md:flex-col md:items-center">
                <span className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full border-4 border-ivory bg-earth text-ivory shadow-soft">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-terracotta text-xs font-semibold text-ivory">{i + 1}</span>
                </span>
                <div className="md:mt-5">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-cocoa/75">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
