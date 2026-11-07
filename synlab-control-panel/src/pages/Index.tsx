import { useState } from "react";
import { Search, Info, User, ChevronDown, FlaskConical, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import TutorialsModal from "@/components/TutorialsModal";
import SynBotAssistant from "@/components/SynBotAssistant";
import AboutModal from "@/components/AboutModal";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const [showTutorials, setShowTutorials] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSynBot, setShowSynBot] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden flex flex-col">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <FlaskConical className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            SynLab
          </h1>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-primary-soft rounded-xl px-4 py-2">
              <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground hidden sm:block">Adarsh</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-elevated border-border/50">
            <DropdownMenuItem className="cursor-pointer rounded-lg">
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-lg">
              Back to Dashboard
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
        {/* Product Card */}
        <div className="w-full max-w-lg animate-fade-in-up">
          <div className="glass-card rounded-3xl p-8 lg:p-10 shadow-floating hover:shadow-xl transition-all duration-500 group">
            {/* Card Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <FlaskConical className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft border border-accent/20">
                <span className="status-dot status-idle" />
                <span className="text-sm font-medium text-accent-foreground">System Idle</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                SynLab – Pilot Model
              </h2>
              <p className="text-lg text-muted-foreground">
                Smart Experiments. Smarter Learning.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Your intelligent laboratory companion for hands-on science education. 
                Monitor sensors, control experiments, and explore the world of scientific discovery.
              </p>
            </div>

            {/* Card Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => navigate('/control-panel')}
                className="flex-1 control-btn-primary group/btn"
              >
                <Search className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                Inspect
              </Button>
              <Button 
                onClick={() => setShowAbout(true)}
                variant="outline"
                className="flex-1 control-btn border-2 border-border hover:border-primary/30 hover:bg-primary-soft"
              >
                <Info className="w-5 h-5" />
                About
              </Button>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {[
            { icon: "🌡️", label: "8 Smart Sensors" },
            { icon: "🔬", label: "USB Microscope" },
            { icon: "🤖", label: "AI Assistant" },
          ].map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <span className="text-lg">{feature.icon}</span>
              <span className="text-sm font-medium text-muted-foreground">{feature.label}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Tutorial Button - Bottom Left */}
      <button
        onClick={() => setShowTutorials(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border/50 shadow-elevated hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
      >
        <span className="text-xl group-hover:scale-110 transition-transform">🎓</span>
        <span className="font-medium text-foreground">Tutorials</span>
      </button>

      {/* SynBot AI Assistant - Bottom Right */}
      <button
        onClick={() => setShowSynBot(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-synbot shadow-glow animate-glow-pulse flex items-center justify-center group hover:scale-110 transition-transform duration-300"
      >
        <Sparkles className="w-7 h-7 text-primary-foreground group-hover:animate-pulse" />
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
          <span className="text-[10px] text-accent-foreground font-bold">AI</span>
        </span>
      </button>

      {/* Tooltip for SynBot */}
      <div className="fixed bottom-24 right-6 z-40 px-4 py-2 rounded-xl bg-card border border-border/50 shadow-lg opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        <span className="text-sm text-muted-foreground">Ask SynBot for help</span>
      </div>

      {/* Footer */}
      <Footer className="relative z-10" />

      {/* Modals */}
      <TutorialsModal open={showTutorials} onOpenChange={setShowTutorials} />
      <AboutModal open={showAbout} onOpenChange={setShowAbout} />
      <SynBotAssistant open={showSynBot} onOpenChange={setShowSynBot} />
    </div>
  );
};

export default Index;
