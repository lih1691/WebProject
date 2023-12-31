import styled from 'styled-components';
import oc from 'open-color';
import { PostWidthProps } from "@Interfaces/Style/Pages/Community";
export const postWidthState: PostWidthProps = {
    postNumberWidth: "7%",
    tagWidth: "5%",
    titleWidth: "52%",
    writerWidth: "9%",
    dateWidth: "8%",
    viewsWidth: "6%",
    recommendationWidth: "5%"
}
export const Table = styled.table`
  width: 100%;
  border: 0;
  border-spacing: 0;
  border-collapse: collapse;
  padding: 0;
  margin-top: 20px;
`
export const TableRow = styled.tr`
  height: 40px;
`
export const HeadContents = styled.th<{width: string}>`
  width: ${(props) => props.width};
  border-top: 1px solid ${oc.gray[9]};
  border-bottom: 1px solid ${oc.gray[4]};
  padding: 0;
`
export const DataContents = styled.th<{width: string}>`
  width: ${(props) => props.width};
  border-bottom: 1px solid ${oc.gray[4]};
  padding: 0;
`
export const NoDataContents = styled.th`
  position: relative;
  top: -1px;
`