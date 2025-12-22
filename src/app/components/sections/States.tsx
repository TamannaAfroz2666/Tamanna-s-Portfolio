import {Card} from "../ui/Card";
import { stats } from "../data/portfolioData";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s: any) => (
        <Card key={s.label} className="p-4">
          <p className="text-2xl font-extrabold text-yellow-400">{s.value}</p>
          <p className="mt-1 text-xs text-zinc-400">{s.label}</p>
        </Card>
      ))}
    </div>
  );
}
