import React from 'react';
import styled, { keyframes } from 'styled-components';

import Text from './Text';

type PanelProps = {
  background: string;
  position: string;
  textColor: string;
  value: string;
};

type PanelStyleProps = {
  position: string;
};

const HalfPanel = styled.div<PanelStyleProps>`
  position: ${({ position }): string => (position === 'top' ? 'relative' : 'absolute')};
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Panel: React.FC<PanelProps> = ({ position, textColor, value }) => (
  <HalfPanel position={position}>
    <Text position={position} color={textColor}>
      {value}
    </Text>
  </HalfPanel>
);

type FlipPanelProps = PanelProps & {
  direction: string;
  duration: number;
};

type FlipPanelStyleProps = {
  direction: string;
  duration: number;
};

const FlipIn = keyframes`
  0% {
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

const FlipOut = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(90deg);
  }
`;

const HalfFlipPanel = styled(HalfPanel)<FlipPanelStyleProps>`
  position: absolute;
  animation: ${({ direction }) => (direction === 'in' ? FlipIn : FlipOut)} linear
    ${({ duration }) => `${duration}s`};
  animation-fill-mode: forwards;
  background: ${({ color, direction }): string =>
    direction === 'out'
      ? `linear-gradient(${color} 50%, transparent 50%)`
      : `linear-gradient(transparent 50%, ${color} 50%)`};
  opacity: 1;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FlipPanel: React.FC<FlipPanelProps> = ({
  background,
  direction,
  duration,
  position,
  textColor,
  value,
}) => (
  <HalfFlipPanel direction={direction} duration={duration} color={background} position={position}>
    <Text position={position} color={textColor}>
      {value}
    </Text>
  </HalfFlipPanel>
);

export default Panel;
