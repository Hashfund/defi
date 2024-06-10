import clsx from "clsx";
import "@unocss/reset/tailwind.css";

import type { Metadata, Viewport } from "next";
import { Noto_Sans  } from "next/font/google";

import "@/globals.css";
import Provider from "@/providers";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";
import LayoutNavigation from "@/components/LayoutNavigation";

const font = Noto_Sans({
  subsets: ["latin"],
  weight: ["300","400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hashfund.fun"),
  title: "HashFund | Launch a coin that is instantly tradeable",
  description:
    "HashFund prevents rugs by making sure that all created tokens are safe. Eacg coin on hashfund is a fair-launch with no presale and no team allocation.",
  openGraph: {
    images: [],
  },
};

export const viewport: Viewport = {
  themeColor: "#261c01",
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
          font.className,
          "fixed inset-0 flex flex-col bg-black text-white"
        )}
      >
        <Provider>
          <div className="flex flex-1 from-amber/20 via-green/10 to-black bg-gradient-to-b">
            <LayoutNavigation className="md:w-1/4 xl:w-1/5" />
            <div className="flex flex-1 flex-col space-y-4">
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
