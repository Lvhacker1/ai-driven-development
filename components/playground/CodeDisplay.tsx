'use client';
import { FlexConfig } from '../../types/types';
import { useState } from 'react';

interface CodeDisplayProps {
  config: FlexConfig;
}

const CodeDisplay = ({ config }: CodeDisplayProps) =>{
  const [copied, setCopied] = useState(false);
  const [codeType, setCodeType] = useState<'css' | 'tailwind'>('css');

  const generateCSS = () => {
    return `.container {
  display: flex;
  flex-direction: ${config.flexDirection};
  justify-content: ${config.justifyContent};
  align-items: ${config.alignItems};
  gap: ${config.gap}px;
  flex-wrap: ${config.flexWrap};
}

.box {
  background-color: ${config.boxColor};
  width: ${config.boxWidth};
  height: ${config.boxHeight};
  padding: 16px;
  border-radius: 8px;
}`;
  };

  const generateTailwind = () => {
    const directionMap: Record<string, string> = {
      'row': 'flex-row',
      'row-reverse': 'flex-row-reverse',
      'column': 'flex-col',
      'column-reverse': 'flex-col-reverse'
    };

    const justifyMap: Record<string, string> = {
      'flex-start': 'justify-start',
      'flex-end': 'justify-end',
      'center': 'justify-center',
      'space-between': 'justify-between',
      'space-around': 'justify-around',
      'space-evenly': 'justify-evenly'
    };

    const alignMap: Record<string, string> = {
      'flex-start': 'items-start',
      'flex-end': 'items-end',
      'center': 'items-center',
      'stretch': 'items-stretch',
      'baseline': 'items-baseline'
    };

    const wrapMap: Record<string, string> = {
      'nowrap': 'flex-nowrap',
      'wrap': 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse'
    };

    const gapClass = config.gap === 0 ? '' : `gap-[${config.gap}px]`;

    return `<div class="flex ${directionMap[config.flexDirection]} ${justifyMap[config.justifyContent]} ${alignMap[config.alignItems]} ${wrapMap[config.flexWrap]} ${gapClass}">
  <div class="p-4 rounded-lg" style="background-color: ${config.boxColor}; width: ${config.boxWidth}; height: ${config.boxHeight}">Box 1</div>
  <div class="p-4 rounded-lg" style="background-color: ${config.boxColor}; width: ${config.boxWidth}; height: ${config.boxHeight}">Box 2</div>
  <!-- ... -->
</div>`;
  };

  const code = codeType === 'css' ? generateCSS() : generateTailwind();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Generated Code</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setCodeType('css')}
            className={`px-3 py-1 rounded ${
              codeType === 'css'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            CSS
          </button>
          <button
            onClick={() => setCodeType('tailwind')}
            className={`px-3 py-1 rounded ${
              codeType === 'tailwind'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Tailwind
          </button>
        </div>
      </div>

      <div className="relative">
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code>{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default CodeDisplay;