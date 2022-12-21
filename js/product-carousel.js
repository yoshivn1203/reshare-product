const carousel = document.querySelector(".product-carousel");
const itemsContainer = carousel.querySelector(".product-carousel-items");
const items = Array.from(itemsContainer.children);
const prevButton = document.querySelector(".carousel-button-prev");
const nextButton = document.querySelector(".carousel-button-next");

let currentItemIndex = 0;
let itemsPerPage = 5.5;

function goToItem(index) {
  if (index < 0) {
    index = items.length - itemsPerPage;
  } else if (index > items.length - itemsPerPage) {
    index = 0;
  }
  itemsContainer.style.transition = "transform 0.5s ease";
  itemsContainer.style.transform = `translateX(-${
    index * (100 / itemsPerPage)
  }%)`;
  currentItemIndex = index;
}

prevButton.addEventListener("click", () => {
  goToItem(currentItemIndex - 1);
});

nextButton.addEventListener("click", () => {
  goToItem(currentItemIndex + 1);
});

goToItem(currentItemIndex);

window.addEventListener("resize", () => {
  if (window.innerWidth < 800) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 5.5;
  }
  goToItem(currentItemIndex);
});
