import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@redux/store";
import * as ContentAPI from '@lib/api/contents';
import { sliceContents } from "@lib/Contents/PageNation";

export interface reviewContent  {
    id: string;
    title: string;
    date: string;
    nickname: string;
    rating: number;
    product: string;
}

interface ReviewPageState {
    postLimitNum: number;
    pageLimitNum: number;
    contents: reviewContent[][];
    currentContents: reviewContent[];
}

const initialState: ReviewPageState = {
    postLimitNum: 6,
    pageLimitNum: 10,
    contents: [],
    currentContents: []
}

export const fetchReviewContents = createAsyncThunk(
    'contents/review',
    async () => {
        const response = await ContentAPI.fetchContents("review");
        return response.data;
    }
);

// TODO:: 컨텐츠 슬라이스들 통합 방법 고려, 태그 추가
const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        setCurrentContents: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            
            if (index >= 0 && index < state.contents.length) {
                state.currentContents = state.contents[index];
            } else {
                console.error("Invalid index:", index);
                state.currentContents = [];
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReviewContents.fulfilled, (state, action) => {
            state.contents = sliceContents(action.payload, state.postLimitNum);
        });
    },
})

export const selectReviewContents = (state: RootState) => state.review;
export const { setCurrentContents } = reviewSlice.actions;
export default reviewSlice.reducer;