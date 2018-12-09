/* @flow */
/**
 * @class SplitFlapDisplay
 */

import * as React from 'react';
import styled from 'styled-components';

import * as characterPresets from './constants';

import SplitFlapCharacter from './Character';

type Props = {
  background: string,
  borderColor: string,
  borderWidth: string,
  characterSet: Array<string>,
  characterWidth?: string,
  fontSize: string,
  minLength?: number,
  padDirection: string,
  step: number,
  textColor: string,
  value: string,
};

type State = {
  currValue: string,
  escapedFinalValue: string,
  prevValue: string,
};

/* eslint-disable indent */
const Wrapper = styled.div`
  display: flex;
  color: ${({ color }: { color: string }): string => color};
  font-size: ${({ fontSize }: { fontSize: string }): string => fontSize};
  > * {
    &:not(:first-child) {
      border-left: ${({
        borderColor,
        borderWidth,
      }: {
        borderColor: string,
        borderWidth: string,
      }): string => `${borderColor} ${borderWidth} solid`};
    }
  }
`;
/* eslint-enable indent */

export default class SplitFlapDisplay extends React.Component<Props, State> {
  state: State;
  updateTimer: ?TimeoutID;
  ALPHA: Array<string>;
  NUMERIC: Array<string>;
  PUNCTUATION: Array<string>;

  static ALPHA = characterPresets.ALPHA;
  static NUMERIC = characterPresets.NUMERIC;
  static PUNCTUATION = characterPresets.PUNCTUATION;

  static defaultProps = {
    background: '#000000',
    borderColor: '#dddddd',
    borderWidth: '1px',
    fontSize: '1em',
    padDirection: 'left',
    step: 200,
    textColor: '#dddddd',
  };

  constructor(props: Props) {
    super(props);

    const initialValue = Array(props.value.length)
      .fill(props.characterSet[0])
      .join('');

    this.state = {
      currValue: initialValue,
      escapedFinalValue: this.escapeValue(props.value, props.characterSet),
      prevValue: initialValue,
    };
  }

  componentDidMount() {
    this.updateValue();
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.value !== this.props.value) {
      const escapedFinalValue = this.escapeValue(nextProps.value, nextProps.characterSet);
      this.setState({ escapedFinalValue });
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.value !== this.props.value) {
      this.updateValue();
    }
  }

  componentWillUnmount() {
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
      this.updateTimer = null;
    }
  }

  escapeValue = (value: string, charSet: Array<string>): string =>
    value
      .split('')
      .map((char: string): string => (charSet.includes(char) ? char : charSet[0]))
      .join('');

  getMinLengthFill = (value: string): Array<string> => {
    const currValue: string = value || '';
    const { characterSet, minLength } = this.props;
    if (minLength && currValue.length < minLength) {
      return Array(minLength - currValue.length).fill(characterSet[0]);
    }
    return [];
  };

  updateValue = () => {
    if (this.updateTimer || this.state.prevValue === this.state.escapedFinalValue) {
      return;
    }

    this.setState({ prevValue: this.state.currValue });

    const currChars = this.state.currValue.split('');
    const finalChars = this.state.escapedFinalValue.split('');

    const nextValue = finalChars
      .map((char: string, idx: number): string => {
        const { characterSet } = this.props;
        const currChar = currChars[idx];
        const charIdx = characterSet.indexOf(currChar);
        const nextChar =
          currChar === char || (charIdx === 0 && !characterSet.includes(char))
            ? currChar
            : characterSet[(charIdx + 1) % characterSet.length];
        return nextChar;
      })
      .join('');

    this.setState({ currValue: nextValue });
    this.updateTimer = setTimeout(() => {
      this.updateTimer = null;
      this.updateValue();
    }, this.props.step);
  };

  render(): React.Element<*> {
    const {
      background,
      borderColor,
      borderWidth,
      characterWidth,
      fontSize,
      padDirection,
      step,
      textColor,
    } = this.props;

    const { currValue, prevValue } = this.state;

    let prevChars;
    let currChars;

    if (padDirection === 'right') {
      prevChars = [...prevValue.split(''), ...this.getMinLengthFill(prevValue)];
      currChars = [...currValue.split(''), ...this.getMinLengthFill(currValue)];
    } else {
      prevChars = [...this.getMinLengthFill(prevValue), ...prevValue.split('')];
      currChars = [...this.getMinLengthFill(currValue), ...currValue.split('')];
    }

    return (
      <Wrapper
        borderColor={borderColor}
        borderWidth={borderWidth}
        color={textColor}
        fontSize={fontSize}
      >
        {prevChars.map((v: string, idx: number): React.Element<*> => (
          <SplitFlapCharacter
            key={`split-flap-${idx}`}
            background={background}
            borderWidth={borderWidth}
            characterWidth={characterWidth}
            prevValue={v === ' ' ? '\u2007' : v}
            step={step}
            textColor={textColor}
            value={currChars[idx] === ' ' ? '\u2007' : currChars[idx]}
          />
        ))}
      </Wrapper>
    );
  }
}
