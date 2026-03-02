import { WidgetWrapper } from "./WidgetWrapper";
import { FieldRow, FieldInput, FieldSelect } from "./FieldComponents";

interface PanoramaWidgetProps {
  onRemove?: () => void;
}

export function PanoramaWidget({ onRemove }: PanoramaWidgetProps) {
  return (
    <WidgetWrapper title="Panorama" onRemove={onRemove}>
      <div className="flex flex-col gap-2.5">
        <FieldRow label="Frequency">
          <FieldInput defaultValue="1650 Mhz" />
        </FieldRow>
        <FieldRow label="Gain">
          <FieldInput defaultValue="30" />
        </FieldRow>
        <FieldRow label="Band">
          <FieldSelect value="20 Mhz" />
        </FieldRow>
        <FieldRow label="Step">
          <FieldInput defaultValue="100" />
        </FieldRow>
      </div>
    </WidgetWrapper>
  );
}
