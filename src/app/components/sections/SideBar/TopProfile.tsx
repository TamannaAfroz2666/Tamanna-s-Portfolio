import Image from "next/image";

export default function TopProfile() {

    return (
        <div>
             <div className="text-center">
          <div className="relative mx-auto h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-white/5 p-[2px]">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-black/20">
                <Image
                  src="/profilePic.png"
                  alt="Avatar"
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* active dot + wave */}
            <span className="absolute bottom-1 right-1 inline-flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400/70" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-yellow-400 ring-2 ring-[#0b0b0f]" />
            </span>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-white">Tamanna Afroz</h3>
          <p className="mt-1 text-sm text-white/60">
            Full stack Developer 
           
          </p>
        </div>
        </div>
    )
}