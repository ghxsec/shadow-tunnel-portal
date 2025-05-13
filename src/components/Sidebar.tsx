
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Settings,
  Shield,
  LayoutDashboard,
  Server,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Globe, label: "Locations", active: false },
    { icon: Server, label: "Servers", active: false },
    { icon: Shield, label: "Security", active: false },
    { icon: Users, label: "Accounts", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-vpn-dark-panel border-r border-white/10 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-vpn-blue to-vpn-purple flex items-center justify-center mr-2">
            <Shield size={18} className="text-white" />
          </div>
          {!collapsed && <h1 className="text-lg font-bold font-mono text-white">NEXUS VPN</h1>}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn("text-gray-400 hover:text-white", collapsed && "absolute right-0")}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <div className="mt-8 flex-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center px-4 py-3 cursor-pointer transition-colors",
              item.active
                ? "text-white bg-gradient-to-r from-vpn-blue/20 to-transparent border-l-2 border-vpn-blue"
                : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
            )}
          >
            <item.icon size={20} className={cn("min-w-[20px]")} />
            {!collapsed && <span className="ml-3 font-medium">{item.label}</span>}
          </div>
        ))}
      </div>

      <div className={cn("p-4 mt-auto", collapsed ? "text-center" : "")}>
        <div className="px-4 py-2 rounded-lg bg-vpn-blue/10 flex items-center">
          <div className="w-2 h-2 rounded-full bg-vpn-green animate-pulse-glow"></div>
          {!collapsed && (
            <span className="text-sm font-medium text-vpn-green ml-2">Connected</span>
          )}
        </div>
      </div>
    </div>
  );
}
