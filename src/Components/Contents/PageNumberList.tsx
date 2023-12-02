import React from 'react';
import styled from 'styled-components'
import { Button } from "@style/Base/Button";
import { paginationProps} from "@lib/Contents/PageNation";

const Wrapper =  styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
`
const NumberList = styled.nav`
  position: relative;
  height: 100%;
`

function PageNumberList({total, pageLimit ,currentPage, setCurrentPage, currentPageArray}: paginationProps) {
    const PreOffset = (Math.floor(currentPage / pageLimit - 1)) * pageLimit;
    const nextOffset = (Math.floor(currentPage / pageLimit) + 1) * pageLimit;
    
    console.log(currentPage);
    
    return (
        <Wrapper>
            <NumberList>
                <Button
                    onClick={() => setCurrentPage(currentPage) }
                    disabled = {PreOffset <= 0}
                >
                    &lt;&lt;
                </Button>
                <Button
                    onClick={() => setCurrentPage(currentPage - 1) }
                    disabled = {currentPage === 0}
                >
                    &lt;
                </Button>
                {currentPageArray?.map((i) => (
                    <Button
                        key={i + 1}
                        onClick = {() => setCurrentPage(i)}
                        disabled = { currentPage === (i) }
                    >
                        { i + 1 }
                    </Button>
                ))}
                <Button
                    onClick={() => setCurrentPage(nextOffset) }
                    disabled = {nextOffset >= total - 1}
                >
                    &gt;
                </Button>
                <Button
                    onClick={() => setCurrentPage(total - 1) }
                    disabled = {currentPage === total - 1}
                >
                    &gt;&gt;
                </Button>
            </NumberList>
        </Wrapper>
    )
}
export default PageNumberList;
