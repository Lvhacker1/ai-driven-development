import { FlexConfig } from '../../types/types';

interface ControlsProps {
  config: FlexConfig;
  setConfig: (config: FlexConfig) => void;
}

const Controls = ({ config, setConfig }: ControlsProps) => {
  const updateConfig = (updates: Partial<FlexConfig>) => {
    setConfig({ ...config, ...updates });
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900">Controls</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Flex Direction
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {(['row', 'row-reverse', 'column', 'column-reverse'] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => updateConfig({ flexDirection: dir })}
              className={`px-4 py-2 rounded border text-sm ${
                config.flexDirection === dir
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              {dir}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Justify Content
        </label>
        <select
          value={config.justifyContent}
          onChange={(e) => updateConfig({ justifyContent: e.target.value as any })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Align Items
        </label>
        <select
          value={config.alignItems}
          onChange={(e) => updateConfig({ alignItems: e.target.value as any })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="stretch">stretch</option>
          <option value="baseline">baseline</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Flex Wrap
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {(['nowrap', 'wrap', 'wrap-reverse'] as const).map((wrap) => (
            <button
              key={wrap}
              onClick={() => updateConfig({ flexWrap: wrap })}
              className={`px-4 py-2 rounded border text-sm ${
                config.flexWrap === wrap
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              {wrap}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gap: {config.gap}px
        </label>
        <input
          type="range"
          min="0"
          max="50"
          value={config.gap}
          onChange={(e) => updateConfig({ gap: parseInt(e.target.value) })}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Boxes: {config.numBoxes}
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateConfig({ numBoxes: Math.max(1, config.numBoxes - 1) })}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="text-lg font-semibold">{config.numBoxes}</span>
          <button
            onClick={() => updateConfig({ numBoxes: Math.min(10, config.numBoxes + 1) })}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Box Color
        </label>
        <div className="flex gap-2">
          <input
            type="color"
            value={config.boxColor}
            onChange={(e) => updateConfig({ boxColor: e.target.value })}
            className="h-10 w-20 rounded border border-gray-300"
          />
          <input
            type="text"
            value={config.boxColor}
            onChange={(e) => updateConfig({ boxColor: e.target.value })}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Box Width
        </label>
        <input
          type="text"
          value={config.boxWidth}
          onChange={(e) => updateConfig({ boxWidth: e.target.value })}
          placeholder="auto, 100px, 50%, etc."
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Box Height
        </label>
        <input
          type="text"
          value={config.boxHeight}
          onChange={(e) => updateConfig({ boxHeight: e.target.value })}
          placeholder="auto, 100px, 50%, etc."
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}

export default Controls;