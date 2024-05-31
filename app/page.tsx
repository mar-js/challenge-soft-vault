"use client";
import { CardOurVisions, Flex, Main } from "./UI";
import { cardsOurVisions } from "./mocks";

export default function Home() {
	return (
		<Main>
			<Flex>
				{cardsOurVisions.map((card) => (
					<CardOurVisions
						key={card.id}
						id={card.id}
						title={card.title}
						description={card.description}
						bg={card.bg}
						padding={card.padding}
					/>
				))}
			</Flex>
		</Main>
	);
}
