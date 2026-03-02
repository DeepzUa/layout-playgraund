import { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { WidgetWrapper } from "./WidgetWrapper";

interface MapWidgetProps {
  onRemove?: () => void;
}

export function MapWidget({ onRemove }: MapWidgetProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [30.5234, 50.4501],
      zoom: 5,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Resize map when container size changes
  useEffect(() => {
    if (!mapContainerRef.current || !mapRef.current) return;

    const observer = new ResizeObserver(() => {
      mapRef.current?.resize();
    });
    observer.observe(mapContainerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <WidgetWrapper title="Map" onRemove={onRemove} contentClassName="flex-1 overflow-hidden">
      <div
        ref={mapContainerRef}
        className="h-full w-full"
      />
    </WidgetWrapper>
  );
}
