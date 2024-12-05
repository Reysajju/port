import React from 'react';
import { CursorTracker } from './components/CursorTracker';
import { Services } from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <CursorTracker />
      
      <main className="relative">
        <div className="py-20 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Portfolio of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Sajjad Rasool
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            Transforming ideas into digital experiences through content, code, and design.
          </p>
        </div>

        <Services />
      </main>
    </div>
  );
}

export default App;