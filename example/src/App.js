import React, { Component } from 'react';
import SplitFlapDisplay from 'react-split-flap-display';

import CodeBlock from './CodeBlock';
import Swatch from './Swatch';
import Wrapper from './Wrapper';
import { defaultInputs } from './constants';

import SplitFlapDisplayPackage from 'react-split-flap-display/package.json';

const typeToCharSetArray = {
  numeric: SplitFlapDisplay.NUMERIC,
  alpha: SplitFlapDisplay.ALPHA,
  alphanumeric: [...SplitFlapDisplay.ALPHA, ...SplitFlapDisplay.NUMERIC],
  punctuation: [...SplitFlapDisplay.ALPHA, ...SplitFlapDisplay.PUNCTUATION],
};

const typeToCharSet = {
  numeric: 'SplitFlapDisplay.NUMERIC',
  alpha: 'SplitFlapDisplay.ALPHA',
  alphanumeric: '[...SplitFlapDisplay.ALPHA, ...SplitFlapDisplay.NUMERIC]',
  punctuation: '[...SplitFlapDisplay.ALPHA, ...SplitFlapDisplay.PUNCTUATION]',
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleSet: 'numeric',
      background: '#000000',
      borderColor: '#dddddd',
      borderWidth: '1px',
      fontSize: '2em',
      minLength: defaultInputs.numeric.length,
      padDirection: 'left',
      value: defaultInputs.numeric,
      textColor: '#dddddd',
      step: 200,
    };
  }

  onSelect = (event) => {
    const exampleSet = event.target.value;
    let value = this.state.value;
    let minLength = this.state.minLength;
    if (exampleSet !== this.state.exampleSet) {
      value = defaultInputs[exampleSet];
      minLength = value.length;
    }
    this.setState({ exampleSet, minLength, value });
  };

  generateInputHandler = (stateKey) => (event) => this.setState({ [stateKey]: event.target.value });

  render() {
    return (
      <div className="container">
        <h3>React Split Flap Display v{SplitFlapDisplayPackage.version}</h3>
        <div className="flex-container-vertical">
          <Wrapper>
            <SplitFlapDisplay
              background={this.state.background}
              borderColor={this.state.borderColor}
              borderWidth={this.state.borderWidth}
              characterSet={typeToCharSetArray[this.state.exampleSet]}
              characterWidth={this.state.characterWidth}
              fontSize={this.state.fontSize}
              minLength={this.state.minLength}
              padDirection={this.state.padDirection}
              step={this.state.step}
              textColor={this.state.textColor}
              value={this.state.value}
            />
          </Wrapper>
          <div className="flex-container-horizontal">
            <div>
              <Wrapper>
                <div>
                  <label>
                    display:&nbsp;
                    <input value={this.state.value} onChange={this.generateInputHandler('value')} />
                  </label>
                </div>
                <div>
                  character set:&nbsp;
                  <select value={this.state.exampleSet} onChange={this.onSelect}>
                    <option value="numeric">0-9</option>
                    <option value="alpha">A-Z</option>
                    <option value="alphanumeric">A-Z with 0-9</option>
                    <option value="punctuation">A-Z with punctuation</option>
                  </select>
                </div>
                <div>
                  character width:&nbsp;
                  <input
                    value={this.state.characterWidth}
                    onChange={this.generateInputHandler('characterWidth')}
                  />
                </div>
                <div>
                  <label>
                    min length:&nbsp;
                    <input
                      type="number"
                      value={this.state.minLength}
                      onChange={this.generateInputHandler('minLength')}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    pad direction:&nbsp;
                    <label>
                      <input
                        type="radio"
                        value="left"
                        onChange={this.generateInputHandler('padDirection')}
                        checked={this.state.padDirection === 'left'}
                      />
                      left
                    </label>
                    &nbsp;
                    <label>
                      <input
                        type="radio"
                        value="right"
                        onChange={this.generateInputHandler('padDirection')}
                        checked={this.state.padDirection === 'right'}
                      />
                      right
                    </label>
                  </label>
                </div>
                <div>
                  <label>
                    step (ms):&nbsp;
                    <input
                      type="number"
                      value={this.state.step}
                      onChange={this.generateInputHandler('step')}
                    />
                  </label>
                </div>
              </Wrapper>
              <Wrapper>
                <div>
                  background color:&nbsp;
                  <Swatch
                    color={this.state.background}
                    onChange={(color) => this.setState({ background: color.hex })}
                  />
                </div>
                <div>
                  border color:&nbsp;
                  <Swatch
                    color={this.state.borderColor}
                    onChange={(color) => this.setState({ borderColor: color.hex })}
                  />
                </div>
                <div>
                  text color:&nbsp;
                  <Swatch
                    color={this.state.textColor}
                    onChange={(color) => this.setState({ textColor: color.hex })}
                  />
                </div>
              </Wrapper>
              <Wrapper>
                <div>
                  border width:&nbsp;
                  <input
                    value={this.state.borderWidth}
                    onChange={this.generateInputHandler('borderWidth')}
                  />
                </div>
                <div>
                  font size:&nbsp;
                  <input
                    value={this.state.fontSize}
                    onChange={this.generateInputHandler('fontSize')}
                  />
                </div>
              </Wrapper>
            </div>
            <CodeBlock
              background={this.state.background}
              borderColor={this.state.borderColor}
              borderWidth={this.state.borderWidth}
              characterSet={typeToCharSet[this.state.exampleSet]}
              characterWidth={this.state.characterWidth}
              fontSize={this.state.fontSize}
              minLength={this.state.minLength}
              padDirection={this.state.padDirection}
              step={this.state.step}
              textColor={this.state.textColor}
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
