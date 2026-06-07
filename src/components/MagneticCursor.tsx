'use client';

import { useEffect, useRef } from 'react';
import styles from './MagneticCursor.module.css';

const MAGNETIC_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-magnetic]';

type CursorPoint = {
  x: number;
  y: number;
};

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) {
      return;
    }

    let animationFrame = 0;
    let activeTarget: HTMLElement | null = null;
    let isHovering = false;
    let isPointerDown = false;

    const pointer: CursorPoint = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const cursorPosition: CursorPoint = { ...pointer };
    const dotPosition: CursorPoint = { ...pointer };

    document.body.classList.add('has-magnetic-cursor');

    const findMagneticTarget = (element: Element | null) => {
      const target = element?.closest(MAGNETIC_SELECTOR);

      if (!(target instanceof HTMLElement)) {
        return null;
      }

      if (target.matches(':disabled, [aria-disabled="true"]')) {
        return null;
      }

      return target;
    };

    const clearTarget = () => {
      if (activeTarget) {
        activeTarget.style.removeProperty('--magnetic-x');
        activeTarget.style.removeProperty('--magnetic-y');
        activeTarget.classList.remove('is-magnetic');
      }

      activeTarget = null;
      isHovering = false;
      document.body.classList.remove('is-cursor-hovering');
    };

    const setTarget = (target: HTMLElement | null) => {
      if (target === activeTarget) {
        return;
      }

      clearTarget();

      if (target) {
        activeTarget = target;
        isHovering = true;
        activeTarget.classList.add('is-magnetic');
        document.body.classList.add('is-cursor-hovering');
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      setTarget(findMagneticTarget(event.target as Element));
    };

    const handlePointerDown = () => {
      isPointerDown = true;
      document.body.classList.add('is-cursor-pressed');
    };

    const handlePointerUp = () => {
      isPointerDown = false;
      document.body.classList.remove('is-cursor-pressed');
    };

    const handlePointerLeave = () => {
      cursor.classList.add(styles.hidden);
      dot.classList.add(styles.hidden);
      clearTarget();
    };

    const handlePointerEnter = () => {
      cursor.classList.remove(styles.hidden);
      dot.classList.remove(styles.hidden);
    };

    const animate = () => {
      let nextCursorX = pointer.x;
      let nextCursorY = pointer.y;

      if (activeTarget) {
        const rect = activeTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = pointer.x - centerX;
        const distanceY = pointer.y - centerY;

        nextCursorX = pointer.x - distanceX * 0.46;
        nextCursorY = pointer.y - distanceY * 0.46;

        activeTarget.style.setProperty('--magnetic-x', `${distanceX * 0.14}px`);
        activeTarget.style.setProperty('--magnetic-y', `${distanceY * 0.14}px`);
      }

      cursorPosition.x += (nextCursorX - cursorPosition.x) * 0.3;
      cursorPosition.y += (nextCursorY - cursorPosition.y) * 0.3;
      dotPosition.x += (pointer.x - dotPosition.x) * 0.62;
      dotPosition.y += (pointer.y - dotPosition.y) * 0.62;

      cursor.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${dotPosition.x}px, ${dotPosition.y}px, 0) translate(-50%, -50%)`;

      cursor.dataset.hovering = String(isHovering);
      cursor.dataset.pressed = String(isPointerDown);

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);
    document.documentElement.addEventListener('mouseenter', handlePointerEnter);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTarget();
      document.body.classList.remove(
        'has-magnetic-cursor',
        'is-cursor-hovering',
        'is-cursor-pressed'
      );
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.documentElement.removeEventListener(
        'mouseleave',
        handlePointerLeave
      );
      document.documentElement.removeEventListener(
        'mouseenter',
        handlePointerEnter
      );
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
}
