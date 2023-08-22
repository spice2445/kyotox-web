import { Project } from "../../../../shared/lib/types"
import { Content, Trigger } from "../../../../shared/ui/molecules/Tabs/types"
import { DetailsCryptoGPT } from "../../../../views/Launchpad/lib/ui"

export const tabsList: Trigger[] = [
  {
    value: "Details",
    header: "Details",
  },
  {
    value: "Team&Partners",
    header: "Team & Partners",
  },
  {
    value: "Metrics",
    header: "Metrics",
  },
  {
    value: "CampaignDetails",
    header: "Campaign details",
  },
]

export const tabsContent: Record<number, { info: Project; tabs: Content[] }> = {
  1: {
    info: {
      id: 1,
      logo: "/images/logo/layerAI.svg",
      logoColor: "#000000",
      img: "/images/CardItemsImages/LayerAI.jpg",
      altImg: "LayerAI",
      title: "LayerAI",
      subtitle:
        "LayerAI is the ZK Layer-2 blockchain that powers the AI revolution. $LAI blockchain hosts apps with 2+ million...",
      closedIn: "1d 22h 50m",
      listTechnology: [
        {
          title: "AI",
        },
      ],
    },
    tabs: [
      {
        value: "Details",
        children: <DetailsCryptoGPT />,
      },
      {
        value: "Team&Partners",
        children: "Team & Partners",
      },
      {
        value: "Metrics",
        children: "Metrics",
      },
      {
        value: "CampaignDetails",
        children: "Campaign details",
      },
    ],
  },
  2: {
    info: {
      id: 2,
      logo: "/images/logo/layerAI.svg",
      logoColor: "#000000",
      img: "/images/CardItemsImages/LayerAI.jpg",
      altImg: "LayerAI",
      title: "LayerAI",
      subtitle:
        "LayerAI is the ZK Layer-2 blockchain that powers the AI revolution. $LAI blockchain hosts apps with 2+ million...",
      closedIn: "1d 22h 51m",
      listTechnology: [
        {
          title: "AI",
        },
      ],
    },
    tabs: [
      {
        value: "Details",
        children: <DetailsCryptoGPT />,
      },
      {
        value: "Team&Partners",
        children: "Team & Partners",
      },
      {
        value: "Metrics",
        children: "Metrics",
      },
      {
        value: "CampaignDetails",
        children: "Campaign details",
      },
    ],
  },
  3: {
    info: {
      id: 3,
      logo: "/images/logo/layerAI.svg",
      logoColor: "#000000",
      img: "/images/CardItemsImages/LayerAI.jpg",
      altImg: "LayerAI",
      title: "LayerAI",
      subtitle:
        "LayerAI is the ZK Layer-2 blockchain that powers the AI revolution. $LAI blockchain hosts apps with 2+ million...",
      closedIn: "1d 22h 51m",
      listTechnology: [
        {
          title: "AI",
        },
      ],
    },
    tabs: [
      {
        value: "Details",
        children: <DetailsCryptoGPT />,
      },
      {
        value: "Team&Partners",
        children: "Team & Partners",
      },
      {
        value: "Metrics",
        children: "Metrics",
      },
      {
        value: "CampaignDetails",
        children: "Campaign details",
      },
    ],
  },
}
