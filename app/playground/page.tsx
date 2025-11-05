'use client';
import { useState } from 'react';
import Link from 'next/link';
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
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to home
        </Link>
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