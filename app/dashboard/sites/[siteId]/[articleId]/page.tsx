/* eslint-disable @typescript-eslint/no-unused-vars */
import EditArticleForm from "@/components/dashboard/forms/EditArticleForm";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const getData = async (ArticleId: string) => {
  const data = await prisma.article.findUnique({
    where: {
      id: ArticleId,
    },
    select: {
      articleContent: true,
      Description: true,
      image: true,
      title: true,
      slug: true,
      id: true,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
};
const ArticleEditPage = async ({
  params,
}: {
  params: Promise<{ articleId: string; siteId: string }>;
}) => {
  const { articleId, siteId } = await params;
  const data = await getData(articleId);

  return (
    <div>
      <div className="flex items-center">
        <Button size="icon" variant="outline" asChild className="mr-3">
          <Link href={`/dashboard/sites/${siteId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold">Edit Article</h1>
      </div>
      <EditArticleForm data={data} />
    </div>
  );
};

export default ArticleEditPage;
