"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ModeToggle";
import { BlurBackground } from "./BlurBackground";

// Preload critical images
const LOGO_IMAGES = {
  light: "/logo.png",
  dark: "/whiteIcon.png",
} as const;

const HERO_IMAGE = "/hero.png";

export default function Hero() {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? LOGO_IMAGES.light : LOGO_IMAGES.dark;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="Blog Sphere Home"
          >
            <Image
              src={logoSrc}
              alt=""
              width={40}
              height={40}
              className="size-10"
              priority
            />
            <h1 className="text-2xl font-semibold tracking-tight">
              Blog<span className="text-primary">Sphere</span>
            </h1>
          </Link>

          {/* Mobile Mode Toggle */}
          <div className="md:hidden">
            <ModeToggle />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-4 md:flex"
            aria-label="Main navigation"
          >
            <ModeToggle />
            <LoginLink>
              <Button variant="secondary">Sign in</Button>
            </LoginLink>
            <RegisterLink>
              <Button>Sign up</Button>
            </RegisterLink>
          </nav>
        </div>
      </header>

      <section
        className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        aria-labelledby="hero-heading"
      >
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Ultimate Blogging SaaS for Startups
          </span>

          <h2
            id="hero-heading"
            className="mt-8 text-4xl font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Setup your Blog{" "}
            <span className="block text-primary">in Minutes!</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground lg:text-lg">
            Setting up your blog is hard and time consuming. We make it easy for
            you to create a blog in minutes.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <LoginLink>
              <Button variant="secondary" className="min-w-[100px]">
                Sign in
              </Button>
            </LoginLink>
            <RegisterLink>
              <Button className="min-w-[100px]">Try for Free</Button>
            </RegisterLink>
          </div>
        </div>

        <div className="relative mt-16 sm:mt-20">
          <BlurBackground />
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={HERO_IMAGE}
              alt="Blog Sphere dashboard preview"
              width={2880}
              height={1620}
              priority
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
