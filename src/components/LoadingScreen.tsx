'use client';

import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

const words = ['Learning', 'Through', 'Building', 'Better'];

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % words.length);
    }, 900);

    const startTime = Date.now();
    const duration = 2700;

    const updateLoader = () => {
      const elapsed = Date.now() - startTime;
      const newCount = Math.min(100, Math.floor((elapsed / duration) * 100));
      setCount(newCount);

      if (newCount < 100) {
        requestAnimationFrame(updateLoader);
      } else {
        clearInterval(wordInterval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 400);
      }
    };

    requestAnimationFrame(updateLoader);

    return () => clearInterval(wordInterval);
  }, []);

  if (isLoaded) return null;

  return (
    <div className={`${styles.loading} ${isLoaded ? styles['fade-out'] : ''}`}>
      <div className={styles['load-top']}>Portfolio</div>
      <div className={styles['load-center']}>
        <div className={styles['load-word']} key={wordIdx}>
          {words[wordIdx]}
        </div>
      </div>
      <div className={styles['load-bottom']}>
        <div>
          <div className={styles['load-bar-wrap']}>
            <div
              className={styles['load-bar']}
              style={{ width: `${count}%` }}
            ></div>
          </div>
        </div>
        <div className={styles['load-counter']}>
          {String(count).padStart(3, '0')}
        </div>
      </div>
    </div>
  );
}
