import { WidgetPreview } from './WidgetPreview';

export function RadarVisual() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
      {[1, 2, 3].map((ring) => (
        <div
          key={ring}
          className="absolute rounded-full border border-white/15"
          style={{
            width: `${ring * 28}%`,
            height: `${ring * 28}%`,
          }}
        />
      ))}

      <div
        className="absolute h-1/2 w-1/2 origin-bottom-left motion-reduce:hidden"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.08) 40deg, transparent 80deg)',
          left: '50%',
          bottom: '50%',
          marginLeft: '-1px',
          animation: 'radar-sweep 8s linear infinite',
        }}
      />

      <div
        className="absolute right-[18%] top-[32%] h-2.5 w-2.5 rounded-full bg-ping motion-reduce:hidden"
        style={{ animation: 'ping-pulse 2s ease-in-out infinite' }}
      />

      <div className="relative z-10 scale-[0.92] sm:scale-100">
        <WidgetPreview />
      </div>

      <style>{`
        @keyframes radar-sweep {
          to { transform: rotate(360deg); }
        }
        @keyframes ping-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.4); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="radar-sweep"], [style*="ping-pulse"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
