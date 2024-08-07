
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



//philosophy content 
document.addEventListener("DOMContentLoaded", function() {
  var shape = document.getElementById("para-philo");

  setInterval(function() {
    shape.classList.toggle("circle");
  }, 2000);
});

//mode related

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



//button for photography and videography

function openPhotography() {
  // Redirect to the photography page
  window.location.href = 'photoBooth.html'; // Replace 'photography.html' with your desired URL
}

function openVideography() {
  // Redirect to the videography page
  window.location.href = 'video.html'; // Replace 'videography.html' with your desired URL
}

function OpenContact(){
  window.location.href='contact.html';
}