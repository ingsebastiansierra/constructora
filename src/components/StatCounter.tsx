import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({ value, suffix = '', label, duration = 2 }: StatCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const controls = animate(count, value, {
            duration,
            ease: 'easeOut',
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [count, value, duration]);

  return (
    <div ref={ref} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/30">
      <div className="text-3xl sm:text-4xl text-white font-bold mb-1">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="text-sm text-white font-medium">{label}</div>
    </div>
  );
}
