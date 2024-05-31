import type { IFlex } from "@/app/ts/interfaces";
import type { FC, PropsWithChildren } from "react";
import { FlexStyle } from "./styles";

export const Flex: FC<PropsWithChildren & IFlex> = ({
	children,
	alignItem = "center",
	flexWrap = "wrap",
	justifyContent = "center",
}) => (
	<FlexStyle
		alignItem={alignItem}
		flexWrap={flexWrap}
		justifyContent={justifyContent}
	>
		{children}
	</FlexStyle>
);
