import { MapPin, Phone } from 'lucide-react';
import Button from './Button';
import SmartImage from './SmartImage';
import { Sprig } from './Botanical';
import { SITE, TRUST_ITEMS } from '../data/site';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-ivory pt-[4.5rem]">
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-sand/50 blur-3xl" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-7">
          <p className="hero-in text-xs font-semibold tracking-[0.22em]" style={{ color: '#5d6b51' }}>
            TRADITIONAL WISDOM • HOLISTIC WELLNESS
          </p>
          <h1 id="hero-title" className="hero-in mt-5 max-w-2xl text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-[4.5rem]" style={{ animationDelay: '0.1s' }}>
            Rediscover Balance. Reconnect With Nature.
          </h1>
          <p className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-cocoa/80" style={{ animationDelay: '0.2s' }}>
            Experience personalized wellness through traditional Siddha and Ayurvedic practices, therapeutic care, and a holistic approach to well-being at Heal Nest Health Care Clinic, Theni.
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '0.3s' }}>
            <Button href={`tel:${SITE.phone}`}><Phone className="h-4 w-4" aria-hidden="true" /> Call to Book</Button>
            <Button href="#treatments" variant="secondary">Explore Our Treatments</Button>
          </div>
          <p className="hero-in mt-8 flex items-center gap-2 text-sm text-cocoa/75" style={{ animationDelay: '0.4s' }}>
            <MapPin className="h-4 w-4 text-terracotta" aria-hidden="true" /> Located in Theni, Tamil Nadu
          </p>
        </div>

        <div className="hero-in relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md" style={{ animationDelay: '0.25s' }}>
          <div className="absolute -right-5 -top-5 h-full w-full rounded-t-[999px] rounded-b-[2.5rem] bg-sand" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] border-4 border-ivory shadow-lift">
            <SmartImage src="/images/treatment-room.webp" alt="Calm treatment room at Heal Nest with a traditional wooden therapy table and warm lighting" eager width={765} height={1020} className="h-full w-full" />
          </div>
          <Sprig className="absolute -bottom-6 -left-10 h-36 w-20 rotate-[-18deg] text-sage" />
          <Sprig className="absolute -right-8 bottom-10 hidden h-24 w-14 rotate-[24deg] text-terracotta/70 sm:block" />
        </div>
      </div>

      <div className="border-y border-sand/80 bg-sand/30">
        <ul className="container-page grid gap-4 py-5 sm:grid-cols-3 sm:gap-6">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-3 text-[15px] font-medium text-earth">
              <Icon className="h-5 w-5 text-sage" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
