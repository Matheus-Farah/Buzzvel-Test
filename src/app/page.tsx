import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="h-[200vh] p-10">
        <Hero />
      </main>
    </>
  );
}
