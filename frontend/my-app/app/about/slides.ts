export type Slide = {
  title: string
  background: string
  clients: {
    name: string
    image: string
    url: string
  }[]
}

export const slides: Slide[] = [
  {
    title: "Fashion",
    background: "/about-clothing.jpg",
    clients: [
      { name: "Hugo Boss", image: "/about-hugo-boss.jpg", url: "https://www.hugoboss.com/ca/en/home" },
      { name: "Macy's", image: "/about-macy.jpg", url: "https://www.macys.com" },
      { name: "Montblanc", image: "/about-montblanc.jpg", url: "https://www.montblanc.com" },
      { name: "Fashion Art Toronto", image: "/about-fat.jpg", url: "https://fashionarttoronto.com" },
    ],
  },
  {
    title: "Fintech",
    background: "/about-atm.jpg",
    clients: [
      { name: "CIBC", image: "/about-cibc.jpg", url: "https://www.cibc.com" },
      { name: "Flex Pay", image: "/flex-pay-logo.png", url: "/flex-pay" },
    ],
  },
  {
    title: "Health & Wellness",
    background: "/about-tea-bags.jpg",
    clients: [
      { name: "Kyungnam Pharm", image: "/about-kyungnam.jpg", url: "https://kyungnampharm.com" },
      { name: "Green Energy Tec", image: "/about-green-energy.jpg", url: "https://greenenergytec.ca" },
    ],
  },
  {
    title: "Tourism",
    background: "/about-palm-tree.jpg",
    clients: [
      { name: "PRIVE Jetset", image: "/about-prive-jetset.jpg", url: "https://prive-jetset.com" },
      { name: "WNBA", image: "/about-wnba.jpg", url: "https://wnba.com" },
      { name: "TIFF", image: "/about-tiff.jpg", url: "https://tiff.net" },
    ],
  },
]