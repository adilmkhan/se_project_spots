import "./index.css";
import Api from "../utils/Api.js";

import {
  enableValidation,
  settings,
  resetValidation,
  disableButton,
} from "../scripts/validation.js";

// const initialCards = [
//   {
//     name: "Golden Gate Bridge",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
//   },
//   {
//     name: "Val Thorens",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
//   {
//     name: "Restaurant terrace",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
//   },
//   {
//     name: "An outdoor cafe",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
//   },
//   {
//     name: "A very long bridge, over the forest and through the trees",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
//   },
//   {
//     name: "Tunnel with morning light",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
//   },
//   {
//     name: "Mountain house",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
// ];
//Profile Edit Modals
const editButton = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editCloseButton = editModal.querySelector(".modal__button-close");
const profileFormElement = editModal.querySelector(".modal__form");

//New Post Modals
const newPostButton = document.querySelector(".profile__add-btn");
const postModal = document.querySelector("#new-post-modal");
const postCloseButton = postModal.querySelector(".modal__button-close");
const addCardFormElement = postModal.querySelector(".modal__form");

//Edit Profile Avatar Modals
const editAvatarButton = document.querySelector(".profile__avatar-btn");
const avatarModal = document.querySelector("#edit-avatar-modal");
const avatarCloseButton = avatarModal.querySelector(".modal__button-close");
const avatarFormElement = avatarModal.querySelector(".modal__form");

const nameInput = profileFormElement.querySelector("#name");
const jobInput = profileFormElement.querySelector("#description");

const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__description");

const linkInput = addCardFormElement.querySelector("#image-link");
const captionInput = addCardFormElement.querySelector("#caption");

const cardsContainer = document.querySelector(".cards");

//Preview Modals
const previewModal = document.querySelector("#preview-modal");
const previewCloseBtn = previewModal.querySelector(".modal__button-close");
const previewModalImg = previewModal.querySelector(".modal__image");
const previewModalCaption = previewModal.querySelector(".modal__caption");

//Delete Modal
const deleteModal = document.querySelector("#card-delete-modal");
const deleteModalCloseBtn = deleteModal.querySelector(".modal__button-close");
const deleteModalCancelBtn = deleteModal.querySelector(".modal__button-cancel");
const deleteFormElement = deleteModal.querySelector(".modal__form");

const profileAvatar = document.querySelector(".profile__avatar");

let selectedCard;
let selectedCardId;

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "10abc176-5f60-4222-bc96-a24c68a63c53",
    "Content-Type": "application/json",
  },
});

//TODO-Destructure the second item in the callback of the .then()
api
  .getAppInfo()
  .then(([cards, user]) => {
    cards.forEach((element) => {
      renderCardElement(element);
    });
    //Handle the user's information
    // - set the src of the avatar image [profileAvatar.src = avatar.value]
    profileAvatar.src = user.avatar;
    // - set the textContent of both the text elements
    profileNameElement.textContent = user.name;
    profileJobElement.textContent = user.about;
  })
  .catch((err) => {
    console.error(err); // log the error to the console
  });

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  api
    .editUserInfo({ name: nameInput.value, about: jobInput.value })
    .then((data) => {
      //TODO- use the data arg instead of the hardcoded input values
      profileNameElement.textContent = data.name;
      profileJobElement.textContent = data.about;
      closeModal(editModal);
    })
    .catch(console.error);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

previewCloseBtn.addEventListener("click", function (evt) {
  closeModal(previewModal);
});

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".cards__column");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  modal.addEventListener("click", closeHandler);
  document.addEventListener("keydown", escapeHandler);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  modal.removeEventListener("click", closeHandler);
  document.removeEventListener("keydown", escapeHandler);
}

editButton.addEventListener("click", function () {
  resetValidation(profileFormElement, settings);
  openModal(editModal);
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
});

editCloseButton.addEventListener("click", function () {
  closeModal(editModal);
});

newPostButton.addEventListener("click", function () {
  openModal(postModal);
});

postCloseButton.addEventListener("click", function () {
  closeModal(postModal);
});

editAvatarButton.addEventListener("click", function () {
  openModal(avatarModal);
});

avatarCloseButton.addEventListener("click", function () {
  closeModal(avatarModal);
});

deleteModalCloseBtn.addEventListener("click", function () {
  closeModal(deleteModal);
});

deleteModalCancelBtn.addEventListener("click", function () {
  closeModal(deleteModal);
});

//TODO -- create a avatarFormElement.addEventListener("submit", handleAvatarSubmit);
//TODO -- create handleAvatarSubmit event handler
// const avatarFormElement = avatarModal.querySelector(".modal__form");
//const avatarLinkInput = avatarFormElement.querySelector("#image-link");

avatarFormElement.addEventListener("submit", handleAvatarSubmit);
const avatarLinkInput = avatarFormElement.querySelector("#image-link");

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  api
    .editProfileAvatar({ avatar: avatarLinkInput.value })
    .then((data) => {
      //TODO- use the data arg instead of the hardcoded input values
      profileAvatar.src = data.avatar;
      profileAvatar.alt = "";
      avatarFormElement.reset();
      const submitButton = avatarFormElement.querySelector(
        settings.submitButtonSelector
      );
      disableButton(submitButton, settings);
      closeModal(avatarModal);
    })
    .catch(console.error);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  api
    .addNewCard({ name: captionInput.value, link: linkInput.value })
    .then((data) => {
      //TODO- use the data arg instead of the hardcoded input values
      // const handlerObject = {
      //   link: data.link,
      //   name: data.name,
      // };
      renderCardElement(data); //handlerObject passed before
      addCardFormElement.reset();
      const submitButton = addCardFormElement.querySelector(
        settings.submitButtonSelector
      );
      disableButton(submitButton, settings);
      closeModal(postModal);
    })
    .catch(console.error);
}

function renderCardElement(data) {
  const cardEl = getCardElement(data);
  cardsContainer.prepend(cardEl);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".cards__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardImage.addEventListener("click", function () {
    previewModalImg.src = data.link;
    previewModalImg.alt = data.name;
    previewModalCaption.textContent = data.name;
    openModal(previewModal);
  });

  const cardTitle = cardElement.querySelector(".cards__image-description");
  cardTitle.textContent = data.name;

  const cardLikeBtn = cardElement.querySelector(".cards__like-button");
  cardLikeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("cards__like-button_active");
  });

  function handleDeleteCard(cardElement, cardId) {
    selectedCard = cardElement;
    selectedCardId = cardId;
    openModal(deleteModal);
    // cardElement.remove;
  }

  const cardDeleteBtn = cardElement.querySelector(".cards__delete-button");
  cardDeleteBtn.addEventListener("click", (evt) =>
    handleDeleteCard(cardElement, data._id)
  );

  return cardElement;
}

function handleDeleteSubmit(evt) {
  evt.preventDefault();
  api
    .deleteCard(selectedCardId)
    .then(() => {
      // TODO--remove the card from the DOM
      //close modal
      selectedCard.remove();
      closeModal(deleteModal);
      //clear the reference
      selectedCard = null;
      selectedCardId = null;
    })
    .catch(console.error);
}

deleteFormElement.addEventListener("submit", handleDeleteSubmit);

function closeHandler(evt) {
  if (evt.target.classList.contains("modal")) {
    closeModal(evt.target);
  }
}

function escapeHandler(evt) {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".modal_is-opened"));
  }
}

enableValidation(settings);
