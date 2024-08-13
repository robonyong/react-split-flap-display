import React, { useState, ChangeEvent, SetStateAction } from 'react';
import { createRoot } from 'react-dom/client';
import { ColorChangeHandler } from 'react-color';
import SplitFlapDisplay from '../index';
import { ALPHA, NUMERIC, PUNCTUATION } from '../constants';

import CodeBlock from './CodeBlock';
import Swatch from './Swatch';
import { defaultInputs } from './constants';

import * as css from './styles.module.scss';

type DefaultInputKeys = keyof defaultInputs;

const typeToCharSetArray = {
  numeric: NUMERIC,
  alpha: ALPHA,
  alphanumeric: [...ALPHA, ...NUMERIC],
  punctuation: [...ALPHA, ...PUNCTUATION],
};

const typeToCharSet = {
  numeric: 'NUMERIC',
  alpha: 'ALPHA',
  alphanumeric: '[...ALPHA, ...NUMERIC]',
  punctuation: '[...ALPHA, ...PUNCTUATION]',
};

export default function Demo() {
  const [exampleSet, setExampleSet] = useState<DefaultInputKeys>('numeric');
  const [background, setBackground] = useState<string>('#000000');
  const [borderColor, setBorderColor] = useState<string>('#dddddd');
  const [borderWidth, setBorderWidth] = useState<string>('1px');
  const [borderRadius, setBorderRadius] = useState<string>('10px');
  const [margin, setMargin] = useState<string>('5px');
  const [fontFamily, setFontFamily] = useState<string>('Arial, sans-serif');
  const [characterWidth, setCharacterWidth] = useState<string>('1em');
  const [fontSize, setFontSize] = useState<string>('2em');
  const [minLength, setMinLength] = useState<number>(defaultInputs.numeric.length);
  const [padDirection, setPadDirection] = useState<string>('left');
  const [value, setValue] = useState<string>(defaultInputs.numeric);
  const [textColor, setTextColor] = useState<string>('#dddddd');
  const [step, setStep] = useState<number>(200);
  const [withSound, setWithSound] = useState<boolean | string>(false);
  const [withCustomSound, setWithCustomSound] = useState<string>('');

  const generateInputHandler =
    (setFn: SetStateAction<any>) =>
    (event: ChangeEvent<HTMLInputElement>): void =>
      setFn(event.target.value);
  const generateColorInputHandler =
    (setFn: SetStateAction<any>): ColorChangeHandler =>
    (color): void =>
      setFn(color.hex);
  const onWithSoundToggle = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'false') {
      setWithSound(false);
    }
    if (event.target.value === 'true') {
      setWithSound(true);
    }
    if (event.target.value === 'custom') {
      setWithSound(withCustomSound);
    }
  };
  const onCustomSoundInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (typeof withSound === 'string') {
      setWithSound(event.target.value);
    }
    setWithCustomSound(event.target.value);
  };

  const onSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedExample = event.target.value as DefaultInputKeys;
    if (selectedExample !== exampleSet) {
      const newValue = defaultInputs[selectedExample];
      setExampleSet(selectedExample);
      setValue(newValue);
      setMinLength(newValue.length);
    }
  };

  const onSelectFontFamily = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFontFamily(event.target.value);
  };

  return (
    <div className={css.container}>
      <h3>React Split Flap Display</h3>
      <div className={css.flexContainerVertical}>
        <div className={css.wrapper}>
          <SplitFlapDisplay
            background={background}
            borderColor={borderColor}
            borderWidth={borderWidth}
            characterSet={typeToCharSetArray[exampleSet]}
            characterWidth={characterWidth}
            fontSize={fontSize}
            minLength={minLength}
            padDirection={padDirection}
            step={step}
            textColor={textColor}
            value={value}
            withSound={withSound}
            borderRadius={borderRadius}
            margin={margin}
            fontFamily={fontFamily}
          />
        </div>
        <div className={css.flexContainerHorizontal}>
          <div>
            <div className={css.wrapper}>
              <div>
                <label>
                  display:&nbsp;
                  <input value={value} onChange={generateInputHandler(setValue)} />
                </label>
              </div>
              <div>
                font familty:&nbsp;
                <select onChange={onSelectFontFamily}>
                  <option value="Arial, sans-serif">sans-serif</option>
                  <option value="Courier New, monospace">monospace </option>
                  <option value="Times New Roman, serif">serif</option>
                </select>
              </div>
              <div>
                character set:&nbsp;
                <select value={exampleSet} onChange={onSelect}>
                  <option value="numeric">0-9</option>
                  <option value="alpha">A-Z</option>
                  <option value="alphanumeric">A-Z with 0-9</option>
                  <option value="punctuation">A-Z with punctuation</option>
                </select>
              </div>
              <div>
                character width:&nbsp;
                <input value={characterWidth} onChange={generateInputHandler(setCharacterWidth)} />
              </div>
              <div>
                <label>
                  min length:&nbsp;
                  <input type="number" value={minLength} onChange={generateInputHandler(setMinLength)} />
                </label>
              </div>
              <div>
                <label>
                  pad direction:&nbsp;
                  <label>
                    <input
                      type="radio"
                      value="left"
                      onChange={generateInputHandler(setPadDirection)}
                      checked={padDirection === 'left'}
                    />
                    left
                  </label>
                  &nbsp;
                  <label>
                    <input
                      type="radio"
                      value="right"
                      onChange={generateInputHandler(setPadDirection)}
                      checked={padDirection === 'right'}
                    />
                    right
                  </label>
                </label>
              </div>
              <div>
                <label>
                  step (ms):&nbsp;
                  <input type="number" value={step} onChange={generateInputHandler(setStep)} />
                </label>
              </div>
            </div>
            <div className={css.wrapper}>
              <div>
                background color:&nbsp;
                <Swatch color={background} onChange={generateColorInputHandler(setBackground)} />
              </div>
              <div>
                border color:&nbsp;
                <Swatch color={borderColor} onChange={generateColorInputHandler(setBorderColor)} />
              </div>
              <div>
                text color:&nbsp;
                <Swatch color={textColor} onChange={generateColorInputHandler(setTextColor)} />
              </div>
            </div>
            <div className={css.wrapper}>
              <div>
                border width:&nbsp;
                <input value={borderWidth} onChange={generateInputHandler(setBorderWidth)} />
              </div>
              <div>
                border radius:&nbsp;
                <input value={borderRadius} onChange={generateInputHandler(setBorderRadius)} />
              </div>
              <div>
                margin-right:&nbsp;
                <input value={margin} onChange={generateInputHandler(setMargin)} />
              </div>
              <div>
                font size:&nbsp;
                <input value={fontSize} onChange={generateInputHandler(setFontSize)} />
              </div>
            </div>
            <div className={css.wrapper}>
              <div>
                <label>
                  with sound:&nbsp;
                  <label>
                    <input type="radio" value="false" onChange={onWithSoundToggle} checked={withSound === false} />
                    no sound
                  </label>
                  &nbsp;
                  <label>
                    <input type="radio" value="true" onChange={onWithSoundToggle} checked={withSound === true} />
                    default sound
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="custom"
                      onChange={onWithSoundToggle}
                      checked={typeof withSound === 'string'}
                    />
                    custom sound source
                  </label>
                </label>
                &nbsp;
                {typeof withSound === 'string' && <input value={withCustomSound} onChange={onCustomSoundInput} />}
              </div>
            </div>
          </div>
          <CodeBlock
            background={background}
            borderColor={borderColor}
            borderRadius={borderRadius}
            borderWidth={borderWidth}
            characterSet={typeToCharSet[exampleSet]}
            characterWidth={characterWidth}
            fontFamily={fontFamily}
            fontSize={fontSize}
            minLength={minLength}
            padDirection={padDirection}
            margin={margin}
            step={step}
            textColor={textColor}
            value={value}
            withSound={JSON.stringify(withSound)}
          />
        </div>
      </div>
      <a href="https://github.com/robonyong/react-split-flap-display">github</a>
    </div>
  );
}
createRoot(document.getElementById('app') as HTMLDivElement).render(<Demo />);
