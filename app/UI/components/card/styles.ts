import type { IStyles } from "@/app/ts/interfaces";
import styled from "@emotion/styled";

export const CardStyle = styled.div<IStyles>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  text-align: center;
  background: no-repeat center / contain url(${({ bg }) => bg}) transparent;
  z-index: var(--postion-init);
  color: ${({ color }) => color};
`;

export const CardTitleStyle = styled.h4`
  font-weight: 700;
  font-size: 2rem;
  font-family: var(--font-syne);
`;

export const CardDescriptionStyle = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-sen)
`;
