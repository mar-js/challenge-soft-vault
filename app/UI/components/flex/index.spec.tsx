import { cardsOurVisions, cardsProjects } from "@/app/mocks";
import { render, screen } from "@testing-library/react";
import { Flex } from ".";

describe("Flex component", () => {
	it("should render component", () => {
		const { baseElement } = render(<Flex>Hello</Flex>);

		expect(baseElement).toBeTruthy();
	});

	it("should find children component", () => {
		render(
			<Flex>
				<h2>Render component</h2>
			</Flex>,
		);

		expect(screen.getByText("Render component")).toBeInTheDocument();
	});
});
