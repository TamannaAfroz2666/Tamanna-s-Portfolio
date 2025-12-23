export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-[#e79a1e30] "
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
