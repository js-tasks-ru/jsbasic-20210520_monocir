function initCarousel() {
  
  // carousel
  const slider = document.querySelector('.carousel__inner');
  const images = document.querySelectorAll('.carousel__slide');

  // btns
  const left = document.querySelector('.carousel__arrow_left');
  const right = document.querySelector('.carousel__arrow_right');
  left.style.display = 'none';

  // counters
  let counter = 0;
  const position = images[0].offsetWidth;
  console.log(position);

  // slider
  right.addEventListener('click', () => {
    left.style.display = '';
    if (counter == 2) right.style.display = 'none';
    counter++;
    slider.style.transform = 'translateX('+ `${-position * counter}px`;
    console.log(counter);
  });

  left.addEventListener('click', () => {
    right.style.display = '';
    if (counter == 1) left.style.display = 'none';
    counter--;
    slider.style.transform = 'translateX('+ `${-position * counter}px`;
    console.log(counter);
  });

}
