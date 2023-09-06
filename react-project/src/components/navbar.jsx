import React from "react";
import Link from "next/link";
import "./header.module.css";

export default function Navigate() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/pokemon">Pokemon</Link>
      <Link href="/about">About</Link>
      <Link href="/lite">Lite</Link>
      <Link href="/dark">Dark</Link>
    </nav>
  );
}
