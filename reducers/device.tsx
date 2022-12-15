import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DeviceState = {
	value: {
		device: string | null;
	};
};

const initialState: DeviceState = {
	value: { device: null },
};

export const deviceSlice = createSlice({
	name: "device",
	initialState,
	reducers: {
		updateDevice: (state, action: PayloadAction<string>) => {
			state.value.device = action.payload;
		},
	},
});

export const { updateDevice } = deviceSlice.actions;
export default deviceSlice.reducer;
