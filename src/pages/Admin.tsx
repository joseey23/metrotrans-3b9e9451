import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  LogOut, 
  Menu,
  X
} from "lucide-react";
import { toast } from "sonner";
import AdminBookings from "@/components/admin/AdminBookings";
import AdminDashboard from "@/components/admin/AdminDashboard";
import metrotransLogo from "@/assets/metrotrans-logo.png";

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"dashboard" | "bookings">("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        
        if (!session) {
          navigate("/auth");
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-hero text-hero-text transform transition-transform duration-200
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src={metrotransLogo} 
                alt="MetroTrans" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <button
              className="lg:hidden text-hero-text/60 hover:text-hero-text"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <button
              onClick={() => { setActiveTab("dashboard"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "dashboard" 
                  ? "bg-sidebar-accent text-hero-text" 
                  : "text-hero-text/70 hover:bg-sidebar-accent/50"
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </button>
            <button
              onClick={() => { setActiveTab("bookings"); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "bookings" 
                  ? "bg-sidebar-accent text-hero-text" 
                  : "text-hero-text/70 hover:bg-sidebar-accent/50"
              }`}
            >
              <CalendarDays className="h-5 w-5" />
              Bookings
            </button>
          </nav>
          
          {/* User section */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.email}</p>
                <p className="text-xs text-hero-text/60">Administrator</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-sidebar-border text-hero-text hover:bg-sidebar-accent"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-card border-b border-border px-4 lg:px-8 py-4 flex items-center gap-4">
          <button 
            className="lg:hidden text-foreground"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold text-foreground">
            {activeTab === "dashboard" ? "Dashboard" : "Booking Management"}
          </h1>
        </header>
        
        {/* Content */}
        <div className="flex-1 p-4 lg:p-8 overflow-auto">
          {activeTab === "dashboard" ? <AdminDashboard /> : <AdminBookings />}
        </div>
      </main>
    </div>
  );
};

export default Admin;
