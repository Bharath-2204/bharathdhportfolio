import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

export const ProjectCard = ({ title, description, tags, liveLink, githubLink }: ProjectCardProps) => {
  return (
    <Card className="group bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--cyber-green)/0.3)]">
      <CardHeader>
        <CardTitle className="font-mono text-xl flex items-center gap-2">
          <span className="text-primary">&gt;</span>
          {title}
        </CardTitle>
        <CardDescription className="font-mono text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-muted border border-border text-primary rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveLink && (
            <Button variant="terminal" size="sm" asChild>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubLink && (
            <Button variant="ghost" size="sm" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
