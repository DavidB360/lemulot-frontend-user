import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CategoryState = {
	value: string | null;
};

const initialState: CategoryState = {
	value: null,
};

export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		updateCategory: (state, action: PayloadAction<string | null>) => {
			state.value = action.payload;
		},
	},
});

export const { updateCategory } = categorySlice.actions;
export default categorySlice.reducer;
