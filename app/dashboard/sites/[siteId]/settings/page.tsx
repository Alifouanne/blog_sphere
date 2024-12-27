import UploadImageForm from "@/components/dashboard/forms/UploadImageForm";
import { SubmitButton } from "@/components/dashboard/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DeleteSite } from "@/lib/actions";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const SettingsSitePage = async ({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) => {
  const { siteId } = await params;
  return (
    <>
      <div className="flex items-center gap-x-2">
        <Button variant="outline" size="icon">
          <Link href={`/dashboard/sites/${siteId}`}>
            <ChevronLeft className="size-4" />
          </Link>
        </Button>
        <h3 className="text-xl font-semibold">Go Back</h3>
      </div>
      <UploadImageForm siteId={siteId} />
      <Card className="border-red-500 bg-red-500/10">
        <CardHeader>
          <CardTitle className="text-red-500">Danger</CardTitle>
          <CardDescription>
            This will delete your site and all articles associated with it.
            Click the button below to delete everything.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <form action={DeleteSite}>
            <Input type="hidden" name="siteId" value={siteId} />
            <SubmitButton text="Delete" variant="destructive" />
          </form>
        </CardFooter>
      </Card>
    </>
  );
};

export default SettingsSitePage;
