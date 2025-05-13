
import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { ServerMap } from "@/components/ServerMap";
import { ConnectionStats } from "@/components/ConnectionStats";
import { QuickConnect } from "@/components/QuickConnect";
import { StatusCard } from "@/components/StatusCard";
import { Shield, Lock, Globe, Server } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-vpn-dark text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="container py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Monitor and control your VPN connection</p>
          </div>

          {/* Quick Connect Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <QuickConnect className="lg:col-span-2" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <StatusCard 
                title="Connection Status"
                value="Active"
                subtitle="Last checked: 2 minutes ago"
                icon={Shield}
                color="green"
              />
              <StatusCard 
                title="IP Address"
                value="198.51.100.24"
                subtitle="Location: New York, US"
                icon={Globe}
                color="blue"
              />
            </div>
          </div>

          {/* Connection Stats */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Connection Statistics</h2>
            <ConnectionStats />
          </div>

          {/* Server Map */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Global Server Network</h2>
              <span className="text-sm text-vpn-blue bg-vpn-blue/10 px-3 py-1 rounded-full">
                72 Locations
              </span>
            </div>
            <ServerMap />
          </div>

          {/* Additional Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatusCard 
              title="DNS Status"
              value="Secure"
              subtitle="No leaks detected"
              icon={Lock}
              color="purple"
            />
            <StatusCard 
              title="Server Load"
              value="42%"
              subtitle="Current server utilization"
              icon={Server}
              color="teal"
            />
            <StatusCard 
              title="Data Transferred"
              value="1.45 GB"
              subtitle="Today's usage"
              icon={Shield}
              color="yellow"
            />
            <StatusCard 
              title="Protocol"
              value="OpenVPN"
              subtitle="UDP on port 1194"
              icon={Shield}
              color="blue"
            />
          </div>

          <div className="h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
