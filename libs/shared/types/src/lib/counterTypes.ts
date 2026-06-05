export type CounterStatus = 'idle' | 'loading';

export interface CounterState {
  value: number;
  status: CounterStatus;
}