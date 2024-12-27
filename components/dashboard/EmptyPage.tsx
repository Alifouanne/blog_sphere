import { FileIcon, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface EmptyProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function EmptyPage({
  title,
  description,
  buttonText,
  href,
}: EmptyProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
      <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
        <FileIcon className="size-10 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
        {description}
      </p>
      <Button asChild className="gap-2 hover:bg-primary/90">
        <Link href={href}>
          <PlusCircle className="size-4" />
          {buttonText}
        </Link>
      </Button>
    </div>
  );
}
