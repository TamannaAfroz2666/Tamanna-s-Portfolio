// import Image from "next/image";
// import { MapPin, Star, Mail, Briefcase } from "lucide-react";
// import {Card} from "../ui/Card";
// import ProgressBar from "../ui/ProgressBar";
// import { hero, profile, skills } from "../data/portfolioData";

// export default function Sidebar() {
//   return (
//     <aside className="md:sticky md:top-8 md:h-[calc(100vh-4rem)]">
//       <Card className="h-full p-5">
//         <div className="flex items-center gap-4">
//           <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10">
//             <Image 
//              src="/demo.png"
//              alt="Avatar" fill className="object-cover" sizes="64px" />
//           </div>
//           <div className="min-w-0">
//             <p className="truncate text-lg font-semibold">{profile.name} </p>
//             <p className="text-sm text-zinc-400">{profile.role} </p>
//           </div>
//         </div>

//         <div className="mt-5 grid gap-3 text-sm">
//           {[
//             ["Residence", profile.residence],
//             ["City", profile.city],
//             ["Experience", profile.experience],
//           ].map(([k, v]) => (
//             <div
//               key={k}
//               className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
//             >
//               <span className="text-zinc-400">{k}</span>
//               <span className="font-medium">{v}</span>
//             </div>
//           ))}
//         </div>

//         <div className="mt-6">
//           <p className="text-sm font-semibold">Skills</p>
//           <div className="mt-4 space-y-4">
//             {skills.map((s: any) => (
//               <div key={s.name}>
//                 <div className="flex items-center justify-between text-xs">
//                   <span className="text-zinc-300">{s.name}</span>
//                   <span className="text-zinc-400">{s.level}%</span>
//                 </div>
//                 <ProgressBar value={s.level} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-6 grid grid-cols-2 gap-3">
//           <a
//             href="#contact"
//             className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-semibold text-black hover:opacity-90"
//           >
//             <Mail className="h-4 w-4" /> Hire Me
//           </a>
//           <a
//             href="#projects"
//             className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10"
//           >
//             <Briefcase className="h-4 w-4" /> Projects
//           </a>
//         </div>

//         <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-zinc-300">
//           <span className="inline-flex items-center gap-2">
//             <MapPin className="h-4 w-4 text-yellow-400" />
//             {profile.availability}
//           </span>
//           <span className="inline-flex items-center gap-1">
//             <Star className="h-4 w-4 text-yellow-400" />
//             {profile.rating}
//           </span>
//         </div>
//       </Card>
//     </aside>
//   );
// }




"use client";

import Image from "next/image";
import { hero, profile, } from "../data/portfolioData";
import { Check, Download, Linkedin, Dribbble, Github, Twitter } from "lucide-react";
// import TopProfile from "../sections/SideBar/TopProfile";
import SkillsWithLanguage from "../sections/SideBar/SkillsWithLanguage";
// import SideBarBottomPhase from "../sections/SideBar/sideBarBottomPhase";
import SideBarBottom from "../sections/SideBar/SidebarBottom";
import TopProfile from "../sections/SideBar/TopProfile";
import SocialBar from "../sections/SideBar/SocialBar";




export default function ProfileCard() {



  return (
    <section className="mx-auto w-full max-w-sm">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">

        <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

        <div
          className="
        relative
        h-[calc(100vh-140px)]
        overflow-y-auto
        pr-2

        [scrollbar-width:none]
        [&::-webkit-scrollbar]:w-0
        [&::-webkit-scrollbar]:h-0
      "
        >

          <div className="sticky top-0 z-[999] bg-black-20 backdrop-blur pb-4">
            <TopProfile />
          </div>

          <div className="my-6 border-t border-white/10" />


          <div className="space-y-4 pb-24">

            <SkillsWithLanguage />
            <div className="my-6 border-t border-white/10" />
            <SideBarBottom />
          </div>


          <div className="sticky bottom-0 z-[999] bg-black-400 backdrop-blur-lg pt-2">
            <SocialBar />

          </div>
        </div>
      </div>
    </section>


  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
      <span className="text-sm font-medium text-white/80">{label}</span>
      <span className="text-sm text-white/60">{value}</span>
    </div>
  );
}








