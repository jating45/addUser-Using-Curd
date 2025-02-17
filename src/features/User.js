import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { value: "primary" }; 

const colorSlice = createSlice({
    name: "color",
    initialState: initialStateValue, 
    reducers: {
        change: (state, action) => { 
            state.value = action.payload; 
        },
    },
});

export default colorSlice.reducer;
export const { change } = colorSlice.actions;
