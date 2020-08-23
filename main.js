//Auto Slideshow
// Original JavaScript code by Chirp Internet: www.chirp.com.au
window.addEventListener("DOMContentLoaded", function(e) {
  let pics = document.querySelector('.slideshow-container');
  let fadeComplete = function(e) {
      pics.appendChild(arr[0]);
  };
  let arr = pics.getElementsByTagName('div');
  for(let i = 0; i < arr.length; i++) {
      arr[i].addEventListener('animationend', fadeComplete, false);
  }
}, false);

//Responsive side nav
function navSlide() {
    let burger = document.querySelector(".burger");
    let nav = document.querySelector(".nav");
    let navLinks = document.querySelectorAll(".page-links li, .sm-links li");

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        })
    });
}
navSlide();
