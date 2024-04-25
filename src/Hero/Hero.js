import React from 'react';
import { Sprite } from "@pixi/react";

export const Hero = ({ x, y }) => {
	const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png';
	
	return (
		<Sprite
			image={bunnyUrl}
			x={x}
			y={y}
		/>
	)
}
