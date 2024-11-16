const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if (pageName === "home") {
  document.querySelector(".home").classList.add("active-link");
}
if (pageName === "skill") {
  document.querySelector(".skill").classList.add("active-link");
}
if (pageName === "project") {
  document.querySelector(".project").classList.add("active-link");
}
if (pageName === "contact") {
  document.querySelector(".contact").classList.add("active-link");
}
