import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface FieldRowProps {
  label: string;
  children: React.ReactNode;
}

export function FieldRow({ label, children }: FieldRowProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-[84px] shrink-0 text-sm font-medium text-black">
        {label}
      </span>
      <div className="flex-1">{children}</div>
    </div>
  );
}

interface FieldInputProps {
  defaultValue?: string;
  className?: string;
}

export function FieldInput({ defaultValue, className }: FieldInputProps) {
  return (
    <Input
      defaultValue={defaultValue}
      className={cn("h-9 text-sm", className)}
    />
  );
}

interface FieldSelectProps {
  value?: string;
  options?: string[];
  onChange?: (value: string) => void;
}

export function FieldSelect({
  value = "20 Mhz",
  options = ["5 Mhz", "10 Mhz", "20 Mhz", "40 Mhz"],
  onChange,
}: FieldSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="h-9 w-full appearance-none rounded-md border border-slate-300 bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat px-3 pr-8 py-2 text-sm text-slate-900 outline-none focus:border-ring focus:ring-ring/50 focus:ring-[3px]"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
