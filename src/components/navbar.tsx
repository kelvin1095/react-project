import React from "react";
import Link from "next/link";
// import "./navbar.module.css";

export default function Navigate() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/koi">Koi Fish</Link>
          </li>
          <li>
            <Link href="/lite">Lite</Link>
          </li>
          <li>
            <Link href="/dark">Dark</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
