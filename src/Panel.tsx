import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

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

const HalfPanel =
  styled.div <
  PanelStyleProps >
  `
  position: ${({ position }: { position: string }): string =>
    position === 'top' ? 'relative' : 'absolute'};
  overflow: hidden;
`;

const Panel: React.FunctionComponent<PanelProps> = ({ background, position, textColor, value }) => (
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

const panelAnimationName = ({ direction }) => css`
  ${direction === 'in' ? FlipIn.getName() : FlipOut.getName()};
`;

const HalfFlipPanel =
  styled(HalfPanel)<FlipPanelStyleProps>`
  position: absolute;
  animation: ${({ direction }) => direction === 'in' ? FlipIn : FlipOut} linear ${({ duration }) => `${duration}s`};
  animation-fill-mode: forwards;
  background: ${({ color, direction }): string =>
    direction === 'out'
      ? `linear-gradient(${color} 50%, transparent 50%)`
      : `linear-gradient(transparent 50%, ${color} 50%)`};
  opacity: 1;
  z-index: 1;
`;

export const FlipPanel: React.FunctionComponent<FlipPanelProps> = ({
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
