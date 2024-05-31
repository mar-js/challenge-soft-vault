"use client";
import { Card, Flex, Main } from "./UI";
import { cardsOurVisions, cardsProjects } from "./mocks";

export default function Home() {
	return (
		<Main>
			<Flex>
				{cardsOurVisions.map((card) => (
					<Card key={card.id} {...card} />
				))}
			</Flex>
			<Flex>
				<Card {...cardsProjects} />
			</Flex>
		</Main>
	);
}
