import { configureStore } from '@reduxjs/toolkit';
import workerSlice from '../reducers/workerReducer';
import equipmentSlice from '../reducers/equipmentReducer';

export const store = configureStore({
  reducer: {
    worker: workerSlice,
    equipment: equipmentSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
