import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import prisma from "@/lib/db";
import BlogNav from "@/components/blog/BlogNav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DefaultImage from "@/public/default.png";

async function getData(subdir: string) {
  try {
    const data = await prisma.site.findUnique({
      where: {
        subdirectory: subdir,
      },
      select: {
        name: true,
        articles: {
          select: {
            Description: true,
            title: true,
            image: true,
            createdAt: true,
            slug: true,
            id: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!data) {
      return notFound();
    }

    return data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw new Error("Failed to fetch blog data");
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  const data = await getData(name);

  return (
    <main className="container mx-auto px-4 py-6">
      <BlogNav name={data.name} />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.articles.map((article) => (
          <Card key={article.id} className="flex flex-col overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={article.image ?? DefaultImage}
                alt={article.title}
                className="object-cover"
                quality={90}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <CardHeader className="flex-1">
              <div className="space-y-2">
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {article.Description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="pt-0">
              <Button asChild className="w-full">
                <Link href={`/blog/${name}/${article.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {data.articles.length === 0 && (
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold">No articles yet</h2>
          <p className="mt-2 text-muted-foreground">
            Check back later for new content
          </p>
        </div>
      )}
    </main>
  );
}
