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
