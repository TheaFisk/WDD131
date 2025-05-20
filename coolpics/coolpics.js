

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const nav = document.getElementById("mainNav");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("hide");
  });
});


const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

function viewHandler(event) {
  if (event.target.tagName === 'IMG') {
    const imageSrc = event.target.src;
    const imageParts = imageSrc.split("-");
    const fullImageSrc = imageParts[0] + "-full.jpeg";

    const dialog = document.createElement("dialog");
    dialog.classList.add("image-modal");

    dialog.innerHTML = `
      <img src="${fullImageSrc}" alt="${event.target.alt}">
      <button class="close-viewer" aria-label="Close modal">X</button>
    `;

    document.body.appendChild(dialog);
    dialog.showModal();

    dialog.querySelector(".close-viewer").addEventListener("click", () => {
      dialog.close();
      dialog.remove();
    });

    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        dialog.close();
        dialog.remove();
      }
    });
  }
}