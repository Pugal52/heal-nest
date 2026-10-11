import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import Approach from './components/Approach';
import WhyChoose from './components/WhyChoose';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import Modal from './components/Modal';
import MobileActionBar from './components/MobileActionBar';
import { LEGAL } from './data/site';
import type { Treatment } from './data/site';

export default function App() {
  const [selected, setSelected] = useState<Treatment | null>(null);
  const [legal, setLegal] = useState<'privacy' | 'disclaimer' | null>(null);

  const doc = legal ? LEGAL[legal] : null;

  return (
    <>
      <a href="#main" className="sr-only z-[100] rounded-full bg-earth px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Treatments selected={selected} onSelect={setSelected} />
        <Approach />
        <WhyChoose />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
        <Location />
      </main>
      <Footer onTreatment={setSelected} onLegal={setLegal} />
      <MobileActionBar />
      <Modal open={!!doc} onClose={() => setLegal(null)} title={doc?.title ?? ''}>
        {doc && (
          <div>
            <h3 className="text-3xl font-semibold">{doc.title}</h3>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-cocoa/85">
              {doc.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
