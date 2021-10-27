import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// userId is an optional parameter
// fetch random user and return a promise

export const getUserThunk = createAsyncThunk(
    'user/getUserThunkStatus',
    async (userId) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        return response.data
    }
)