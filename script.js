let hiddenNavOpener = document.querySelector(".burger");
let hiddenNav = document.querySelector(".hidden_nav");
hiddenNavOpener.addEventListener("click", function(event) {
  hiddenNav.classList.toggle("closed");
});
