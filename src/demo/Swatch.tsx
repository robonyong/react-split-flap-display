import React, { useState } from 'react';
import { SketchPicker, ColorChangeHandler } from 'react-color';

import * as css from './styles.module.scss';

interface Props {
  color: string;
  onChange: ColorChangeHandler;
}

export default function Swatch({ color, onChange }: Props) {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  return (
    <div className={css.swatchContainer}>
      <div className={css.swatch} onClick={() => setShowColorPicker(!showColorPicker)}>
        <div className={css.color} style={{ background: color }} />
      </div>
      {showColorPicker && (
        <div className={css.popover}>
          <div className={css.cover} onClick={() => setShowColorPicker(false)} />
          <SketchPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
}
