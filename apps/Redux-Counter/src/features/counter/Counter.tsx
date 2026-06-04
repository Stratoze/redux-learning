import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, incrementByAmount, incrementAsyncStart } from './counterSlice';
import type { CounterStatus } from './counterSlice';
import styles from './Counter.module.css';

export default function Counter() {
    const status = useAppSelector((state) => state.counter.status);
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    const [customAmount, setCustomAmount] = useState<string>('2');

    const checkIsLoading = (currentStatus: CounterStatus): boolean => {
        return currentStatus === 'loading';
    };

    const isCounting = checkIsLoading(status);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Redux Saga Counter</h2>

            <div className={styles.counterValue}>
                {count}
            </div>

            <div className={styles.buttonGroup}>
                <button
                    className={styles.button}
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>

                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementAsyncStart())}
                >
                    {isCounting ? 'Processing...' : '+ Async (1s Delay)'}
                </button>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className={styles.input}
                />
                <button
                    onClick={() => dispatch(incrementByAmount(Number(customAmount) || 0))}
                    className={styles.amountButton}
                >
                    Add Amount
                </button>
            </div>
        </div>
    );
}
