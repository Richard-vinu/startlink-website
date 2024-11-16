import React from 'react';
import { motion } from 'framer-motion';

const ConnectIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-purple-600 flex flex-col items-center justify-center text-white p-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Indian Connection</h1>
        <p className="text-xl md:text-2xl mb-8">
          Bringing People and Organizations Together
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full"
      >
        {['Connect', 'Collaborate', 'Grow'].map((text, index) => (
          <motion.div
            key={text}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center"
          >
            <ConnectIcon className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{text}</h2>
            <p className="text-sm opacity-80">
              {index === 0 && 'Build meaningful relationships across India.'}
              {index === 1 && 'Work together to achieve common goals.'}
              {index === 2 && 'Expand your network and opportunities.'}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-3 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-lg"
      >
        Join the Network
      </motion.button>
    </div>
  );
}
