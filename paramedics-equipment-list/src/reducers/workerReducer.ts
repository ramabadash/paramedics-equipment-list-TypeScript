import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkerInitialState } from '../types/types';

const initialState: WorkerInitialState = {
  fullName: 'Paramedic',
  date: new Date(),
  ambulanceNumber: 181,
  shift: 'morning',
  logged: false,
};

export const workerSlice = createSlice({
  name: 'worker',
  initialState,
  reducers: {
    reset: state => {
      return initialState;
    },
    workerLogin: (
      state,
      action: PayloadAction<Omit<WorkerInitialState, 'logged'>>
    ) => {
      const { fullName, date, ambulanceNumber, shift } = action.payload;
      return { fullName, date, ambulanceNumber, shift, logged: true };
    },
  },
});

export const { reset, workerLogin } = workerSlice.actions;

export default workerSlice.reducer;
