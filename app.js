// PROJECTS POPUPS

// const boxes = document.querySelectorAll(".projects img");

// const links = document.querySelector(".project-links");

// console.log(boxes);

// boxes.forEach((box) => {
//   box.addEventListener("mouseover", () => {
//     box.parentElement.nextElementSibling.classList.toggle("d-none");
//   });
// });

// EMAIL VALIDATION

const alertSvg = document.querySelector(".alert-svg");

const alertBox = document.querySelector(".alert-box");

const emailInp = document.querySelector("#email");

const nameInp = document.querySelector("#name");

const msgInp = document.querySelector("#msg");

nameInp.addEventListener("change", () => {
  if (!msgInp.value.length == 0) {
    nameInp.style.borderBottom = "2px solid #4ee1a0";
  }
});

msgInp.addEventListener("change", () => {
  if (!msgInp.value.length == 0) {
    msgInp.style.borderBottom = "2px solid #4ee1a0";
  }
});

emailInp.addEventListener("change", () => {
  if (!emailInp.value.includes("@")) {
    alertBox.style.display = "flex";
    alertSvg.style.display = "flex";
    emailInp.style.borderBottom = "2px solid #FF6F5B";
  } else if (!emailInp.value.length == 0 && emailInp.value.includes("@")) {
    alertBox.style.display = "none";
    alertSvg.style.display = "none";
    emailInp.style.borderBottom = "2px solid #4ee1a0";
  } else if (emailInp.value.length == 0) {
    alertBox.style.display = "none";
    alertSvg.style.display = "none";
    emailInp.style.borderBottom = "2px solid white";
  }
});

// emailInp.addEventListener("change", () => {
//  alertBox.style.display = "flex";
// });
