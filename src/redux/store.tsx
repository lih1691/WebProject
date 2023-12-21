import authReducer from '@redux/features/authSlice';
import userReducer from '@redux/features/userSlice';
import UIReducer from '@redux/features/UISlice';
import contentsReducer from '@redux/features/ContentsSlice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        ui: UIReducer,
        contents: contentsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
