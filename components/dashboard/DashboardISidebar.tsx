// "use client";
// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import Logo from "../../public/logo.png";
// import WhiteLogo from "../../public/whiteIcon.png";
// import { navLinks } from "@/utils/constants";
// import { cn } from "@/lib/utils";
// import { usePathname } from "next/navigation";
// import { useTheme } from "next-themes";
// const DashboardSidebar = () => {
//   const pathname = usePathname();
//   const { theme } = useTheme();
//   return (
//     <div className="hidden border-r bg-muted/40 md:block">
//       <div className="flex h-full max-h-screen flex-col gap-2">
//         <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
//           <Link href="/" className="flex items-center gap-2 font-semibold">
//             {theme === "light" ? (
//               <Image src={Logo} alt="Logo" className="size-8" />
//             ) : (
//               <Image src={WhiteLogo} alt="Logo" className="size-8" />
//             )}

//             <h3 className="text-2xl">
//               Blog <span className="text-primary">Sphere</span>
//             </h3>
//           </Link>
//         </div>
//         <div className="flex-1">
//           <nav className="grid items-start px-2 font-medium lg:px-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={cn(
//                   pathname === link.href
//                     ? "bg-muted text-primary"
//                     : "text-muted-foreground bg-none",
//                   "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/70"
//                 )}
//               >
//                 <link.icon className="size-4" />
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardSidebar;
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { navLinks } from "@/utils/constants";
import { cn } from "@/lib/utils";
import Logo from "../../public/logo.png";
import WhiteLogo from "../../public/whiteIcon.png";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <aside className="hidden border-r bg-muted/40 backdrop-blur-sm md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div>
              {theme === "light" ? (
                <Image
                  src={Logo}
                  alt="Blog Sphere Logo"
                  className="size-8"
                  priority
                />
              ) : (
                <Image
                  src={WhiteLogo}
                  alt="Blog Sphere Logo"
                  className="size-8"
                  priority
                />
              )}
            </div>
            <span className="text-2xl">
              Blog <span className="text-primary font-bold">Sphere</span>
            </span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto">
          <nav className="grid items-start px-2 pt-2 font-medium lg:px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
                  "hover:bg-muted hover:text-primary",
                  pathname === link.href
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                <link.icon className="size-4" />
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}