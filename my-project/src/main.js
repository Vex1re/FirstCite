import './style.css'

// ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 240;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ДВИЖЕНИЕ navbar

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add(
      "py-3",
      "backdrop-blur-xl",
      "bg-red-950/30",
      "shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
    );
    navbar.classList.remove("py-5");
  } else {
    navbar.classList.remove(
      "py-3",
      "backdrop-blur-xs",
      "bg-red-950/80",
      "shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
    );
    navbar.classList.add("py-5");
  }
});

// ТЕСТ НАКЛОНА КАРТОЧЕК

const card = document.getElementById("tilt-card");

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (centerY - y) / 10;
  const rotateY = (x - centerX) / 10;

  card.style.transform = 'perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
});

// ТЕСТ БЕСКОНЕЧНОГО СКРОЛЛБАРА

const slider = document.getElementById("track");
const firstRealCard = slider.children[1];
slider.scrollLeft = firstRealCard.offsetLeft - slider.offsetLeft;

slider.addEventListener('scroll', () => {
  const scrollPos = slider.scrollLeft;
  const maxScroll = slider.scrollWidth - slider.clientWidth;

  if (scrollPos >= maxScroll - 5){
    slider.scrollLeft = sliderchildren[1].offsetLeft - slider.offsetLeft;
  }

  if (scrollPos <= 5){
    slider.scrollLeft - slider.children[slider.children.length - 2].offsetLeft - slider.offsetLeft;
}
});