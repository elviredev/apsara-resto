/* Loading Page */

window.addEventListener("load", () => {
  /* Preloader */
  const preloader = document.querySelector(".preloader")
  preloader.classList.add("loaded")
  preloader.addEventListener("transitionend", function() {
    this.style.display = "none";
  })

  /* AOS Animation */
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    delay: 400,
  })
})

/* Mobile menu */

const menuBtn = document.querySelector(".header .menu-btn");
const menu = document.querySelector(".header .menu");
const menuLinks = document.querySelectorAll("a");

function toggleMenu() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("open");
}

menuBtn.addEventListener("click", toggleMenu);

// Fermer le menu quand un lien est cliqué
function menuLinkAction() {
  if (window.innerWidth <= 991 && menu.classList.contains("open")) {
    toggleMenu()
  }
}

menuLinks.forEach(a => {
  a.addEventListener("click", menuLinkAction);
})


/* Header bg */

window.addEventListener('scroll', function () {
  if (this.scrollY > 0) {
    document.querySelector('.header').classList.add('header-bg')
  } else {
    document.querySelector('.header').classList.remove('header-bg')
  }
})

/* Tabs */

function tabs(tabsSelector) {
  const tabsContainer = document.querySelector(tabsSelector)
  const tabsList = tabsContainer.querySelector(".tabs-list")

  tabsList.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('.tabs-btn')
    if (!clickedTab || clickedTab.classList.contains('active')) {
      return;
    }
    switchTab(clickedTab)
  })

  function switchTab(clickedTab) {
    const activeTab = tabsContainer.querySelector(".tabs-btn.active")
    const activePanel = tabsContainer.querySelector(".tabs-panel.active")
    activeTab.classList.remove('active')
    activePanel.classList.remove('active')
    clickedTab.classList.add('active')
    const target = clickedTab.getAttribute('data-target')
    tabsContainer.querySelector(target).classList.add("active")
  }
}

tabs(".rest-menu-tabs")

/* Testimonials slider */

const testimonialsSlider = new Swiper(".testimonials-slider", {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: '.testimonials-pagination',
    clickable: true
  }
})

























