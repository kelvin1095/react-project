import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Error! Not Found!</h1>
      <p>
        Return to the <Link href="/">Main Page</Link>
      </p>
    </main>
  );
}
