import React from "react";
import Link from "next/link";
import "./header.module.css";

export default function Header() {
  return (
    <header>
      <div id="topBar">
        <div className="headerButton">
          <Link href="/">Home</Link>
        </div>
        <h1>Hello! Welcome to my React project!</h1>
        <div className="headerButton">
          <Link href="/">Mode</Link>
        </div>
      </div>
    </header>
  );
}
