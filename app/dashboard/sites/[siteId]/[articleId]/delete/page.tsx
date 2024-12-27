import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/dashboard/SubmitButtons";
import { DeletePost } from "@/lib/actions";
export const dynamic = "force-dynamic";
export default async function DeleteArticlePage({
  params,
}: {
  params: { siteId: string; articleId: string };
}) {
  const { siteId, articleId } = await params;
  return (
    <div className="container flex min-h-[600px] items-center justify-center">
      <Card className="w-full max-w-xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-destructive">
            Delete Article
          </CardTitle>
          <CardDescription className="text-base">
            This action cannot be undone. This will permanently delete this
            article and remove all associated data from our servers.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between gap-4">
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link href={`/dashboard/sites/${siteId}`}>Cancel</Link>
          </Button>
          <form action={DeletePost} className="w-full">
            <Input type="hidden" name="articleId" value={articleId} />
            <Input type="hidden" name="siteId" value={siteId} />
            <SubmitButton
              text="Delete Article"
              variant="destructive"
              className="w-full"
            />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
