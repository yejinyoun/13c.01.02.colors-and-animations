import { animate, scroll, stagger, inView } from "https://cdn.skypack.dev/motion";

const button = document.querySelector(".btn");
const useDark = window.matchMedia("(prefers-color-scheme : dark)");

function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark", state);
}

toggleDarkMode(useDark.matches);

useDark.addListener(function (event) {
  toggleDarkMode(event.matches);
});

button.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});

/* animation */

animate("body", { opacity: [0, 1] }, { duration: 3 });

scroll(animate(".header_graphics", { rotate: 90 }, { easing: "ease-out" }), {
  target: document.querySelector("header"),
});
