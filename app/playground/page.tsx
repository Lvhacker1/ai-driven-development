'use client';
import { useState } from 'react';
import LayoutPreview from '@/components/playground/LayoutPreviw';
import Controls from '@/components/playground/Controls';
import CodeDisplay from '@/components/playground/CodeDisplay';
import { FlexConfig } from '@/types/types';

const PlaygroundPage = () => {
  const [config, setConfig] = useState<FlexConfig>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 8,
    flexWrap: 'nowrap',
    numBoxes: 3,
    boxColor: '#3b82f6',
    boxWidth: 'auto',
    boxHeight: 'auto'
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          CSS Flexbox Playground
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Controls config={config} setConfig={setConfig} />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <LayoutPreview config={config} />
            <CodeDisplay config={config} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaygroundPage;