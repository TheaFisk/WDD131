

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const nav = document.getElementById("mainNav");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("hide");
  });
});
