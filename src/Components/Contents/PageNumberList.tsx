import React from 'react';
import styled from 'styled-components'
import { PageButton } from "@style/Base/Button";
import { PaginationProps } from "@Interfaces/Hooks/PaginationInterface";

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

function PageNumberList({total, pageLimit ,currentPage, setCurrentPage, currentPageArray}: PaginationProps) {
    const PreOffset = (Math.floor(currentPage / pageLimit - 1)) * pageLimit;
    const nextOffset = (Math.floor(currentPage / pageLimit) + 1) * pageLimit;
    
    return (
        <Wrapper>
            <NumberList>
                <PageButton
                    onClick={() => setCurrentPage(currentPage) }
                    disabled = {PreOffset <= 0}
                >
                    &lt;&lt;
                </PageButton>
                <PageButton
                    onClick={() => setCurrentPage(currentPage - 1) }
                    disabled = {currentPage === 0}
                >
                    &lt;
                </PageButton>
                {currentPageArray?.map((i) => (
                    <PageButton
                        key={i + 1}
                        onClick = {() => setCurrentPage(i)}
                        disabled = { currentPage === (i) }
                    >
                        { i + 1 }
                    </PageButton>
                ))}
                <PageButton
                    onClick={() => setCurrentPage(nextOffset) }
                    disabled = {nextOffset >= total - 1}
                >
                    &gt;
                </PageButton>
                <PageButton
                    onClick={() => setCurrentPage(total - 1) }
                    disabled = {currentPage === total - 1}
                >
                    &gt;&gt;
                </PageButton>
            </NumberList>
        </Wrapper>
    )
}
export default PageNumberList;
