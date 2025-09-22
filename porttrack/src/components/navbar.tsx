"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <div className="relative">
              {/* Animated Logo Background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                <h1 className="text-2xl font-extrabold tracking-tight">PortTrack</h1>
              </div>
            </div>
            <div className="text-xs font-medium text-gray-400 hidden sm:block">
              Beta
            </div>
          </Link>

          {/* Navigation Links (if any) - for future use */}
          <div className="hidden md:flex items-center space-x-8">
            {session && (
              <>
                <Link href="/dashboard" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  Dashboard
                </Link>
                <Link href="/portfolio" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                  Portfolio
                </Link>
                <Link href="/achievements" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
                  Achievements
                </Link>
              </>
            )}
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {!session ? (
              <>
                {/* GitHub Login */}
                <button
                  onClick={() => signIn("github")}
                  className="group relative px-4 py-2 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 text-gray-200 font-medium hover:border-gray-600 hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="hidden sm:inline">GitHub</span>
                </button>

                {/* Google Login */}
                <button
                  onClick={() => signIn("google")}
                  className="group relative px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-red-500/20 backdrop-blur-sm border border-blue-500/30 text-white font-medium hover:from-blue-600/30 hover:to-red-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="hidden sm:inline">Google</span>
                </button>
              </>
            ) : (
              <>
                {/* User Profile Section */}
                <div className="flex items-center space-x-3">
                  
                  {/* User Avatar & Name */}
                  <div className="hidden sm:flex items-center space-x-3 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-sm font-bold text-white">
                      {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || "U"}
                    </div>
                    <div className="text-sm">
                      <div className="text-white font-medium truncate max-w-32">
                        {session.user?.name || "User"}
                      </div>
                      <div className="text-gray-400 text-xs truncate max-w-32">
                        {session.user?.email}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Avatar Only */}
                  <div className="sm:hidden w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-sm font-bold text-white">
                    {session.user?.name?.charAt(0) || session.user?.email?.charAt(0) || "U"}
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={() => signOut()}
                    className="group relative px-4 py-2 rounded-xl bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-400 font-medium hover:bg-red-500/30 hover:border-red-400/50 hover:text-red-300 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Subtle bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </nav>
  );
}