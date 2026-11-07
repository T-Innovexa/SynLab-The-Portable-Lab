import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FlaskConical, Cpu, Microscope, Sparkles, Zap } from "lucide-react";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
  const features = [
    {
      icon: Cpu,
      title: "8 Smart Sensors",
      description: "Temperature, humidity, gas, water level, pH, weight, distance & microscope",
    },
    {
      icon: Sparkles,
      title: "AI Lab Assistant",
      description: "SynBot helps you understand experiments and stay safe",
    },
    {
      icon: Microscope,
      title: "USB Microscope",
      description: "Live view with zoom and capture capabilities",
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Live sensor data and experiment tracking",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg rounded-3xl border-border/50 shadow-floating">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <FlaskConical className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-display">
                SynLab – Pilot Model
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Smart Experiments. Smarter Learning.
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-muted-foreground">
            SynLab is a futuristic school laboratory system designed to make science 
            education interactive, safe, and exciting. It combines smart sensors, 
            real-time monitoring, and AI assistance to create the perfect learning environment.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-muted/50 border border-border/50"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-medium text-foreground text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-accent-soft border border-accent/20">
            <p className="text-sm text-center">
              <span className="font-medium text-accent">Pilot Version</span>
              <span className="text-muted-foreground"> • UI Preview • Future-ready for ESP32 IoT</span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
