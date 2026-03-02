import { Settings, Move, X } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WidgetWrapperProps {
  title: string;
  children: React.ReactNode;
  onRemove?: () => void;
  showSettings?: boolean;
  className?: string;
  contentClassName?: string;
}

export function WidgetWrapper({
  title,
  children,
  onRemove,
  showSettings = false,
  className,
  contentClassName,
}: WidgetWrapperProps) {
  return (
    <Card
      className={cn(
        "h-full gap-0 rounded-md border-slate-200 py-0 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.09)]",
        className
      )}
    >
      <CardHeader className="gap-0 px-4 py-3">
        <CardTitle className="text-base font-medium leading-4">
          {title}
        </CardTitle>
        <CardAction>
          <div className="flex items-center gap-1">
            {showSettings && (
              <button className="cursor-pointer text-slate-400 hover:text-slate-600">
                <Settings className="size-4" />
              </button>
            )}
            <div className="drag-handle cursor-grab text-slate-400 hover:text-slate-600">
              <Move className="size-4" />
            </div>
            {onRemove && (
              <button
                onClick={onRemove}
                className="cursor-pointer text-slate-400 hover:text-slate-600"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className={cn("px-4 pb-4", contentClassName)}>{children}</CardContent>
    </Card>
  );
}
