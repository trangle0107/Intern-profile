const profileMenu = document.querySelectorAll(".profile-content-menu li a");
const experience = document.querySelector(".experience-container");
const education = document.querySelector(".education-container");
const project = document.querySelector(".project-container");
const menu = [project, education, experience];

function slideContent(profileLinks, content, id = "active") {
  profileLinks.forEach((menuLink, i) =>
    menuLink.addEventListener("click", () => {
      profileLinks.forEach((el, index) =>
        i === index ? (el.id = id) : (el.id = "")
      );
      content.forEach((el, index) =>
        i === index && i === 0
          ? (el.style.display = "flex")
          : i === index && i !== 0
          ? (el.style.display = "block")
          : (el.style.display = "none")
      );
    })
  );
}

slideContent(profileMenu, menu);
