import React from "react";

export default ({
  background,
  borderColor,
  borderWidth,
  characterSet,
  fontSize,
  step,
  textColor,
  value
}) => (
  <pre>
    {`
  <SplitFlapDisplay
    background='${background}'
    borderColor='${borderColor}'
    borderWidth='${borderWidth}'
    characterSet={${characterSet}}
    fontSize='${fontSize}'
    step={${step}}
    textColor='${textColor}'
    value='${value}'
  />
  `}
  </pre>
);
