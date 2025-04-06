import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createConfig, http, WagmiProvider } from "wagmi";
import { optimism } from "wagmi/chains"; // Changed from mainnet to optimism
import App from "./App";
import "./styles/globals.css";

const queryClient = new QueryClient();

const infuraKey = import.meta.env.VITE_INFURA_KEY;

const { connectors } = getDefaultWallets({
  appName: "Withdrawal Interface",
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
});

const config = createConfig({
  chains: [optimism],
  connectors,
  transports: {
    [optimism.id]: http(`https://optimism-mainnet.infura.io/v3/${infuraKey}`), // Updated URL for optimism
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
