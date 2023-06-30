let slides = Array.from(document.querySelectorAll('.carousel-slide'));
let dots = Array.from(document.querySelectorAll('.carousel-dot'));
let currentIndex = 0;

function changeSlide() {
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  
  currentIndex = (currentIndex + 1) % slides.length;
  
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = index;
    
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  });
});

setInterval(changeSlide, 5000); 

document.querySelectorAll('.news-title').forEach(title => {
    title.addEventListener('click', (e) => {
        let content = e.target.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

