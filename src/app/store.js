import { configureStore } from '@reduxjs/toolkit';
import commentReducer from '../features/comments/CommentsSlice';
import counterReducer from '../features/counter/counterSlice';
import currentContentReducer from '../features/currentContent/CurrentContentSlice';
import contentPreviewsReducer from '../features/mainContentPreviews/MainContentPreviewsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contentPreviews: contentPreviewsReducer,
    currentContent: currentContentReducer,
    comments: commentReducer
  },
});
