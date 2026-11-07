import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FolderOpen, Clock, FlaskConical } from "lucide-react";

interface ExperimentHistoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ExperimentHistoryModal = ({ open, onOpenChange }: ExperimentHistoryModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg rounded-3xl border-border/50 shadow-floating">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-display">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FolderOpen className="w-5 h-5 text-primary" />
            </div>
            Experiment History
          </DialogTitle>
        </DialogHeader>

        {/* Empty State */}
        <div className="py-12 text-center">
          <div className="w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4">
            <FlaskConical className="w-10 h-10 text-muted-foreground/40" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            No experiments recorded yet
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Your experiment history will appear here once you start conducting experiments 
            with the SynLab system.
          </p>
        </div>

        {/* Timeline Placeholder (for future use) */}
        <div className="border-t border-border/50 pt-4 mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Timeline will update in real-time during experiments</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperimentHistoryModal;
