import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Image {
    id: number;
    imageUrl: string;
}

interface mainPageState {
    currentID: number;
    MainImages: Image[];
}

const initialState: mainPageState = {
    currentID: 1,
    MainImages: [
        {id: 1, imageUrl: "/Img/iPhone.png"},
        {id: 2, imageUrl: "/Img/Galaxy.png"},
        {id: 3, imageUrl: "/Img/Xiaomi.png"},
    ],
}

const UISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        changeImgID: (state, action: PayloadAction<number>) => {
            state.currentID = action.payload;
        }
    }
});

export const { changeImgID } = UISlice.actions;
export default UISlice.reducer;