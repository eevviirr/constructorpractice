import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface openState {
    ColorHex: any;
}

const initialState: openState = {
    ColorHex: null,
};

export const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setColor(state, action: PayloadAction<string>) {
            state.ColorHex = action.payload;
        },
    },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
