import { useState } from "react";
import { Container, useTick } from '@pixi/react';
import { Hero } from "../Hero";

export const Scene = ({ width, height }) => {
	const DEFAULT_POSITION = { x: 500, y: 150 }
	const [heroPosition, setHeroPosition] = useState(DEFAULT_POSITION)
	const { x, y } = heroPosition
	
//	useEffect(() => {
//			window.addEventListener('keydown', downHandler);
//			window.addEventListener('keyup', upHandler);
//			return () => {
//				window.removeEventListener('keydown', downHandler);
//				window.removeEventListener('keyup', upHandler);
//			};
//		}, []);
	
	
//  useTick((delta) => {
//		setHeroPosition({
//			x: x - 1,
//			y: y + 1,
//		})
//  })
	
	return (
		<Container>
			<Hero
				x={x}
				y={y}
			/>
		</Container>
	);
};
