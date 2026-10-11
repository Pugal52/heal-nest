import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { RATING_SUMMARY, REVIEWS, SITE } from '../data/site';

function Stars({ n }: { n: number }) {
  return (
    <span role="img" aria-label={`${n} out of 5 stars`} className="flex gap-0.5 text-[#C98F2B]">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="h-4 w-4" fill={i < n ? 'currentColor' : 'none'} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function Reviews() {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(REVIEWS.length);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const step = first ? first.offsetWidth + 24 : el.clientWidth;
    const perView = Math.max(1, Math.round((el.clientWidth + 24) / step));
    const count = Math.max(1, REVIEWS.length - perView + 1);
    setPages(count);
    setActive(Math.min(count - 1, Math.round(el.scrollLeft / step)));
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const goTo = (i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
  };
  const move = (d: number) => goTo(Math.max(0, Math.min(pages - 1, active + d)));

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section-y bg-sand/30">
      <div className="container-page">
        <SectionHeading id="reviews-title" title="What Patients Say on Google" intro="Reviews posted by patients on our Google listing, shown as written." />

        {RATING_SUMMARY && (
          <p className="mt-8 flex items-center justify-center gap-3 text-earth">
            <Stars n={Math.round(RATING_SUMMARY.rating)} />
            <span className="font-serif text-2xl font-semibold">{RATING_SUMMARY.rating.toFixed(1)}</span>
            <span className="text-sm text-cocoa/70">from {RATING_SUMMARY.count} Google reviews</span>
          </p>
        )}

        <div className="relative mt-12" role="region" aria-roledescription="carousel" aria-label="Patient reviews">
          <ul
            ref={track}
            onScroll={update}
            tabIndex={0}
            aria-label="Reviews, scroll sideways to see more"
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {REVIEWS.map((r, i) => (
              <li
                key={r.author}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${REVIEWS.length}`}
                className="w-[88%] flex-none snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <figure className="card flex h-full flex-col p-7 sm:p-8">
                  <Stars n={r.stars} />
                  <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-cocoa/85">“{r.text}”</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-earth font-serif text-lg text-ivory" aria-hidden="true">{r.author[0]}</span>
                    <span>
                      <span className="block text-[15px] font-semibold leading-snug text-earth">{r.author}</span>
                      <span className="block text-xs text-cocoa/60">Review posted on Google</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className={`mt-6 items-center justify-center gap-4 ${pages > 1 ? 'flex' : 'hidden'}`}>
            <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Previous review" className="rounded-full border border-earth/30 p-2.5 text-earth transition hover:bg-earth hover:text-ivory disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-earth">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2" aria-hidden="true">
              {Array.from({ length: pages }, (_, i) => (
                <button key={i} type="button" tabIndex={-1} onClick={() => goTo(i)} className={`h-2.5 rounded-full transition-all ${i === active ? 'w-6 bg-earth' : 'w-2.5 bg-earth/25'}`} />
              ))}
            </div>
            <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="Next review" className="rounded-full border border-earth/30 p-2.5 text-earth transition hover:bg-earth hover:text-ivory disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-earth">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-cocoa/65">
          Reviews are individual patients’ opinions as posted on Google. Experiences and results differ from person to person, and no outcome is guaranteed.
        </p>
        <div className="mt-6 text-center">
          <Button href={SITE.reviewsUrl} external>
            Read More Reviews on Google <ExternalLink className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
