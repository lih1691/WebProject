import React from 'react';
import styled from 'styled-components'
import { NewsListItem } from "@style/List/ContentsList";


const TestDiv = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  padding: 10px;
  height: 200px;
`
const ImgPosition = styled.div`
  overflow: hidden;
  width: 45%;
  height: 180px;
  border: 1px solid gray;
  background-color: aqua;
`
const TextPosition = styled.div`
  float: left;
  width: 55%;
  height: 180px;
  background-color: pink;
  padding: 15px 5px 15px 15px;
`

const SubjectPosition = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dotted gray;
  background-color: white;
`

const DescPosition = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: gray;
`

// TODO: 뉴스 정보를 받아와서 props로 전달할 것
function NewsContents() {
    return (
        <NewsListItem>
            <TestDiv >
                <ImgPosition />
                <TextPosition >
                    <SubjectPosition />
                    <DescPosition />
                </TextPosition>
            </TestDiv>
        </NewsListItem>
    )
}

export default NewsContents;