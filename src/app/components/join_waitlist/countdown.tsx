import { getTargetDate } from "@/app/shared/functions";
import { useCountdown } from "@/app/shared/hooks";

export default function CountdownDisplay({ daysFromNow = 85 }: { daysFromNow?: number }) {
  const target = getTargetDate(daysFromNow);
  const { d, h, m, s } = useCountdown(target);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <span className="text-[#707070] font-normal mr-1">Launching In:</span>
      <span className="text-[#1EC777] font-medium tabular-nums">{d}d</span>
      <span className="text-[#707070]">:</span>
      <span className="text-[#1EC777] font-medium tabular-nums">{pad(h)}h</span>
      <span className="text-[#707070]">:</span>
      <span className="text-[#1EC777] font-medium tabular-nums">{pad(m)}m</span>
      <span className="text-[#707070]">:</span>
      <span className="text-[#00C853] font-semibold tabular-nums">
        {pad(s)}s
      </span>
    </div>
  );
}
