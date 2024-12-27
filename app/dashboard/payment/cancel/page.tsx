import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { XIcon } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function CancelPaymentPage() {
  return (
    <div className="flex min-h-[80vh] w-full flex-1 items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="flex justify-center">
            <div className="rounded-full bg-destructive/10 p-3">
              <XIcon className="size-8 text-destructive" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Payment Cancelled
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            No worries, you won&apos;t be charged. You can try again whenever
            you&apos;re ready.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href="/dashboard/pricing">Return to Pricing</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
