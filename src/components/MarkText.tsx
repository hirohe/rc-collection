import React from 'react';

interface MarkTextProps {
  component?: keyof JSX.IntrinsicElements;
  mark?: string;
  escapeRegex?: boolean;
  regexFlags?: string;
  text?: string;
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|:![\]\\]/g, '\\$&');
}

const MarkText: React.FC<MarkTextProps> = ({
  component = 'span',
  mark = '',
  escapeRegex = true,
  regexFlags = 'ig',
  text = '',
}) => {
  const Component = component || 'span';
  let renderTexts: string[] = [text];
  if (text && mark) {
    renderTexts = text.split(new RegExp(`(${escapeRegex ? escapeRegExp(mark) : mark})`, regexFlags));
  }
  return (
    <Component>
      {renderTexts.map((theText, index) =>
        (index + 1) % 2 === 0 ? <mark key={index}>{theText}</mark> : theText
      )}
    </Component>
  )
}

export default MarkText;
