import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between bg-gray-700 text-gray-100 py-10">
        <div className="px-10">
          <Link href="/">Home</Link>
        </div>
        <div className="text-4xl">
          <h1>Hello! Welcome to my React project!</h1>
        </div>
        <div className="px-10">
          <Link href="/login">Login</Link>
        </div>
      </div>
    </header>
  );
}
