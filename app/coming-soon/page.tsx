export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <main className="text-center space-y-8 animate-fade-in">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-semibold text-white tracking-tight leading-tight">
          Emeline Le Guillou
        </h1>
        
        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 font-poppins font-light tracking-wider">
          coming soon
        </h2>
        
        {/* Description paragraph */}
        <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed font-poppins font-normal">
          I build customer-centric systems, teams, and products. Portfolio and case studies coming shortly.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <a
            href="https://www.linkedin.com/in/emelineleguillou/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-poppins font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2 shadow-lg hover:shadow-xl"
            aria-label="Visit Emeline's LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="mailto:emeline.leguillou@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-500 text-sm font-poppins font-medium rounded-full text-slate-300 bg-transparent hover:bg-slate-800/50 hover:text-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-slate-500 focus-visible:outline-offset-2"
            aria-label="Send email to Emeline"
          >
            Email
          </a>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="absolute bottom-8 text-xs text-slate-500 font-poppins font-light">
        built with Next.js • deployed on Vercel
      </footer>
    </div>
  );
}
