import Image from "next/image";
import React from "react";
import KindeLogo from "../../public/kinde.svg";
import NextJS from "../../public/nextjs.svg";
import TailwindLogo from "../../public/tailwind-svgrepo-com.svg";
import StripeLogo from "../../public/stripe-svgrepo-com.svg";
import PrismaLogo from "../../public/prisma-svgrepo-com.svg";

const Logos = () => {
  return (
    <div className="py-16 animate-in fade-in duration-1000">
      <h2 className="text-center text-lg font-semibold leading-7 text-foreground/80">
        Trusted by the best companies in the world
      </h2>
      <div className="relative mt-16">
        {/* Gradient Edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="mt-10 grid max-w-lg mx-auto grid-cols-2 items-center gap-8 sm:max-w-xl sm:grid-cols-3 sm:gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <a
            href="https://kinde.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src={KindeLogo}
              alt="kinde logo"
              className="w-full h-12 object-contain transition-all duration-300 group-hover:scale-110 dark:invert dark:opacity-70 dark:hover:opacity-100"
            />
          </a>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src={NextJS}
              alt="Next logo"
              className="w-full h-12 object-contain transition-all duration-300 group-hover:scale-110 dark:invert dark:opacity-70 dark:hover:opacity-100"
            />
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src={TailwindLogo}
              alt="Tailwind logo"
              className="w-full h-12 object-contain transition-all duration-300 group-hover:scale-110 dark:invert dark:opacity-70 dark:hover:opacity-100"
            />
          </a>
          <a
            href="https://stripe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src={StripeLogo}
              alt="Stripe logo"
              className="w-full h-12 object-contain transition-all duration-300 group-hover:scale-110 dark:invert dark:opacity-70 dark:hover:opacity-100"
            />
          </a>
          <a
            href="https://prisma.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src={PrismaLogo}
              alt="Prisma logo"
              className="w-full h-12 object-contain transition-all duration-300 group-hover:scale-110 dark:invert dark:opacity-70 dark:hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logos;
