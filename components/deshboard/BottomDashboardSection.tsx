import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle } from "lucide-react";

const topProducts = [
  { name: "Serenity Lavender Candle", sku: "SKU-001", sold: 422, revenue: "$5,690.00" },
  { name: "Serenity Lavender Candle", sku: "SKU-001", sold: 388, revenue: "$5,130.00" },
  { name: "Serenity Lavender Candle", sku: "SKU-001", sold: 361, revenue: "$4,836.00" },
  { name: "Serenity Lavender Candle", sku: "SKU-001", sold: 288, revenue: "$4,233.78" },
  { name: "Serenity Lavender Candle", sku: "SKU-001", sold: 264, revenue: "$3,926.00" },
];

export function BottomDashboardSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      
      {/* Top Selling Products - Spans 2 columns */}
      <Card className="lg:col-span-2 border-none shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-bold">Top Selling Product</CardTitle>
          <Button className="bg-[#C88069] hover:bg-[#b06e59] text-white text-xs h-8">
            View All Products
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-[#FDECE7]">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-gray-900 font-semibold">Product</TableHead>
                <TableHead className="text-center text-gray-900 font-semibold">Units Sold</TableHead>
                <TableHead className="text-right text-gray-900 font-semibold">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topProducts.map((product, i) => (
                <TableRow key={i} className="border-b border-gray-100">
                  <TableCell className="flex items-center gap-3 py-4">
                    <Avatar className="h-10 w-10 rounded-full border border-gray-200">
                      <AvatarImage src="/candle-placeholder.png" />
                      <AvatarFallback className="bg-orange-100">🕯️</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-400">{product.sku}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-medium">{product.sold}</TableCell>
                  <TableCell className="text-right font-medium">{product.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Low Stock Items - Spans 1 column */}
      <Card className="border-none shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-1.5 rounded-md">
                <AlertCircle className="h-4 w-4 text-white" />
            </div>
            <div>
                <CardTitle className="text-lg font-bold">Low Stock Items</CardTitle>
                <p className="text-xs text-gray-400">Restock Low Items</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          {[1, 2].map((_, i) => (
            <div 
              key={i} 
              className="flex items-center justify-between p-4 bg-[#FDECE7] rounded-xl border border-orange-100"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 rounded-full bg-slate-800">
                  <AvatarFallback>🕯️</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs font-bold text-gray-800">Serenity Lavender Candle</p>
                  <p className="text-[10px] text-gray-500 font-medium">SKU-001</p>
                </div>
              </div>
              <span className="text-xs font-bold text-orange-500">Stock: 9</span>
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  );
}