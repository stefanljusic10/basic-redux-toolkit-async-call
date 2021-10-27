import { createSlice } from '@reduxjs/toolkit';
import { getUserThunk } from '../thunks/getUserThunk';

// -- createSlice API requires --
// 1. name to identify slice
// 2. state with initial values
// 3. reducer functions which changes to state

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: null,
        loading: false
    },
    reducers: {
        // Empty
    },
    extraReducers: {
        [getUserThunk.pending]: (state, action) => {
            state.status = 'Loading'
            state.loading = false
        },
        [getUserThunk.fulfilled]: (state, action) => {
            state.status = 'Success'
            state.loading = true
            state.user = action.payload
        },
        [getUserThunk.rejected]: (state, action) => {
            state.status = 'Failed'
            state.loading = false
        }
    }
})

export default userSlice.reducer;