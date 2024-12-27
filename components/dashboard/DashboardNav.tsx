// import React from "react";
// import { ModeToggle } from "../ModeToggle";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";
// import { Button } from "../ui/button";
// import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { Avatar } from "@radix-ui/react-avatar";
// import { AvatarFallback, AvatarImage } from "../ui/avatar";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// const DashboardNav = async () => {
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();
//   return (
//     <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
//       <div className="ml-auto flex items-center gap-x-5">
//         <ModeToggle />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="secondary" size="icon">
//               <Avatar>
//                 <AvatarImage
//                   src={
//                     user.picture ??
//                     `https://ui-avatars.com/api/?background=random&name=${user.given_name}`
//                   }
//                   className="rounded-lg"
//                 />
//                 <AvatarFallback>
//                   {user.family_name?.slice(0, 3) ?? ""}
//                 </AvatarFallback>
//               </Avatar>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem>
//               <LogoutLink>Log out</LogoutLink>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   );
// };

// export default DashboardNav;
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "../ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default async function DashboardNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-muted/40 px-4 backdrop-blur-sm lg:h-[60px] lg:px-6">
      <div className="ml-auto flex items-center gap-x-5">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-lg hover:bg-muted"
            >
              <Avatar>
                <AvatarImage
                  src={
                    user.picture ??
                    `https://ui-avatars.com/api/?background=random&name=${user.given_name}`
                  }
                  alt={user.given_name ?? "User avatar"}
                  className="rounded-lg object-cover"
                />
                <AvatarFallback className="rounded-lg">
                  {user.family_name?.slice(0, 3) ?? ""}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="cursor-pointer">
              <LogoutLink className="w-full">Log out</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
