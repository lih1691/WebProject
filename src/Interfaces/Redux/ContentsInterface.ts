interface BaseContentInterface {
    title: string,
    writer: string,
    date: string,
}

interface PageNumberInterface {
    postLimitNum: number;
    pageLimitNum: number;
}

export interface DescContent extends BaseContentInterface{
    desc: string;
}

export interface ReviewContent extends DescContent{
    rating: number;
    product: string;
    file: any[];
}

export interface CommunityContent extends DescContent{
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
    contents: DescContent[][];
    currentContents: DescContent[];
}

export interface AccessContentsPayload {
    contentsType: string;
    pageNumber: number;
}

export interface ContentsState {
    ReviewPageState: ReviewPageState;
    NewsPageState: NewsPageState;
    CommunityPageState: CommunityPageState;
    
    [key: string]: any;
}

export interface FetchContentsInterface {
    contentsType: string;
    category: string | undefined;
    searchOption?: string | null;
    keyword?: string | null;
}