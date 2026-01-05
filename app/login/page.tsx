import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLogin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md border-none shadow-lg py-8">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <CardTitle className="text-3xl font-medium text-[#C88069] text-center">
            Login Your Admin Portal
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 mt-6">
          {/* Email Field */}
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-700 font-semibold text-md">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-12 border-gray-200 focus-visible:ring-[#C88069]"
            />
          </div>

          {/* Password Field */}
          <div className="grid gap-2">
            <Label htmlFor="password"  className="text-gray-700 font-semibold text-md">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="h-12 border-gray-200 focus-visible:ring-[#C88069]"
            />
          </div>

          {/* Submit Button */}
          <Button 
            className="w-full h-12 bg-[#C88069] hover:bg-[#b06e59] text-white text-lg font-medium transition-colors cursor-pointer"
          >
            Log in
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}