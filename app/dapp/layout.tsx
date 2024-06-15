"use client";
import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function DappLayout({ children }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const { chain, status } = useAccount();
  const isConnected = status === "connected";
  const wrongChain = chain === undefined;
  const promptSwitch = isConnected && wrongChain;

  return (
    <main>
      {!isConnected && hydrated && (
        <div>

            <p>Connect Wallet</p>
            <ConnectButton />
        </div>
      )}
      {promptSwitch && hydrated && (
        <div>

            <p>Switch Network To Continue</p>
            <ConnectButton />
        </div>
      )}
      {!hydrated && (
        <div>Loading...</div>
      )}
      {isConnected && !wrongChain && hydrated && <>{children}</>}
    </main>
  );
}
