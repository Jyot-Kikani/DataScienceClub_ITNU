import { useEffect, useState } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, y: p.y + p.velocityY, opacity: p.opacity - 0.02 }))
          .filter((p) => p.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const gradientGlow = "linear-gradient(135deg, #00ffae, #00c8ff)";
  const darkBg = "#111";

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
            background: darkBg,
            boxShadow: `0 0 6px rgba(0,255,174,0.8), 0 0 8px rgba(0,200,255,0.7)`,
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
          className="rounded-full transition-all duration-150"
          style={{
            width: isClicking ? "28px" : isHovering ? "40px" : "36px", // shrink slightly on click
            height: isClicking ? "28px" : isHovering ? "40px" : "36px",
            background: darkBg,
            border: `2px solid rgba(0,255,174,${isHovering ? "0.8" : "0.5"})`,
            boxShadow: `
              0 0 ${isClicking ? "12px" : "15px"} rgba(0,255,174,0.7), 
              0 0 ${isClicking ? "18px" : "25px"} rgba(0,200,255,0.6),
              inset 0 0 10px rgba(0,255,174,0.4)
            `,
          }}
        />
      </div>
    </>
  );
};
