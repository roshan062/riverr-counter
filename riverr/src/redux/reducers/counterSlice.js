import { createSlice } from '@reduxjs/toolkit';
// import { saveCounter, removingCounter } from '../../firebaseApi'

const initialState = {
    counters: [],
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            const { id } = action.payload;
            const counter = state.counters.find((counter) => counter.id === id);
            if (counter) {
                counter.value += 1;
            }
        },
        decrement: (state, action) => {
            const { id } = action.payload;
            const counter = state.counters.find((counter) => counter.id === id);
            if (counter) {
                counter.value -= 1;
            }
        },
        incrementByAmount: (state, action) => {
            const { id, amount } = action.payload;
            const counter = state.counters.find((counter) => counter.id === id);
            if (counter) {
                counter.value += amount;
            }
        },
        startAmount: (state, action) => {
            const { id, amount } = action.payload;
            const counter = state.counters.find((counter) => counter.id === id);
            if (counter) {
                counter.value = amount;
            }
        },
        reset: (state, action) => {
            const { id } = action.payload;
            const counter = state.counters.find((counter) => counter.id === id);
            if (counter) {
                counter.value = 0;
            }
        },
        addCounter: (state, action) => {
            const newCounter = {
                id: Date.now(),
                value: 0,

                label: action.payload,
            };

            state.counters.push(newCounter);
        },

        removeCounter: (state, action) => {
            const { id } = action.payload;
            state.counters = state.counters.filter((counter) => counter.id !== id);
        },

    },
});

export const { increment, decrement, incrementByAmount, startAmount, reset, addCounter, removeCounter } = counterSlice.actions;

export default counterSlice.reducer;
