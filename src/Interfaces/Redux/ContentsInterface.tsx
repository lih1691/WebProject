interface BaseContentInterface {
    title: string,
    writer: string,
    date: string,
}

interface PageNumberInterface {
    postLimitNum: number;
    pageLimitNum: number;
}

export interface ReviewContent extends BaseContentInterface{
    rating: number;
    product: string;
}

export interface NewsContent extends BaseContentInterface{
    desc: string;
}

export interface CommunityContent extends BaseContentInterface{
    postNumber: number;
    tag: string;
    views: number;
    recommendation: number;
}

export interface ReviewPageState extends PageNumberInterface{
    contents: ReviewContent[][];
    currentContents: ReviewContent[];
}


export interface CommunityPageState extends PageNumberInterface{
    postLimitNum: number;
    pageLimitNum: number;
    contents: CommunityContent[][];
    currentContents: CommunityContent[];
}


interface NewsPageState extends PageNumberInterface{
    contents: NewsContent[][];
    currentContents: NewsContent[];
}

export interface AccessContentsPayload {
    contentsType: string;
    pageNumber: number;
}

export interface ContentsState {
    reviewPageState: ReviewPageState;
    newsPageState: NewsPageState;
    communityPageState: CommunityPageState;
    
    [key: string]: any;
}

export interface FetchContentsInterface {
    contentsType: string;
    category: string;
    searchType: string;
    keyword: string;
}