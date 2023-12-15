import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@redux/store";
import * as ContentAPI from '@lib/api/contents';
import { sliceContents } from "@lib/Hooks/usePageNation";
import {AccessContentsPayload, ContentsState, FetchContentsInterface} from "@Interfaces/Redux/ContentsInterface";

const initialState: ContentsState = {
    ReviewPageState: {
        postLimitNum: 6,
        pageLimitNum: 10,
        contents: [],
        currentContents: []
    },
    NewsPageState: {
        postLimitNum: 4,
        pageLimitNum: 10,
        contents: [],
        currentContents: []
    },
    CommunityPageState: {
        postLimitNum: 20,
        pageLimitNum: 10,
        contents: [],
        currentContents: []
    }
}

/*
*
*/
export const fetchContents = createAsyncThunk(
    'contents',
    async ({contentsType, category, searchOption, keyword}: FetchContentsInterface) => {
        const response = await ContentAPI.fetchContents(contentsType, category, searchOption, keyword);
        return response.data;
    }
);

const contentsSlice = createSlice({
    name: 'contents',
    initialState,
    reducers: {
        /*
        * 콘텐츠 페이지에서 현재 페이지에 보여줄 페이지를 선택하는 메소드
        * @params: {contentsType} string {pageNumber} number
        */
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
        builder.addCase(fetchContents.fulfilled, (state, action) => {
            const type = action.meta.arg.contentsType;
            const contentsType = `${type}PageState`;
            
            if (contentsType in state) {
                const targetState = state[`${contentsType}`];
                
                targetState.contents = sliceContents(action.payload, targetState.postLimitNum);
            } else {
                console.error("Invalid type : ", type);
            }
        });
    },
})


export const selectReviewContents = (state: RootState) => state.contents.ReviewPageState;
export const selectNewsState = (state: RootState) => state.contents.NewsPageState;
export const selectCommunityState = (state: RootState) => state.contents.CommunityPageState;

export const { setCurrentContents } = contentsSlice.actions;
export default contentsSlice.reducer;