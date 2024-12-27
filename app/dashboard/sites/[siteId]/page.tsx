// import EmptyPage from "@/components/dashboard/EmptyPage";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import prisma from "@/lib/db";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { Book, PlusCircle, Settings, MoreHorizontal } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import React from "react";

// async function getData(userId: string, siteId: string) {
//   const data = await prisma.site.findUnique({
//     where: {
//       id: siteId,
//       userId: userId,
//     },
//     select: {
//       subdirectory: true,
//       articles: {
//         select: {
//           image: true,
//           title: true,
//           createdAt: true,
//           id: true,
//           articleContent: true,
//           Description: true,
//         },
//         orderBy: {
//           createdAt: "desc",
//         },
//       },
//     },
//   });
//   return data;
// }
// const SitePage = async ({
//   params,
// }: {
//   params: Promise<{ siteId: string }>;
// }) => {
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();
//   if (!user) {
//     return redirect("/api/auth/login");
//   }
//   const { siteId } = await params;
//   const data = await getData(user.id, siteId);
//   return (
//     <>
//       <div className="flex w-full justify-end gap-x-4">
//         <Button asChild variant="secondary">
//           <Link href={`/blog/${data?.subdirectory}`}>
//             <Book className="size-4 mr-2" />
//             View Blog
//           </Link>
//         </Button>
//         <Button asChild variant="secondary">
//           <Link href={`/dashboard/sites/${siteId}/settings`}>
//             <Settings className="size-4 mr-2" />
//             Settings
//           </Link>
//         </Button>
//         <Button asChild>
//           <Link href={`/dashboard/sites/${siteId}/create`}>
//             <PlusCircle className="size-4 mr-2" />
//             Create Article
//           </Link>
//         </Button>
//       </div>
//       {data?.articles === undefined || data.articles.length === 0 ? (
//         <EmptyPage
//           title="You dont have any articles created"
//           description="You currently dont have any articles. Please create some so that you
//        can see them here!"
//           href={`/dashboard/sites/${siteId}/create`}
//           buttonText="Create Article"
//         />
//       ) : (
//         <div>
//           <Card>
//             <CardHeader>
//               <CardTitle>Articles</CardTitle>
//               <CardDescription>
//                 Manage your articles in simple way
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Image</TableHead>
//                     <TableHead>Title</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Created At</TableHead>
//                     <TableHead className="text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {data.articles.map((item) => (
//                     <TableRow key={item.id}>
//                       <TableCell>
//                         <Image
//                           src={item.image}
//                           width={64}
//                           height={64}
//                           alt="Cover Image"
//                           className="w-16 rounded-md object-cover"
//                         />
//                       </TableCell>
//                       <TableCell className="font-medium">
//                         {item.title}
//                       </TableCell>
//                       <TableCell>
//                         <Badge
//                           variant="outline"
//                           className="bg-green-500/10 text-green-500 "
//                         >
//                           Published
//                         </Badge>
//                       </TableCell>
//                       <TableCell>
//                         {new Intl.DateTimeFormat("en-US", {
//                           dateStyle: "medium",
//                         }).format(item.createdAt)}
//                       </TableCell>
//                       <TableCell className="text-end">
//                         <DropdownMenu>
//                           <DropdownMenuTrigger asChild>
//                             <Button size="icon" variant="ghost">
//                               <MoreHorizontal className="size-4" />
//                             </Button>
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent align="end">
//                             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem
//                               asChild
//                               className="hover:cursor-pointer"
//                             >
//                               <Link
//                                 href={`/dashboard/sites/${siteId}/${item.id}`}
//                               >
//                                 Edit
//                               </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem
//                               asChild
//                               className="hover:cursor-pointer"
//                             >
//                               <Link
//                                 href={`/dashboard/sites/${siteId}/${item.id}/delete`}
//                               >
//                                 Delete
//                               </Link>
//                             </DropdownMenuItem>
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </>
//   );
// };

// export default SitePage;
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, PlusCircle, Settings, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmptyPage from "@/components/dashboard/EmptyPage";
import prisma from "@/lib/db";

export const dynamic = "force-dynamic";

async function getData(userId: string, siteId: string) {
  const data = await prisma.site.findUnique({
    where: {
      id: siteId,
      userId: userId,
    },
    select: {
      subdirectory: true,
      articles: {
        select: {
          image: true,
          title: true,
          createdAt: true,
          id: true,
          articleContent: true,
          Description: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  return data;
}

export default async function SitePage({
  params,
}: {
  params: { siteId: string };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id, params.siteId);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Articles</h1>
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link href={`/blog/${data?.subdirectory}`}>
              <Book className="mr-2 size-4" />
              View Blog
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={`/dashboard/sites/${params.siteId}/settings`}>
              <Settings className="mr-2 size-4" />
              Settings
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/dashboard/sites/${params.siteId}/create`}>
              <PlusCircle className="mr-2 size-4" />
              Create Article
            </Link>
          </Button>
        </div>
      </div>

      {!data?.articles?.length ? (
        <EmptyPage
          title="You don't have any articles created"
          description="You currently don't have any articles. Please create some so that you can see them here!"
          href={`/dashboard/sites/${params.siteId}/create`}
          buttonText="Create Article"
        />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Articles</CardTitle>
            <CardDescription>
              Manage your articles in a simple way
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="w-[100px] text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.articles.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="relative h-16 w-16 overflow-hidden rounded-md">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium max-w-[200px] truncate">
                      {item.title}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-green-500/10 text-green-500 hover:bg-green-500/20"
                      >
                        Published
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                      }).format(item.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoreHorizontal className="size-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link
                              href={`/dashboard/sites/${params.siteId}/${item.id}`}
                            >
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            asChild
                            className="text-red-600 focus:text-red-600"
                          >
                            <Link
                              href={`/dashboard/sites/${params.siteId}/${item.id}/delete`}
                            >
                              Delete
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
