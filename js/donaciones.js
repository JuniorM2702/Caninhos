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

document.addEventListener('DOMContentLoaded', function() {
    var firstName = "";
    var lastName = "";
    var email = "";
    var dType = "";
    var receipt = "";
    var anon = "";
    var list = "";
    var amount = "";

    var amountInputs = document.querySelectorAll('.set-amount');
    
    amountInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            document.querySelector('.donation-box').style.height = "500px"; // Cambiar altura de la caja de donaciones
            this.value = this.value.replace(/[^0-9\.]/g, ''); // Solo permite números y puntos
        });
    });

    var buttons = document.querySelectorAll('.button');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('selected');
            });
            this.classList.add('selected'); 
            this.querySelector('input').focus(); 
        });
    });

    var inputFields = document.querySelectorAll("input");

    inputFields.forEach(function(inputField) {
        inputField.addEventListener("change", function() {
            firstName = document.getElementById("firstName").value;
            lastName = document.getElementById("lastName").value;
            email = document.getElementById("email").value;

            if (document.getElementById("one-time").checked) {
                dType = "One-Time";
            }
            if (document.getElementById("monthly").checked) {
                dType = "Monthly";
            }
        });
    });
});