"use client";
import { http, createConfig } from "wagmi";
import { filecoinCalibration } from "wagmi/chains";

const config = createConfig({
  chains: [filecoinCalibration],
  transports: {
    [filecoinCalibration.id]: http(),
  },
  ssr: true,
});

export { config };
