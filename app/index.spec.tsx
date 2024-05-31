import { cardsProjects } from "@/app/mocks";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
	beforeEach(() => render(<Home />));

	it("should render component", () => {
		expect(screen.getByText(cardsProjects.title)).toBeTruthy();
	});

	it("should render all the components", () => {
		expect(screen.getAllByTestId("test-card")).toHaveLength(4);
	});
});
