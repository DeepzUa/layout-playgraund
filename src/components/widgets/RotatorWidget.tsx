import { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WidgetWrapper } from "./WidgetWrapper";
import { FieldRow, FieldInput } from "./FieldComponents";
import { Separator } from "@/components/ui/separator";

interface RotatorWidgetProps {
  onRemove?: () => void;
}

export function RotatorWidget({ onRemove }: RotatorWidgetProps) {
  const [angle, setAngle] = useState(23);
  const [isRunning, setIsRunning] = useState(true);

  return (
    <WidgetWrapper title="Rotator" onRemove={onRemove} showSettings>
      <div className="flex flex-col gap-3">

        <div className="flex justify-center">
          <div className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900">
            {angle}°
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="size-12 rounded-full border-slate-200 bg-slate-100"
          >
            <ChevronsLeft className="size-6" />
          </Button>
          <Button
            variant={isRunning ? "destructive" : "default"}
            className="px-4 py-2"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? "STOP" : "START"}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-12 rounded-full border-slate-200 bg-slate-100"
          >
            <ChevronsRight className="size-6" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-200 bg-slate-100"
            onClick={() => setAngle((a) => a - 1)}
          >
            -1
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-slate-200 bg-slate-100"
            onClick={() => setAngle(0)}
          >
            0
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-slate-200 bg-slate-100"
            onClick={() => setAngle((a) => a + 1)}
          >
            +1
          </Button>
        </div>

        <Separator />

        <div className="flex flex-col gap-2.5">
          <FieldRow label="Speed">
            <FieldInput defaultValue="5" />
          </FieldRow>
          <FieldRow label="Set angle">
            <FieldInput defaultValue="180" />
          </FieldRow>
        </div>
      </div>
    </WidgetWrapper>
  );
}
