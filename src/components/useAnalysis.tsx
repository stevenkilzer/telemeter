import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NewAnalysisDialogProps {
  onCreateAnalysis: (analysis: { title: string; description: string }) => void;
}

export function NewAnalysisDialog({ onCreateAnalysis }: NewAnalysisDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateAnalysis({ title, description });
    setOpen(false);
    setTitle('');
    setDescription('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button data-new-analysis-trigger>Create New Analysis</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Analysis</DialogTitle>
          <DialogDescription>
            Create a new analysis to compare and study lap data.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter analysis title"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter analysis description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Analysis</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}