import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCommentsByContentId } from '../mainContentPreviews/MainContentPreviewsAPI';

// create an async thunk to load the comments
export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (id) => {
        // Fetch the comments data using the fetchCommentsByContentId function
        const response = await fetchCommentsByContentId(id);
        // Return the data as the payload of the action
        return response;
    }
);

// create a slice for the current comments
export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: 'idle',
        error: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(loadComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

// select the loading state of the comments from the state
export const isLoadingComments = (state) => state.comments.isLoadingComments;


// select the current comments from the state
//export const selectCommentsByContentId = (contentId) => (state) => state.currentContent.comments;
// export const selectCommentsByContentId = (contentId) => (state) => {
//     const contentComments = state.comments.comments.find(comment => comment.contentId === contentId);
//     return contentComments ? contentComments.data : [];
// };
export const loadCommentsForContentId = (contentId) => (state) => state.comments.comments;

export default commentsSlice.reducer;
