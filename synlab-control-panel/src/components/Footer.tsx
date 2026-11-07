import { cn } from "@/lib/utils";

const Footer = ({ className }: { className?: string }) => {
  const footerLinks = [
    { label: "About", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <footer
      className={cn(
        "w-full border-t border-border/50 bg-muted/30 py-6 px-6 mt-auto",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-base font-heading font-semibold text-foreground/80">
            SynLab™ By CompanyXYZ
          </span>
          <span className="text-xs text-muted-foreground">
            Smart Experiments. Smarter Learning.
          </span>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center gap-0.5 text-center">
          <span className="text-xs text-muted-foreground">
            © 2026 SynLab™. All rights reserved.
          </span>
          <span className="text-[11px] text-muted-foreground/70">
            SynLab™ is a pilot educational laboratory system.
          </span>
        </div>

        {/* Right Section */}
        <nav className="flex items-center gap-1">
          {footerLinks.map((link, index) => (
            <span key={link.label} className="flex items-center">
              <a
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline underline-offset-2"
              >
                {link.label}
              </a>
              {index < footerLinks.length - 1 && (
                <span className="mx-2 text-muted-foreground/40">·</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
