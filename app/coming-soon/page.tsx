export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <main className="text-center space-y-8 animate-fade-in">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-semibold text-white tracking-tight leading-tight">
          Emeline Le Guillou
        </h1>
        
        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-pink-200 font-jetbrains-mono font-light tracking-wider">
          coming soon — portfolio, CV, and projects
        </h2>
        
        {/* Tagline */}
        <p className="text-sm sm:text-base text-slate-400 font-inter font-normal leading-relaxed max-w-md mx-auto animate-fade-in">
          Customer Success leadership • SaaS growth • side builds
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10">
          <a
            href="https://www.linkedin.com/in/emeline-l-758a0873/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-sm font-inter font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-pink-500 focus-visible:outline-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Visit Emeline's LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="mailto:emelineleguillou@gmail.com"
            className="inline-flex items-center justify-center px-10 py-4 border border-pink-300/30 text-sm font-inter font-medium rounded-full text-pink-200 bg-transparent hover:bg-pink-500/10 hover:text-white hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-pink-500 focus-visible:outline-offset-2 transform hover:scale-105"
            aria-label="Send email to Emeline"
          >
            Email
          </a>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="absolute bottom-8 text-xs text-slate-400 font-jetbrains-mono font-light">
        built with Next.js • deployed on Vercel
      </footer>
    </div>
  );
}
