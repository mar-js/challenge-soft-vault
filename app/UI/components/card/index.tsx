import type { ICard } from "@/app/ts/interfaces";
import type { FC } from "react";
import { CardDescriptionStyle, CardStyle, CardTitleStyle } from "./styles";

export const Card: FC<ICard> = ({ title, description, styles }) => (
	<CardStyle {...styles}>
		<CardTitleStyle>{title}</CardTitleStyle>
		<CardDescriptionStyle>{description}</CardDescriptionStyle>
	</CardStyle>
);
