import { cardsOurVisions } from "@/app/mocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from ".";

const meta: Meta<typeof Flex> = {
	title: "UI/components/Flex",
	component: Flex,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const AlignItemCenter: Story = {
	args: {
		alignItem: "center",
		flexWrap: "wrap",
		justifyContent: "center",
		children: cardsOurVisions.map((card) => (
			<div key={card.id} style={{ width: "10rem" }}>
				{card.description}
			</div>
		)),
	},
};
