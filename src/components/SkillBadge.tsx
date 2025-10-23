import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  icon: LucideIcon;
  name: string;
  level?: string;
}

export const SkillBadge = ({ icon: Icon, name, level }: SkillBadgeProps) => {
  return (
    <div className="group flex flex-col items-center gap-3 p-4 bg-card border border-border rounded hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--cyber-green)/0.2)]">
      <Icon className="w-8 h-8 text-primary group-hover:animate-glow-pulse" />
      <div className="text-center">
        <p className="font-mono font-semibold text-foreground">{name}</p>
        {level && (
          <p className="text-xs font-mono text-muted-foreground mt-1">{level}</p>
        )}
      </div>
    </div>
  );
};
