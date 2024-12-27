import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function SuccessPaymentPage() {
  return (
    <div className="flex min-h-[80vh] w-full flex-1 items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="flex justify-center">
            <div className="rounded-full bg-success/10 p-3">
              <Check className="size-8 text-success" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Payment Successful
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Congratulations on your subscription! You can now create unlimited
            sites.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
