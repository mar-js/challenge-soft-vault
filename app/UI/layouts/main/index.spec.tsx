import { render, screen } from "@testing-library/react";
import { Main } from ".";

describe("Main component", () => {
	it("should render component", () => {
		const { baseElement } = render(<Main>Hello</Main>);

		expect(baseElement).toBeTruthy();
	});

	it("should find children component", () => {
		render(
			<Main>
				<h2>Render component</h2>
			</Main>,
		);

		expect(screen.getByText("Render component")).toBeInTheDocument();
	});
});
