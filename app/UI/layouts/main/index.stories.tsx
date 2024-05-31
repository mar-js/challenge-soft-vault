import { cardsOurVisions } from "@/app/mocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Main } from ".";

const meta: Meta<typeof Main> = {
	title: "UI/layouts/Main",
	component: Main,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Children: Story = {
	args: {
		children: cardsOurVisions.map((card) => (
			<div key={card.id} style={{ width: "10rem" }}>
				{card.description}
			</div>
		)),
	},
};
