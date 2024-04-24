import React from 'react';

type CodeBlockProps = {
  background: string;
  borderColor: string;
  borderRadius: string;
  borderWidth: string;
  characterSet: string;
  characterWidth: string;
  fontFamily: string;
  fontSize: string;
  minLength: number;
  padDirection: string;
  margin: string;
  step: number;
  textColor: string;
  value: string;
  withSound: string;
};

export default function CodeBlock({
  background,
  borderColor,
  borderRadius,
  borderWidth,
  characterSet,
  characterWidth,
  fontFamily,
  fontSize,
  minLength,
  padDirection,
  margin,
  step,
  textColor,
  value,
  withSound,
}: CodeBlockProps) {
  return (
    <pre>
      {`
  <SplitFlapDisplay
    background='${background}'
    borderColor='${borderColor}'
    borderRadius='${borderRadius}'
    borderWidth='${borderWidth}'
    characterSet={${characterSet}}
    characterWidth='${characterWidth}'
    fontFamily='${fontFamily}'
    fontSize='${fontSize}'
    minLength={${minLength}}
    padDirection='${padDirection}'
    margin='${margin}'
    step={${step}}
    textColor='${textColor}'
    value='${value}'
    withSound={${withSound}}
  />
  `}
    </pre>
  );
}
