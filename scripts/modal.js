const demoBtn = document.querySelector("#live-modal-btn");
const modalContainer = document.querySelector(".modal-wrapper");
const closeBtn = document.querySelector("#modal-close-btn");

demoBtn.addEventListener("click", () => {
  let toggler = true;
  if (toggler) {
    modalContainer.style.display = "block";
    toggler = false;
  }
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
