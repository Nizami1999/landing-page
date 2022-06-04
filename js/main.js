"use strict";

// Tabs
function Tabs() {
  var bindAll = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", change, false);
    }
  };

  var clear = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("active");
      var id = menuElements[i].getAttribute("data-tab");
      document.getElementById(id).classList.remove("active");
    }
  };

  var change = function (e) {
    clear();
    e.target.classList.add("active");
    var id = e.currentTarget.getAttribute("data-tab");
    document.getElementById(id).classList.add("active");
  };

  bindAll();
}

var connectTabs = new Tabs();

// Header
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("toggle");
});

// Subscribe

function fsubscribe() {
  let email = document.getElementById("email").value;
  alert("Subscribtion completed by: " + email);
}

// Animation

function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}

function addObserver(el, options) {
  if (!("IntersectionObserver" in window)) {
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add("active");
    }
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add("active");
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(el);
}

scrollTrigger(".scroll-reveal", {
  rootMargin: "-200px",
});
