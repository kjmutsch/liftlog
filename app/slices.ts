import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  value: number;
}

const initialState: State = {
  value: 0,
};

const slices = createSlice({
  name: 'test',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = slices.actions;
export default slices.reducer;
