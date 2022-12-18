import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DeviceState = {
	value: string | null;
};

const initialState: DeviceState = {
	value: null,
};

export const deviceSlice = createSlice({
	name: "device",
	initialState,
	reducers: {
		updateDevice: (state: DeviceState, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { updateDevice } = deviceSlice.actions;
export default deviceSlice.reducer;
