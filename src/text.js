/* @flow */
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.Element<*> | string,
  color: string,
  position: string,
};

const Text = styled.div`
  background: ${({ position, color }: { position: string, color: string }): string =>
    position === 'top'
      ? `linear-gradient(${color} 50%, transparent 50%)`
      : `linear-gradient(transparent 50%, ${color} 50%)`};
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
`;

export default ({
  children,
  color,
  position,
}: Props): React.Element<*> => (
  <Text position={position} color={color}>
    {children}
  </Text>
);
