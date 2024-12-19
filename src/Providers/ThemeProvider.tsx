"use client";

import { ThemeProvider } from "@material-tailwind/react";
import React, { useState } from "react";

export default function MTThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ThemeProvider>{children}</ThemeProvider>;
}
