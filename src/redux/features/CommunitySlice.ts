import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
import * as ContentsAPI from '@lib/api/contents';

export interface communityContent {
    postNumber: number;
    tag: string;
    title: string;
    writer: string;
    date: string;
    views: number;
    recommendation: number;
}

interface communityState {
    contents: communityContent[];
}

const initialState: communityState = {
    contents: [],
}

export const fetchCommunityContents = createAsyncThunk(
    'contents/community',
    async () => {
        const response = await ContentsAPI.fetchCommunityContents();
        return response.data;
    }
)

const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommunityContents.fulfilled, (state, action) => {
            state.contents = action.payload;
        })
    }
})

export const selectCommunityContents = (state: RootState) => state.community.contents;
export default communitySlice.reducer;