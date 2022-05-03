// Javascript begins here
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const phoneval = document.querySelector("#phoneval");
const emailval = document.querySelector("#emailval");
const addressval = document.querySelector("#addressval");

hamburger.addEventListener("click", () => {
  console.log(hamburger.classList);
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

phone.addEventListener("click", (event) => {
  event.preventDefault();
  phoneval.innerHTML = "+91 8097334915";
});

email.addEventListener("click", (event) => {
  event.preventDefault();
  emailval.innerHTML = "mysportshaala@gmail.com";
});

address.addEventListener("click", (event) => {
  event.preventDefault();
  addressval.innerHTML = "4132, Prestige Shantiniketan, Bangalore";
});

const comingsoon = document.querySelector(".cta");

setTimeout(() => {
  comingsoon.style.visibility = "visible";
}, 7500);
