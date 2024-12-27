import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/db";
import DefaultImage from "@/public/default.png";
import EmptyPage from "@/components/dashboard/EmptyPage";

export const dynamic = "force-dynamic";

async function getSiteData(userId: string) {
  const data = await prisma.site.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
  return data;
}

export default async function SitePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const siteData = await getSiteData(user.id);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Your Sites</h1>
        <Button asChild>
          <Link href="/dashboard/sites/new">
            <PlusCircle className="mr-2 size-4" />
            Create Site
          </Link>
        </Button>
      </div>

      {!siteData?.length ? (
        <EmptyPage
          title="You don't have any sites created"
          description="You currently don't have any sites. Please create some so that you can see them here!"
          buttonText="Create Site"
          href="/dashboard/sites/new"
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.map((site) => (
            <Card key={site.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={site.imageUrl ?? DefaultImage}
                  alt={site.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <CardHeader>
                <CardTitle className="truncate">{site.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {site.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/dashboard/sites/${site.id}`}>
                    View Articles
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
