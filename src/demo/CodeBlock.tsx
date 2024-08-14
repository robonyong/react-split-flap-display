import React from 'react';

type CodeBlockProps = {
  background: string;
  borderColor: string;
  borderWidth: string;
  characterSet: string;
  characterWidth: string;
  fontFamily: string;
  fontSize: string;
  minLength: number;
  padDirection: string;
  splitWidth: string;
  step: number;
  textColor: string;
  value: string;
  withSound: string;
};

export default function CodeBlock({
  background,
  borderColor,
  borderWidth,
  characterSet,
  characterWidth,
  fontFamily,
  fontSize,
  minLength,
  padDirection,
  splitWidth,
  step,
  textColor,
  value,
  withSound,
}: CodeBlockProps) {
  return (
    <pre>
      {`
  <div style={{
    fontFamily: "${fontFamily}",
    fontSize: "${fontSize}"
  }}>
    <SplitFlapDisplay
      background='${background}'
      borderColor='${borderColor}'
      borderWidth='${borderWidth}'
      characterSet={${characterSet}}
      characterWidth='${characterWidth}'
      minLength={${minLength}}
      padDirection='${padDirection}'
      splitWidth='${splitWidth}'
      step={${step}}
      textColor='${textColor}'
      value='${value}'
      withSound={${withSound}}
    />
  </div>
  `}
    </pre>
  );
}
