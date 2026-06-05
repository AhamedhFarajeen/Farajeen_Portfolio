'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 28, scale: 0.985, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -24, scale: 0.985, filter: 'blur(10px)' }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={pathname}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 90,
            pointerEvents: 'none',
            background:
              'linear-gradient(115deg, rgba(0,0,0,0.92), rgba(78,133,191,0.38), rgba(0,0,0,0.92))',
          }}
          initial={{ x: '-105%' }}
          animate={{ x: '105%' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
        />
      </AnimatePresence>
    </>
  );
}
