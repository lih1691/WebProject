import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
import * as ContentAPI from '@lib/api/contents';

export interface newsContent {
    title: string;
    date: string;
    desc: string;
}

interface NewsPageState {
    contents: newsContent[];
}

const initialState: NewsPageState = {
    contents: [],
}

export const fetchNewsContents = createAsyncThunk(
    'contents/news',
    async () => {
        const response = await ContentAPI.fetchNewsContents();
        return response.data;
    }
)

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNewsContents.fulfilled, (state, action) => {
            state.contents = action.payload;
        })
    }
})

export const selectNewsContents = (state: RootState) => state.news.contents;
export default newsSlice.reducer;