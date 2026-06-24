const categories = [
  'Fashion brands',
  'Beauty stores',
  'Home goods',
  'Electronics',
  'Supplements',
  'Streetwear',
  'DTC brands',
  'Shopify Plus',
];

export function LogoMarquee() {
  const items = [...categories, ...categories];

  return (
    <section className="border-y hairline bg-elevated/50 py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-text-muted">
        Built for merchants who hate losing sales to stockouts
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 px-6">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-sm font-medium text-white/25"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; flex-wrap: wrap; width: 100%; justify-content: center; gap: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
