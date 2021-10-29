const listAlbum = [
  {
    name: "Golden Hour",
    image: "/assets/images/albums/album1.jpg",
  },
  {
    name: "Boycold (Mini Album)",
    image: "/assets/images/albums/album2.jpg",
  },
  {
    name: "Red",
    image: "/assets/images/albums/album3.jpg",
  },
  {
    name: "Người Yêu Cũ (Gửi Cho Anh 2) (Mini Album)",
    image: "/assets/images/albums/album4.jpg",
  },
  {
    name: "Querencia (Mini Album)",
    image: "/assets/images/albums/album5.jpg",
  },
  {
    name: "Justice (Mini Album)",
    image: "/assets/images/albums/album6.jpg",
  },
  {
    name: "Teenage Dream",
    image: "/assets/images/albums/album7.jpg",
  },
  {
    name: "The Off Season",
    image: "/assets/images/albums/album8.jpg",
  },
  {
    name: "The Album",
    image: "/assets/images/albums/album9.jpg",
  },
  {
    name: "Random Access Memories",
    image: "/assets/images/albums/album10.jpg",
  },
  {
    name: "Map of the Soul: 7",
    image: "/assets/images/albums/album11.jpg",
  },
  {
    name: "Chromatica",
    image: "/assets/images/albums/album12.jpg",
  },
  {
    name: "My Turn",
    image: "/assets/images/albums/album13.jpg",
  },
  {
    name: "Meet the Woo 2",
    image: "/assets/images/albums/album14.jpg",
  },
  {
    name: "Lemonade",
    image: "/assets/images/albums/album15.jpg",
  },
];

const ALBUM_STORAGE_KEY = "VIK_ALBUM";

localStorage.setItem(ALBUM_STORAGE_KEY, JSON.stringify(listAlbum));
