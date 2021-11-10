const $$$ = document.querySelectorAll.bind(document);
const ctx = $$$(".myChart");

// const ctx = document.getElementById("myChart").getContext("2d");
const time = [
  "01:00",
  "03:00",
  "05:00",
  "02:00",
  "09:00",
  "11:00",
  "13:00",
  "15:00",
  "17:00",
  "19:00",
  "21:00",
  "23:00",
];

ctx.forEach((chart, index) => {
  const tabChart = new Chart(chart, {
    type: "line",
    data: {
      labels: time,
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "# of Votes",
          data: [1, 12, 1, 2, 10, 4],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],

        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  });
});
