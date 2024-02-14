let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active'); // Add the 'active' class
        } else {
            image.classList.remove('active'); // Remove the 'active' class
        }
    });
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}


// Show the first image when the page loads
showImage(currentIndex);
