import React, { useState } from 'react';
import { BookFlip, bookContent } from './BookFlip';

export const BookPreviewSection: React.FC = () => {
  const [currentSheet, setCurrentSheet] = useState(-1); // -1 means cover is closed (all pages on right)
  const [zoom, setZoom] = useState(1);

  const handleNext = () => {
    if (currentSheet < bookContent.length - 1) {
      setCurrentSheet(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSheet >= -1) {
      setCurrentSheet(prev => prev - 1);
    }
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 1.6));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.6));

  return (
    <section className="w-full bg-slate-950 rounded-3xl border border-slate-800 p-8 md:p-12 overflow-hidden relative shadow-2xl">
        <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-sm font-semibold tracking-wider text-brand-400 uppercase mb-3">
              Interactive Preview
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Browse the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">Book</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Flip through the pages of our latest report. Use the controls below to navigate or zoom in for a closer look.
            </p>
        </div>

        {/* Controls Toolbar */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12 z-20 relative">
            <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 flex items-center shadow-lg">
                <button 
                    onClick={handleZoomOut}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    aria-label="Zoom Out"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                </button>
                <span className="mx-3 text-xs font-mono text-slate-500 w-12 text-center">{Math.round(zoom * 100)}%</span>
                <button 
                    onClick={handleZoomIn}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                    aria-label="Zoom In"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
            </div>

            <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 flex items-center shadow-lg">
                 <button 
                    onClick={handlePrev}
                    disabled={currentSheet < -1} // Allows closing the cover
                    className={`flex items-center gap-2 px-4 py-2 rounded font-medium transition-all ${currentSheet <= -1 ? 'text-slate-600 cursor-not-allowed' : 'text-white hover:bg-brand-600 bg-slate-800'}`}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Prev
                </button>
                <div className="w-px h-6 bg-slate-800 mx-1"></div>
                <button 
                    onClick={handleNext}
                    disabled={currentSheet >= bookContent.length - 1}
                    className={`flex items-center gap-2 px-4 py-2 rounded font-medium transition-all ${currentSheet >= bookContent.length - 1 ? 'text-slate-600 cursor-not-allowed' : 'text-white hover:bg-brand-600 bg-slate-800'}`}
                >
                    Next
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>

        {/* Book Stage */}
        <div className="relative w-full flex justify-center min-h-[500px] sm:min-h-[600px] overflow-x-auto overflow-y-hidden no-scrollbar">
             {/* Zoom wrapper */}
             <div 
                className="transition-transform duration-500 ease-out origin-top"
                style={{ transform: `scale(${zoom})` }}
             >
                 {/* 
                    Open Book Container:
                    This container's width represents the full spread of the book (Left Page + Right Page).
                    The spine is exactly in the center of this container.
                    
                    Mobile: 300px page * 2 = 600px total width
                    Desktop: 400px page * 2 = 800px total width
                 */}
                 <div className="relative w-[600px] h-[450px] sm:w-[800px] sm:h-[600px] flex">
                      {/* 
                        We place the BookFlip component in the RIGHT half of the container.
                        The left edge of BookFlip will be at the center of the main container (the spine).
                      */}
                      <div className="absolute right-0 top-0 w-1/2 h-full">
                          <BookFlip currentSheet={currentSheet} totalSheets={bookContent.length} />
                      </div>
                 </div>
             </div>
        </div>
        
        {/* Tips */}
        <div className="absolute bottom-6 left-0 w-full text-center pointer-events-none">
            <p className="text-slate-600 text-xs uppercase tracking-widest">
                Page {Math.max(0, currentSheet + 1) * 2} / {bookContent.length * 2}
            </p>
        </div>
    </section>
  );
};