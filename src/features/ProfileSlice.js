import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.jpg';

const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        id: 1,
        name: 'Joko Williams',
        profile: profile,
        notifications: 1,
        favorites: [],
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
            state.followedArtists.filter(artist => artist.id!== action.payload.id)
        },
        resetNotifications: (state) => {
            state.notifications = 0;
        }
    }
})

export const selectProfile = (state) => state.profile;
export const { addFavorites, removeFavorites, followArtist, unfollowArtist, resetNotifications } = ProfileSlice.actions;
export default ProfileSlice.reducer;