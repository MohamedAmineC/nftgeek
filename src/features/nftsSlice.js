import { createSlice } from "@reduxjs/toolkit";
import { nftsData } from "../data/nftsData";

const nftsSlice = createSlice({
    name: "nfts",
    initialState: nftsData,
    reducers: {
        toggleLikeNft: (state,action) => {
            state = state.map(nft => {
                if (nft.id === action.payload.id) {
                return    nft.liked =!nft.liked;
                } else return nft
            })
        },
        changeLeftTime: (state,action) => {
            state = state.map(nft => {
                if (nft.id === action.payload.id) {
                return    nft.timeLeft = action.payload.timeLeft;
                } else return nft
            })
        },
        toggleUnactive: (state,action) => {
            state = state.map(nft => {
                if (nft.id === action.payload) {
                return    nft.isExpired = true;
                } else return nft
            })
        }
    }
})

export const selectNfts = state => state.nfts;
export const { toggleLikeNft,changeLeftTime,toggleUnactive } = nftsSlice.actions;
export default nftsSlice.reducer;