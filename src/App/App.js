import { useState } from 'react';
import { Stage, useTick } from '@pixi/react';
import { Scene } from '../Scene';

export const App = () => {
  const SCREEN_WIDTH = window.innerWidth
  const SCREEN_HEIGHT = window.innerHeight
  const BACKGROUND_COLOR = '#4F6F52'
  
  return (
    <Stage
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT}
      options={{ background: BACKGROUND_COLOR }}
    >
      <Scene
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT}
      />
    </Stage>
  );
};
