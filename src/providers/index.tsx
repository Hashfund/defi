"use client";
import NavigationProvider from "./NavigationProvider";

export default function Provider({ children }: React.PropsWithChildren) {
  return <NavigationProvider>{children}</NavigationProvider>;
}
