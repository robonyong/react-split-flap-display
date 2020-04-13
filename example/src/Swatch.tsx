import React, { useState } from 'react';
import { SketchPicker, ColorChangeHandler } from 'react-color';

type SwatchProps = {
  color: string;
  onChange: ColorChangeHandler;
};

const Swatch = ({ color, onChange }: SwatchProps) => {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  return (
    <div className="swatch-container">
      <div className="swatch" onClick={() => setShowColorPicker(!showColorPicker)}>
        <div className="color" style={{ background: color }} />
      </div>
      {showColorPicker && (
        <div className="popover">
          <div className="cover" onClick={() => setShowColorPicker(false)} />
          <SketchPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default Swatch;
