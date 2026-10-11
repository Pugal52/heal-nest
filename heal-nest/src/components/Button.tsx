import type { ReactNode, MouseEventHandler } from 'react';

type Variant = 'primary' | 'secondary' | 'light' | 'outlineLight';

const styles: Record<Variant, string> = {
  primary: 'bg-earth text-ivory hover:bg-cocoa shadow-soft',
  secondary: 'border border-earth/40 text-earth hover:border-earth hover:bg-sand/50',
  light: 'bg-ivory text-earth hover:bg-sand',
  outlineLight: 'border border-ivory/50 text-ivory hover:bg-ivory/10',
};

interface Props {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  external?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({ children, variant = 'primary', href, onClick, external, className = '', type = 'button', disabled }: Props) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} onClick={onClick} className={base} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
