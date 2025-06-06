function init() {
  const navbar = document.querySelector(".navbar");
  const navbarLinks = document.querySelectorAll(".navbar__links");
  const burgerIcon= document.querySelector(".burger-icon");
  const closeIcon= document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (navbar.classList.contains("shownav")) {
      navbar.classList.remove("shownav");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      navbar.classList.add("shownav");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  burgerIcon.addEventListener("click", toggleMenu);

  navbarLinks.forEach( 
    function(navbarLink) { 
      navbarLink.addEventListener("click", toggleMenu);
    }
  )

  
  async function createAboutMe() {
    
    const aboutMeText = await fetch("files/aboutMe.txt")
      .then(response => response.text())
      .then(text => text);
    
    const aboutMeArray = aboutMeText.split("\n");
    
    const about = document.getElementById("about");
    aboutMeArray.forEach(
      function(paragraph) {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = paragraph;
        newParagraph.setAttribute("class", "about__content");
        about.appendChild(newParagraph);
      }
    )
  }

  function createJourneyCards() {
    const journeyElement = document.querySelector(".journey__content");
    journeyCardsContent.forEach(
      function(cardContent) {
        const newCard = document.createElement("div");
        newCard.setAttribute("class", "journey__card");

        const newTitle = document.createElement("h3");
        newTitle.setAttribute("class", "journey__title");
        newTitle.textContent = cardContent.title;
        newCard.appendChild(newTitle);

        const newDescription = document.createElement("p");
        newDescription.innerHTML = cardContent.description;

        if (cardContent.link) {
          const newLink = document.createElement("a");
          newLink.setAttribute("class", "journey__link");
          newLink.setAttribute("href", cardContent.link);
          newCard.appendChild(newLink);
          newLink.appendChild(newDescription);
        }
        else {
          newCard.appendChild(newDescription);
        }


        journeyElement.appendChild(newCard);
      }
    )
  }

  function createProjectCards() {
    const projectElement = document.querySelector(".projects__container");
    projectCardsContent.forEach(
      function(cardContent) {
        const newCard = document.createElement("div");
        newCard.setAttribute("class", "projects__item");

        const newLink = document.createElement("a");
        newLink.setAttribute("target", "_blank");
        newLink.setAttribute("class", "projects__card");
        newLink.setAttribute("href", cardContent.link);
        newCard.appendChild(newLink);

        const newImage = document.createElement("img");
        newImage.setAttribute("class", "projects__illustration");
        newImage.setAttribute("src", cardContent.image);
        newImage.setAttribute("alt", "Illustration projet " + cardContent.title);
        newLink.appendChild(newImage);

        const newTitle = document.createElement("h3");
        newTitle.setAttribute("class", "projects__title");
        newTitle.textContent = cardContent.title;
        newLink.appendChild(newTitle);

        const newDescription = document.createElement("p");
        newDescription.setAttribute("class", "projects__description");
        newDescription.innerHTML = cardContent.description;
        newCard.appendChild(newDescription);

        if (cardContent.githubLink) {
          const newGithubLink = document.createElement("a");
          newGithubLink.setAttribute("target", "_blank");
          newGithubLink.setAttribute("class", "projects__github");
          newGithubLink.setAttribute("href", cardContent.githubLink);
          newGithubLink.innerText = "Voir sur Github";
          newDescription.innerHTML += "<br>";
          newDescription.appendChild(newGithubLink);
        }


        projectElement.appendChild(newCard);
      }
    )
  }

  createAboutMe();
  createJourneyCards();
  createProjectCards();
}

document.addEventListener('DOMContentLoaded', init);