import React from 'react';

interface BookFlipProps {
  currentSheet: number;
  totalSheets: number;
}

// Sample content for the book pages
const bookContent = [
  {
    // Sheet 0 Front (Cover)
    front: (
      <div className="h-full w-full bg-gradient-to-br from-brand-900 to-slate-900 p-6 sm:p-8 flex flex-col justify-between border-r-4 border-slate-800 text-white">
        <div className="border-2 border-brand-500/30 h-full p-4 sm:p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="z-10">
            <h3 className="text-brand-400 tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">Special Report</h3>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2">The Future of</h1>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400 mb-8">
              Digital Scale
            </h1>
            <div className="w-16 h-1 bg-brand-500 mx-auto mb-8"></div>
            <p className="text-slate-400 text-xs sm:text-sm">2024 Edition</p>
          </div>
        </div>
      </div>
    ),
    // Sheet 0 Back (Introduction)
    back: (
      <div className="h-full w-full bg-brand-50 p-6 sm:p-10 flex flex-col text-slate-800">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-4 sm:mb-6 border-b-2 border-slate-200 pb-4">Introduction</h2>
          <p className="font-serif text-base sm:text-lg leading-relaxed mb-4 text-slate-700">
            In the rapidly evolving landscape of digital infrastructure, scalability is no longer just about handling traffic—it's about intelligence.
          </p>
          <p className="font-serif text-sm sm:text-base leading-relaxed text-slate-600">
            This comprehensive guide explores the intersection of automated scaling systems and predictive AI models. We delve into how modern enterprises are not just surviving data surges but leveraging them for competitive advantage.
          </p>
        </div>
        <div className="text-center text-xs font-mono text-slate-400 mt-4">- i -</div>
      </div>
    )
  },
  {
    // Sheet 1 Front (Chapter 1)
    front: (
      <div className="h-full w-full bg-white p-6 sm:p-10 flex flex-col text-slate-800 border-l border-slate-100">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Chapter One</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-6">Automated Horizons</h2>
          
          <div className="float-right w-24 h-24 sm:w-32 sm:h-32 bg-slate-100 ml-4 mb-4 rounded-lg flex items-center justify-center">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <p className="font-serif text-sm sm:text-base leading-loose text-slate-700 mb-4 text-justify">
            The first step in understanding automated horizons is to decouple the concept of growth from resource expenditure. Traditional models suggest a linear relationship: more users equal more servers.
          </p>
          <p className="font-serif text-sm sm:text-base leading-loose text-slate-700 text-justify">
            However, recent case studies from the fintech sector demonstrate that an event-driven architecture can decouple these factors entirely, allowing for <span className="bg-brand-100 px-1">asynchronous scaling</span> that responds to intent rather than just load.
          </p>
        </div>
        <div className="text-center text-xs font-mono text-slate-400 mt-4">1</div>
      </div>
    ),
    // Sheet 1 Back (Data Visualization)
    back: (
      <div className="h-full w-full bg-white p-6 sm:p-10 flex flex-col text-slate-800">
         <div className="flex-1 flex flex-col justify-center items-center">
            <h3 className="text-xs sm:text-sm font-bold text-slate-500 uppercase mb-6">Growth Trajectory</h3>
            
            <div className="w-full h-48 sm:h-64 border-l border-b border-slate-300 relative mb-4">
              {/* Mock Chart */}
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end px-2 space-x-2 sm:space-x-4">
                <div className="w-6 sm:w-8 bg-brand-200 h-[20%] rounded-t"></div>
                <div className="w-6 sm:w-8 bg-brand-300 h-[35%] rounded-t"></div>
                <div className="w-6 sm:w-8 bg-brand-400 h-[50%] rounded-t"></div>
                <div className="w-6 sm:w-8 bg-brand-500 h-[80%] rounded-t"></div>
                <div className="w-6 sm:w-8 bg-brand-600 h-[95%] rounded-t"></div>
              </div>
              
              {/* Grid lines */}
              <div className="absolute top-1/4 w-full h-px bg-slate-100"></div>
              <div className="absolute top-2/4 w-full h-px bg-slate-100"></div>
              <div className="absolute top-3/4 w-full h-px bg-slate-100"></div>
            </div>
            
            <p className="text-xs text-center italic text-slate-500 max-w-xs">
              Figure 1.1: Exponential efficiency gains observed after implementing Phase 3 of the timeline.
            </p>
         </div>
         <div className="text-center text-xs font-mono text-slate-400 mt-4">2</div>
      </div>
    )
  },
  {
    // Sheet 2 Front (Chapter 2)
    front: (
      <div className="h-full w-full bg-white p-6 sm:p-10 flex flex-col text-slate-800 border-l border-slate-100">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Chapter Two</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-6">Privacy by Design</h2>
          <p className="font-serif text-sm sm:text-base leading-loose text-slate-700 mb-6 text-justify">
            When we architect for privacy from day one, we create a system of trust. This is not merely a compliance checklist but a fundamental architectural decision.
          </p>
          <blockquote className="border-l-4 border-brand-500 pl-4 italic text-slate-600 my-6 font-serif text-base sm:text-lg">
            "Data sovereignty is the new oil. Owning your architecture means owning your destiny."
          </blockquote>
          <p className="font-serif text-sm sm:text-base leading-loose text-slate-700 text-justify">
            The implementation of localized data shards ensures that customer information never crosses borders without explicit consent, a feature that is natively supported by our new framework.
          </p>
        </div>
        <div className="text-center text-xs font-mono text-slate-400 mt-4">3</div>
      </div>
    ),
    // Sheet 2 Back (Conclusion)
    back: (
      <div className="h-full w-full bg-slate-100 p-6 sm:p-10 flex flex-col justify-center items-center text-center text-slate-800">
        <div className="mb-8">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-brand-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">End of Preview</h2>
          <p className="text-sm sm:text-base text-slate-600">Thank you for reading.</p>
        </div>
        
        <button className="px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-brand-600 transition-colors shadow-lg text-sm sm:text-base">
          Purchase Full Copy
        </button>
        <div className="text-center text-xs font-mono text-slate-400 mt-12">4</div>
      </div>
    )
  }
];

