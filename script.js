window.addEventListener('scroll', function() {});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.querySelector('.header-mobile').style.transform = "translateX(0)";
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.querySelector('.header-mobile').style.transform = "translateX(100vw)";
  }
});
