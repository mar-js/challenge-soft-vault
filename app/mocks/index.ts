import bgFour from "../assets/images/bg-four.png";
import bgOne from "../assets/images/bg-one.png";
import bgThree from "../assets/images/bg-three.png";
import bgTwo from "../assets/images/bg-two.png";

import type { ICard } from "../ts/interfaces";

export const cardsOurVisions: ICard[] = [
	{
		id: 1,
		title: "Understanding needs",
		description:
			"We identify who has the problem or need and provide a detailed description of what the problem entails.",
		styles: {
			bg: bgOne.src,
			width: "34rem",
			height: "22rem",
			padding: "7rem 6.5rem 3rem",
		},
	},
	{
		id: 2,
		title: "Identifying opportunities",
		description:
			"Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard.",
		styles: {
			bg: bgTwo.src,
			width: "34rem",
			height: "22rem",
			padding: "7rem 4rem 3rem 7rem",
		},
	},
	{
		id: 3,
		title: "Developing customized solutions",
		description:
			"Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard.",
		styles: {
			bg: bgThree.src,
			width: "34rem",
			height: "22rem",
			padding: "7rem 5.5rem 3rem 5.5rem",
		},
	},
];

export const cardsProjects: ICard = {
	id: 1,
	title: "Below are some of the key technologies we use in our projects:",
	styles: {
		bg: bgFour.src,
		padding: "3rem 5rem",
		color: "#00F4AC",
		width: "51rem",
		height: "12.5rem",
	},
};
