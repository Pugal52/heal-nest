import SmartImage from './SmartImage';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { ABOUT_FEATURES } from '../data/site';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] rounded-br-[7rem] shadow-lift">
              <SmartImage src="/images/consultation-room.webp" alt="Consultation room at Heal Nest with warm wood flooring and a desk" className="h-full w-full" />
            </div>
            <div className="absolute -bottom-8 -right-3 hidden w-40 overflow-hidden rounded-3xl border-4 border-ivory shadow-lift sm:block">
              <SmartImage src="/images/entrance.webp" alt="Potted plants at the entrance of the clinic" className="aspect-[3/4] w-full" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading id="about-title" center={false} title="A Holistic Approach to Your Well-Being" />
          <p className="mt-6 text-[17px] leading-[1.8] text-cocoa/85">
            At Aadhan’s Heal Nest Health Care Clinic, we bring traditional wellness practices and personalized therapeutic care together in a calm, welcoming environment. Our services encompass Siddha, Ayurveda, Panchakarma, Varma, foot reflexology, and wellness-focused programs designed around individual needs.
          </p>
          <ul className="mt-9 space-y-5">
            {ABOUT_FEATURES.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-sand/70 text-earth">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-cocoa/75">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
