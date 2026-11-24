import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookOpen, ExternalLink, Github, Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description?: string;
  tags: string[];
  highlights?: string[];
  liveLink?: string;
  demoVideo?: string;
  githubLink?: string;
  blogLink?: string;
}

export const ProjectCard = ({ title, description, tags, highlights, liveLink, demoVideo, githubLink, blogLink }: ProjectCardProps) => {
  return (
    <Card className="group h-full bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--cyber-accent)/0.3)]">
      <CardHeader>
        <CardTitle className="font-mono text-xl flex items-center gap-2">
          <span className="text-primary">&gt;</span>
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="font-mono text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {highlights && highlights.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground font-mono">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
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
        <div className="flex flex-wrap gap-3">
          {demoVideo && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="terminal" size="sm">
                  <Play className="w-4 h-4" />
                  Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="font-mono">{title} demo</DialogTitle>
                </DialogHeader>
                <video src={demoVideo} controls autoPlay className="w-full rounded-md" />
              </DialogContent>
            </Dialog>
          )}
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
          {blogLink && (
            <Button variant="ghost" size="sm" asChild>
              <a href={blogLink} target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4" />
                Read Article
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
