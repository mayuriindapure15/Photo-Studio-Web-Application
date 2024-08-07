document.addEventListener("DOMContentLoaded", function() {
    const heart = document.querySelector('.heart');
    const body = document.querySelector('body');
    
    body.addEventListener('mousemove', function(e) {
      const x = e.clientX;
      const y = e.clientY;
      heart.style.left = x + 'px';
      heart.style.top = y + 'px';
    });
  });