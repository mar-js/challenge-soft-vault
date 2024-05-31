import type { ICardOurVisions } from "@/app/ts/interfaces";
import type { FC } from "react";
import {
	CardDescriptionStyle,
	CardOurVisionsStyle,
	CardTitleStyle,
} from "./styles";

export const CardOurVisions: FC<ICardOurVisions> = ({
	title,
	description,
	bg,
	padding,
}) => (
	<CardOurVisionsStyle bg={bg} padding={padding}>
		<CardTitleStyle>{title}</CardTitleStyle>
		<CardDescriptionStyle>{description}</CardDescriptionStyle>
	</CardOurVisionsStyle>
);
