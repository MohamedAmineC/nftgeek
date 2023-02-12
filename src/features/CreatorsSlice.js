import { createSlice } from "@reduxjs/toolkit";
import creator1 from './creator1.jpg';
import creator2 from './creator2.jpg';
import creator3 from './creator3.jpg';
import creator4 from './creator4.jpg';


const CreatorsSlice = createSlice({
    name: 'creators',
    initialState: [
        {
            id: 1,
            name: 'Jacob_Jones06',
            tag: '@jcb_jon',
            avatar: creator1,
            following: false,
            verified: true,
        },
        {
            id: 2,
            name: 'Alexander_774',
            tag: '@alexander_',
            avatar: creator2,
            following: false,
            verified: true,
        },
        {
            id: 3,
            name: 'Wade Warren',
            tag: '@wwarren#002',
            avatar: creator3,
            following: false,
            verified: true,
        },
        {
            id: 4,
            name: 'Darrel Stwd',
            tag: '@Darrell_st',
            avatar: creator4,
            following: false,
            verified: true,
        },
    ],
    reducers: {
        addCreator: (state, action) => {
            state.push(action.payload);
        },
        removeCreator: (state, action) => {
            state.splice(action.payload, 1);
        },
        toggleCreator: (state, action) => {
            state.map(creator => {
                if(creator.id === action.payload){
                    creator.following =!creator.following;
                } 
            })
        }
    }
})
export const selectCreators = state => state.creators;
export const { addCreator, removeCreator,toggleCreator } = CreatorsSlice.actions;
export default CreatorsSlice.reducer;