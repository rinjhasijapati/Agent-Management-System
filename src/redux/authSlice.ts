import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
}


const userFromStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null;

const initialState: AuthState = {
    user: userFromStorage,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;

            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;

            localStorage.removeItem('user');
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;


