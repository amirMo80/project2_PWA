//loading
const load = document.querySelector(".loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    load.style.display = "none";
  }, 1000);
});

//toUp Icon
const toUp = document.querySelector(".toUp");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 60) {
    toUp.classList.add("activeIcon");
  } else {
    toUp.classList.remove("activeIcon");
  }
});

//Navbar
const items = document.querySelectorAll(".navbar ul li");
const navBtn = document.querySelector(".login-button");

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("activeClick");
    setTimeout(() => {
      notActive();
    }, 500);
  });
});

navBtn.addEventListener("click", () => {
  navBtn.classList.add("activeClick");
  setTimeout(() => {
    notActive();
  }, 500);
});

const notActive = () => {
  items.forEach((item) => {
    item.classList.remove("activeClick");
  });

  navBtn.classList.remove("activeClick");

  productButton.forEach((btn) => {
    btn.classList.remove("activeClick");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

//products
const productButton = document.querySelectorAll(".product button");

productButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("activeClick");
    setTimeout(() => {
      notActive();
    }, 500);
  });
});

const products = document.querySelector(".products");

window.addEventListener("scroll", () => {
  if (this.scrollY >= products.offsetTop - 325) {
    products.classList.add("activeProduct");
  } else {
    products.classList.remove("activeProduct");
  }
});

//sliderArticle
const slides = document.querySelectorAll(".article");
let i = 0;

setInterval(() => {
  i++;

  if (i >= slides.length) {
    i = 0;
  }

  notActive();

  slides[i].classList.add("active");
}, 5000);

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    notActive();
    slide.classList.add("active");
  });
});
