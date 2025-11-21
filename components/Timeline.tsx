import React, { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  time: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Initial Discovery",
    description: "Identifying core user needs through deep analytics and feedback loops.",
    time: "Phase 1"
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Mapping out the architecture and defining key performance indicators.",
    time: "Phase 2"
  },
  {
    id: 3,
    title: "Execution & Scale",
    description: "Deploying the solution across distributed clusters for maximum availability.",
    time: "Phase 3"
  },
  {
    id: 4,
    title: "Continuous Optimization",
    description: "Real-time monitoring and iterative improvements based on live data.",
    time: "Phase 4"
  }
];

export const Timeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Duration for each step in milliseconds
  const STEP_DURATION = 4000; 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % timelineData.length);
    }, STEP_DURATION);

    return () => clearInterval(interval);
  }, []);

  // Calculate the height of the progress line based on active step
  useEffect(() => {
    // Calculate percentage: (activeStep / (total - 1)) * 100
    // But we want it to flow smoothly. 
    // For simplicity in this specific animation, we snap to the active node.
    const percentage = (activeStep / (timelineData.length - 1)) * 100;
    setProgressHeight(percentage);
  }, [activeStep]);

  return (
    <div className="w-full max-w-md mx-auto p-4" ref={containerRef}>
      <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
        
        {/* The Active Progress Line */}
        {/* We use a separate absolute div for the gradient line to animate height */}
        <div 
          className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-brand-500 via-purple-500 to-brand-500 transition-all duration-1000 ease-in-out z-10"
          style={{ height: `${progressHeight}%` }}
        >
          {/* Glowing head of the line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-brand-400 rounded-full blur-[6px] shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white rounded-full" />
        </div>

        {timelineData.map((item, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          
          return (
            <div 
              key={item.id} 
              className={`relative transition-all duration-700 ease-in-out transform ${isActive ? 'translate-x-2' : 'translate-x-0'}`}
            >
              {/* Dot on the line */}
              <div 
                className={`absolute left-[-39px] top-2 w-4 h-4 rounded-full border-2 transition-colors duration-500 z-20
                  ${isActive || isPast ? 'border-brand-500 bg-slate-900' : 'border-slate-700 bg-slate-900'}
                `}
              >
                {/* Inner Dot Fill when active/past */}
                <div className={`w-full h-full rounded-full bg-brand-500 transition-opacity duration-500 ${isActive || isPast ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Ripple Effect for Active */}
                {isActive && (
                  <span className="absolute -inset-2 rounded-full bg-brand-500 opacity-20 animate-ping"></span>
                )}
              </div>

              {/* Card Content */}
              <div 
                className={`
                  p-5 rounded-xl border transition-all duration-500
                  ${isActive 
                    ? 'bg-slate-800/50 border-brand-500/30 shadow-[0_0_30px_rgba(124,58,237,0.1)]' 
                    : 'bg-transparent border-transparent opacity-60 hover:opacity-80'
                  }
                `}
              >
                <span className={`text-xs font-bold tracking-widest uppercase mb-1 block transition-colors duration-300 ${isActive ? 'text-brand-400' : 'text-slate-500'}`}>
                  {item.time}
                </span>
                <h4 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress Indicator Text (Optional footer for timeline) */}
      <div className="mt-8 flex justify-between items-center text-xs font-medium text-slate-600 uppercase tracking-widest">
        <span>Processing</span>
        <span>{Math.round(((activeStep + 1) / timelineData.length) * 100)}% Complete</span>
      </div>
    </div>
  );
};