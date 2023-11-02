import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFullContentById } from '../mainContentPreviews/MainContentPreviewsAPI';

// create an async thunk to load the current content
export const loadCurrentContent = createAsyncThunk(
    'currentContent/loadCurrentContent',


    //const data = await fetch(`api/articles/${contentId}`);
    // const data = await fetch(`../../../mocks/mockRedditContent.json`);
    // const json = await data.json();

    // console.log(json);
    // console.log("hello from CurrentContentSlice.js" + JSON.stringify(json));
    // return json;
    async (data) => {
        // Fetch the content previews data using the fetchContentPreviews function
        const response = await fetchFullContentById(data.id);
        // Return the data as the payload of the action
        return response.data;
    }

);

// create a slice for the current content
export const currentContentSlice = createSlice({
    name: 'currentContent',
    initialState: {
        content: {},
        status: 'idle',
        error: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCurrentContent.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(loadCurrentContent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.content = action.payload;
            })
            .addCase(loadCurrentContent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

// select the current content from the state
export const selectCurrentContent = (state) => state.currentContent.content;

// select the loading state of the current content from the state
export const isLoadingCurrentContent = (state) => state.currentContent.isLoadingCurrentContent;

export default currentContentSlice.reducer;