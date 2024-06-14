export const Explorer = {
  buildTx(signature: string) {
    return `https://solscan.io/tx/${signature}?cluster=devnet`;
  },
};
