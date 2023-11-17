import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
import * as ContentAPI from '@lib/api/contents';
import {sliceContents} from "@lib/Contents/PageNation";

export interface newsContent {
    title: string;
    date: string;
    desc: string;
}

interface NewsPageState {
    postLimitNum: number;
    pageLimitNum: number;
    contents: newsContent[][];
    currentContents: newsContent[];
}

const initialState: NewsPageState = {
    postLimitNum: 4,
    pageLimitNum: 10,
    contents: [],
    currentContents: []
}

export const fetchNewsContents = createAsyncThunk(
    'contents/news',
    async () => {
        const response = await ContentAPI.fetchContents('news');
        return response.data;
    }
)

const newsSlice = createSlice({
    name: 'news',
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
        builder.addCase(fetchNewsContents.fulfilled, (state, action) => {
            state.contents = sliceContents(action.payload, state.postLimitNum);
        })
    }
})

export const selectNewsContents = (state: RootState) => state.news;
export const { setCurrentContents } = newsSlice.actions;
export default newsSlice.reducer;