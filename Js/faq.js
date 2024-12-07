const blog = document.getElementById("blog-btn");
const home = document.getElementById("home-btn");
const mainPages = document.getElementById("main-page");
const faqBody = document.getElementById("faq-body");
const donateData = document.getElementById("donate-data");

document.getElementById("blog-btn").addEventListener("click", function () {
  blog.classList.add("hidden");
  home.classList.remove("hidden");
  mainPages.classList.add("hidden");
  faqBody.classList.remove("hidden");
  donateData.classList.add("hidden");
});

document.getElementById("home-btn").addEventListener("click", function () {
  blog.classList.remove("hidden");
  home.classList.add("hidden");
  mainPages.classList.remove("hidden");
  faqBody.classList.add("hidden");
  donateData.classList.remove("hidden");
});
