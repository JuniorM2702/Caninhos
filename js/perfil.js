function showProfile() {
    document.getElementById('profile').classList.add('active');
    document.getElementById('settings').classList.remove('active');
    document.querySelector('.navigation .active').classList.remove('active');
    document.querySelector('.navigation button:nth-child(1)').classList.add('active');
}

function showSettings() {
    document.getElementById('settings').classList.add('active');
    document.getElementById('profile').classList.remove('active');
    document.querySelector('.navigation .active').classList.remove('active');
    document.querySelector('.navigation button:nth-child(2)').classList.add('active');
}

function editInput(inputId) {
    const input = document.getElementById(inputId);
    input.removeAttribute('readonly'); 
    input.focus(); 
}
