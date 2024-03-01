import clsx from 'clsx';
import React from 'react';

import Text from '../Text';
import * as css from './styles.module.scss';

interface PanelProps {
  background: string;
  position: string;
  textColor: string;
  value: string;
}

interface PanelStyleProps extends React.HTMLProps<HTMLDivElement> {
  position: string;
}

function HalfPanel(props: PanelStyleProps) {
  const { children, className, position, ...rest } = props;
  return (
    <div {...rest} className={clsx(css.half, className)} data-position={position}>
      {children}
    </div>
  );
}

interface FlipPanelStyleProps extends React.HTMLProps<HTMLDivElement> {
  color: string;
  direction: string;
  duration: string;
}

function HalfFlipPanel(props: FlipPanelStyleProps) {
  const { children, className, color, direction, duration, ...rest } = props;
  return (
    <div
      {...rest}
      className={clsx(css.halfFlip, className)}
      data-direction={direction}
      style={{ '--color': color, '--duration': duration }}
    >
      {children}
    </div>
  );
}

export default function Panel(props: PanelProps) {
  const { position, textColor, value } = props;
  return (
    <HalfPanel position={position}>
      <Text position={position} color={textColor}>
        {value}
      </Text>
    </HalfPanel>
  );
}

interface FlipPanelProps extends PanelProps {
  direction: string;
  duration: string;
}

export function FlipPanel({ background, direction, duration, position, textColor, value }: FlipPanelProps) {
  return (
    <HalfFlipPanel direction={direction} duration={duration} color={background}>
      <Text position={position} color={textColor}>
        {value}
      </Text>
    </HalfFlipPanel>
  );
}
