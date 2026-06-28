import { motion } from 'framer-motion';
import { APP_INSTALL_URL } from '@/lib/constants';
import { RadarVisual } from './RadarVisual';
import { ShimmerButton } from './ShimmerButton';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-base px-4 pb-24 pt-12 sm:px-6 sm:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-violet/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300"
          >
            Free at launch · Built for Shopify merchants
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title mt-6 text-4xl sm:text-5xl lg:text-6xl"
          >
            Back-in-stock alerts with a quieter kind of{' '}
            <span className="text-gradient italic">leverage.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-lead mt-6 max-w-xl"
          >
            Capture demand on sold-out products and send automatic restock emails when inventory
            returns — set up in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <ShimmerButton href={APP_INSTALL_URL}>
              Install on Shopify
            </ShimmerButton>
            <ShimmerButton href="/features" variant="outline">
              See how it works
            </ShimmerButton>
          </motion.div>
        </div>

        <RadarVisual />
      </div>
    </section>
  );
}
