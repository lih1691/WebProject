import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
import * as ContentsAPI from '@lib/api/contents';
import {sliceContents} from "@lib/Contents/PageNation";

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
    postLimitNum: number;
    pageLimitNum: number;
    contents: communityContent[][];
    currentContents: communityContent[];
}

const initialState: communityState = {
    postLimitNum: 20,
    pageLimitNum: 10,
    contents: [],
    currentContents: []
}

export const fetchCommunityContents = createAsyncThunk(
    'contents/community',
    async () => {
        const response = await ContentsAPI.fetchContents('community');
        return response.data;
    }
)

const communitySlice = createSlice({
    name: 'community',
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
        builder.addCase(fetchCommunityContents.fulfilled, (state, action) => {
            state.contents = sliceContents(action.payload, state.postLimitNum);
        })
    }
})

export const selectCommunityContents = (state:RootState) => state.community;

export const { setCurrentContents } = communitySlice.actions;
export default communitySlice.reducer;