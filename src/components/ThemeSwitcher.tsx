"use client";

import { useEffect } from "react";

export default function ThemeSwitcher() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "teal");
  }, []);

  return null;
}
