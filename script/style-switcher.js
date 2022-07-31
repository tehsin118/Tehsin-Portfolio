/* ------------------------ Theme Mode------------------------*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-moon");
  dayNight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").addEventListener("fa-moon  ");
  } else {
    dayNight.querySelector("i").addEventListener("fa-sun");
  }
});
