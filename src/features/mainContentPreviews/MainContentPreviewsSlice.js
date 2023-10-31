import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchContentPreviews } from './MainContentPreviewsAPI';

// Define the initial state of the content previews slice
const initialState = {
    contents: [],
    isLoadingContentPreviews: false,
    hasError: false,
};

// Define an asynchronous action for loading all content previews data
export const loadAllContents = createAsyncThunk(
    'contentPreviews/loadAllContents',
    async () => {
        // Fetch the content previews data using the fetchContentPreviews function
        const response = await fetchContentPreviews();
        // Return the data as the payload of the action
        return response.data;
    }
);

// Define the content previews slice using the createSlice function
export const contentPreviewsSlice = createSlice({
    // Set the name of the slice to 'contentPreviews'
    name: 'contentPreviews',
    // Set the initial state of the slice to the initialState object
    initialState,
    // Define an empty object for the reducers field
    reducers: {},
    // Define the extra reducers for the slice
    extraReducers: (builder) => {
        // Add a case for when the loadAllContents action is pending
        builder.addCase(loadAllContents.pending, (state) => {
            // Set the isLoadingContentPreviews property to true and the hasError property to false
            state.isLoadingContentPreviews = true;
            state.hasError = false;
        });
        // Add a case for when the loadAllContents action is fulfilled
        builder.addCase(loadAllContents.fulfilled, (state, action) => {
            // Set the isLoadingContentPreviews property to false and update the contents property with the payload data
            state.isLoadingContentPreviews = false;
            state.contents = action.payload;
        });
        // Add a case for when the loadAllContents action is rejected
        builder.addCase(loadAllContents.rejected, (state) => {
            // Set the isLoadingContentPreviews property to false and the hasError property to true
            state.isLoadingContentPreviews = false;
            state.hasError = true;
        });
    },
});

// Define a selector function to retrieve all contents from the content previews slice
export const selectAllContents = (state) => state.contentPreviews.contents || [];
// Define a selector function to retrieve the loading status from the content previews slice
export const isLoading = (state) => state.contentPreviews.isLoadingContentPreviews;

// Export the contentPreviewsSlice reducer as the default export of the module
export default contentPreviewsSlice.reducer;