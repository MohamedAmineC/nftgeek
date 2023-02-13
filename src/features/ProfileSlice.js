import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.jpg';
import nft1 from './nft1.webp';
import nft2 from './nft2.jpeg';
import nft3 from './nft3.png';

const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        id: 1,
        name: 'Joko Williams',
        profile: profile,
        notifications: 25,
        favorites: [
            {
                id: 1,
                name: 'Out of Frame',
                author: '@robin#236',
                img: nft1 ,
                liked: 'Sun 14 Nov'
            },
            {
                id: 2,
                name: 'Jago Santoury',
                author: '@brian_bro',
                img: nft2 ,
                liked: 'Sat 13 Nov'
            },
            {
                id: 3,
                name: 'Penyihir Johat',
                author: '@dian46',
                img: nft3 ,
                liked: 'Sat 13 Nov'
            },
        ],
        followedArtists: [],
    },
    reducers: {
        addFavorites: (state,action) => {
            state.favorites.push(action.payload);
        },
        removeFavorites: (state,action) => {
            state.favorites.filter(favorite => favorite.id !== action.payload.id)
        },
        followArtist: (state,action) => {
            state.followedArtists.push(action.payload);
        },
        unfollowArtist: (state,action) => {
            state.followedArtists = state.followedArtists.filter(id => {
                console.log(id)
               return  id!== action.payload})
        },
        resetNotifications: (state) => {
            state.notifications = 0;
        }
    }
})

export const selectProfile = (state) => state.profile;
export const { addFavorites, removeFavorites, followArtist, unfollowArtist, resetNotifications } = ProfileSlice.actions;
export default ProfileSlice.reducer;