import { Card } from "../ui/Card";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Contact() {
  return (
    <div className=" ">
      <section id="contact" className=" w-full" >
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Contact</h2>
        </div>
        <div className=" w-full h-full">
          <Card className="p-5 ">
            <div className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 w-full   ">
                <Mail className="h-5 w-5 text-yellow-400" />
                <div className=" ">
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-zinc-300  lg:w-[200px]
                    lg:text-[10px] pt-1
                    lg:right-5 relative   
                    xl:w-full       
                    xl:text-sm      
                    xl:right-0 
    
                       " >{profile.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Phone className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="text-sm text-zinc-300  lg:w-[200px]
                    lg:text-[10px] pt-1
                    lg:right-3 relative   
                    xl:w-full       
                    xl:text-sm      
                    xl:right-0 
    
                       " >{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-yellow-400 lg:invisible xl:visible" />
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-sm text-zinc-300  
                    lg:text-[10px] pt-1
                    lg:right-2 relative   
                    xl:w-full       
                    xl:text-sm      
                    xl:right-0 
    
                       " >{profile.location}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </section>
    </div>

  );
}
