import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videosReducer from '../features/videos/videosSlice';
import videoReducer from '../features/video/videoSlice';
import tagsReducer from '../features/tags/tagSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
  },
});
