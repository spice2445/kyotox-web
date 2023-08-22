import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import { FarmAndEarnPage } from "../../src/views/FarmAndEarn"

const FarmComponent: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kyotox - Farm & Earn</title>
      </Head>
      <FarmAndEarnPage />
    </>
  )
}

export default FarmComponent
