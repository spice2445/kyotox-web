import { Head, Html, Main, NextScript } from "next/document"
import { getCssText } from "../src/shared/lib/styles"
import { FC } from "react"

const Document: FC = () => (
  <Html>
    <Head>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
