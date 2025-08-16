const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editButton = document.querySelector(".profile__edit-btn");
const editModal = document.querySelector("#edit-profile-modal");
const editCloseButton = editModal.querySelector(".modal__button-close");
const profileFormElement = editModal.querySelector(".modal__form");
const newPostButton = document.querySelector(".profile__add-btn");
const postModal = document.querySelector("#new-post-modal");
const postCloseButton = postModal.querySelector(".modal__button-close");
const addCardFormElement = postModal.querySelector(".modal__form");

const nameInput = profileFormElement.querySelector("#name"); // Use querySelector()
const jobInput = profileFormElement.querySelector("#description"); // Use querySelector()

const profileNameElement = document.querySelector(".profile__name"); // Use querySelector()
const profileJobElement = document.querySelector(".profile__description"); // Use querySelector()

const linkInput = addCardFormElement.querySelector("#image-link"); // Use querySelector()
const captionInput = addCardFormElement.querySelector("#caption"); // Use querySelector()

const cardsContainer = document.querySelector(".cards");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".cards__column");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".cards__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;

  const cardTitle = cardElement.querySelector(".cards__image-description");
  cardTitle.textContent = data.name;

  const cardLikeBtn = cardElement.querySelector(".cards__like-button");
  cardLikeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__button_active");
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;

  closeModal(editModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const handlerObject = {
    link: linkInput.value,
    name: captionInput.value,
  };
  renderCardElement(handlerObject);
  closeModal(postModal);
}

editButton.addEventListener("click", function () {
  openModal(editModal);
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
});

editCloseButton.addEventListener("click", function () {
  closeModal(editModal);
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

newPostButton.addEventListener("click", function () {
  openModal(postModal);
});

postCloseButton.addEventListener("click", function () {
  closeModal(postModal);
});

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

function renderCardElement(data) {
  const cardEl = getCardElement(data);
  cardsContainer.prepend(cardEl);
}

initialCards.forEach((element) => {
  renderCardElement(element);
});
