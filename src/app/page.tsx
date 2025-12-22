

// import Hero from "@/components/sections/Hero";

import MobileTopbar from "./components/layout/MobileTopBar";
import Sidebar from "./components/layout/Sidebar";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Stats from "./components/sections/States";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MobileTopbar />
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[320px_1fr] md:gap-8 md:px-6 md:py-10">
        <Sidebar />
        <section className="space-y-6">
          <Hero />
          <Stats />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}

