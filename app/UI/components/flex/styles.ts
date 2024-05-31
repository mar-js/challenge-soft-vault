import type { IFlex } from "@/app/ts/interfaces";
import styled from "@emotion/styled";

export const FlexStyle = styled.div<IFlex>`
  display: flex;
  height: 100%;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItem }) => alignItem};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;
