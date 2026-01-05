import React from "react";
import { 
  User, 
  Mail, 
  Phone, 
  Pencil, 
  Ban, 
  RefreshCcw, 
  ClipboardList, 
  ShoppingCart, 
  LayoutDashboard 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UserProfilePage() {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8 bg-white min-h-screen">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-gray-100">
            <AvatarImage src="/path-to-user-avatar.jpg" alt="James Mitchell" />
            <AvatarFallback className="bg-slate-200">JM</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">James Mitchell</h1>
            <Badge variant="secondary" className="bg-[#E6F9F4] text-[#2DD4BF] border-none font-medium mt-1">
              Active
            </Badge>
          </div>
        </div>
        <Button className="bg-[#C88069] hover:bg-[#b06e59] text-white gap-2 px-6">
          <Pencil className="h-4 w-4" /> Edit User
        </Button>
      </div>

      {/* 2. Navigation Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-auto p-0 gap-8">
          <TabsTrigger 
            value="overview" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-[#C88069] data-[state=active]:text-[#C88069] rounded-none bg-transparent px-2 pb-4 pt-0 gap-2 font-medium"
          >
            <User className="h-4 w-4" /> Overview
          </TabsTrigger>
          <TabsTrigger 
            value="quiz" 
            className="rounded-none bg-transparent px-2 pb-4 pt-0 gap-2 font-medium text-gray-500 hover:text-gray-700"
          >
            <ClipboardList className="h-4 w-4" /> Quiz History
          </TabsTrigger>
          <TabsTrigger 
            value="orders" 
            className="rounded-none bg-transparent px-2 pb-4 pt-0 gap-2 font-medium text-gray-500 hover:text-gray-700"
          >
            <ShoppingCart className="h-4 w-4" /> Order History
          </TabsTrigger>
        </TabsList>

        {/* 3. Personal Information Card */}
        <Card className="mt-8 border-dashed border-2 border-slate-200 shadow-none rounded-xl">
          <CardContent className="p-8">
            <h3 className="text-lg font-semibold text-[#5C6B89] mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <div className="w-full bg-[#FFF9F7] border border-transparent rounded-lg py-3 pl-10 pr-4 text-gray-800">
                    James Mitchell
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <div className="w-full bg-[#FFF9F7] border border-transparent rounded-lg py-3 pl-10 pr-4 text-gray-800">
                    +1(555) 123-4567
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <div className="w-full bg-[#FFF9F7] border border-transparent rounded-lg py-3 pl-10 pr-4 text-gray-800">
                    james@example.com
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* 4. Admin Actions Card */}
        <Card className="mt-8 border border-slate-100 shadow-sm rounded-xl">
          <CardContent className="p-8">
            <h3 className="text-lg font-semibold text-[#5C6B89] mb-6">Admin Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="w-full h-14 bg-[#FFF9F7] border-none text-[#F43F5E] hover:bg-red-50 hover:text-red-600 gap-2 text-md font-medium"
              >
                <Ban className="h-5 w-5" /> Suspend User
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-14 bg-[#FFF9F7] border-none text-[#10B981] hover:bg-emerald-50 hover:text-emerald-600 gap-2 text-md font-medium"
              >
                <RefreshCcw className="h-5 w-5" /> Re-activate
              </Button>
            </div>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}