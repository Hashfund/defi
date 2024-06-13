"use client";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { useWalletList } from "@/composables/useWalletList";
import NavigationProvider from "./NavigationProvider";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

export default function Provider({ children }: React.PropsWithChildren) {
  const wallets = useWalletList();

  return (
    <NavigationProvider>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>˝
      </WalletProvider>
    </NavigationProvider>
  );
}
