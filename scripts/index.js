const editButton = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editCloseButton = editModal.querySelector(".modal__button-close");
const editform = editModal.querySelector(".modal__form");
const newPostButton = document.querySelector(".profile__add-btn");
const postModal = document.querySelector("#new-post-modal");
const postCloseButton = postModal.querySelector(".modal__button-close");
const postForm = postModal.querySelector(".modal__form");

editButton.addEventListener("click", function () {
  editModal.classList.add("modal_is-opened");
});

editCloseButton.addEventListener("click", function () {
  editModal.classList.remove("modal_is-opened");
});

editform.addEventListener("submit", function (evt) {
  evt.preventDefault();
  editModal.classList.remove("modal_is-opened");
});

newPostButton.addEventListener("click", function () {
  postModal.classList.add("modal_is-opened");
});

postCloseButton.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});

postForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  postModal.classList.remove("modal_is-opened");
});
