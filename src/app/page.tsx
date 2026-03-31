import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="font-bold text-rose-500">Welcome to My App</h1>
        <p>This is a simple Next.js app.</p>
        <Button variant="outline">Click Me</Button>
      </main>
    </>
  );
}
