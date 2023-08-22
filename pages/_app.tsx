import "@rainbow-me/rainbowkit/styles.css"
import "normalize.css"
import "swiper/swiper.min.css"
import "./index.css"

import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"

import config from "../src/configRainbowkit.json"
import { App } from "../src/app"
import { Web3Provider } from "../src/context/web3"
import Head from "next/head"
import { FC } from "react"

const getSupportedChains = () => {
  if (process?.env.NEXT_PUBLIC_CONFIG_START === "main") {
    return [config.bscMainnetChain]
  } else if (process?.env.NEXT_PUBLIC_CONFIG_START === "dev") {
    return [config.bscTestnetChain, config.bscMainnetChain]
  }
  return [config.bscTestnetChain, config.bscMainnetChain]
}

const { chains: prodChains, publicClient } = configureChains(
  [...getSupportedChains()],
  [publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: "kyotox-web",
  chains: prodChains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const MyApp: FC<{ Component: FC; pageProps: any }> = ({ Component, pageProps }) => (
  <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={prodChains}>
      <Web3Provider>
        <App>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Component {...pageProps} />
        </App>
      </Web3Provider>
    </RainbowKitProvider>
  </WagmiConfig>
)

export default MyApp
