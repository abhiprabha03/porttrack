"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-500/10 to-emerald-500/20 animate-pulse"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 py-20 px-4 min-h-screen">
        
        {/* Hero Title with Gradient Text */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              PortTrack
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-2 text-2xl md:text-3xl font-bold text-white/90">
            <span className="animate-bounce">🚀</span>
            <span>Verified Skills. AI Portfolios. Blockchain-Backed Trust.</span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
          Showcase your skills, achievements, and creativity — all in one 
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"> verified place</span>
        </p>

        {/* Authentication Section */}
        {session ? (
          /* Signed In - Glass Card */
          <div className="mt-12 p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl max-w-md w-full">
            <div className="space-y-6">
              {/* Welcome Message */}
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || "U"}
                </div>
                <h3 className="text-2xl font-bold text-white">Welcome back!</h3>
                <p className="text-emerald-400 font-medium">{session.user?.email}</p>
              </div>

              {/* User Stats (Placeholder) */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-cyan-400">12</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-purple-400">8</div>
                  <div className="text-xs text-gray-400">Skills</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-emerald-400">5</div>
                  <div className="text-xs text-gray-400">Awards</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  View My Portfolio
                </button>
                
                <button 
                  onClick={() => signOut()} 
                  className="w-full py-3 px-6 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 font-semibold hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Sign In - Glowing Cards */
          <div className="mt-12 space-y-6 w-full max-w-md">
            <p className="text-gray-400 text-lg font-medium">Get started with your portfolio</p>
            
            <div className="space-y-4">
              {/* GitHub Sign In */}
              <button
                onClick={() => signIn("github")}
                className="group w-full p-6 rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">Continue with GitHub</div>
                    <div className="text-gray-400 text-sm">Access your coding projects</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-600/0 via-gray-600/5 to-gray-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Google Sign In */}
              <button
                onClick={() => signIn("google")}
                className="group w-full p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-red-500/20 backdrop-blur-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">Continue with Google</div>
                    <div className="text-gray-400 text-sm">Quick and secure access</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="text-center text-gray-500 text-sm mt-8">
              Join thousands of students showcasing their skills
            </div>
          </div>
        )}

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 max-w-4xl">
          {["🤖 AI-Generated Portfolios", "🔗 Blockchain Verified", "🎯 Smart Job Matching", "🏆 Achievement NFTs"].map((feature, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}