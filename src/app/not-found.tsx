import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Error! </h1>
      <p>
        We've hit ourself in confusion! Return to the <Link href="/">Main Page</Link>
      </p>
    </main>
  );
}
