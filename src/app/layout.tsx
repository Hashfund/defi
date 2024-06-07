import clsx from "clsx";
import "@unocss/reset/tailwind.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/globals.css";
import Provider from "@/providers";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";
import LayoutNavigation from "@/components/LayoutNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hashfund.fun"),
  title: "HashFund | Launch a coin that is instantly tradeable",
  description:
    "HashFund prevents rugs by making sure that all created tokens are safe. Eacg coin on hashfund is a fair-launch with no presale and no team allocation.",
  openGraph: {
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "fixed inset-0 flex flex-col bg-black text-white"
        )}
      >
        <Provider>
          <div className="flex flex-1 from-amber/20 to-black bg-gradient-to-b">
            <LayoutNavigation className="md:w-1/4" />
            <div className="flex-1">
              <LayoutHeader />
              {children}
              <LayoutFooter />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
