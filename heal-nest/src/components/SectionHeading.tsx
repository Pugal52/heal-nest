import { Ornament } from './Botanical';

interface Props {
  title: string;
  intro?: string;
  center?: boolean;
  id?: string;
}

export default function SectionHeading({ title, intro, center = true, id }: Props) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2 id={id} className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      <Ornament className={`mt-5 h-4 w-40 text-terracotta ${center ? 'mx-auto' : ''}`} />
      {intro && <p className="mt-5 text-[17px] leading-relaxed text-cocoa/80">{intro}</p>}
    </div>
  );
}
