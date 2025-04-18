import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthForm } from '../components/AuthForm';

export function Auth() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black">
      <div className="relative w-full max-w-md">
        {/* Glassmorphic background effect */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />

        <div className="relative px-8 py-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-2"
          >
            Welcome Back
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-8"
          >
            {mode === 'signin'
              ? 'Sign in to access your account'
              : 'Create an account to get started'}
          </motion.p>

          <AnimatePresence mode="wait">
            <AuthForm key={mode} mode={mode} />
          </AnimatePresence>

          <div className="mt-6 text-center">
            <button
              onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              {mode === 'signin'
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}