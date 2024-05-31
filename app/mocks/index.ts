import bgOne from "../assets/images/bg-one.png";
import bgThree from "../assets/images/bg-three.png";
import bgTwo from "../assets/images/bg-two.png";
import type { ICardOurVisions } from "../ts/interfaces";

export const cardsOurVisions: ICardOurVisions[] = [
	{
		id: 1,
		title: "Understanding needs",
		description:
			"We identify who has the problem or need and provide a detailed description of what the problem entails.",
		bg: bgOne.src,
		padding: "6rem 5.6rem 3.5rem",
	},
	{
		id: 2,
		title: "Identifying opportunities",
		description:
			"Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard.",
		bg: bgTwo.src,
		padding: "6rem 3rem 3.5rem 6rem",
	},
	{
		id: 3,
		title: "Developing customized solutions",
		description:
			"Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard.",
		bg: bgThree.src,
		padding: "6rem 3rem 3.5rem 4rem",
	},
];
