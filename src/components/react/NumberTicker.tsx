import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface NumberTickerProps {
  value: string;
  label: string;
  description: string;
}

export function NumberTicker({ value, label, description }: NumberTickerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const numeric = value.match(/\d+/);
    if (!numeric) {
      setDisplay(value);
      return;
    }
    const target = parseInt(numeric[0], 10);
    const suffix = value.replace(numeric[0], '');
    let current = 0;
    const step = Math.max(1, Math.floor(target / 20));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setDisplay(`${target}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${current}${suffix}`);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card flex min-h-[200px] flex-col justify-center p-8 text-center"
    >
      <p className="text-4xl font-extrabold text-gradient">{display}</p>
      <p className="card-title mt-3">{label}</p>
      <p className="card-body mt-2">{description}</p>
    </motion.div>
  );
}
