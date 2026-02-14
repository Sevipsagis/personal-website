import { Experience } from "@/components/sections/Experience";
import { Greeting } from "@/components/sections/Greeting";
import { Sidebar } from "@/components/sections/Sidebar";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 py-8">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-12">
        <Sidebar />
        <Greeting />
        <Skills />
        <Experience />
      </div>
    </main>
  );
}
