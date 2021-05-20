function openNav(evt, NavName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(NavName).style.display = "block";
  evt.currentTarget.className += " active";
}

const toggler = document.querySelector(".toggler-icon");
const nav = document.querySelector(".navbar nav ul");
const navbar = document.querySelector(".navbar");
const togglerActive = document.querySelector(".toggler-active");

toggler.addEventListener("click", function () {
  if (nav.style.display === "none") {
    var iconFont = this.querySelector("i");
    iconFont.classList.add("fa-times");
    iconFont.classList.remove("fa-bars");

    nav.style.display = "block";
    navbar.style.display = "block";
    navbar.style.animation = "opacity 2s";
  } else if (nav.style.display !== "none") {
    var iconFont = this.querySelector("i");

    iconFont.classList.remove("fa-times");
    iconFont.classList.add("fa-bars");

    nav.style.display = "none";
    navbar.style.display = "flex";
  }
});

//Dark Mode
var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  var iconFont = this.querySelector("i");
  if (iconFont.classList.contains("fa-moon-o")) {
    iconFont.classList.remove("fa-moon-o");
    iconFont.classList.add("fa-sun-o");
  } else {
    iconFont.classList.remove("fa-sun-o");
    iconFont.classList.add("fa-moon-o");
  }
};

/* //Transition
window.onload = () => {
  const transition_el = document.querySelector(".transition");
  const anchors = document.querySelectorAll("a");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      transition_el.classList.add("is-active");

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  }
}; */
