import "../styles/style.scss";

// enabling horizontal scrolling using the mouse wheel (scrolling left or right) in top cards container

const container = document.querySelector(".top-cards-container");
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
    containerWidth = screenWidth - 30;
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

window.addEventListener("resize", adjustWidth);
