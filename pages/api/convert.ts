import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { Chain } from "../../src/shared/lib/constants/data/enums"

const tokensAddresses = {
  BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  GPT: "0x153C0c947177e631e3DFc594ba28750d3a921FB5",
  DAT: "0xC3e1796ecaD8f738E8f86D967f551791F9fe165B",
  BTCB: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const address = req.query.address || ""
  const chainId = typeof req.query.chainId === "string" ? parseInt(req.query.chainId) : 0
  if (chainId === Chain.BSC_TESTNET) {
    res.status(200).json({ data: { quote: { USD: { price: 1 } } } })
    return
  }
  const amount = req.query.amount || ""
  try {
    if (typeof address === "string") {
      const response = await axios.get(
        "https://pro-api.coinmarketcap.com/v1/tools/price-conversion",
        {
          headers: {
            "X-CMC_PRO_API_KEY": "563bd9d8-9eda-4f09-a64d-46faf899d436",
          },
          params: {
            amount: amount,
            symbol: tokensAddresses[address],
          },
        },
      )
      res.status(200).json(response.data)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error fetching data" })
  }
}
