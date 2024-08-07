const outerSquare = document.getElementById('map-container');
// Get the inner circle element
const innerCircle = document.getElementById('circle1');

// Initial rotation angle
let angle = 0;
// Circle's initial position
// let positionX = 0;
// let positionY = -90; // Start position at the top

// Function to move the circle clockwise
function moveCircle() {
  // Increment the angle by 5 degrees
  angle += 5;
  // Calculate new position of the circle
  const radius = 10; // Assuming the radius of the outer square is 100px
  positionX = Math.cos(angle * Math.PI / 180) * radius;
  positionY = Math.sin(angle * Math.PI / 180) * radius;

  // Apply the new position
  innerCircle.style.left = `${5 + positionX}%`;
  innerCircle.style.top = `${5 + positionY}%`;
}

// Move the circle every 100 milliseconds (10 times per second)
setInterval(moveCircle, 100);

let btn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentmode="light";

btn.addEventListener("click" ,() =>{
        if(currentmode==="light"){
          currentmode="dark";
          body.classList.add("dark");
          body.classList.remove("light");
        }
        else{
          currentmode="light";
          body.classList.add("light");
          body.classList.remove("dark");
        }
});


//scroll up btn

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// contact-validation

const form = document.getElementById('contactForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const dob = document.getElementById('dob');
    const address = document.getElementById('address');
    const service = document.getElementById('service');
    const howFind = document.getElementById('howFind');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        let errors = false;

        if (!validateField(firstName, 'Please enter your first name')) {
            errors = true;
        }

        if (!validateField(lastName, 'Please enter your last name')) {
            errors = true;
        }

        if (!validateField(phone, 'Please enter your phone number')) {
            errors = true;
        } else if (!isValidPhoneNumber(phone.value)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
            errors = true;
        }

        if (!validateField(email, 'Please enter your email')) {
            errors = true;
        }

        if (!validateField(dob, 'Please enter your date of birth')) {
            errors = true;
        }

        if (!validateField(address, 'Please enter your address')) {
            errors = true;
        }

        if (service.value === '') {
            document.getElementById('serviceError').textContent = 'Please select a service';
            errors = true;
        } else {
            document.getElementById('serviceError').textContent = '';
        }

        if (howFind.value === '') {
            document.getElementById('howFindError').textContent = 'Please select how you found us';
            errors = true;
        } else {
            document.getElementById('howFindError').textContent = '';
        }

        if (!validateField(message, 'Please enter your message')) {
            errors = true;
        }

        if (errors) {
            event.preventDefault();
        }
    });

    function validateField(field, errorMessage) {
        if (!field.value) {
            document.getElementById(field.id + 'Error').textContent = errorMessage;
            return false;
        } else {
            document.getElementById(field.id + 'Error').textContent = '';
            return true;
        }
    }

    function isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/; // Matches 10 digits
        return phoneRegex.test(phoneNumber);
    }

// ended validation