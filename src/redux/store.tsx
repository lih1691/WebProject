import authReducer from '@redux/features/authSlice';
import userReducer from '@redux/features/userSlice';
import UIReducer from '@redux/features/UISlice';
import reviewReducer from '@redux/features/ReviewContentsSlice';
import newsReducer from '@redux/features/NewsContentSlice';
import communityReducer from '@redux/features/CommunitySlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        ui: UIReducer,
        review: reviewReducer,
        news: newsReducer,
        community: communityReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
