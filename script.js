// Home page js........................................................................................................................................................................................................................................................................................................................................
object.onsearch = function(){myScript};
object.addEventListener("search", myScript);
// Navbar search............................................................................................................................
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Flights page js........................................................................................................................................................................................................................................................................................................................................


// Star rating............................................................................................................................
 
// To access the stars
let stars = 
    document.getElementsByClassName("fa fa-star");
let output = 
    document.getElementById("output");
 
// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "fa fa-star" + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
 
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "fa fa-star";
        i++;
    }
}
