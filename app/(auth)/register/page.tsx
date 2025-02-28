// pages/auth/register.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate user registration (implement your actual API for registration here)
    // For now, this just redirects to login
    // Replace with actual registration logic (e.g., sending data to an API)
    // const res = await api.register({ username, password });

    // Assuming registration is successful
    router.push("/auth/login");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <Label htmlFor="username" className="block mb-1">
              Username
            </Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="password" className="block mb-1">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="confirmPassword" className="block mb-1">
              Confirm Password
            </Label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <Button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
