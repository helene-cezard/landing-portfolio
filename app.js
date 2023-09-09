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
}

document.addEventListener('DOMContentLoaded', init);