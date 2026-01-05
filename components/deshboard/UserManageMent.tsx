import React from "react";
import { Search, MoreVertical, Eye, X, Ban, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

// Mock Data
const users = [
  { id: 1, name: "James Mitchell", contact: "james@example.com", quiz: "Active", status: "2 hours ago", online: "12 Sep 2025" },
  { id: 2, name: "Banit Mitchell", contact: "banit@example.com", quiz: "5m", status: "1 hour ago", online: "10 Sep 2025" },
  { id: 3, name: "Phone Smith", contact: "+1(555) 987-4567", quiz: "Inactive", status: "5 mins ago", online: "10 Sep 2025" },
  { id: 4, name: "Robert Johnson", contact: "+1(555) 555-584", quiz: "Active", status: "Suspended", online: "12 Sep 2025" },
  { id: 5, name: "Daniel Brown", contact: "+1(555) 983-664", quiz: "Active", status: "4 hours ago", online: "09 Sep 2025" },
];

export default function UserManagement() {
  return (
    <div className="min-h-screen bg-gray-50 m-10">
      {/* Dark Header Section */}
      <div className="py-8 text-white p-6">
        
        <div className="  relative mt-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-8" />
          <Input 
            placeholder="Search by Name, Email, Phone" 
            className="w-full  bg-white text-gray-900 pl-10 h-16 rounded-md"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="">
        <div className="bg-white  px-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">UsersPage</h2>
          
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader className="bg-[#FDECE7] ">
                <TableRow className="hover:bg-transparent ">
                  <TableHead className="w-[80px] text-gray-900 font-bold py-6 text-lg">User</TableHead>
                  <TableHead className="text-gray-900 font-bold py-6 text-lg">Name</TableHead>
                  <TableHead className="text-gray-900 font-bold py-6 text-lg">Contact</TableHead>
                  <TableHead className="text-gray-900 font-bold py-6 text-lg ">Quiz Taken</TableHead>
                  <TableHead className="text-gray-900 font-bold py-6 text-lg">Account Status</TableHead>
                  <TableHead className="text-gray-900 font-bold py-6 text-lg">Last Online</TableHead>
                  <TableHead className="text-right text-gray-900 font-bold py-6 text-lg">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} className="border-b ">
                    <TableCell className="py-6 text-lg">
                      <Avatar className="h-12 w-12 border">
                        <AvatarFallback className="bg-slate-200 text-slate-600">👤</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-bold">
                        <Link href={'user-profile'}>
                        
                        {user.name}
                        </Link>
                        </TableCell>
                    <TableCell className="text-gray-500">{user.contact}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-600 font-medium border-blue-100">
                        {user.quiz}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {user.status === "Suspended" ? (
                        <Badge className="bg-red-500 hover:bg-red-600 text-white border-none">Suspended</Badge>
                      ) : (
                        <span className="text-sm text-gray-600">{user.status}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-gray-500">{user.online}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50 h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50 h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50 h-8 w-8">
                          <Ban className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination Section */}
          <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-sm text-gray-500 font-medium">1-10 of 460</div>
             
             <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Rows per page:</span>
                  <Select defaultValue="10">
                    <SelectTrigger className="w-[70px] h-9">
                      <SelectValue placeholder="10" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}