import Link from 'next/link';

export default function PreviewSecret() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <main className="text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-semibold text-white tracking-tight leading-tight">
          Preview Mode
        </h1>
        
        <p className="text-lg text-pink-200 max-w-md mx-auto leading-relaxed font-inter font-normal">
          You are viewing the site in preview mode. This bypasses maintenance mode.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-sm font-inter font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Go to Main Site
          </Link>
        </div>
      </main>
    </div>
  );
}
