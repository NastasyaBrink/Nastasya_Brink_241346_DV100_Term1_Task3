console.log("Hello");

// Home page JavaScript

// Navbar Js
// Get the current page URL
var currentUrl = window.location.href;
    
// Select all navigation links in the navbar
var navLinks = document.querySelectorAll('.topNavCenter a');

// Loop through each navigation link
navLinks.forEach(function(navLink) {
    // Create a new URL object using the link's href
    var linkUrl = new URL(navLink.href, document.baseURI);

    // Compare only the pathname (ignoring query parameters and hash)
    if (linkUrl.pathname === window.location.pathname) {
        // Add the 'active' class to the link
        navLink.classList.add('active');
    }
});

// Search Bar
function searchSections() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toUpperCase();
  var sections = document.querySelectorAll("section"); // Adjust selector to match your sections

  sections.forEach(function(section) {
      var sectionText = section.textContent || section.innerText;
      if (sectionText.toUpperCase().indexOf(filter) > -1) {
          section.style.display = "";
      } else {
          section.style.display = "none";
      }
  });
}
// Carousel
let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Remove active class from the current item
    items[currentIndex].classList.remove('active');

    // Calculate new index
    currentIndex += direction;

    // Wrap around if index goes out of bounds
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Add active class to the new item
    items[currentIndex].classList.add('active');
}

// Initially display the first item
document.querySelectorAll('.carousel-item')[currentIndex].classList.add('active');

// Flights page JavaScript

// Star rating YAY
function rate(sectionId, stars) {
  var starElements = document.querySelectorAll('#' + sectionId + ' .fa-star');
  for (var i = 0; i < starElements.length; i++) {
      if (i < stars) {
          starElements[i].classList.add('checked');
      } else {
          starElements[i].classList.remove('checked');
      }
  }
}

function increaseValue(sectionId) {
  var quantityInput = document.getElementById('quantity-' + sectionId);
  var currentValue = parseInt(quantityInput.value);
  if (currentValue < quantityInput.max) {
      quantityInput.value = currentValue + 1;
  }
}

function decreaseValue(sectionId) {
  var quantityInput = document.getElementById('quantity-' + sectionId);
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > quantityInput.min) {
      quantityInput.value = currentValue - 1;
  }
}



