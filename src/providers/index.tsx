"use client";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { useWalletList } from "@/composables/useWalletList";
import NavigationProvider from "./NavigationProvider";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

export default function Provider({ children }: React.PropsWithChildren) {
  const wallets = useWalletList();

  return (
    <NavigationProvider>
      <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
        <WalletProvider
          wallets={wallets}
          autoConnect
        >
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </NavigationProvider>
  );
}
