import { useState, useCallback } from "react";
import {
  ResponsiveGridLayout,
  useContainerWidth,
  type Layout,
  type ResponsiveLayouts,
} from "react-grid-layout";
import { MapWidget, NarrowBandWidget, PanoramaWidget, RotatorWidget } from "@/components/widgets";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

interface WidgetConfig {
  id: string;
  type: "narrow-band" | "panorama" | "rotator" | "map";
}

const initialWidgets: WidgetConfig[] = [
  { id: "narrow-band", type: "narrow-band" },
  { id: "panorama", type: "panorama" },
  { id: "rotator", type: "rotator" },
  { id: "map", type: "map" },
];

const defaultBreakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
const defaultCols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

const initialLayouts: ResponsiveLayouts = {
  lg: [
    { i: "narrow-band", x: 0, y: 0, w: 3, h: 7, minW: 2, minH: 6 },
    { i: "panorama", x: 0, y: 7, w: 3, h: 8, minW: 2, minH: 7 },
    { i: "rotator", x: 0, y: 15, w: 3, h: 11, minW: 2, minH: 10 },
    { i: "map", x: 3, y: 0, w: 6, h: 12, minW: 3, minH: 8 },
  ],
};

function renderWidget(widget: WidgetConfig, onRemove: (id: string) => void) {
  switch (widget.type) {
    case "narrow-band":
      return <NarrowBandWidget onRemove={() => onRemove(widget.id)} />;
    case "panorama":
      return <PanoramaWidget onRemove={() => onRemove(widget.id)} />;
    case "rotator":
      return <RotatorWidget onRemove={() => onRemove(widget.id)} />;
    case "map":
      return <MapWidget onRemove={() => onRemove(widget.id)} />;
  }
}

export default function App() {
  const { width, containerRef } = useContainerWidth();
  const [widgets, setWidgets] = useState<WidgetConfig[]>(initialWidgets);
  const [layouts, setLayouts] = useState<ResponsiveLayouts>(initialLayouts);

  const handleRemove = useCallback((id: string) => {
    setWidgets((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const handleLayoutChange = useCallback(
    (_layout: Layout, allLayouts: ResponsiveLayouts) => {
      setLayouts(allLayouts);
    },
    []
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f3f3f3]">
      {width > 0 && (
        <ResponsiveGridLayout
          className="layout"
          width={width}
          layouts={layouts}
          breakpoints={defaultBreakpoints}
          cols={defaultCols}
          rowHeight={30}
          dragConfig={{ handle: ".drag-handle" }}
          onLayoutChange={handleLayoutChange}
          margin={[12, 12]}
        >
          {widgets.map((widget) => (
            <div key={widget.id}>
              {renderWidget(widget, handleRemove)}
            </div>
          ))}
        </ResponsiveGridLayout>
      )}
    </div>
  );
}
