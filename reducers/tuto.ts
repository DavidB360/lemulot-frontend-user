import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TutoState = {
	value: string | null;
};

const initialState: TutoState = {
	value: null,
};

export const tutoSlice = createSlice({
	name: "tuto",
	initialState,
	reducers: {
		updateTuto: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { updateTuto } = tutoSlice.actions;
export default tutoSlice.reducer;