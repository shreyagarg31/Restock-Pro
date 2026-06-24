import { cn } from '@/lib/utils';

interface ShimmerButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  variant?: 'primary' | 'outline';
}

export function ShimmerButton({
  href,
  children,
  className,
  external = false,
  variant = 'primary',
}: ShimmerButtonProps) {
  const base =
    'relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]';

  if (variant === 'outline') {
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={cn(base, 'border border-white/20 text-white hover:border-white/40', className)}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(base, 'glow-cta bg-brand-gradient text-white', className)}
    >
      <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <span className="relative">{children}</span>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[shimmer_2\\.5s_infinite\\] { animation: none; }
        }
      `}</style>
    </a>
  );
}
