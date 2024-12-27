"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { ThemeProvider as NextThemesProvider } from "next-themes";
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;
const DynProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  { ssr: false }
);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const NextThemeProvider =
    process.env.NODE_ENV === "production" ? NextThemesProvider : DynProvider;
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
