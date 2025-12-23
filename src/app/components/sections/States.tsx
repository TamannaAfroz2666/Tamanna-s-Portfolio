import { Card } from "../ui/Card";
import { stats } from "../data/portfolioData";

export default function Stats() {
  return (
    <div className="flex gap-3">
      {stats.map((s: any) => (
        // <Card key={s.label} className="p-4">
        <div key={s.label}>
          <p className="text-md font-extrabold py-6  "> <span className="text-yellow-400 pl-4">{s.value} </span> {s.label}</p>
          {/* <p className="mt-1 text-xs text-zinc-400"> {s.label} </p> */}
        </div>

        // </Card>
      ))}
    </div>
  );
}
