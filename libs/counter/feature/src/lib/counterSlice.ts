import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CounterStatus = 'idle' | 'loading';

export interface CounterState {
    value: number;
    status:CounterStatus;
}

const initialState: CounterState = {
    value: 0,
    status: 'idle',
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementAsyncStart: (state) => {
            state.status = 'loading';
        },
        incrementAsyncSuccess: (state) => {
            state.status = 'idle';
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const {
    incrementAsyncStart,
    incrementAsyncSuccess,
    decrement,
    incrementByAmount
} = counterSlice.actions;

export default counterSlice.reducer;
