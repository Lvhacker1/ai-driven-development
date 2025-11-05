import { FlexConfig } from '../../types/types';

interface LayoutPreviewProps {
  config: FlexConfig;
}

const LayoutPreview = ({ config }: LayoutPreviewProps) => {
    
  return (
    <div className="w-full bg-gray-50 rounded-lg p-8 border-2 border-gray-300">
      <div
        className="min-h-[400px] bg-white border-2 border-dashed border-gray-400 rounded overflow-auto"
        style={{
          display: config.display,
          flexDirection: config.flexDirection,
          justifyContent: config.justifyContent,
          alignItems: config.alignItems,
          gap: `${config.gap}px`,
          flexWrap: config.flexWrap,
          padding: '24px'
        }}
      >
        {Array.from({ length: config.numBoxes }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg flex items-center justify-center font-semibold text-white"
            style={{
              backgroundColor: config.boxColor,
              width: config.boxWidth === 'auto' ? 'auto' : config.boxWidth,
              height: config.boxHeight === 'auto' ? 'auto' : config.boxHeight,
              padding: config.boxWidth === 'auto' ? '16px 24px' : '16px',
              minWidth: '60px',
              minHeight: '60px'
            }}
          >
            Box {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LayoutPreview;