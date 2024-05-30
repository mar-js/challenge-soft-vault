import type { FC, PropsWithChildren } from "react";
import { MainStyle } from "./styles";

export const Main: FC<PropsWithChildren> = ({ children }) => (
	<MainStyle>{children}</MainStyle>
);
