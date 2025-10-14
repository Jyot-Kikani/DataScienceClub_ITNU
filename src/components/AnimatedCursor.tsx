import { useEffect, useState } from "react";

export const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [pulse, setPulse] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let trailId = 0;
    const maxTrailLength = 3;
    let animationFrameId: number;
    let lastTime = 0;
    const throttleMs = 16;

    const updateRotation = (timestamp: number) => {
      if (timestamp - lastTime > throttleMs) {
        setRotation(prev => (prev + 2) % 360);
        lastTime = timestamp;
      }
      animationFrameId = requestAnimationFrame(updateRotation);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: trailId++ }];
        return newTrail.slice(-maxTrailLength);
      });

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      setPulse(1);
      setTimeout(() => setPulse(0), 200);
    };

    const handleMouseUp = () => setIsClicking(false);

    animationFrameId = requestAnimationFrame(updateRotation);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Data particles component
  const DataParticles = () => {
    return (
      <>
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full transition-transform duration-300"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${angle + rotation}deg) translateX(${
                isHovering ? 20 : 16
              }px) rotate(-${angle + rotation}deg)`,
              opacity: 0.7 + Math.sin((rotation + angle * 10) * 0.01) * 0.3,
            }}
          />
        ))}
      </>
    );
  };

  return (
    <>
      {/* Add CSS animation to head or global CSS */}
      <style>
        {`
          @keyframes cursorRotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}
      </style>

      {/* Trail dots */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-45 mix-blend-difference hidden md:block rounded-full bg-cyan-400/30 transition-all duration-200"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${(index / trail.length) * 4 + 2}px`,
            height: `${(index / trail.length) * 4 + 2}px`,
            opacity: (index / trail.length) * 0.6,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer ring - smaller */}
        <div
          className="absolute rounded-full border border-cyan-400/60 transition-all duration-500"
          style={{
            width: isHovering ? '50px' : '35px',
            height: isHovering ? '50px' : '35px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: isClicking ? 0.8 : 0.6,
            animation: 'cursorRotate 4s linear infinite',
            boxShadow: '0 0 15px hsl(180 100% 50% / 0.3)',
          }}
        />

        {/* Main cursor body - smaller */}
        <div
          className={`relative rounded-full transition-all duration-150 ${
            isClicking
              ? "w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 scale-90"
              : isHovering
              ? "w-9 h-9 bg-gradient-to-br from-cyan-400/80 to-blue-500/80 border border-cyan-300 scale-110"
              : "w-8 h-8 bg-gradient-to-br from-cyan-400/60 to-blue-500/60 border border-cyan-300/70"
          }`}
          style={{
            boxShadow: `
              0 0 20px hsl(180 100% 50% / 0.3),
              0 0 40px hsl(180 100% 50% / 0.15)
            `,
            transform: `scale(${1 + pulse * 0.2})`,
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Data particles */}
          <DataParticles />

          {/* Central dot - smaller */}
          <div
            className="absolute rounded-full bg-white transition-all duration-150"
            style={{
              width: isClicking ? '3px' : '1.5px',
              height: isClicking ? '3px' : '1.5px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 6px hsl(180 100% 100% / 0.8)',
            }}
          />

          {/* Binary code effect */}
          {isHovering && (
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-cyan-300 text-xs font-mono opacity-80"
              style={{
                textShadow: '0 0 6px hsl(180 100% 50% / 0.5)'
              }}
            >
              {Math.random() > 0.5 ? '1010' : '1101'}
            </div>
          )}
        </div>
      </div>

      {/* Precision dot - smaller */}
      <div
        className="fixed pointer-events-none z-40 mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "none",
        }}
      >
        <div
          className="w-1 h-1 bg-cyan-300 rounded-full transition-all duration-100"
          style={{
            boxShadow: `
              0 0 6px hsl(180 100% 50%),
              0 0 12px hsl(180 100% 50% / 0.6)
            `,
            transform: `scale(${1 + pulse * 0.3})`,
          }}
        />
      </div>
    </>
  );
};