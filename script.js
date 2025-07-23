
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides[index].classList.remove('active');
  index = (i + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => showSlide(index + 1));
document.getElementById('prev').addEventListener('click', () => showSlide(index - 1));

setInterval(() => showSlide(index + 1), 10000); // 10 seconds
