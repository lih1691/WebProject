import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {RootState} from "@redux/store";
import * as ContentAPI from '@lib/api/contents';

export interface reviewContent {
    id: number;
    nickname: string;
    title: string;
    rating: number;
    date: string;
    product: string;
}

interface ReviewPageState {
    contents: reviewContent[];
}

const initialState: ReviewPageState = {
    contents: [],
}

export const fetchReviewContents = createAsyncThunk(
    'contents/review',
    async (contents: reviewContent[]) => {
        const response = await ContentAPI.fetchReviewContents(contents);
        return response.data;
    }
);

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReviewContents.fulfilled, (state, action) => {
            state.contents = action.payload;
            console.log(1);
            
        });
    },
})

export const selectReviewContents = (state: RootState) => state.review.contents;
export default reviewSlice.reducer;