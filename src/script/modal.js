const openModalElements = document.querySelectorAll(".js-modal-open");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalElements = document.querySelectorAll(".js-modal-close");
const modalTitle = document.querySelector(".modal__title");
const modalLink = document.querySelector(".modal__link");
const modalDescription = document.querySelector(".modal__description");

const openModal = function () {
  const name = this.dataset?.name;
  const linkedin = this.dataset?.linkedin;
  const description = this.dataset?.description;
  modalTitle.innerHTML = name;
  modalLink.href = linkedin;
  modalDescription.innerHTML = description;
  modal.classList.add("modal-open");
  modalOverlay.classList.add("modal-overlay-open");
};

openModalElements.forEach((element) => {
  element.addEventListener("click", openModal);
});

const closeModal = function () {
  modal.classList.remove("modal-open");
  modalOverlay.classList.remove("modal-overlay-open");
};

closeModalElements.forEach((element) => {
  element.addEventListener("click", closeModal);
});
