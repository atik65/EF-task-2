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
  if (screenWidth > 992) {
    containerWidth = ((screenWidth - 220) / 10) * 7;
  } else if (screenWidth > 576) {
    containerWidth = (screenWidth / 10) * 7;
  } else {
    containerWidth = screenWidth - 30;
  }
  container.style.width = `${parseInt(containerWidth)}px`;
};

adjustWidth();

window.addEventListener("resize", adjustWidth);
