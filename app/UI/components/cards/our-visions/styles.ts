import type { ICardOurVisionsStyle } from "@/app/ts/interfaces";
import styled from "@emotion/styled";

export const CardOurVisionsStyle = styled.div<ICardOurVisionsStyle>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 30rem;
  height: 20rem;
  padding: ${({ padding }) => padding};
  text-align: center;
  background: no-repeat center / contain url(${({ bg }) => bg}) transparent;
  z-index: var(--postion-init);

  &:nth-child(2) {
    margin-left: -1.5rem;
  }

  &:nth-child(3) {
    margin-left: 1rem;
  }
`;

export const CardTitleStyle = styled.h4`
  font-weight: 700;
  font-size: 1.8rem;
`;

export const CardDescriptionStyle = styled.p`
  font-size: 1rem;
`;
