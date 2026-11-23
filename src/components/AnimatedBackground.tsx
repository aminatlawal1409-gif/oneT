import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'cta';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ variant = 'section' }) => {
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #087BFF 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #F8C744 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 opacity-10"
          style={{ background: 'radial-gradient(ellipse, #00C9F2 0%, transparent 70%)', filter: 'blur(60px)' }} />
        {/* Floating orbs */}
        {[
          { top: '15%', left: '8%', size: 4, color: '#087BFF', delay: '0s' },
          { top: '65%', left: '5%', size: 3, color: '#F8C744', delay: '1s' },
          { top: '30%', right: '10%', size: 5, color: '#00C9F2', delay: '2s' },
          { top: '75%', right: '15%', size: 3, color: '#087BFF', delay: '0.5s' },
          { top: '50%', left: '50%', size: 2, color: '#F8C744', delay: '1.5s' },
        ].map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-slow"
            style={{
              top: orb.top,
              left: 'left' in orb ? orb.left : undefined,
              right: 'right' in orb ? (orb as { right: string }).right : undefined,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              background: orb.color,
              boxShadow: `0 0 ${orb.size * 4}px ${orb.color}`,
              animationDelay: orb.delay,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30"
          style={{ background: 'radial-gradient(ellipse at 50% -20%, #087BFF 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15"
          style={{ background: 'radial-gradient(circle, #F8C744 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-15"
          style={{ background: 'radial-gradient(circle, #087BFF 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
        style={{ background: 'radial-gradient(circle, #087BFF 0%, transparent 70%)' }} />
    </div>
  );
};

export default AnimatedBackground;
