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

export interface ContentsPageState {
    currentContentsType: string;
    currentCategory: string;
}

export interface UIState {
    currentPage: string;
    mainPageState: MainPageState;
    contentsPageState: ContentsPageState;
}