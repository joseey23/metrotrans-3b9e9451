import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CalendarDays, Clock, CheckCircle, XCircle, Car } from "lucide-react";

interface Stats {
  total: number;
  new: number;
  confirmed: number;
  completed: number;
  cancelled: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({
    total: 0,
    new: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("status");
      
      if (error) throw error;

      const newStats = {
        total: data.length,
        new: data.filter(b => b.status === "new").length,
        confirmed: data.filter(b => b.status === "confirmed").length,
        completed: data.filter(b => b.status === "completed").length,
        cancelled: data.filter(b => b.status === "cancelled").length,
      };
      
      setStats(newStats);
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { label: "Total Bookings", value: stats.total, icon: CalendarDays, color: "bg-trust text-trust-foreground" },
    { label: "New Requests", value: stats.new, icon: Clock, color: "bg-primary text-primary-foreground" },
    { label: "Confirmed", value: stats.confirmed, icon: Car, color: "bg-trust text-trust-foreground" },
    { label: "Completed", value: stats.completed, icon: CheckCircle, color: "bg-success text-success-foreground" },
    { label: "Cancelled", value: stats.cancelled, icon: XCircle, color: "bg-destructive text-destructive-foreground" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-6 service-card-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <span className="text-3xl font-bold text-card-foreground">
                {stat.value}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl p-6 service-card-shadow">
        <h2 className="text-lg font-bold text-card-foreground mb-4">
          Quick Overview
        </h2>
        <p className="text-muted-foreground">
          Welcome to the MetroTrans admin dashboard. Here you can manage all booking requests, 
          track ride status, and monitor your daily operations. Use the sidebar to navigate 
          between different sections.
        </p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-accent rounded-lg">
            <h3 className="font-semibold text-accent-foreground mb-2">New Requests</h3>
            <p className="text-sm text-muted-foreground">
              You have {stats.new} new booking request{stats.new !== 1 ? "s" : ""} awaiting confirmation.
            </p>
          </div>
          <div className="p-4 bg-secondary rounded-lg">
            <h3 className="font-semibold text-secondary-foreground mb-2">Today's Rides</h3>
            <p className="text-sm text-muted-foreground">
              Check the bookings section for today's scheduled rides.
            </p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Completion Rate</h3>
            <p className="text-sm text-muted-foreground">
              {stats.total > 0 
                ? `${Math.round((stats.completed / stats.total) * 100)}% of rides completed`
                : "No bookings yet"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