export const BookFlip: React.FC<BookFlipProps> = ({ currentSheet, totalSheets }) => {
  return (
    <div className="relative w-full h-full [perspective:1500px]">
      {bookContent.map((sheet, index) => {
        // Z-Index Logic:
        // If page is flipped (on left side), z-index increases with index (0, 1, 2...)
        // If page is not flipped (on right side), z-index decreases with index (3, 2, 1...)
        const isFlipped = index <= currentSheet;
        const zIndex = isFlipped ? index : bookContent.length - index;

        return (
          <div
            key={index}
            className={`
              absolute top-0 left-0 w-full h-full 
              transition-transform duration-700 ease-in-out 
              origin-left [transform-style:preserve-3d]
              ${isFlipped ? '[transform:rotateY(-180deg)]' : '[transform:rotateY(0deg)]'}
            `}
            style={{ zIndex }}
          >
            {/* Front of the Sheet (Visible when on Right) */}
            <div 
              className="absolute inset-0 w-full h-full bg-white shadow-xl rounded-r-md overflow-hidden [backface-visibility:hidden]"
              style={{ 
                boxShadow: 'inset 20px 0 50px rgba(0,0,0,0.05), 5px 5px 15px rgba(0,0,0,0.1)' 
              }}
            >
              {sheet.front}
            </div>

            {/* Back of the Sheet (Visible when on Left) */}
            <div 
              className="absolute inset-0 w-full h-full bg-white shadow-xl rounded-l-md overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
              style={{ 
                boxShadow: 'inset -20px 0 50px rgba(0,0,0,0.05), -5px 5px 15px rgba(0,0,0,0.1)'
              }}
            >
              {sheet.back}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { bookContent };