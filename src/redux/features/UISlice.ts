import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Image {
    id: number;
    imageUrl: string;
    title: string;
    sentence: string;
}

interface mainPageState {
    currentIndex: number,
    mainVisual: {
        currentIndex: number;
        MainImages: Image[];
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
    contentCategory: ""
}

const UISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setCurrentPageName: (state, action: PayloadAction<string>) => {
            state.currentPage = action.payload;
        },
        changeMainIndex: (state, action: PayloadAction<number>) => {
            state.mainPageState.currentIndex = action.payload;
        },
        changeMainVisualIndex: (state, action:PayloadAction<number>) => {
            state.mainPageState.mainVisual.currentIndex = action.payload;
        }
    }
});

export const { setCurrentPageName, changeMainIndex, changeMainVisualIndex } = UISlice.actions;
export default UISlice.reducer;