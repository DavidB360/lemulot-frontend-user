import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProcessusState = {
	value: string | null;
};

const initialState: ProcessusState = {
	value: null,
};

export const processusSlice = createSlice({
	name: "processus",
	initialState,
	reducers: {
		updateProcessus: (state: ProcessusState, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { updateProcessus } = processusSlice.actions;
export default processusSlice.reducer;
