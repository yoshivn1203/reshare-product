const carousel = document.querySelector(".product-carousel");
const itemsContainer = carousel.querySelector(".product-carousel-items");
const items = Array.from(itemsContainer.children);
const prevButton = document.querySelector(".carousel-button-prev");
const nextButton = document.querySelector(".carousel-button-next");

let currentItemIndex = 0;
let itemsPerPage = 5.5;

function goToItem(index) {
  if (index <= 0) {
    index = 0;
    $(".carousel-button-prev").addClass("disable");
  } else if (index > items.length - itemsPerPage) {
    index = items.length - itemsPerPage;
    $(".carousel-button-next").addClass("disable");
  } else {
    $(".carousel-button-prev").removeClass("disable");
    $(".carousel-button-next").removeClass("disable");
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

const responsiveItems = () => {
  if (window.innerWidth <= 375) {
    itemsPerPage = 1;
  } else if (window.innerWidth <= 768) {
    itemsPerPage = 2;
  } else if (window.innerWidth <= 1024) {
    itemsPerPage = 3;
  } else {
    itemsPerPage = 5.5;
  }
};

window.addEventListener("load", () => {
  responsiveItems();
  goToItem(currentItemIndex);
});

window.addEventListener("resize", () => {
  responsiveItems();
  goToItem(currentItemIndex);
});

// grab logic

// [...document.querySelectorAll(".product-carousel")].forEach(
//   (container, n = !1, i = void 0, r = void 0, a = !1, t = 0) => {
//     container.addEventListener("mousedown", function (e) {
//       (n = !0), this.classList.add("active");
//       (i = e.pageX - this.offsetLeft), (r = this.scrollLeft);
//     });
//     container.addEventListener("mouseleave", function (e) {
//       (n = !1), this.classList.remove("active");
//     });
//     container.addEventListener("mouseup", function (e) {
//       a && (e.preventDefault(), (a = !1)),
//         (n = !1),
//         this.classList.remove("active");
//     });
//     container.addEventListener("mousemove", function (e) {
//       var t;
//       n &&
//         (e.preventDefault(),
//         (t = e.pageX - this.offsetLeft),
//         (t = r - 2 * (t - i)),
//         5 < Math.abs(this.scrollLeft - t) && (a = !0),
//         (this.scrollLeft = t));
//       if (this.scrollLeft === container.scrollWidth - container.clientWidth) {
//         console.log("disable next");
//       } else if (this.scrollLeft === 0) {
//         console.log("disable back");
//       } else {
//         console.log("enable both");
//       }
//     });
//   }
// );
