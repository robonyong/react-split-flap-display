import * as React from 'react';
import styled from 'styled-components';

import Panel, { FlipPanel } from './Panel';

type Props = {
  background: string;
  borderWidth: string;
  characterWidth: string | null | undefined;
  prevValue: string;
  step: number;
  textColor: string;
  value: string;
};

type StyleProps = {
  background: string;
  borderWidth: string;
  characterWidth: string | null | undefined;
};

const Character = styled.div<StyleProps>`
  background: ${({ background }): string => background};
  display: flex;
  justify-content: center;
  width: ${({ characterWidth }): string => characterWidth || 'initial'};
  padding: 0.5em;
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 5;
    background: transparent;
    border-bottom: ${({ background, borderWidth }): string => `${background} ${borderWidth} solid`};
  }
`;

const CharacterComponent: React.FunctionComponent<Props> = ({
  background,
  borderWidth,
  characterWidth,
  prevValue,
  step,
  textColor,
  value,
}) => (
  <Character background={background} borderWidth={borderWidth} characterWidth={characterWidth}>
    <Panel position="top" background={background} textColor={textColor} value={value} />
    <Panel position="bottom" background={background} textColor={textColor} value={prevValue} />
    {prevValue !== value && (
      <FlipPanel
        direction="out"
        duration={step / 1000}
        position="top"
        background={background}
        textColor={textColor}
        value={prevValue}
      />
    )}
    {prevValue !== value && (
      <FlipPanel
        direction="in"
        duration={step / 1000}
        position="bottom"
        background={background}
        textColor={textColor}
        value={value}
      />
    )}
  </Character>
);

export default CharacterComponent;
