import { useState } from "react";

export const setPaginationInfo = (contents: any[], postLimit: number, pageLimit: number) => {
    const total = contents.length;
    const postLimitNum = postLimit;
    const pageLimitNum = pageLimit;
    const [ currentPage, setCurrentPage ] = useState(1);
    
    return { total, postLimitNum, pageLimitNum, currentPage, setCurrentPage };
}

export const slicePageByLimit = (total: number, limit: number) => {
    const numArray = Array(total)
        .fill(1)
        .map((_, index) => index);
    
    return Array(Math.ceil(total / limit))
        .fill(1)
        .map(() => numArray.splice(0, limit));
}

export const sliceContents = (contents: any[], limit: number) => {
    return Array.from({ length: Math.ceil(contents.length / limit)}, (_, index) =>
        contents.slice(index * limit, (index + 1) * limit)
    );
}