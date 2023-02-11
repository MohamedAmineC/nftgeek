import { createSlice } from "@reduxjs/toolkit";

const CreatorsSlice = createSlice({
    name: 'creators',
    initialState: [],
    reducers: {
        addCreator: (state, action) => {
            state.push(action.payload);
        },
        removeCreator: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
})
export const selectCreators = state => state.creators;
export const { addCreator, removeCreator } = CreatorsSlice.actions;
export default CreatorsSlice.reducer;