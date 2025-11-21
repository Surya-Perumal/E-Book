import React from 'react';
import { Timeline } from './Timeline';

export const TakeawaysSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 p-8 md:p-16 lg:p-20">
        {/* Column 1: Content */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-brand-400 uppercase mb-3">
              Market Analysis
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">Takeaways</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our comprehensive analysis reveals a significant shift in consumer behavior towards sustainable digital products. 
              As the market evolves, keeping pace with these automated trends is no longer optional—it is essential for survival.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-brand-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium text-lg">Accelerated Growth</h3>
                <p className="text-slate-400 mt-1">
                  Sectors utilizing AI-driven automation have seen a 40% year-over-year growth compared to traditional models.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-brand-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-medium text-lg">Data Sovereignty</h3>
                <p className="text-slate-400 mt-1">
                  Privacy-first architecture is becoming the primary differentiator for enterprise clients evaluating new vendors.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
             <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-brand-600 px-6 font-medium text-neutral-50 duration-300 hover:w-full hover:bg-brand-700">
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span>Download Full Report</span>
            </button>
          </div>
        </div>

        {/* Column 2: Automatic Timeline */}
        <div className="flex items-center justify-center h-full min-h-[500px]">
          <Timeline />
        </div>
      </div>
    </section>
  );
};