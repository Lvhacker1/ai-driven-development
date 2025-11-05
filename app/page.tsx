
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
          CSS Playground
        </h1>
        <p className="text-gray-600 text-center mb-8 text-lg">
          Visual editor to learn and experiment with CSS Flexbox
        </p>

        <div className="space-y-4">
          <Link 
            href="/playground"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors text-xl"
          >
            Open Flexbox Playground →
          </Link>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-500">Live</div>
              <div className="text-sm text-gray-600">Preview</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-500">Code</div>
              <div className="text-sm text-gray-600">Generator</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-500">Free</div>
              <div className="text-sm text-gray-600">100%</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-3">Features:</h2>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Visual control over all flexbox properties</li>
            <li>✓ Live preview of changes</li>
            <li>✓ Generates both CSS and Tailwind code</li>
            <li>✓ Copy-paste ready code directly to your project</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
