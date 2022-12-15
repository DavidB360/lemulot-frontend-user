import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type UserState = {
	value: {
		token: string | null
		firstName: string | null
		lastName: string | null
		favoriteLessons: string | null
	}
}

const initialState: UserState = {
	value: { token: null, firstName: null, lastName: null, favoriteLessons: null },
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.value.token = action.payload.token
			state.value.firstName = action.payload.firstName
			state.value.lastName = action.payload.lastName
			state.value.favoriteLessons = action.payload.favoriteLessons
		},
	},
})

export const { login } = userSlice.actions
export default userSlice.reducer
