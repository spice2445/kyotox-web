import type { NextPage } from "next"
import React from "react"
import { Swap } from "../../src/views/Swap"
import Head from "next/head"

const SwapComponent: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kyotox - Swap</title>
      </Head>
      <Swap />
    </>
  )
}

export default SwapComponent
