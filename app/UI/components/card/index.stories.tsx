import { cardsProjects } from "@/app/mocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
	title: "UI/components/card",
	component: Card,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const CardsOurVisions: Story = {
	args: {
		...cardsProjects,
		styles: {
			...cardsProjects.styles,
			padding: "3rem 6rem",
			color: "#00F4AC",
			width: "45rem",
			height: "15rem",
		},
	},
};
