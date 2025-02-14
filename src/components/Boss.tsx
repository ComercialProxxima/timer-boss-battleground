
import { useState } from 'react';
import { Timer } from './Timer';

interface BossProps {
  type: 'yellow' | 'green';
  position: { x: number; y: number };
}

export const Boss = ({ type, position }: BossProps) => {
  const [isActive, setIsActive] = useState(false);
  const duration = type === 'yellow' ? 60 : 30;

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handleTimerComplete = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`absolute cursor-pointer group transition-all duration-300`}
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      onClick={handleClick}
    >
      <div className={`relative w-8 h-8 ${type === 'yellow' ? 'text-yellow-500' : 'text-green-500'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        {isActive && (
          <>
            <div className="absolute inset-0 bg-gray-200/50 rounded-full backdrop-blur-sm" />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <Timer duration={duration} onComplete={handleTimerComplete} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
