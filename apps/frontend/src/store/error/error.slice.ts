import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type ErrorStateType = {
  error: string | null;
};

const errorState: ErrorStateType = {
  error: null,
};

export const error = createSlice({
  name: NameSpace.Error,
  initialState: errorState,
  reducers: {
    setError: ({error}, {payload}: PayloadAction<string | null>) => {
      error = payload;
    }
  }
});

export const {setError} = error.actions;
