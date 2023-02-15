import { createSlice } from "@reduxjs/toolkit";
import art1 from './NFTS/art1.jpg';
import art2 from './NFTS/art2.webp';
import eth from './NFTS/etheruem.webp';
import bidder1 from './NFTS/bidder/bidder1.png';
import bidder2 from './NFTS/bidder/bidder2.jpeg';

const nftsSlice = createSlice({
    name: "nfts",
    initialState: [
        {
            id: 4,
            name: "Koecing Pemalaz",
            author: "Akatsuki",
            img: art1,
            category: 'Art',
            liked: false,
            expires: 'February 18, 2023 11:01:00',
            isExpired: false,
            bids: [
                {
                    id: 1,
                    bidder: 'WahyuPr',
                    bidderImg: bidder1,
                    price: '2.4',
                    verified: true,
                    currency: eth,
                    currencyName: 'ETH'
                }
            ]
        },
        {
            id: 5,
            name: "Kelinci Keren Abiezz",
            author: "pickpocket",
            img: art2,
            category: 'Art',
            liked: false,
            expires: 'February 19, 2023 16:00:00',
            isExpired: false,
            bids: [
                {
                    id: 1,
                    bidder: 'Tama_Art',
                    bidderImg: bidder2,
                    price: '4.2',
                    verified: true,
                    currency: eth,
                    currencyName: 'ETH'
                }
            ]
        }
    ],
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