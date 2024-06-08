import { useEffect } from "react";

export default function useThemeColor(isDark: boolean) {
  useEffect(() => {
    const themeColor = document.querySelector("meta[name='theme-color']")!;
    themeColor.setAttribute("content", isDark ? "#0a0700" : "#261c01");
  }, [isDark]);
}
