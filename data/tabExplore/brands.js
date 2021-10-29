const listBrand = [
  {
    image: "/assets/images/tabExplore/brands/brand1.png",
  },
  {
    image: "/assets/images/tabExplore/brands/brand2.png",
  },
  {
    image: "/assets/images/tabExplore/brands/brand3.png",
  },
  {
    image: "/assets/images/tabExplore/brands/brand4.png",
  },
  {
    image: "/assets/images/tabExplore/brands/brand5.png",
  },
  {
    image: "/assets/images/tabExplore/brands/brand6.png",
  },
  {
    image: "/assets/images/tabExplore/brands/brand7.png",
  },
  {
    image: "/assets/images/tabExplore/brands/brand8.png",
  },
];

const BRAND_STORAGE_KEY = "VIK_BRAND";

localStorage.setItem(BRAND_STORAGE_KEY, JSON.stringify(listBrand));
