const $searchHaeder = document.querySelector('.search-header');
const $searchHaederBtn = document.querySelector('.search-header__btn');
const $searchHaederClose = document.querySelector('.search-header__close');
const $searchHaederInput = document.getElementById('mysearch');

$searchHaederBtn.addEventListener('click', () => {
	$searchHaeder.classList.toggle('search-header--active')
})

$searchHaederClose.addEventListener('click', () => {
	$searchHaederInput.value = '';
})