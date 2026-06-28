import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'How does Restock Pro know when to send emails?',
    a: 'Restock Pro watches your Shopify inventory. When a subscribed product is back in stock, customers are notified automatically.',
  },
  {
    q: 'Do I need to edit my theme code?',
    a: 'No. Restock Pro uses a Theme App Extension. Enable it in the theme editor — no Liquid coding required.',
  },
  {
    q: 'Is Restock Pro free?',
    a: 'Yes. Restock Pro is free at launch with full access to restock emails, subscriber management, demand insights, and exports. Paid plans may come later.',
  },
  {
    q: 'Can customers unsubscribe?',
    a: 'Yes. Every email includes an unsubscribe link. Customers can also unsubscribe from your storefront.',
  },
  {
    q: 'Does it work with product variants?',
    a: 'Yes. Waitlists are tracked per variant — so a customer waiting for a specific size or color gets notified for that exact option.',
  },
  {
    q: 'Where can I see what happened?',
    a: 'Past events in the app shows your notification history and restock-related activity, so you can review what was sent and when.',
  },
  {
    q: 'Can I tell if an email was delivered?',
    a: 'Yes. Past events shows the status of each notification — sent, delivered, or if there was an issue.',
  },
  {
    q: 'What are active subscribers?',
    a: 'Customers currently on your waitlist for out-of-stock products.',
  },
  {
    q: 'What does notifications sent mean?',
    a: 'Restock emails sent to waitlisted customers in the time period you have selected on the dashboard.',
  },
  {
    q: 'What are successful restocks?',
    a: 'Customers who were notified when a product came back in stock.',
  },
  {
    q: 'What is capturable value?',
    a: 'If every waitlisted customer bought at list price, this is the total demand on your top products. It is a planning signal, not revenue you have already earned.',
  },
  {
    q: 'Can I customize emails and the widget?',
    a: 'Yes, and it is included free at launch: subject, message, button text, colors, and fonts.',
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
