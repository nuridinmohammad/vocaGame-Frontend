import { IFormRegister } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFormRegister[] = [];

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addRegisteredUser: (state, action: PayloadAction<IFormRegister>) => {
      state.push(action.payload);
    },
  },
});

export const { addRegisteredUser } = registerSlice.actions;
export default registerSlice.reducer;
