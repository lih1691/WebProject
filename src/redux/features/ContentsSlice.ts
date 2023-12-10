import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@redux/store";
import * as ContentAPI from '@lib/api/contents';
import { sliceContents } from "@lib/Contents/PageNation";
import {AccessContentsPayload, ContentsState, FetchContentsInterface} from "@Interfaces/Redux/ContentsInterface";

interface ContentsTypeState {
    postLimitNum: number;
    pageLimitNum: number;
    contents: any[][]; // 실제 데이터 타입에 맞게 조정
    currentContents: any[]; // 실제 데이터 타입에 맞게 조정
}

const initialState: ContentsState = {
    reviewPageState: {
        postLimitNum: 6,
        pageLimitNum: 10,
        contents: [],
        currentContents: []
    },
    newsPageState: {
        postLimitNum: 4,
        pageLimitNum: 10,
        contents: [],
        currentContents: []
    },
    communityPageState: {
        postLimitNum: 20,
        pageLimitNum: 10,
        contents: [],
        currentContents: []
    }
}

export const fetchContents = createAsyncThunk(
    'contents',
    async ({contentsType, category, searchType, keyword}: FetchContentsInterface) => {
        const response = await ContentAPI.fetchContents(contentsType, category, searchType, keyword);
        return response.data;
    }
);

const contentsSlice = createSlice({
    name: 'contents',
    initialState,
    reducers: {
        setCurrentContents: (state, action: PayloadAction<AccessContentsPayload>) => {
            const type = action.payload.contentsType;
            const index = action.payload.pageNumber;
            const contentsType = `${type}PageState`;
            
            if (contentsType in state) {
                const targetState = state[`${contentsType}`];
                
                if (index >= 0 && index < targetState.contents.length) {
                    targetState.currentContents = targetState.contents[index];
                } else {
                    console.error("Invalid index : ", index);
                    targetState.currentContents = [];
                }
            } else {
                console.error("Invalid type : ", type);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContents.fulfilled, (state, action: PayloadAction<AccessContentsPayload>) => {
            const type = action.payload.contentsType;
            const contentsType = `${type}PageState`;
            
            if (contentsType in state) {
                const targetState = state[`${contentsType}`];
                
                targetState.contents = sliceContents(targetState.contents, targetState.postLimitNum);
            } else {
                console.error("Invalid type : ", type);
            }
        });
    },
})


export const selectReviewContents = (state: RootState) => state.contents.reviewPageState;
export const selectNewsState = (state: RootState) => state.contents.newsPageState;
export const selectCommunityState = (state: RootState) => state.contents.communityPageState;

export const { setCurrentContents } = contentsSlice.actions;
export default contentsSlice.reducer;