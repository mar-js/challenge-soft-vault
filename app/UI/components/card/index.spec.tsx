import { cardsOurVisions, cardsProjects } from "@/app/mocks";
import { render, screen } from "@testing-library/react";
import { Card } from ".";

describe("Card component", () => {
	it("should render component", () => {
		const { baseElement } = render(<Card {...cardsProjects} />);

		expect(baseElement).toBeTruthy();
	});

	it("should find title in component", () => {
		render(<Card {...cardsProjects} />);

		expect(screen.getByText(cardsProjects.title)).toBeInTheDocument();
	});

	it("should render all the components", () => {
		render(cardsOurVisions.map((card) => <Card key={card.id} {...card} />));

		expect(screen.getAllByTestId("test-card")).toHaveLength(3);
	});
});
