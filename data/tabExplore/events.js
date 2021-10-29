const listEvent = [
  {
    name: "Sinh Nhật Sao x B Ray",
    time: "00:00 Thứ Hai, 11 tháng 10",
    fans: [
      "/assets/images/tabExplore/events/fans/singer1/fan1.jpg",
      "/assets/images/tabExplore/events/fans/singer1/fan2.jpg",
      "/assets/images/tabExplore/events/fans/singer1/fan3.jpg",
      "/assets/images/tabExplore/events/fans/singer1/fan4.jpg",
      "/assets/images/tabExplore/events/fans/singer1/fan5.jpg",
    ],
    fanAmount: "1K",
    image: "./assets/images/tabExplore/events/event1.jpg",
    action: "Mở RADIO",
  },
  {
    name: "Sinh Nhật Sao x ERIK",
    time: "00:00 Thứ Tư, 13 tháng 10",
    fans: [
      "/assets/images/tabExplore/events/fans/singer2/fan1.jpg",
      "/assets/images/tabExplore/events/fans/singer2/fan2.jpg",
      "/assets/images/tabExplore/events/fans/singer2/fan3.jpg",
      "/assets/images/tabExplore/events/fans/singer2/fan4.jpg",
      "/assets/images/tabExplore/events/fans/singer2/fan5.jpg",
    ],
    fanAmount: "330",
    image: "/assets/images/tabExplore/events/event2.jpg",
    action: "Chúc Mừng",
  },
  {
    name: "Sinh Nhật Sao x Đông Nhi",
    time: "00:00 Thứ Tư, 13 tháng 10",
    fans: [
      "/assets/images/tabExplore/events/fans/singer3/fan1.jpg",
      "/assets/images/tabExplore/events/fans/singer3/fan2.jpg",
      "/assets/images/tabExplore/events/fans/singer3/fan3.jpg",
      "/assets/images/tabExplore/events/fans/singer3/fan4.jpg",
      "/assets/images/tabExplore/events/fans/singer3/fan5.jpg",
      "/assets/images/tabExplore/events/fans/singer3/fan6.jpg",
    ],
    fanAmount: "361",
    image: "/assets/images/tabExplore/events/event3.jpg",
    action: "Chúc Mừng",
  },
  {
    name: "XOXO - JEON SOMI -",
    time: "16:00 Thứ 6, 29 tháng 10",
    fans: [
      "/assets/images/tabExplore/events/fans/singer4/fan1.jpg",
      "/assets/images/tabExplore/events/fans/singer4/fan2.jpg",
      "/assets/images/tabExplore/events/fans/singer4/fan3.jpg",
      "/assets/images/tabExplore/events/fans/singer4/fan4.jpg",
      "/assets/images/tabExplore/events/fans/singer4/fan5.jpg",
      "/assets/images/tabExplore/events/fans/singer4/fan6.jpg",
    ],
    fanAmount: "100",
    image: "/assets/images/tabExplore/events/event4.jpg",
    action: "Quan tâm",
  },
];

const EVENT_STORAGE_KEY = "VIK_EVENT";

localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(listEvent));
