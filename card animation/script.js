const carousel = document.getElementById("carousel");
const items = carousel.querySelectorAll("span");
const total = items.length;
const radius = 650;

items.forEach((item, i) => {
  const angle = (360 / total) * i;
  item.style.transform = `
    rotateY(${angle}deg)
    translateZ(${radius}px)
    translate(-50%, -50%)
  `;
});
