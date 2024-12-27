// import EmptyPage from "@/components/dashboard/EmptyPage";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import prisma from "@/lib/db";
// import { reqUser } from "@/lib/requiredUser";
// import Image from "next/image";
// import DefaultImage from "@/public/default.png";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// export const dynamic = "force-dynamic";

// const getData = async (userId: string) => {
//   const [sites, articles] = await Promise.all([
//     prisma.site.findMany({
//       where: {
//         userId: userId,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//       take: 3,
//     }),
//     prisma.article.findMany({
//       where: {
//         userId: userId,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//       take: 3,
//     }),
//   ]);
//   return { sites, articles };
// };
// const page = async () => {
//   const user = await reqUser();
//   const { articles, sites } = await getData(user.id);
//   return (
//     <div>
//       <h1 className="text-2xl font-semibold mb-5">Your Sites</h1>
//       {sites.length > 0 ? (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
//           {sites.map((site) => (
//             <Card key={site.id}>
//               <Image
//                 src={site.imageUrl ?? DefaultImage}
//                 alt={site.name}
//                 className="rounded-t-lg object-cover w-full h-[200px] "
//                 width={400}
//                 height={200}
//               />
//               <CardHeader>
//                 <CardTitle className="truncate">{site.name}</CardTitle>
//                 <CardDescription className="line-clamp-2">
//                   {site.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardFooter>
//                 <Button asChild>
//                   <Link href={`/dashboard/sites/${site.id}`} className="w-full">
//                     View Articles
//                   </Link>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <EmptyPage
//           title="You dont have any sites created"
//           description="You currently dont have any sites please create some. so that you can see them here"
//           href="/dashboard/sites/new"
//           buttonText="Create Site"
//         />
//       )}
//       <h1 className="text-2xl mt-10 font-semibold mb-5">Recent Articles</h1>
//       {articles.length > 0 ? (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
//           {articles.map((article) => (
//             <Card key={article.id}>
//               <Image
//                 src={article.image ?? DefaultImage}
//                 alt={article.title}
//                 className="rounded-t-lg object-cover w-full h-[200px] "
//                 width={400}
//                 height={200}
//               />
//               <CardHeader>
//                 <CardTitle className="truncate">{article.title}</CardTitle>
//                 <CardDescription className="line-clamp-2">
//                   {article.Description}
//                 </CardDescription>
//               </CardHeader>
//               <CardFooter>
//                 <Button asChild>
//                   <Link
//                     href={`/dashboard/sites/${article.siteId}/${article.id}`}
//                     className="w-full"
//                   >
//                     Edit Article
//                   </Link>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <EmptyPage
//           title="You dont have any articles"
//           description="You currently dont have any articles created. Please create some so that you can see them here"
//           buttonText="Create Article"
//           href="/dashboard/sites"
//         />
//       )}
//     </div>
//   );
// };

// export default page;
import Image from "next/image";
import Link from "next/link";
import EmptyPage from "@/components/dashboard/EmptyPage";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { reqUser } from "@/lib/requiredUser";
import DefaultImage from "@/public/default.png";

export const dynamic = "force-dynamic";

const getData = async (userId: string) => {
  const [sites, articles] = await Promise.all([
    prisma.site.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.article.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
  ]);
  return { sites, articles };
};

export default async function DashboardPage() {
  const user = await reqUser();
  const { articles, sites } = await getData(user.id);

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-semibold tracking-tight">Your Sites</h1>
          {sites.length > 0 && (
            <Button variant="ghost" asChild>
              <Link href="/dashboard/sites">View all sites</Link>
            </Button>
          )}
        </div>
        {sites.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((site) => (
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
        ) : (
          <EmptyPage
            title="You don't have any sites created"
            description="You currently don't have any sites. Please create some so that you can see them here."
            href="/dashboard/sites/new"
            buttonText="Create Site"
          />
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-semibold tracking-tight">
            Recent Articles
          </h1>
          {articles.length > 0 && (
            <Button variant="ghost" asChild>
              <Link href="/dashboard/articles">View all articles</Link>
            </Button>
          )}
        </div>
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={article.image ?? DefaultImage}
                    alt={article.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <CardHeader>
                  <CardTitle className="truncate">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {article.Description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link
                      href={`/dashboard/sites/${article.siteId}/${article.id}`}
                    >
                      Edit Article
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyPage
            title="You don't have any articles"
            description="You currently don't have any articles created. Please create some so that you can see them here."
            buttonText="Create Article"
            href="/dashboard/sites"
          />
        )}
      </section>
    </div>
  );
}
