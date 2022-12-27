import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types } from 'mongoose';

export type UserState = {
	value: {
		token: string | null;
		firstName: string | null;
		lastName: string | null;
		favoriteLessons: (Types.ObjectId|null)[];
		avatar: string | null
	};
};

const initialState: UserState = {
	value: {
		token: null,
		firstName: null,
		lastName: null,
		favoriteLessons: [],
		avatar: null,
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
			state.value.avatar = action.payload.avatar;
		},

		addToFavoriteLessons: (state, action: PayloadAction<Types.ObjectId|null>) => {
			state.value.favoriteLessons.push(action.payload);
		},

		removeFromFavoriteLessons: (state, action: PayloadAction<Types.ObjectId|null>) => {
			state.value.favoriteLessons = state.value.favoriteLessons.filter(
				(data) => data !== action.payload
			);
		},

		logout: (state) => {
			state.value.token = null;
			state.value.firstName = null;
			state.value.lastName = null;
			state.value.favoriteLessons = [];
			state.value.avatar = null;
		},

		// fonction commentée ci-dessous ne fonctionne pas en l'état
		// updateUserParam: (state, action) => {
		// 	const allowedUpdates = ['firstName', 'LastName', 'avatar'];
		// 	if (action.payload.token) {
		// 		if (allowedUpdates.some(element => element === action.payload.key)) {
		// 			const keyUpdated = action.payload.key;
		// 			state.value.(keyUpdated) = action.payload.value;
		// 		}		
		// 	}	 
		// },

		updateAvatar: (state, action) => {
			state.value.avatar = action.payload; 
		},
	},
});

export const { login, addToFavoriteLessons, removeFromFavoriteLessons, logout, updateAvatar } =
	userSlice.actions;
export default userSlice.reducer;
