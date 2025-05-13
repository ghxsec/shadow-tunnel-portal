
import React from 'react';
import { Activity, Download, Upload, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ConnectionStatsProps {
  className?: string;
}

export function ConnectionStats({ className }: ConnectionStatsProps) {
  // In a real app, these would be dynamic stats from your active connection
  const stats = {
    download: "12.45 MB/s",
    upload: "3.28 MB/s",
    ping: "32 ms",
    uptime: "2h 34m"
  };

  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-4", className)}>
      <StatCard 
        icon={Download} 
        label="Download" 
        value={stats.download} 
        color="blue"
      />
      <StatCard 
        icon={Upload} 
        label="Upload" 
        value={stats.upload} 
        color="purple"
      />
      <StatCard 
        icon={Activity} 
        label="Ping" 
        value={stats.ping} 
        color="teal"
      />
      <StatCard 
        icon={Clock} 
        label="Uptime" 
        value={stats.uptime} 
        color="green"
      />
    </div>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: "blue" | "purple" | "teal" | "green" | "red" | "yellow";
}

const StatCard = ({ icon: Icon, label, value, color }: StatCardProps) => {
  const colorMap = {
    blue: "text-vpn-blue border-vpn-blue/30 bg-vpn-blue/10",
    purple: "text-vpn-purple border-vpn-purple/30 bg-vpn-purple/10",
    teal: "text-vpn-teal border-vpn-teal/30 bg-vpn-teal/10",
    green: "text-vpn-green border-vpn-green/30 bg-vpn-green/10",
    red: "text-vpn-red border-vpn-red/30 bg-vpn-red/10",
    yellow: "text-vpn-yellow border-vpn-yellow/30 bg-vpn-yellow/10",
  };

  return (
    <div className={cn(
      "card-gradient rounded-xl border p-4 flex flex-col justify-center items-center glow-subtle",
      colorMap[color]
    )}>
      <div className="rounded-full p-2 mb-2">
        <Icon size={20} />
      </div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-lg font-mono font-semibold">{value}</p>
    </div>
  );
};
