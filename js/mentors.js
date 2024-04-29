const mentors = [
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
  {
    name: "Abdal Lalit",
    image: "images/mentors/abdal_lalit.jpeg",
    description: "",
    social: {
      linkedin: "abdal-lalit",
      insta: "",
    },
  },
];

// Get the container element
const cardContainer = document.querySelector(".cardContainer");

// Function to create a card for each mentor
function createMentorCard(mentor) {
  const card = document.createElement("div");
  card.classList.add("card-container");

  const imageContainer = document.createElement("a");
  imageContainer.href = "/";
  imageContainer.classList.add("hero-image-container");

  const image = document.createElement("img");
  image.classList.add("hero-image");
  image.src = mentor.image;
  image.alt = mentor.name;

  imageContainer.appendChild(image);
  card.appendChild(imageContainer);

  return card;
}

// Function to render all mentor cards
function renderMentorCards(mentors) {
  mentors.forEach((mentor) => {
    const card = createMentorCard(mentor);
    cardContainer.appendChild(card);
  });
}

// Render mentor cards when the page loads
window.onload = function () {
  renderMentorCards(mentors);
};
