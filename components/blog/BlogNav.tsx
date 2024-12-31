// "use client";
// import Image from "next/image";
// import React from "react";
// import Logo from "@/public/logo.png";
// import WhiteLogo from "@/public/whiteIcon.png";
// import { useTheme } from "next-themes";
// import { ModeToggle } from "../ModeToggle";

// const BlogNav = ({ name }: { name: string }) => {
//   const { theme } = useTheme();

//   return (
//     <nav className="grid grid-cols-3 my-10">
//       <div className="col-span-1" />
//       <div className="flex items-center gap-x-4 justify-center">
//         {theme === "light" ? (
//           <Image src={Logo} alt="Logo" width={40} height={40} />
//         ) : (
//           <Image src={WhiteLogo} alt="Logo" width={40} height={40} />
//         )}
//         <h1 className="text-3xl font-semibold tracking-tight">{name}</h1>
//       </div>
//       <div className="col-span-1 flex w-full justify-end">
//         <ModeToggle />
//       </div>
//     </nav>
//   );
// };

// export default BlogNav;
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { ModeToggle } from "../ModeToggle";
import Logo from "@/public/logo.png";
import WhiteLogo from "@/public/whiteIcon.png";

interface BlogNavProps {
  name: string;
}

export default function BlogNav({ name }: BlogNavProps) {
  const { theme } = useTheme();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex-1" />
        <div className="flex items-center justify-center gap-3">
          <Link href="/blog" className="flex items-center gap-2">
            <Image
              src={theme === "light" ? Logo : WhiteLogo}
              alt="Blog Logo"
              className="size-8"
              priority
            />
            <span className="text-2xl font-semibold tracking-tight">
              {name}
            </span>
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
