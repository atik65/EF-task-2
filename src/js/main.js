import "../styles/style.scss";

// enabling horizontal scrolling using the mouse wheel (scrolling left or right) in top cards container

const container = document.getElementById("top-cards-container");

container.addEventListener("wheel", (event) => {
  if (event.deltaY !== 0) {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
  }
});

// adjusting top banner width

const adjustWidth = () => {
  const screenWidth = window.innerWidth;
  let containerWidth;

  if (screenWidth > 0 && screenWidth < 576) {
    containerWidth = screenWidth - 50;
  } else if (screenWidth > 576 && screenWidth < 768) {
    containerWidth = screenWidth - 50;
  } else if (screenWidth > 768 && screenWidth < 992) {
    containerWidth = (screenWidth / 10) * 6 - 20;
  } else if (screenWidth > 992 && screenWidth < 1100) {
    containerWidth = (screenWidth / 10) * 4.5;
  } else if (screenWidth > 1100 && screenWidth < 1200) {
    containerWidth = (screenWidth / 10) * 5 - 50;
  } else if (screenWidth > 1200 && screenWidth < 1440) {
    containerWidth = (screenWidth / 10) * 5;
  } else {
    containerWidth = ((screenWidth - 220) / 10) * 7;
  }
  container.style.width = `${parseInt(containerWidth)}px`;
};

adjustWidth();

document.addEventListener("DOMContentLoaded", adjustWidth);

window.addEventListener("resize", adjustWidth);

// chart
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],

    datasets: [
      {
        label: "First value",
        data: [3, 13, 16, 17, 16, 13],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#50469D",
      },
      {
        label: "Second Value",
        data: [10, 18, 22, 13, 11, 7],
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: "#55e5fc",
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 5,
          min: 0,
          max: 25,
          callback: function (value) {
            return value + "k";
          },
        },
      },
    },
  },
});

// mobile menu

const bar2 = document.getElementById("bar-2");
const bar1 = document.getElementById("bar-1");
const close = document.getElementById("close-btn");
const mobileNav = document.getElementById("mobile-nav");

let isOpen = false;

const handleNav = () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileNav.classList.add("show-mobile-nav");
  } else {
    mobileNav.classList.remove("show-mobile-nav");
  }
};

bar1.addEventListener("click", handleNav);

bar2.addEventListener("click", handleNav);

close.addEventListener("click", () => {
  isOpen = false;
  mobileNav.classList.remove("show-mobile-nav");
});
