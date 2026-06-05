import React, { useState } from 'react';
import type { CounterStatus } from '@redux-learning/shared-types';
import styles from './Counter.module.css';

interface CounterProps {
  status: CounterStatus;
  count: number;
  onDecrement: () => void;
  onIncrementAsync: () => void;
  onIncrementByAmount: (amount: number) => void;
}

export function Counter({
  status,
  count,
  onDecrement,
  onIncrementAsync,
  onIncrementByAmount,
}: CounterProps) {
  const [customAmount, setCustomAmount] = useState<string>('2');
  const isCounting = status === 'loading';

  return (
    <div className={styles['container']}>
      <h2 className={styles['title']}>Redux Saga Counter</h2>

      <div className={styles['counterValue']}>{count}</div>

      <div className={styles['buttonGroup']}>
        <button className={styles['button']} onClick={onDecrement}>
          -
        </button>

        <button className={styles['button']} onClick={onIncrementAsync}>
          {isCounting ? 'Processing...' : '+ Async (1s Delay)'}
        </button>
      </div>

      <div className={styles['inputGroup']}>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className={styles['input']}
        />
        <button
          onClick={() => onIncrementByAmount(Number(customAmount) || 0)}
          className={styles['amountButton']}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}