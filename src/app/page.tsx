

'use client'
import { useState } from "react";
import MobileTopbar from "./components/layout/MobileTopBar";
import Sidebar from "./components/layout/Sidebar";
import HomeMenuBar from "./components/navigation/HomeMenuBar";
import RightMenuBar from "./components/navigation/RightMenuBar";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Stats from "./components/sections/States";
import MenuDrawer from "./components/navigation/RightMenuBar";
import EducationWorkHistory from "./components/EducationWorkHistory/EducationWorkHistory";
export default function Home() {
  const [open, setOpen] = useState(false);
  return (


    <div className="h-full overflow-hidden  lg:pr-[120px]">
      <MobileTopbar />

      <main className="mx-auto  grid h-full min-h-0 max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[320px_1fr] md:gap-8 md:px-6 md:py-10">
        <div className="hidden lg:block"> 
          <div className="sticky top-10"> 
            <Sidebar />
          </div>
        </div>
        <div className="flex h-full min-h-0 gap-2">
          <section className="
            flex-1 min-w-0
           
            h-[calc(100dvh-100px)]          
            md:h-[calc(250dvh-300px)]     
            xl:h-[calc(200dvh-600px)]

            overflow-y-auto
            space-y-1
            pr-2
             pb-10

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:w-0
            [&::-webkit-scrollbar]:h-0
          " >
            <Hero />

            <Projects />
            <EducationWorkHistory/>
            <Contact />
            <Footer />
          </section>


          <div className="hidden h-full lg:block fixed right-6 top-10 z-50 ">
            {!open && <HomeMenuBar onOpen={() => setOpen(true)} />}
            <MenuDrawer open={open} onClose={() => setOpen(false)} />
          </div>

        </div>

      </main>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-5 right-5 z-50 rounded-full border border-white/10 bg-white/10 p-4 backdrop-blur"
        aria-label="Open menu"
      >
        ☰
      </button>


    </div>



  );
}
//  <div className="h-screen overflow-hidden   pr-[84px] ">
//     <MobileTopbar />

//     <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[320px_1fr] md:gap-8 md:px-6 md:py-10">
//       <div className="  ">
//         <Sidebar />
//       </div>

//       <div className="flex gap-2">
//         <section className="
//           flex-1 min-w-0
//           h-[calc(100vh-140px)]
//           overflow-y-auto
//           space-y-1
//           pr-2

//           [scrollbar-width:none]
//           [&::-webkit-scrollbar]:w-0
//           [&::-webkit-scrollbar]:h-0
//         " >
//           <Hero />
//           <Stats />
//           <Services />
//           <Projects />
//           <Contact />
//           <Footer />
//         </section>
//         <div>
//           {!open && <HomeMenuBar onOpen={() => setOpen(true)} />}
//           <MenuDrawer open={open} onClose={() => setOpen(false)} />
//         </div>

//       </div>

//     </main>

//   </div>
