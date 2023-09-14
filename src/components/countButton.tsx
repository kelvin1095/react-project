"use client";

import { useState } from "react";

export default function CountButton() {
  const [count, updateCount] = useState<number>(0);

  return (
    <>
      <button onClick={() => updateCount(count + 1)}>Click Me!</button>
      <p>{count}</p>
    </>
  );
}
