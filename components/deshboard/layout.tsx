import { LayoutDashboard, ScrollText, Users, Box, ShoppingCart, Image as ImageIcon, Megaphone, CreditCard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: ScrollText, label: "Quiz" },
  { icon: Users, label: "Users" },
  { icon: Box, label: "Products" },
  { icon: ShoppingCart, label: "Orders" },
  { icon: ImageIcon, label: "Media" },
  { icon: Megaphone, label: "Ad Management" },
  { icon: CreditCard, label: "Plan Management" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-6">
          <h1 className="text-xl font-bold text-[#C88069]">SuiAmor</h1>
        </div>
        <nav className="px-4 space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "secondary" : "ghost"}
              className={`w-full justify-start gap-3 ${item.active ? "bg-[#C88069] text-white hover:bg-[#b06e59]" : "text-gray-500"} `}
            >
              <item.icon className="h-5 w-5 cursor-pointer" />
              {item.label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b bg-white flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
          <Button variant="outline" className="text-orange-600 border-orange-200 gap-2">
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </header>
        <div className="p-8 overflow-auto">{children}</div>
      </main>
    </div>
  );
}