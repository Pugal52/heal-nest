import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  width?: number;
  height?: number;
}

/** Image with a loading skeleton, lazy loading and a graceful fallback if the file fails to load. */
export default function SmartImage({ src, alt, className = '', eager = false, width, height }: Props) {
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');

  if (state === 'error') {
    return (
      <div role="img" aria-label={alt} className={`flex flex-col items-center justify-center gap-2 bg-sand text-earth/70 ${className}`}>
        <ImageOff className="h-7 w-7" aria-hidden="true" />
        <span className="px-4 text-center text-xs">Image unavailable</span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${state === 'loading' ? 'skeleton' : ''} ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setState('ready')}
        onError={() => setState('error')}
        className={`h-full w-full object-cover transition-opacity duration-500 ${state === 'ready' ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
