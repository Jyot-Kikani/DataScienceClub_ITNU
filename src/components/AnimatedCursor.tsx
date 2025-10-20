import { useEffect, useState } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
};

export const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    setIsDark(root.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  // Mouse movement and interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);

      // Create shooting star particles
      const newParticles: Particle[] = Array.from({ length: 1 }).map(() => ({
        x: newPos.x,
        y: newPos.y,
        size: Math.random() * 2 + 1, // small size
        opacity: 1,
        velocityX: (Math.random() - 0.3) * 1.5, // slightly diagonal
        velocityY: (Math.random() - 0.3) * 1.5,
      }));

      setParticles((prev) => [...prev, ...newParticles]);

      // Detect hover
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

  // Update particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.velocityX,
            y: p.y + p.velocityY,
            opacity: p.opacity - 0.03, // fade out
          }))
          .filter((p) => p.opacity > 0)
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Theme-based blue shades
  const glowStart = isDark ? "#0ea5e9" : "#3b82f6"; // bright blue
  const glowEnd = isDark ? "#38bdf8" : "#60a5fa";   // soft trailing blue

  return (
    <>
      {/* Shooting Star Particles */}
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
            background: `linear-gradient(135deg, ${glowStart}, ${glowEnd})`,
            boxShadow: `0 0 ${p.size * 2}px ${glowStart}, 0 0 ${p.size * 3}px ${glowEnd}`,
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="rounded-full transition-all duration-150"
          style={{
            width: isClicking ? "14px" : isHovering ? "18px" : "12px",
            height: isClicking ? "14px" : isHovering ? "18px" : "12px",
            background: isHovering ? glowStart : glowEnd,
            boxShadow: isHovering
              ? `0 0 6px ${glowStart}, 0 0 8px ${glowEnd}`
              : `0 0 3px ${glowStart}, 0 0 5px ${glowEnd}`,
          }}
        />
      </div>
    </>
  );
};