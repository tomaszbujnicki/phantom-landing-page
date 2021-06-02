(function slider() {
  const image = [...document.querySelectorAll('.image')];
  const dots = [...document.querySelectorAll('.dots__dot')];
  const countOfSlides = 3;
  let activeId = 0;

  dots.forEach((button, i) => {
    button.addEventListener('click', () => {
      window.clearTimeout(timeoutId);
      setSlide(i);
      timeoutId = setTimeout(run, 3000);
    });
  });

  let timeoutId = setTimeout(run, 3000);

  function run() {
    activeId++;
    if (activeId > countOfSlides) activeId = 0;
    setSlide(activeId);
    timeoutId = setTimeout(run, 3000);
  }

  function setSlide(i) {
    for (let i = 0; i < dots.length; i++) {
      image[i].classList.remove(`image--active`);
      dots[i].classList.remove('active');
    }
    image[i].classList.add(`image--active`);
    dots[i].classList.add('active');
    activeId = i;
  }
})();
