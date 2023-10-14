import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Image {
    id: number;
    imageUrl: string;
    title: string;
    sentence: string;
}

interface mainPageState {
    currentIndex: number;
    MainImages: Image[];
}

const initialState: mainPageState = {
    currentIndex: 0,
    MainImages: [
        {id: 0, imageUrl: "/Img/iPhone.png", title: "아이폰", sentence: "아이폰은 아이폰입니다."},
        {id: 1, imageUrl: "/Img/Galaxy.png", title: "갤럭시", sentence: "갤럭시는 갤럭시입니다."},
        {id: 2, imageUrl: "/Img/Xiaomi.png", title: "샤오미", sentence: "샤오미는 샤오미입니다."},
    ],
    
}

const UISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        changeIndex: (state, action: PayloadAction<number>) => {
            state.currentIndex = action.payload;
        }
    }
});

export const { changeIndex } = UISlice.actions;
export default UISlice.reducer;