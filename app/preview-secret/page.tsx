import Link from 'next/link';

export default function PreviewSecret() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <main className="text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-bold text-white tracking-tight leading-tight">
          Preview Mode
        </h1>
        
        <p className="text-lg text-slate-300 max-w-md mx-auto leading-relaxed font-inter font-normal">
          You are viewing the site in preview mode. This bypasses maintenance mode.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-inter font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Go to Main Site
          </Link>
        </div>
      </main>
    </div>
  );
}
