export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <main className="text-center space-y-8 animate-fade-in">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-bold text-white tracking-tight leading-tight">
          Emeline Le Guillou
        </h1>
        
        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 font-jetbrains-mono font-normal tracking-wider">
          coming soon
        </h2>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <a
            href="https://www.linkedin.com/in/emeline-l-758a0873/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-inter font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-cyan-500 focus-visible:outline-offset-2 shadow-lg hover:shadow-xl"
            aria-label="Visit Emeline's LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="mailto:emelineleguillou@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-500 text-sm font-inter font-medium rounded-md text-slate-300 bg-transparent hover:bg-slate-800/50 hover:text-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-slate-500 focus-visible:outline-offset-2"
            aria-label="Send email to Emeline"
          >
            Email
          </a>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="absolute bottom-8 text-xs text-slate-500 font-jetbrains-mono font-light">
        built with Next.js • deployed on Vercel
      </footer>
    </div>
  );
}
