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
  editModal.classList.remove("modal_is-opened");
}

// Create the form submission handler.
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault();

  // Log both input values to the console.
  console.log(linkInput.value);
  console.log(captionInput.value);

  // Close the modal.
  postModal.classList.remove("modal_is-opened");
}

editButton.addEventListener("click", function () {
  editModal.classList.add("modal_is-opened");
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
});

editCloseButton.addEventListener("click", function () {
  editModal.classList.remove("modal_is-opened");
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

newPostButton.addEventListener("click", function () {
  postModal.classList.add("modal_is-opened");
});

postCloseButton.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
