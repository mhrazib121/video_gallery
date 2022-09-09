import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

const initialState ={
    tags:[],
    isLoading: false,
    isError: false,
    error:'',    
};

// create thunk function 
export const fetchTags = createAsyncThunk("tags/fetchTags", async ()=>{
    const tags = await getTags();
    return tags;
})

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchTags.pending, (state) => {
            state.isLoading= true;
            state.isError= false;
            state.tags= [];
        })
        .addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading= false;
            state.isError= false;
            state.tags= action.payload;
        })
        .addCase(fetchTags.rejected, (state, action) => {
            state.isLoading= false;
            state.isError= true;
            state.error= action.payload?.message;
            state.tags= [];
        })
    }
});

export default tagsSlice.reducer;