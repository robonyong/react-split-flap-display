/* @flow */
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import Text from './Text';

type PanelProps = {
  background: string,
  position: string,
  textColor: string,
  value: string,
};

const HalfPanel = styled.div`
  position: ${({ position }: { position: string }): string =>
    position === 'top' ? 'relative' : 'absolute'};
  overflow: hidden;
`;

const Panel = ({
  background,
  position,
  textColor,
  value,
}: PanelProps): React.Element<*> => (
  <HalfPanel color={background} position={position}>
    <Text position={position} color={textColor}>
      {value}
    </Text>
  </HalfPanel>
);

type FlipPanelProps = PanelProps & {
  direction: string,
  duration: number,
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

const HalfFlipPanel = styled(HalfPanel)`
  position: absolute;
  animation-name: ${({ direction }: { direction: string }): string =>
    direction === 'in' ? FlipIn : FlipOut};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-duration: ${({ duration }: { duration: string }): string => `${duration}s`};
  background: ${({ color, direction }: { color: string, direction: string }): string =>
    direction === 'out'
      ? `linear-gradient(${color} 50%, transparent 50%)`
      : `linear-gradient(transparent 50%, ${color} 50%)`};
  opacity: 1;
  z-index: 1;
`;

export const FlipPanel = ({
  background,
  direction,
  duration,
  position,
  textColor,
  value,
}: FlipPanelProps): React.Element<*> => (
  <HalfFlipPanel direction={direction} duration={duration} color={background} position={position}>
    <Text position={position} color={textColor}>
      {value}
    </Text>
  </HalfFlipPanel>
);

export default Panel;
