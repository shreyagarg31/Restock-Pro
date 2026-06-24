import { motion } from 'framer-motion';

const features = [
  {
    title: 'Notify Me widget',
    description:
      'Theme app extension on out-of-stock product pages. Customers subscribe in one click.',
  },
  {
    title: 'Restock emails',
    description: 'Automatic emails when inventory returns — powered by reliable delivery.',
  },
  {
    title: 'Subscriber dashboard',
    description: 'See who wants what. Export subscribers and understand demand.',
  },
  {
    title: 'Demand insights',
    description: 'Track interest by product so you can restock smarter.',
  },
];

export function FeatureBento() {
  return (
    <section className="bg-base px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="section-title">Everything you need to recover lost sales</h2>
          <p className="section-lead mx-auto mt-4 max-w-2xl">
            From storefront widget to automated emails — Restock Pro handles the full back-in-stock
            workflow.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass-card relative flex min-h-[200px] flex-col overflow-hidden p-8 transition-shadow hover:glow-brand"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-violet/5 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-body mt-3 flex-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
