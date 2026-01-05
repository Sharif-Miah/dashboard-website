import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const orders = [
  { id: "#ORD-001", customer: "Van Basten", status: "Paid", orderStatus: "Delivered", date: "12-06-2025", amount: "$29.99" },
  { id: "#ORD-002", customer: "Van Basten", status: "Paid", orderStatus: "Delivered", date: "12-06-2025", amount: "$29.99" },
  { id: "#ORD-003", customer: "Van Basten", status: "Paid", orderStatus: "Delivered", date: "12-06-2025", amount: "$29.99" },
  { id: "#ORD-004", customer: "Van Basten", status: "Paid", orderStatus: "Delivered", date: "12-06-2025", amount: "$29.99" },
  { id: "#ORD-005", customer: "Van Basten", status: "Paid", orderStatus: "Delivered", date: "12-06-2025", amount: "$29.99" },
  { id: "#ORD-006", customer: "Van Basten", status: "Paid", orderStatus: "Delivered", date: "12-06-2025", amount: "$29.99" },
  // ... more orders
];

export function RecentOrders() {
  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <Button variant="outline" className="bg-[#C88069] text-white hover:bg-[#b06e59]">View All Orders</Button>
      </CardHeader>
      <Table>
        <TableHeader className="bg-orange-50">
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Order Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell><Badge variant="outline" className="bg-green-100 text-green-700 border-none">Paid</Badge></TableCell>
              <TableCell><Badge className="bg-green-100 text-green-700 border-none">Delivered</Badge></TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}