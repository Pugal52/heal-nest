import { useCallback, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { useEscape, useLockBody } from '../lib/hooks';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

/** Accessible modal dialog: focus moves in, Tab is trapped, Esc closes, focus returns on close. */
export default function Modal({ open, onClose, title, children }: Props) {
  const panel = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const handleClose = useCallback(onClose, [onClose]);
  useLockBody(open);
  useEscape(open, handleClose);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus();
    return () => previous?.focus?.();
  }, [open]);

  if (!open) return null;

  const trap = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !panel.current) return;
    const items = panel.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6" onKeyDown={trap}>
      <div className="absolute inset-0 bg-cocoa/60 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-ivory p-7 shadow-lift sm:rounded-3xl sm:p-9"
      >
        <button ref={closeBtn} onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2 text-earth hover:bg-sand/60">
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
