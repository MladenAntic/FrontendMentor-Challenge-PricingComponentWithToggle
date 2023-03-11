const price = document.querySelectorAll(".price");
const toggler = document.querySelector(".toggler");
const positionAnnually = document.querySelector(".position-annually");
const positionMonthly = document.querySelector(".position-monthly");

positionAnnually.addEventListener("click", () => {
  toggler.style.transform = "translateX(0)";
  price[0].innerText = "199.99";
  price[1].innerText = "249.99";
  price[2].innerText = "399.99";
});

positionMonthly.addEventListener("click", () => {
  toggler.style.transform = "translateX(115%)";
  price[0].innerText = "19.99";
  price[1].innerText = "24.99";
  price[2].innerText = "39.99";
});
