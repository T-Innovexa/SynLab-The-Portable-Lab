import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Shield, Cpu, Beaker, BookOpen } from "lucide-react";

interface TutorialsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TutorialsModal = ({ open, onOpenChange }: TutorialsModalProps) => {
  const tutorials = [
    {
      icon: Shield,
      title: "Lab Safety",
      description: "Essential safety guidelines for laboratory work",
      color: "bg-sensor-temperature/10 text-sensor-temperature",
    },
    {
      icon: Cpu,
      title: "Sensor Basics",
      description: "Understanding your lab sensors and readings",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Beaker,
      title: "Running Experiments",
      description: "Step-by-step guide to conducting experiments",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: BookOpen,
      title: "Data Analysis",
      description: "Interpreting your experimental results",
      color: "bg-sensor-weight/10 text-sensor-weight",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg rounded-3xl border-border/50 shadow-floating">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-display">
            <span className="text-2xl">🎓</span>
            Tutorials
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 p-6 rounded-2xl bg-primary-soft border border-primary/20 text-center">
          <p className="text-lg font-medium text-foreground mb-2">
            Tutorials will be available soon
          </p>
          <p className="text-sm text-muted-foreground">
            We're preparing comprehensive guides to help you master SynLab
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-muted/50 border border-border/50 opacity-60 cursor-not-allowed"
            >
              <div className={`w-10 h-10 rounded-lg ${tutorial.color} flex items-center justify-center mb-3`}>
                <tutorial.icon className="w-5 h-5" />
              </div>
              <h4 className="font-medium text-foreground text-sm mb-1">{tutorial.title}</h4>
              <p className="text-xs text-muted-foreground">{tutorial.description}</p>
              <span className="inline-block mt-2 text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TutorialsModal;
