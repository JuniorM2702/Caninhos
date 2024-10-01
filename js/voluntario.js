window.addEventListener('wheel', function(event) {
  if (event.deltaY > 0) {
    window.scrollTo({
      top: document.getElementById('section2').offsetTop,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo({
      top: document.getElementById('section1').offsetTop,
      behavior: 'smooth'
    });
  }
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});
