import * as React from 'react';
import styled from 'styled-components';

type Props = {
  color: string;
  position: string;
};

const Text = styled.div<Props>`
  background: ${({ position, color }): string =>
    position === 'top'
      ? `linear-gradient(${color} 50%, transparent 50%)`
      : `linear-gradient(transparent 50%, ${color} 50%)`};
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
`;

const TextComponent: React.FunctionComponent<Props> = ({ children, color, position }) => (
  <Text position={position} color={color}>
    {children}
  </Text>
);

export default TextComponent;
