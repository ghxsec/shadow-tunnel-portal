
import React from 'react';
import { cn } from "@/lib/utils";

interface StatusCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ElementType;
  color: "blue" | "purple" | "teal" | "green" | "red" | "yellow";
  className?: string;
}

export function StatusCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon,
  color,
  className 
}: StatusCardProps) {
  const colorMap = {
    blue: "text-vpn-blue border-vpn-blue/30",
    purple: "text-vpn-purple border-vpn-purple/30",
    teal: "text-vpn-teal border-vpn-teal/30",
    green: "text-vpn-green border-vpn-green/30",
    red: "text-vpn-red border-vpn-red/30",
    yellow: "text-vpn-yellow border-vpn-yellow/30",
  };

  return (
    <div className={cn(
      "card-gradient rounded-xl border border-white/10 p-5 transition-all hover:glow-subtle",
      colorMap[color],
      className
    )}>
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <div className={cn("p-2 rounded-full bg-opacity-10", `bg-${color}-500/10`)}>
          <Icon className={colorMap[color]} size={16} />
        </div>
      </div>
      <div className="mt-3">
        <div className="text-2xl font-mono font-semibold">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
