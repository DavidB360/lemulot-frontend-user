import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
	value: {
		token: string | null;
		firstName: string | null;
		lastName: string | null;
		favoriteLessons: string[];
	};
};

const initialState: UserState = {
	value: {
		token: null,
		firstName: null,
		lastName: null,
		favoriteLessons: [],
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.value.token = action.payload.token;
			state.value.firstName = action.payload.firstName;
			state.value.lastName = action.payload.lastName;
			state.value.favoriteLessons = action.payload.favoriteLessons;
		},
		addToFavoriteLessons: (state, action: PayloadAction<string>) => {
			state.value.favoriteLessons.push(action.payload);
		},
		removeFromFavoriteLessons: (state, action: PayloadAction<string>) => {
			state.value.favoriteLessons = state.value.favoriteLessons.filter(
				(data) => data !== action.payload
			);
		},
	},
});

export const { login, addToFavoriteLessons, removeFromFavoriteLessons } =
	userSlice.actions;
export default userSlice.reducer;
