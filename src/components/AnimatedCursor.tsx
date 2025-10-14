import { useEffect, useState } from "react";

const PARTICLE_COUNT = 8;

type Particle = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityY: number;
};

export const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);

      // Add new particles
      const newParticles: Particle[] = Array.from({ length: 2 }).map(() => ({
        x: newPos.x + (Math.random() - 0.5) * 10,
        y: newPos.y + (Math.random() - 0.5) * 10,
        size: Math.random() * 4 + 2,
        opacity: 1,
        velocityY: Math.random() * 1 + 0.5,
      }));

      setParticles((prev) => [...prev, ...newParticles]);
      
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, y: p.y + p.velocityY, opacity: p.opacity - 0.02 }))
          .filter((p) => p.opacity > 0)
      );
    }, 16); // roughly 60fps

    return () => clearInterval(interval);
  }, []);

  const gradient = "linear-gradient(135deg, #00ffae, #00c8ff)"; // green → blue gradient

  return (
    <>
      {/* Falling particles */}
      {particles.map((p, index) => (
        <div
          key={index}
          className="fixed pointer-events-none rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}px`,
            top: `${p.y}px`,
            opacity: p.opacity,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            background: gradient,
            boxShadow: `0 0 8px rgba(0,255,174,0.7), 0 0 8px rgba(0,200,255,0.7)`,
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isClicking
              ? "animate-ping"
              : isHovering
              ? "animate-pulse"
              : ""
          }`}
          style={{
            width: isClicking ? "24px" : isHovering ? "56px" : "40px",
            height: isClicking ? "24px" : isHovering ? "56px" : "40px",
            background: gradient,
            border: isHovering ? "2px solid rgba(0,255,174,0.7)" : "2px solid rgba(0,255,174,0.4)",
            boxShadow: "0 0 20px rgba(0,255,174,0.6), 0 0 20px rgba(0,200,255,0.5)",
          }}
        />
      </div>
    </>
  );
};
