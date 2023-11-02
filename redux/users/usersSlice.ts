import { createSlice } from '@reduxjs/toolkit'

interface Users {
  name: String
};

const initialState: Users = {
    name: ''
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserName: (state, { payload }) => {
            state.name = payload;
        }
        
    }
});

export const usersReducer = usersSlice.reducer;
export const { setUserName } = usersSlice.actions;

