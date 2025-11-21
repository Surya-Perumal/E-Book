import React from 'react';
import { TakeawaysSection } from './components/TakeawaysSection';
import { BookPreviewSection } from './components/BookPreviewSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-8">
      <div className="w-full max-w-7xl mx-auto space-y-24 pb-20">
        <TakeawaysSection />
        <BookPreviewSection />
      </div>
    </div>
  );
};

export default App;