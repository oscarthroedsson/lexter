import { useEffect, useState, ReactElement } from "react";
import { motion } from "framer-motion";

interface WaveBackgroundProps {
  children: ReactElement;
  className?: string;
}

function WaveBackground({ children, className }: WaveBackgroundProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const balls = [
    { color: "#FF0080", size: 300 },
    { color: "#8000FF", size: 450 },
    { color: "#00FFFF", size: 525 },
  ];

  const getRandomPosition = (size: number) => ({
    x: Math.random() * (windowSize.width - size),
    y: Math.random() * (windowSize.height - size),
  });

  return (
    <div className="relative w-full h-fit overflow-hidden">
      {/* Background balls */}
      <div className="absolute inset-0 z-0">
        {balls.map((ball, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: ball.size,
              opacity: 0.2,
              height: ball.size,
              backgroundColor: ball.color,
              filter: "blur(50px)",
              mixBlendMode: "screen",
            }}
            initial={getRandomPosition(ball.size)}
            animate={{
              x: [getRandomPosition(ball.size).x, getRandomPosition(ball.size).x],
              y: [getRandomPosition(ball.size).y, getRandomPosition(ball.size).y],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Children content */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}

export default WaveBackground;
