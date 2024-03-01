import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import SplitFlapCharacter from '../Character';
import { NUMERIC } from '../constants';
import * as css from './styles.module.scss';

export interface SplitFlapDisplayProps extends React.HTMLProps<HTMLDivElement> {
  background?: string;
  borderColor: string;
  borderWidth: string;
  characterSet: string[];
  characterWidth: string;
  fontSize: string;
  minLength?: number;
  padDirection: string;
  step: number;
  textColor: string;
  value: string;
  withSound?: boolean | string;
}

const defaultProps = {
  background: '#000000',
  borderColor: '#dddddd',
  borderWidth: '1px',
  characterSet: NUMERIC,
  characterWidth: '1rem',
  fontSize: '1rem',
  minLength: 5,
  padDirection: 'left',
  step: 200,
  textColor: '#dddddd',
  value: '94609',
};

const escapeValue = (value: string, characterSet: string[]): string =>
  value
    .split('')
    .map((char: string): string => (characterSet.includes(char) ? char : characterSet[0]!))
    .join('');

const getMinLengthFill = (currValue: string, characterSet: string[], minLength: number | undefined): string[] => {
  if (minLength && currValue.length < minLength) {
    return Array(minLength - currValue.length).fill(characterSet[0]);
  }
  return [];
};

export default function SplitFlapDisplay({
  className,
  background = defaultProps.background,
  borderColor = defaultProps.borderColor,
  borderWidth = defaultProps.borderWidth,
  characterSet = defaultProps.characterSet,
  characterWidth = defaultProps.characterWidth,
  fontSize = defaultProps.fontSize,
  minLength = defaultProps.minLength,
  padDirection = defaultProps.padDirection,
  step = defaultProps.step,
  textColor = defaultProps.textColor,
  value = defaultProps.value,
  withSound,
  ...rest
}: SplitFlapDisplayProps) {
  const initialValue = Array(value.length).fill(characterSet[0]).join('');
  const [prevValue, setPrevValue] = useState<string>(initialValue);
  const [currValue, setCurrValue] = useState<string>(initialValue);

  // persisted vars that inform state
  const shadowPrevValue = useRef<string>(initialValue);
  const shadowCurrValue = useRef<string>(initialValue);
  const updateTimer = useRef<NodeJS.Timeout | null>(null);

  const updateValue = useCallback(() => {
    const escapedFinalValue = escapeValue(value, characterSet);
    if (updateTimer.current || shadowPrevValue.current === escapedFinalValue) {
      return;
    }

    shadowPrevValue.current = shadowCurrValue.current;
    setPrevValue(shadowPrevValue.current);

    const currChars = shadowCurrValue.current.split('');
    const finalChars = escapedFinalValue.split('');

    const nextValue = finalChars
      .map((char: string, idx: number): string => {
        const currChar = currChars[idx]!;
        const charIdx = characterSet.indexOf(currChar);
        const nextChar =
          currChar === char || (charIdx === 0 && !characterSet.includes(char))
            ? currChar
            : characterSet[(charIdx + 1) % characterSet.length]!;
        return nextChar;
      })
      .join('');

    shadowCurrValue.current = nextValue;
    setCurrValue(shadowCurrValue.current);

    updateTimer.current = setTimeout(() => {
      updateTimer.current = null;
      updateValue();
    }, step);
  }, [characterSet, step, value]);

  useEffect(() => {
    if (updateTimer.current) {
      clearTimeout(updateTimer.current);
      updateTimer.current = null;
    }
    updateValue();
  }, [updateValue]);

  useEffect(() => {
    return () => {
      if (updateTimer.current) {
        clearTimeout(updateTimer.current);
        updateTimer.current = null;
      }
    };
  }, []);

  let prevChars: string[];
  let currChars: string[];

  if (padDirection === 'right') {
    prevChars = [...prevValue.split(''), ...getMinLengthFill(prevValue, characterSet, minLength)];
    currChars = [...currValue.split(''), ...getMinLengthFill(currValue, characterSet, minLength)];
  } else {
    prevChars = [...getMinLengthFill(prevValue, characterSet, minLength), ...prevValue.split('')];
    currChars = [...getMinLengthFill(currValue, characterSet, minLength), ...currValue.split('')];
  }

  return (
    <div
      {...rest}
      className={clsx(css.wrapper, className)}
      style={{
        '--border-color': borderColor,
        '--border-width': borderWidth,
        '--color': textColor,
        '--font-size': fontSize,
      }}
    >
      {prevChars.map((v: string, idx: number) => (
        <SplitFlapCharacter
          key={`split-flap-${idx}`}
          background={background}
          borderWidth={borderWidth}
          characterWidth={characterWidth}
          prevValue={v === ' ' ? '\u2007' : v}
          step={step}
          textColor={textColor}
          value={currChars[idx] === ' ' ? '\u2007' : currChars[idx]!}
          withSound={withSound}
        />
      ))}
    </div>
  );
}
