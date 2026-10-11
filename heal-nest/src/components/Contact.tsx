import { ExternalLink, MapPin, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SmartImage from './SmartImage';
import Button from './Button';
import { SITE } from '../data/site';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          title="Call to Book Your Appointment"
          intro="Appointments are booked by phone. Call the clinic to speak with the team, ask your questions and confirm a date and time."
        />

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center rounded-3xl bg-earth p-8 text-ivory shadow-lift sm:p-12">
            <h3 className="font-serif text-3xl font-semibold !text-ivory">{SITE.fullName}</h3>
            <address className="mt-8 space-y-6 not-italic">
              <p className="flex gap-3 text-[15px] leading-relaxed text-ivory/90">
                <MapPin className="mt-1 h-5 w-5 flex-none text-sand" aria-hidden="true" />
                <span>{SITE.addressLines[0]},<br />{SITE.addressLines[1]}</span>
              </p>
              <p className="flex items-center gap-4 text-ivory">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ivory/10">
                  <Phone className="h-5 w-5 text-sand" aria-hidden="true" />
                </span>
                <a href={`tel:${SITE.phone}`} aria-label={`Call ${SITE.phone}`} className="font-sans text-[1.75rem] font-semibold leading-none tracking-wider underline-offset-8 [font-variant-numeric:lining-nums_tabular-nums] hover:underline">{SITE.phoneDisplay}</a>
              </p>
            </address>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={`tel:${SITE.phone}`} variant="light"><Phone className="h-4 w-4" aria-hidden="true" /> Call to Book</Button>
              <Button href={SITE.listingUrl} variant="outlineLight" external>
                Business listing <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </div>
            <p className="mt-8 border-t border-ivory/20 pt-5 text-sm leading-relaxed text-ivory/75">
              Please call to confirm availability. For an emergency, contact your nearest hospital or call 112.
            </p>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-lift">
            <SmartImage src="/images/waiting-area.webp" alt="Reception and waiting area at Heal Nest with sofas and the clinic logo on the wall" className="absolute inset-0 h-full w-full" />
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/80 to-transparent px-6 pb-5 pt-14 text-sm text-ivory">Reception and waiting area</p>
          </div>
        </div>
      </div>
    </section>
  );
}
