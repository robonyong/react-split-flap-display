import React from 'react';

type CodeBlockProps = {
  background: string;
  borderColor: string;
  borderWidth: string;
  characterSet: string;
  characterWidth: string;
  fontSize: string;
  minLength: number;
  padDirection: string;
  step: number;
  textColor: string;
  value: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  background,
  borderColor,
  borderWidth,
  characterSet,
  characterWidth,
  fontSize,
  minLength,
  padDirection,
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
    minLength={${minLength}}
    padDirection='${padDirection}'
    step={${step}}
    textColor='${textColor}'
    value='${value}'
  />
  `}
  </pre>
);

export default CodeBlock;
