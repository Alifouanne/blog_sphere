import prisma from "@/lib/db";
import { reqUser } from "@/lib/requiredUser";
import { CreateCustomerPortal } from "@/lib/actions";
import { SubmitButton } from "@/components/dashboard/SubmitButtons";
import Pricing from "@/components/pricing/Pricing";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

async function getData(userId: string) {
  const data = await prisma.subscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      status: true,
      user: {
        select: {
          customerId: true,
        },
      },
    },
  });
  return data;
}

export default async function PricingPage() {
  const user = await reqUser();
  const data = await getData(user.id);

  if (data?.status === "active") {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Card className="w-full max-w-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Subscription Settings</CardTitle>
            <CardDescription className="text-base">
              Manage your subscription, payment details, and billing history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={CreateCustomerPortal} className="space-y-4">
              <input
                type="hidden"
                value={data.user?.customerId as string}
                name="customerId"
              />
              <SubmitButton
                text="View Subscription Details"
                className="w-full"
              />
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <Pricing />
    </div>
  );
}
