export interface IStyles {
	bg: string;
	color?: string;
	padding: string;
	width: string;
	height: string;
}

export interface ICard {
	id: number;
	title: string;
	description?: string;
	styles: IStyles;
}

export interface IFlex {
	justifyContent?: string;
	alignItem?: string;
	flexWrap?: string;
}
