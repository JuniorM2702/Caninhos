const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentIndex = 0; 

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        currentIndex = i;
        sliderNav(i);
    });
});

setInterval(() => {
    currentIndex++;
    if(currentIndex >= btns.length) {
        currentIndex = 0;
    }
    sliderNav(currentIndex);
}, 5000); 


/*---------------*/

const counts = document.querySelectorAll('.count'); 
const speed = 97; 

function startCounting(counter) {
    const target = Number(counter.getAttribute('data-target')); 
    const count = Number(counter.innerText); 
    const inc = target / speed; 

    function update() {
        const count = Number(counter.innerText);
        if (count < target) {
            counter.innerText = Math.floor(count + inc); 
            setTimeout(update, 50);
        } else {
            counter.innerText = target;
        }
    }
    update();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(entry.target); 
            observer.unobserve(entry.target); 
        }
    });
});

counts.forEach(counter => {
    observer.observe(counter); 
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
});


	