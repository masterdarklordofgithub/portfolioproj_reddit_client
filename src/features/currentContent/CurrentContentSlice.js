import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFullContentById } from '../mainContentPreviews/MainContentPreviewsAPI';

// create an async thunk to load the current content
export const loadCurrentContent = createAsyncThunk(
    'currentContent/loadCurrentContent',
    async (data) => {
        // Fetch the content previews data using the fetchContentPreviews function
        const response = await fetchFullContentById(data.id);
        // Return the data as the payload of the action
        return response.data;
    }

);
// export const loadComments = createAsyncThunk(
//     'currentContent/loadComments',
//     async (data) => {
//         console.log(`hello from loadComments in CurrentContentSlice.js: ${response.data}`)
//         // Fetch the comments data using the fetchCommentsByContentId function
//         const response = await fetchCommentsByContentId(data.id);
//         // Return the data as the payload of the action
//         console.log(`hello from loadComments in CurrentContentSlice.js: ${response.data}`)
//         return response.data;
//     }
// );

// create a slice for the current content
export const currentContentSlice = createSlice({
    name: 'currentContent',
    initialState: {
        content: {},
        status: 'idle',
        comments: [],
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
        // .addCase(loadComments.pending, (state, action) => {
        //     state.status = 'loading';
        // })
        // .addCase(loadComments.fulfilled, (state, action) => {
        //     state.status = 'succeeded';
        //     state.comments = action.payload;
        // })
        // .addCase(loadComments.rejected, (state, action) => {
        //     state.status = 'failed';
        //     state.error = action.error.message;
        // })
    },
});
// select the current comments from the state
// export const selectComments =(id)=> (state) => state.comments.comments;
// export const selectCommentsByContentId = (contentId) => (state) => {
//     const contentComments = state.currentContent.comments.find(comment => comment.contentId === contentId);
//     return contentComments ? contentComments.data : [];
// };


// export const selectCommentsByContentId = (contentId) => (state) => state.currentContent.comments;
// // select the loading state of the comments from the state
// export const isLoadingComments = (state) => state.currentContent.isLoadingComments;

// select the current content from the state
export const selectCurrentContent = (state) => state.currentContent.content;

// select the loading state of the current content from the state
export const isLoadingCurrentContent = (state) => state.currentContent.isLoadingCurrentContent;

export default currentContentSlice.reducer;