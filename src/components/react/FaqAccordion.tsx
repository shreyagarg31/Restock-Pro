import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'How does Restock Pro detect restocks?',
    a: 'We listen for Shopify inventory updates via webhooks. When a subscribed product is back in stock, we queue and send notification emails automatically.',
  },
  {
    q: 'Do I need to edit my theme code?',
    a: 'No. Restock Pro uses a Theme App Extension. Enable it in the theme editor — no Liquid coding required.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. Restock Pro is in free beta with full access to restock emails, subscriber management, and exports.',
  },
  {
    q: 'Can customers unsubscribe?',
    a: 'Yes. Every email includes an unsubscribe link. Customers can also unsubscribe from your storefront.',
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div key={faq.q} className="glass-card overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
          >
            <span className="card-title text-lg">{faq.q}</span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              className="shrink-0 text-brand-400 text-xl leading-none"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className={cn('card-body px-6 pb-4')}>{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
