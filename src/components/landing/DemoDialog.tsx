"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type DemoDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function DemoDialog({ open, onOpenChange }: DemoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showClose className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Voir une démo BTP Pilot</DialogTitle>
          <DialogDescription>
            Découvrez en quelques minutes comment BTP Pilot simplifie vos devis, factures et plannings.
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video w-full rounded-lg bg-[hsl(var(--muted))] flex items-center justify-center">
          {/* TODO: remplacer par une vraie vidéo (iframe ou source) */}
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Vidéo démo placeholder — à remplacer
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
