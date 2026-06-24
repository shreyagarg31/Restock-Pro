import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PRODUCT = {
  name: 'Aurora Wireless Headphones',
  category: 'Audio · Pro Series',
  price: '$189.00',
  image:
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=480&h=480&fit=crop&q=80',
  url: 'northern-lights.store/products/aurora-headphones',
};

function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-300">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BrowserChrome() {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 px-3 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      </div>
      <div className="min-w-0 flex-1 truncate rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-text-muted">
        {PRODUCT.url}
      </div>
    </div>
  );
}

function CollapsedWidget({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-2.5 rounded-xl border border-brand-500/25 bg-white/[0.04] px-3 py-2.5 text-left transition hover:border-brand-500/45 hover:bg-white/[0.06]"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-[0_0_16px_-4px_rgba(124,92,252,0.6)]">
        <BellIcon />
      </span>
      <span className="flex-1 text-[13px] font-medium text-white">Notify me when available</span>
      <ChevronRight className="shrink-0 text-text-muted transition group-hover:translate-x-0.5 group-hover:text-brand-300" />
    </button>
  );
}

function ExpandedWidget({ onCollapse }: { onCollapse?: () => void }) {
  return (
    <div className="overflow-hidden rounded-xl border border-brand-500/30 bg-elevated/90 shadow-[0_0_40px_-12px_rgba(124,92,252,0.35)]">
      <div className="relative px-3.5 pb-2.5 pt-3.5">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
        <div className="flex items-start gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/15 text-brand-300">
            <BellIcon />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-300">
              Back in stock alerts
            </p>
            <p className="text-[13px] font-medium text-white">Get notified when it&apos;s back</p>
            <p className="mt-0.5 text-[11px] leading-snug text-text-muted">
              We&apos;ll email you the moment it&apos;s available again.
            </p>
          </div>
          <button
            type="button"
            onClick={onCollapse}
            className="shrink-0 rounded-md p-1.5 text-text-muted transition hover:bg-white/5 hover:text-white"
            aria-label="Collapse"
          >
            <ChevronUp />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-3.5 pb-3">
        <div className="relative">
          <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2">
            <MailIcon />
          </span>
          <div className="rounded-lg border border-brand-500/40 bg-white/5 py-2 pl-8 pr-2.5 text-[11px] text-text-muted shadow-[0_0_0_3px_rgba(124,92,252,0.08)]">
            Email address
          </div>
        </div>
        <div className="relative">
          <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2">
            <UserIcon />
          </span>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] py-2 pl-8 pr-2.5 text-[11px] text-text-muted">
            Name (optional)
          </div>
        </div>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-gradient py-2 text-[11px] font-semibold text-white shadow-[0_0_20px_-6px_rgba(124,92,252,0.7)]"
        >
          Notify Me
          <span aria-hidden>→</span>
        </button>
      </div>

      <div className="flex items-center justify-center gap-1 border-t border-white/5 px-3.5 py-2 text-text-muted">
        <ShieldIcon />
        <span className="text-[10px]">No spam. Unsubscribe anytime.</span>
      </div>
    </div>
  );
}

export function WidgetPreview() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const timer = setInterval(() => setExpanded((v) => !v), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-elevated/80 shadow-2xl backdrop-blur-md glow-brand">
      <BrowserChrome />

      <div className="p-3.5">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-muted/50">
          <img
            src={PRODUCT.image}
            alt=""
            width={272}
            height={160}
            className="h-28 w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="mt-3">
          <p className="text-[13px] font-medium leading-snug text-white">{PRODUCT.name}</p>
          <p className="mt-0.5 text-[10px] text-text-muted">{PRODUCT.category}</p>
          <p className="mt-2 text-[11px]">
            <span className="font-medium text-white">{PRODUCT.price}</span>
            <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-text-muted">
              Sold out
            </span>
          </p>
        </div>

        <div className="mt-3">
          <AnimatePresence mode="wait">
            {expanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
              >
                <ExpandedWidget onCollapse={() => setExpanded(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
              >
                <CollapsedWidget onClick={() => setExpanded(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          type="button"
          disabled
          className="mt-2.5 w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/[0.03] py-2 text-[11px] font-medium text-text-muted"
        >
          Sold out
        </button>
      </div>
    </div>
  );
}
