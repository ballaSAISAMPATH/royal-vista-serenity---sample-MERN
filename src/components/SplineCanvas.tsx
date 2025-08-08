// src/components/SplineCanvas.jsx

"use client";

import Spline from '@splinetool/react-spline';

const SplineCanvas = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Lines emanating from the center */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500/20 animate-line-pulse"
            style={{
              width: '1px',
              height: '60vh',
              transform: `rotate(${index * 45}deg)`,
            }}
          />
        ))}
      </div>

      {/* The centered Spline animation */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-auto">
        <Spline
          scene="https://prod.spline.design/c0AqUsvu3Am2doaM/scene.splinecode"
        />
      </div>

      {/* Top Quotes with Enhanced Styling */}
      <div className="absolute top-8 left-8 p-4 pointer-events-none">
        <h2 className="text-3xl font-bold text-amber-400 font-display text-glow-md animate-fade-in-up">
          Unleash the New Dimension
        </h2>
      </div>
      <div className="absolute top-8 right-8 p-4 pointer-events-none text-right">
        <p className="text-xl text-amber-300 font-display text-glow-sm animate-fade-in-up delay-100">
          Step into a world reimagined.
        </p>
      </div>
    </div>
  );
};

export default SplineCanvas;