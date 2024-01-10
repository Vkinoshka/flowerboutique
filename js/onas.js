document.addEventListener("DOMContentLoaded", function() {
  const image = document.getElementById('myImage');
  let opacity = 0;
  const fadeInInterval = setInterval(function() {
    opacity += 0.1;
    image.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(fadeInInterval);
    }
  }, 100);
});

