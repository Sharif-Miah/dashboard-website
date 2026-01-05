"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: "Mon", total: 29000 }, { name: "Tue", total: 26000 },
  { name: "Wed", total: 32000 }, { name: "Thu", total: 38000 },
  { name: "Fri", total: 39000 }, { name: "Sat", total: 35000 },
  { name: "Sun", total: 17000 },
];

const pieData = [
  { name: "Completed", value: 62, color: "#6366f1" },
  { name: "Pending", value: 32, color: "#4ade80" },
  { name: "Cancelled", value: 6, color: "#fb923c" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Users", value: "3,689", icon: "👥" },
          { label: "Total Revenue", value: "$3,689", icon: "💰" },
          { label: "Total Orders", value: "3,689", icon: "🛒" },
          { label: "Total Site Views", value: "36,890", icon: "📈" },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="bg-orange-50 p-2 rounded-lg">{stat.icon}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle className="text-sm font-medium">Revenue Trends</CardTitle></CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="total" fill="#C88069" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-sm font-medium">Orders</CardTitle></CardHeader>
          <CardContent className="h-[300px] flex flex-col items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Pie>
                </PieChart>
             </ResponsiveContainer>
             <div className="absolute text-2xl font-bold">138</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}