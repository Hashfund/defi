import "@unocss/reset/tailwind.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import "react-toastify/dist/ReactToastify.css";

import clsx from "clsx";

import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "@/globals.css";
import Provider from "@/providers";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";
import LayoutNavigation from "@/components/LayoutNavigation";

const font = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
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

export const revalidate = 0;
export const dynamic = "force-dynamic";


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
          <div className="flex flex-1 overflow-x-hidden overflow-y-scroll from-black via-black to-black bg-gradient-to-b">
            <LayoutNavigation className="md:w-1/4 xl:w-1/5" />
            <div className="flex flex-1 flex-col overflow-x-hidden space-y-4 md:overflow-y-scroll">
              <LayoutHeader />
              {children}
              <LayoutFooter />
            </div>
          </div>
        </Provider>
        <ToastContainer />
      </body>
    </html>
  );
}
