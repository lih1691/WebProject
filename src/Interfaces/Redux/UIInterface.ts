export interface ImageState {
    id: number;
    imageUrl: string;
    title: string;
    sentence: string;
}

export interface MainPageState {
    currentIndex: number,
    mainVisual: {
        currentIndex: number;
        MainImages: ImageState[];
    },
}

export interface UIState {
    currentPage: string;
    mainPageState: MainPageState;
    contentCategory: string;
}