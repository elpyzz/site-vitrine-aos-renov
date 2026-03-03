"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImageLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt: string;
  title?: string;
}

export function ImageLightbox({ open, onOpenChange, src, alt, title }: ImageLightboxProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[95vw] w-auto max-h-[95vh] border-0 bg-black/95 p-2 [&>button]:text-white [&>button]:hover:text-white"
        showClose={true}
      >
        <DialogTitle className="sr-only">{title ?? alt}</DialogTitle>
        <div className="flex items-center justify-center min-h-[70vh]">
          {/* img natif pour afficher l'image en qualité maximale (fichier original) */}
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] w-auto max-w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
