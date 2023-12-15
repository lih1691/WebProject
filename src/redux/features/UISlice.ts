import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "@redux/store";

interface image {
    id: number;
    imageUrl: string;
    title: string;
    sentence: string;
}

interface mainPageState {
    currentIndex: number,
    mainVisual: {
        currentIndex: number;
        MainImages: image[];
    },
}

interface pageState {
    currentPage: string;
    mainPageState: mainPageState;
    contentCategory: string;
}

const initialState: pageState = {
    currentPage: "",
    mainPageState: {
        currentIndex: 0,
        mainVisual: {
            currentIndex: 0,
            MainImages: [
                {id: 0, imageUrl: "/Img/iPhone.png", title: "아이폰", sentence: "아이폰은 아이폰입니다."},
                {id: 1, imageUrl: "/Img/Galaxy.png", title: "갤럭시", sentence: "갤럭시는 갤럭시입니다."},
                {id: 2, imageUrl: "/Img/Xiaomi.png", title: "샤오미", sentence: "샤오미는 샤오미입니다."},
            ],
        }
    },
    contentCategory: "apple",
}

const UISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setCurrentPageName: (state, action: PayloadAction<string>) => {
            state.currentPage = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.contentCategory = action.payload;
        },
        changeMainIndex: (state, action: PayloadAction<number>) => {
            state.mainPageState.currentIndex = action.payload;
        },
        changeMainVisualIndex: (state, action:PayloadAction<number>) => {
            state.mainPageState.mainVisual.currentIndex = action.payload;
        }
    }
});

export const selectCurrentCategory = (state: RootState) => state.ui.contentCategory;

export const { setCurrentPageName, setCategory,changeMainIndex, changeMainVisualIndex } = UISlice.actions;
export default UISlice.reducer;