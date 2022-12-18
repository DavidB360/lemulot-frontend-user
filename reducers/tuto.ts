import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types } from 'mongoose';

export type TutoState = {
	value: Types.ObjectId | null;
};

const initialState: TutoState = {
	value: null,
};

export const tutoSlice = createSlice({
	name: "tuto",
	initialState,
	reducers: {
		updateTuto: (state: TutoState, action: PayloadAction<Types.ObjectId>) => {
			state.value = action.payload;
		},
	},
});

export const { updateTuto } = tutoSlice.actions;
export default tutoSlice.reducer;