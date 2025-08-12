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

// Select the necessary form elements. You should select
// these from inside the modal, not the document.
const nameInput = profileFormElement.querySelector("#name"); // Use querySelector()
const jobInput = profileFormElement.querySelector("#description"); // Use querySelector()

// If you haven't done so already, select
// the profile elements from the document.
const profileNameElement = document.querySelector(".profile__name"); // Use querySelector()
const profileJobElement = document.querySelector(".profile__description"); // Use querySelector()

const linkInput = addCardFormElement.querySelector("#image-link"); // Use querySelector()
const captionInput = addCardFormElement.querySelector("#caption"); // Use querySelector()

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Create the form submission handler.
function handleProfileFormSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  // Get the values of each form field from the value
  // property of the corresponding input element.

  // Insert these new values into the textContent
  // property of the corresponding profile elements.
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;

  // Close the modal.
  closeModal(editModal);
}

// Create the form submission handler.
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  // Log both input values to the console.
  console.log(linkInput.value);
  console.log(captionInput.value);

  // Close the modal.
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

initialCards.forEach((element) => {
  console.log(element.name);
});
