import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    data: [],
    loading: false,
    error: false
}
export const fetchview = createAsyncThunk('view', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/Getproduct')
        return response.data.data
    } catch (error) {
        console.log(error)
    }
})
export const deleteData =
    createAsyncThunk('deleteData', async (id) => {
        try {
            console.log(id);
            const response = await axios.delete(
                `http://127.0.0.1:8000/api/Deleteproduct/${id}`)
            return response.data.data
        }
        catch (error) {
            console.log(error);
        }
    })



export const counterSlice = createSlice({
    name: 'view',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchview.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchview.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchview.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
        //card delete
        builder.addCase(deleteData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.loading = false
            // state.data= action.payload
        })
        builder.addCase(deleteData.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
    }

})
export default counterSlice.reducer
