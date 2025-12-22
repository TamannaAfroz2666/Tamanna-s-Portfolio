import {Card} from "../ui/Card";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Contact</h2>
        <span className="text-xs text-zinc-400">Let’s work together</span>
      </div>

      <Card className="p-5">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <Mail className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm text-zinc-300">{profile.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <Phone className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="text-sm font-semibold">Phone</p>
              <p className="text-sm text-zinc-300">{profile.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <MapPin className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="text-sm font-semibold">Location</p>
              <p className="text-sm text-zinc-300">{profile.location}</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
