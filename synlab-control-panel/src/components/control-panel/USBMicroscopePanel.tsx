import { useState } from "react";
import { Microscope, ZoomIn, Camera, AlertCircle } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const USBMicroscopePanel = () => {
  const [zoom, setZoom] = useState([1]);

  return (
    <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden h-full">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sensor-microscope/10 flex items-center justify-center">
            <Microscope className="w-5 h-5 text-sensor-microscope" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground">
              USB Microscope
            </h3>
            <p className="text-xs text-muted-foreground">Live View</p>
          </div>
        </div>
        <span className="status-dot status-inactive" />
      </div>

      {/* Preview Area */}
      <div className="aspect-video bg-muted/30 relative flex items-center justify-center">
        {/* Placeholder */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8 text-muted-foreground/50" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Camera Not Connected
            </p>
            <p className="text-xs text-muted-foreground/70">
              Connect USB microscope to view
            </p>
          </div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="w-full h-full grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-muted-foreground/30" />
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-5 space-y-4">
        {/* Zoom Control */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <ZoomIn className="w-4 h-4 text-muted-foreground" />
              Zoom Level
            </label>
            <span className="text-sm text-muted-foreground font-mono">
              {zoom[0]}x
            </span>
          </div>
          <Slider
            value={zoom}
            onValueChange={setZoom}
            min={1}
            max={10}
            step={1}
            className="w-full"
          />
        </div>

        {/* Capture Button */}
        <Button
          variant="outline"
          className="w-full rounded-xl border-2 border-border hover:border-sensor-microscope/30 hover:bg-sensor-microscope/5 gap-2"
          disabled
        >
          <Camera className="w-4 h-4" />
          Capture Image
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          UI Preview Only – Connect hardware to enable
        </p>
      </div>
    </div>
  );
};

export default USBMicroscopePanel;
