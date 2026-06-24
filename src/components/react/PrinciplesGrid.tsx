import { ScrollReveal } from './ScrollReveal';

const principles = [
  {
    icon: '◇',
    title: 'Solve the right problem',
    desc: 'Stockouts cost sales. We help you capture demand before it walks away.',
  },
  {
    icon: '◇',
    title: 'Ship in minutes',
    desc: 'Theme app extension — no code, no agency. Enable and go live.',
  },
  {
    icon: '◇',
    title: 'Earn customer trust',
    desc: 'Automatic restock emails with unsubscribe built in. Reliable delivery.',
  },
];

export function PrinciplesGrid() {
  return (
    <section className="border-y hairline bg-base px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:divide-x md:divide-white/10">
        {principles.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1} className="md:px-8 first:md:pl-0 last:md:pr-0">
            <span className="text-brand-400 text-sm">{p.icon}</span>
            <h3 className="card-title mt-3">{p.title}</h3>
            <p className="card-body mt-3">{p.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
