
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Shield, 
  Lock, 
  Power,
  Server
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

interface QuickConnectProps {
  className?: string;
}

export function QuickConnect({ className }: QuickConnectProps) {
  const [connected, setConnected] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("New York, US");
  
  // Sample locations - in a real app these would come from an API
  const locations = [
    "New York, US",
    "London, UK", 
    "Tokyo, Japan",
    "Frankfurt, Germany",
    "Singapore",
    "Sydney, Australia"
  ];

  const handleToggleConnection = () => {
    if (connected) {
      toast.info("Disconnecting from VPN...");
      setTimeout(() => {
        setConnected(false);
        toast.success("VPN disconnected successfully");
      }, 800);
    } else {
      toast.info(`Connecting to ${selectedLocation}...`);
      setTimeout(() => {
        setConnected(true);
        toast.success(`Connected to ${selectedLocation} successfully`);
      }, 1200);
    }
  };

  const handleSelectLocation = (location: string) => {
    setSelectedLocation(location);
    if (connected) {
      toast.info(`Switching connection to ${location}...`);
      setTimeout(() => {
        toast.success(`Connected to ${location} successfully`);
      }, 1000);
    }
  };

  return (
    <div className={cn(
      "card-gradient rounded-xl border border-white/10 p-6 flex flex-col",
      className
    )}>
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Shield className="mr-2 text-vpn-purple" size={20} />
        Quick Connect
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <div className="w-full sm:w-auto flex-1 flex flex-col">
          <p className="text-xs text-gray-400 mb-1">Current Location</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-start bg-vpn-dark-panel border-white/10">
                <Globe className="mr-2 h-4 w-4 text-vpn-blue" />
                {selectedLocation}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-vpn-dark-panel border-white/10">
              {locations.map((location) => (
                <DropdownMenuItem 
                  key={location}
                  onClick={() => handleSelectLocation(location)}
                  className="cursor-pointer hover:bg-vpn-blue/10"
                >
                  <Server className="mr-2 h-4 w-4 text-gray-400" />
                  {location}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button 
          onClick={handleToggleConnection}
          className={cn(
            "min-w-[140px] gap-2",
            connected ? "bg-vpn-red hover:bg-vpn-red/80" : "bg-vpn-green hover:bg-vpn-green/80"
          )}
        >
          <Power size={18} />
          {connected ? 'Disconnect' : 'Connect'}
        </Button>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-400">
            <Lock size={14} className="mr-1 text-vpn-teal" />
            <span>256-bit Encryption</span>
          </div>
          <div className="flex items-center">
            <div className={cn(
              "h-2 w-2 rounded-full mr-1",
              connected ? "bg-vpn-green" : "bg-vpn-red"
            )}></div>
            <span className={cn(
              "text-sm",
              connected ? "text-vpn-green" : "text-vpn-red"
            )}>
              {connected ? "Protected" : "Exposed"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
