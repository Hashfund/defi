"use client";
import { clusterApiUrl } from "@solana/web3.js";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import { useWalletList } from "@/composables/useWalletList";
import NavigationProvider from "./NavigationProvider";

import AuthProvider from "./AuthProvider";

export default function Provider({ children }: React.PropsWithChildren) {
  const wallets = useWalletList();

  return (
    <NavigationProvider>
      <ConnectionProvider
        endpoint={clusterApiUrl("devnet")}
        config={{ commitment: "single" }}
      >
        <WalletProvider
          wallets={wallets}
          autoConnect
        >
          <WalletModalProvider>
            <AuthProvider>{children}</AuthProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </NavigationProvider>
  );
}
