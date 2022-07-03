const windowInnerHeight = window.innerHeight;
const burger = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const body = document.body;

window.addEventListener("resize", AutoScale);

AutoScale();

function AutoScale() {
  let windowInnerWidth = window.innerWidth;
  const navbar = document.getElementById("navbar");
  const header = document.getElementById("header");
  const mwNavbar = document.getElementById("mw-navbar");
  const mwHeader = document.getElementById("mw-header");

  if (windowInnerWidth < 1024) {
    body.classList.add("mobile-view")
    navbar.classList.add("hidden");
    header.classList.add("hidden");
    mwNavbar.classList.remove("hidden");
    mwHeader.classList.remove("hidden");
  }

  if (windowInnerWidth > 1024) {
    body.classList.remove("mobile-view")
    navbar.classList.remove("hidden");
    header.classList.remove("hidden");
    mwNavbar.classList.add("hidden");
    mwHeader.classList.add("hidden");
  }
}

burger.addEventListener("click", (event) => {
  if (body.classList.contains("show-sidebar")) {
    closeSidebar();
  } else {
    showSidebar();
  }
});

function showSidebar() {
  let mask = document.createElement("div");
  mask.addEventListener("click", closeSidebar);

  body.classList.add("show-sidebar");

  burger.classList.add("open");
  sidebar.classList.add("opened");
}

function closeSidebar() {
  body.classList.remove("show-sidebar");
  burger.classList.remove("open");
  sidebar.classList.remove("opened");
}
