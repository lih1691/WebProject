import styled from 'styled-components';

export const RelativePositioner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const CenterPositioner = styled(RelativePositioner)`
  margin: 0 auto;
`
export const ContentsImgPositioner = styled.div<{width: string}>`
  overflow: hidden;
  width: ${(props) => props.width};
  height: 180px;
  border: 1px solid gray;
`
export const ContentsTextPositioner = styled.div<{width: string}>`
  float: left;
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  padding: 15px 5px 15px 15px;
`
export const ContentsSubjectPosition = styled(RelativePositioner)`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dotted gray;
`