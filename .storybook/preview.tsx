import type { Preview } from "@storybook/react";
import React from "react";
import { senFont, syneFont } from "../fonts/index";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<div className={`${syneFont.variable} ${senFont.variable}`}>
				<Story />
			</div>
		),
	],
};

export default preview;
