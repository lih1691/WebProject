import React from 'react';
import styled from 'styled-components'
import { HorizontalList, HorizontalItem } from "@style/List/HorizontalList";

const Wrapper =  styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
`
const NumberList = styled(HorizontalList)`
  position: relative;
  height: 100%;
`
const PageButton = styled.button`
  margin: 20px 20px;
  border: none;
`

function PageNumberList({index}: {index: number}) {
    const pageNumbers = Array.from({length: index}, (_, i) => i + 1);
    
    return (
        <Wrapper>
            <NumberList>
                {pageNumbers.map((pageNumber) => (
                    <HorizontalItem key={pageNumber}>
                        <PageButton>
                            {pageNumber}
                        </PageButton>
                    </HorizontalItem>
                ))}
            </NumberList>
        </Wrapper>
    )
}
export default PageNumberList;
