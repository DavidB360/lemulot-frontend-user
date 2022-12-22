import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProcessState = {
	value: string | null;
};

const initialState: ProcessState = {
	value: null,
};

export const processSlice = createSlice({
	name: "process",
	initialState,
	reducers: {
		updateProcess: (state: ProcessState, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { updateProcess } = processSlice.actions;
export default processSlice.reducer;
