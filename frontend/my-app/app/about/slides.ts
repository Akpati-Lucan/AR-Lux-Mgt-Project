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
    background: "/about/about-clothing.jpg",
    clients: [
      { name: "Hugo Boss", image: "/about/about-hugo-boss.jpg", url: "https://www.hugoboss.com/ca/en/home" },
      { name: "Macy's", image: "/about/about-macy.jpg", url: "https://www.macys.com" },
      { name: "Montblanc", image: "/about/about-montblanc.jpg", url: "https://www.montblanc.com" },
      { name: "Fashion Art Toronto", image: "/about/about-fat.jpg", url: "https://fashionarttoronto.com" },
    ],
  },
  {
    title: "Fintech",
    background: "/about/about-atm.jpg",
    clients: [
      { name: "CIBC", image: "/about/about-cibc.jpg", url: "https://www.cibc.com" },
      { name: "Flex Pay", image: "/flex-pay-logo.png", url: "/flex-pay" },
    ],
  },
  {
    title: "Health & Wellness",
    background: "/about/about-tea-bags.jpg",
    clients: [
      { name: "Kyungnam Pharm", image: "/about/about-kyungnam.jpg", url: "https://kyungnampharm.com" },
      { name: "Green Energy Tec", image: "/about/about-green-energy.jpg", url: "https://greenenergytec.ca" },
    ],
  },
  {
    title: "Tourism",
    background: "/about/about-palm-tree.jpg",
    clients: [
      { name: "PRIVE Jetset", image: "/about/about-prive-jetset.jpg", url: "https://prive-jetset.com" },
      { name: "WNBA", image: "/about/about-wnba.jpg", url: "https://wnba.com" },
      { name: "TIFF", image: "/about/about-tiff.jpg", url: "https://tiff.net" },
    ],
  },
]