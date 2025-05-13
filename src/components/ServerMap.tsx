
import React from 'react';

interface ServerMapProps {
  className?: string;
}

export function ServerMap({ className }: ServerMapProps) {
  // In a real app, these would be dynamic and fetched from an API
  const activeServers = [
    { id: 1, x: "20%", y: "30%", country: "USA", load: 65 },
    { id: 2, x: "35%", y: "20%", country: "Canada", load: 42 },
    { id: 3, x: "48%", y: "25%", country: "UK", load: 78 },
    { id: 4, x: "52%", y: "35%", country: "Germany", load: 51 },
    { id: 5, x: "60%", y: "28%", country: "Russia", load: 37 },
    { id: 6, x: "75%", y: "32%", country: "Japan", load: 59 },
    { id: 7, x: "80%", y: "58%", country: "Australia", load: 31 },
  ];

  return (
    <div className={`relative w-full h-[300px] overflow-hidden bg-vpn-dark-card rounded-xl ${className}`}>
      {/* Simplified world map outline */}
      <div className="absolute inset-0 p-2 opacity-40">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          <path 
            d="M150,120 Q250,80 350,100 Q450,120 550,90 Q650,80 750,110 Q760,160 750,200 Q700,230 650,220 Q600,240 550,230 Q500,260 450,250 Q400,280 350,260 Q300,270 250,250 Q200,280 150,250 Q100,260 50,230 Q40,190 50,150 Q100,120 150,120" 
            fill="none" 
            stroke="rgba(155, 135, 245, 0.3)" 
            strokeWidth="1"
          />
          <path 
            d="M100,200 Q150,180 200,190 Q250,180 300,200 Q350,190 400,210 Q450,200 500,220 Q550,210 600,230 Q650,220 700,240 Q720,270 700,300 Q650,310 600,300 Q550,310 500,290 Q450,310 400,290 Q350,310 300,290 Q250,300 200,280 Q150,290 100,270 Q70,240 100,200" 
            fill="none" 
            stroke="rgba(69, 216, 216, 0.3)" 
            strokeWidth="1"
          />
          {/* Network connection lines */}
          <line x1="20%" y1="30%" x2="35%" y2="20%" stroke="rgba(155, 135, 245, 0.4)" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="35%" y1="20%" x2="48%" y2="25%" stroke="rgba(155, 135, 245, 0.4)" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="48%" y1="25%" x2="52%" y2="35%" stroke="rgba(155, 135, 245, 0.4)" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="52%" y1="35%" x2="60%" y2="28%" stroke="rgba(155, 135, 245, 0.4)" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="60%" y1="28%" x2="75%" y2="32%" stroke="rgba(155, 135, 245, 0.4)" strokeWidth="0.5" strokeDasharray="5,5" />
          <line x1="75%" y1="32%" x2="80%" y2="58%" stroke="rgba(155, 135, 245, 0.4)" strokeWidth="0.5" strokeDasharray="5,5" />
        </svg>
      </div>
      
      {/* Server location dots */}
      {activeServers.map((server) => (
        <div
          key={server.id}
          style={{ left: server.x, top: server.y }}
          className="absolute w-3 h-3 rounded-full bg-vpn-blue glow flex items-center justify-center group cursor-pointer"
        >
          <div className="absolute w-5 h-5 rounded-full border border-vpn-blue/50 animate-pulse"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-vpn-dark-panel neo-blur px-2 py-1 rounded text-xs font-mono whitespace-nowrap">
              {server.country} <span className="text-vpn-blue">{server.load}%</span>
            </div>
          </div>
        </div>
      ))}
      
      {/* Legend */}
      <div className="absolute bottom-2 left-2 bg-vpn-dark-panel/50 neo-blur text-xs px-3 py-1 rounded">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-vpn-blue mr-2"></div>
          <span className="text-gray-400">Active Servers</span>
        </div>
      </div>
    </div>
  );
}
