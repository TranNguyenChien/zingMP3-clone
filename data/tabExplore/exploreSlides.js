const listExploreSlide = [
  {
    image: "/assets/images/tabExplore/slides/slide1.jpg",
  },
  {
    image: "/assets/images/tabExplore/slides/slide2.jpg",
  },
  {
    image: "/assets/images/tabExplore/slides/slide3.jpg",
  },
  {
    image: "/assets/images/tabExplore/slides/slide4.jpg",
  },
  {
    image: "/assets/images/tabExplore/slides/slide5.jpg",
  },
  {
    image: "/assets/images/tabExplore/slides/slide6.jpg",
  },
  {
    image: "/assets/images/tabExplore/slides/slide7.jpg",
  },
  {
    image: "/assets/images/tabExplore/slides/slide8.jpg",
  },
];

const EXPLORE_SLIDE_STORAGE_KEY = "VIK_EXPLORE_SLIDE";

localStorage.setItem(
  EXPLORE_SLIDE_STORAGE_KEY,
  JSON.stringify(listExploreSlide)
);
