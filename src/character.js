/* @flow */
import * as React from 'react';
import styled from 'styled-components';

import Panel, { FlipPanel } from './Panel';

type Props = {
  background: string,
  borderWidth: string,
  prevValue: string,
  step: number,
  textColor: string,
  value: string,
};

/* eslint-disable indent */
const Character = styled.div`
  background: ${({ background }: { background: string }): string => background};
  display: flex;
  padding: 0.5em;
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    border-bottom: ${({
      background,
      borderWidth,
    }: {
      background: string,
      borderWidth: string,
    }): string => `${background} ${borderWidth} solid`};
  }
`;
/* eslint-enable indent */

export default ({
  background,
  borderWidth,
  prevValue,
  step,
  textColor,
  value,
}: Props): React.Element<*> => (
  <Character background={background} borderWidth={borderWidth}>
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
