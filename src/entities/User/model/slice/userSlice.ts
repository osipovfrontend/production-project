import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem('user');
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem('user');
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
