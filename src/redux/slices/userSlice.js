import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        user: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', JSON.stringify(action.payload));
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('data', JSON.stringify(action.payload));
        }
    },
});

export const { setToken,getUser,setUser } = userSlice.actions;
export default userSlice.reducer;