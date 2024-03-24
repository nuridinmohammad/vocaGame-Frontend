import { IFormLogin } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFormLogin[] = [];

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addLoginUser: (state, action: PayloadAction<IFormLogin>) => {
      state.push(action.payload);
    },
  },
});

export const { addLoginUser } = loginSlice.actions;
export default loginSlice.reducer;
