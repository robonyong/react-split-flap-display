import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

export default class Swatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showColorPicker: false,
    };
  }

  render() {
    const { color, onChange } = this.props;

    return (
      <div className="swatch-container">
        <div
          className="swatch"
          onClick={() => this.setState({ showColorPicker: !this.state.showColorPicker })}
        >
          <div className="color" style={{ background: color }} />
        </div>
        {this.state.showColorPicker && (
          <div className="popover">
            <div className="cover" onClick={() => this.setState({ showColorPicker: false })} />
            <SketchPicker color={color} onChange={onChange} />
          </div>
        )}
      </div>
    );
  }
}
