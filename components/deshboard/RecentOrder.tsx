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
    <Card className="mt-8 px-6">
      <CardHeader className="flex flex-row items-center justify-between ">
        <CardTitle>Recent Orders</CardTitle>
        <Button variant="outline" className="bg-[#C88069] text-white hover:bg-[#b06e59]
        hover:text-white cursor-pointer">View All Orders</Button>
      </CardHeader>
      <Table className="">
        <TableHeader className="bg-orange-50 ">
          <TableRow className=" ">
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Order Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="py-14">
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium py-7 text-lg">{order.id}</TableCell>
              <TableCell className="text-lg">{order.customer}</TableCell>
              <TableCell className=""><Badge variant="outline" className="bg-green-100 text-green-700 border-none text-md font-bold">Paid</Badge></TableCell>
              <TableCell className="text-lg"><Badge className="bg-green-100 text-green-700 border-none text-sm">Delivered</Badge></TableCell>
              <TableCell className="text-lg">{order.date}</TableCell>
              <TableCell className="text-lg">{order.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}