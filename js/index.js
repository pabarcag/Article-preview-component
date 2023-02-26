const $arrow = document.querySelector('.card__arrow--visible');
const $activeArrow = document.querySelector('.card__arrow--active');
const $socialFooter = document.querySelector('.card__social');
const $arrowChangeColor = document.querySelector('.card__arrowimg--visible');

$arrow.addEventListener('click', (e)=>{
    $socialFooter.classList.toggle('card__active');
    $arrow.classList.toggle('card__arrow--change');
    $arrowChangeColor.classList.toggle('card__arrowimg--change')
});

$activeArrow.addEventListener('click',(e)=>{
    $socialFooter.classList.remove('card__active');
});

