import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type counterType = {
    count: number
}
const initialState: counterType = { count: 0 };

const cournterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state,) => {
            state.count = state.count + 1;

        },
        decrement: (state,) => {
            state.count = state.count - 1;
        },
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.count = state.count + action.payload;
        }
    }
})

export const { decrement, increment, incrementByValue } = cournterSlice.actions;
export default cournterSlice.reducer;