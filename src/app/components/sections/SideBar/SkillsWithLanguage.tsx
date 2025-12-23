
'use client'
import { skills } from "../../data/portfolioData";
import ProgressBar from "../../ui/ProgressBar";
export default function SkillsWithLanguage() {

    return (
        <div>

            <div>
                <div className="mt-5 space-y-3 ">
                    <div className="grid grid-cols-2 items-center">
                        <span className="text-sm font-semibold text-white/45">
                            Residence:
                        </span>
                        <span className="text-sm text-right text-white/45">
                            Bangladesh
                        </span>
                    </div>

                    <div className="grid grid-cols-2 items-center">
                        <span className="text-sm font-semibold text-white/45">
                            City:
                        </span>
                        <span className="text-sm text-right text-white/45">
                            Dhaka
                        </span>
                    </div>

                    <div className="grid grid-cols-2 items-center">
                        <span className="text-sm font-semibold text-white/45">
                            Experience:
                        </span>
                        <span className="text-sm text-right text-white/45">
                            1.5+ years
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-5 h-px w-full bg-white/10 " />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center pt-5">
                <StatCircle label="English" value={100} />
                <StatCircle label="Bangla" value={100} />
                <StatCircle label="Hindi" value={70} />
            </div>

            <div className="my-6 border-t border-white/10" />
            <div className="mt-6">
                <p className="text-sm font-semibold">Skills</p>
                <div className="mt-4 space-y-4">
                    {skills.map((s: any) => (
                        <div key={s.name}>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-zinc-300">{s.name}</span>
                                <span className="text-zinc-400">{s.level}%</span>
                            </div>
                            <ProgressBar value={s.level} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function StatCircle({ label, value }: { label: string; value: number }) {
    const size = 64;          // circle size
    const stroke = 6;         // ring thickness
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;

    // clamp 0-100
    const v = Math.max(0, Math.min(100, value));
    const offset = circumference - (v / 100) * circumference;

    return (
        <div className="rounded-2xl bg-white/5 p-3">
            <div className="mx-auto grid place-items-center">
                <svg width={size} height={size} className="-rotate-90">
                    {/* track */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth={stroke}
                    />

                    {/* progress */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke="#0cc9de52" // tailwind yellow-400
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-[stroke-dashoffset] duration-700 ease-out"
                    />
                </svg>

                {/* centered text */}
                <div className="pointer-events-none -mt-[52px] text-sm font-semibold text-white">
                    {v}%
                </div>
            </div>

            <p className="mt-2 text-xs text-white/70">{label}</p>
        </div>
    );
}