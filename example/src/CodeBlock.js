import React from 'react';

export default ({
  background,
  borderColor,
  borderWidth,
  characterSet,
  characterWidth,
  fontSize,
  step,
  textColor,
  value,
}) => (
  <pre>
    {`
  <SplitFlapDisplay
    background='${background}'
    borderColor='${borderColor}'
    borderWidth='${borderWidth}'
    characterSet={${characterSet}}
    characterWidth='${characterWidth}'
    fontSize='${fontSize}'
    step={${step}}
    textColor='${textColor}'
    value='${value}'
  />
  `}
  </pre>
);
