import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types } from 'mongoose';

export type HelpReqState = {
	value: Types.ObjectId | null;
};

const initialState: HelpReqState = {
	value: null,
};

export const helpReqSlice = createSlice({
	name: "helpReq",
	initialState,
	reducers: {
		updateHelpReq: (state: HelpReqState, action: PayloadAction<Types.ObjectId>) => {
			state.value = action.payload;
		},
	},
});

export const { updateHelpReq } = helpReqSlice.actions;
export default helpReqSlice.reducer;