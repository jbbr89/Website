// Show a confirmation message when the "Get a Quote" button is clicked
const getQuoteButton = document.querySelector('button');
getQuoteButton.addEventListener('click', function() {
  const confirmationMessage = 'Thank you for your interest in Simultaneous Translation! We will contact you shortly to discuss your project.';
  alert(confirmationMessage);
});

// Implement a simple slideshow on the homepage
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;
const slideshowImage = document.querySelector('.slideshow img');

function updateSlideshowImage() {
  slideshowImage.src = 'images/' + images[currentIndex];
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateSlideshowImage();
}

setInterval(nextSlide, 5000); // Change to the next slide every 5 seconds
