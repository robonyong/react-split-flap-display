import React, { useState, ChangeEvent, SetStateAction } from 'react';
import { ColorChangeHandler } from 'react-color';
import SplitFlapDisplay, { ALPHA, NUMERIC, PUNCTUATION } from './ReactSplitFlapDisplay';

import CodeBlock from './CodeBlock';
import Swatch from './Swatch';
import Wrapper from './Wrapper';
import { defaultInputs } from './constants';

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

const App = () => {
  const [exampleSet, setExampleSet] = useState<DefaultInputKeys>('numeric');
  const [background, setBackground] = useState<string>('#000000');
  const [borderColor, setBorderColor] = useState<string>('#dddddd');
  const [borderWidth, setBorderWidth] = useState<string>('1px');
  const [characterWidth, setCharacterWidth] = useState<string>('1em');
  const [fontSize, setFontSize] = useState<string>('2em');
  const [minLength, setMinLength] = useState<number>(defaultInputs.numeric.length);
  const [padDirection, setPadDirection] = useState<string>('left');
  const [value, setValue] = useState<string>(defaultInputs.numeric);
  const [textColor, setTextColor] = useState<string>('#dddddd');
  const [step, setStep] = useState<number>(200);

  const generateInputHandler = (setFn: SetStateAction<any>) => (event: ChangeEvent<HTMLInputElement>): void =>
    setFn(event.target.value);
  const generateColorInputHandler = (setFn: SetStateAction<any>): ColorChangeHandler => (color): void =>
    setFn(color.hex);

  const onSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedExample = event.target.value as DefaultInputKeys;
    if (selectedExample !== exampleSet) {
      const newValue = defaultInputs[selectedExample];
      setExampleSet(selectedExample);
      setValue(newValue);
      setMinLength(newValue.length);
    }
  };

  return (
    <div className="container">
      <h3>React Split Flap Display</h3>
      <div className="flex-container-vertical">
        <Wrapper>
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
          />
        </Wrapper>
        <div className="flex-container-horizontal">
          <div>
            <Wrapper>
              <div>
                <label>
                  display:&nbsp;
                  <input value={value} onChange={generateInputHandler(setValue)} />
                </label>
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
            </Wrapper>
            <Wrapper>
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
            </Wrapper>
            <Wrapper>
              <div>
                border width:&nbsp;
                <input value={borderWidth} onChange={generateInputHandler(setBorderWidth)} />
              </div>
              <div>
                font size:&nbsp;
                <input value={fontSize} onChange={generateInputHandler(setFontSize)} />
              </div>
            </Wrapper>
          </div>
          <CodeBlock
            background={background}
            borderColor={borderColor}
            borderWidth={borderWidth}
            characterSet={typeToCharSet[exampleSet]}
            characterWidth={characterWidth}
            fontSize={fontSize}
            minLength={minLength}
            padDirection={padDirection}
            step={step}
            textColor={textColor}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
