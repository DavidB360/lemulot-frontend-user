import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PrevPageState = {
	value: string | null;
};

const initialState: PrevPageState = {
	value: null,
};

export const prevPageSlice = createSlice({
	name: "prevPage",
	initialState,
	reducers: {
		updatePrevPage: (state: PrevPageState, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { updatePrevPage } = prevPageSlice.actions;
export default prevPageSlice.reducer;
