
const $burger = document.querySelector('.burger'),
	$nav = document.querySelector('.navigation'),
	$body = document.querySelector('body'),
	$navItems = document.querySelectorAll('.navigation__item');

$burger.addEventListener('click', () => {

	$burger.classList.toggle('burger--active');// из иконки меню сделать крестик
	$nav.classList.toggle('navigation--active');// появление меню
	$body.classList.toggle('stop-scroll');// скрыть прокрутку сайта в меню
});


//закрыть меню при клике на любой пункт меню
//удаляем все ранее присвоенные классы для открытия меню
$navItems.forEach(el => {
	el.addEventListener('click', () => {
		$burger.classList.remove('burger--active');
		$nav.classList.remove('navigation--active');
		$body.classList.remove('stop-scroll');
	})
});




