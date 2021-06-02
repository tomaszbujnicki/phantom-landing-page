(function slider() {
  const image = [
    ...document.querySelectorAll('.slider__background > .slider__element'),
  ];
  const dots = [
    ...document.querySelectorAll('.slider__nav > .slider__element'),
  ];
  const text = [
    ...document.querySelectorAll('.slider__text > .slider__element'),
  ];
  const countOfSlides = 3;
  let activeId = 0;
  const delay = 5000;

  dots.forEach((button, i) => {
    button.addEventListener('click', () => {
      window.clearTimeout(timeoutId);
      setSlide(i);
      timeoutId = setTimeout(run, delay);
    });
  });

  let timeoutId = setTimeout(run, delay);

  function run() {
    activeId++;
    if (activeId > countOfSlides) activeId = 0;
    setSlide(activeId);
    timeoutId = setTimeout(run, delay);
  }

  function setSlide(i) {
    for (let i = 0; i < dots.length; i++) {
      image[i].classList.remove('active');
      dots[i].classList.remove('active');
      text[i].classList.remove('active');
    }
    image[i].classList.add('active');
    dots[i].classList.add('active');
    text[i].classList.add('active');
    activeId = i;
  }
})();
