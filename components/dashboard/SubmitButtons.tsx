"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SubmitProps {
  text: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}
export function SubmitButton({ text, className, variant }: SubmitProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className={cn("w-fit", className)} variant={variant}>
          <Loader2 className="mr-2 size-4 animate-spin" /> Please Wait...
        </Button>
      ) : (
        <Button variant={variant} className={cn("w-fit", className)}>
          {text}
        </Button>
      )}
    </>
  );
}
