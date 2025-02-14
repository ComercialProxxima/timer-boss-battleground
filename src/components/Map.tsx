
import { Boss } from './Boss';

const BOSS_POSITIONS = [
  { type: 'yellow' as const, x: 15, y: 45 },
  { type: 'yellow' as const, x: 85, y: 25 },
  { type: 'green' as const, x: 20, y: 20 },
  { type: 'green' as const, x: 40, y: 30 },
  { type: 'green' as const, x: 35, y: 45 },
  { type: 'green' as const, x: 75, y: 65 },
];

export const Map = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-square rounded-lg overflow-hidden shadow-2xl">
      <img
        src="/lovable-uploads/ccfaea77-273e-4431-bfc9-eaeb76e5f0d1.png"
        alt="MMORPG Map"
        className="w-full h-full object-cover"
      />
      {BOSS_POSITIONS.map((boss, index) => (
        <Boss key={index} type={boss.type} position={boss.position} />
      ))}
    </div>
  );
};
